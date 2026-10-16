from pathlib import Path
import os, subprocess, tempfile
import numpy as np
from PIL import Image, ImageFilter
from rembg import new_session

root=Path(__file__).resolve().parents[1]
assets=root/'dist/hero'
source=assets/'intro.mp4'
session=new_session('u2netp', providers=['CPUExecutionProvider'])
with tempfile.TemporaryDirectory(prefix='portfolio-matte-') as tmp:
    tmp=Path(tmp)
    frames=tmp/'source'; rgba=tmp/'rgba'; paper=tmp/'paper'; masks=tmp/'masks'
    for d in [frames,rgba,paper,masks]: d.mkdir()
    subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(source),str(frames/'%04d.png')],check=True)
    files=sorted(frames.glob('*.png'))
    for i,p in enumerate(files):
        mask=session.predict(Image.open(p).convert('RGB'))[0]
        mask.save(masks/p.name)
        if i%24==0: print(f'Segmented {i+1}/{len(files)} frames',flush=True)
    for i,p in enumerate(files):
        # Median of neighboring masks reduces segmentation jitter across the loop seam.
        window=[np.asarray(Image.open(masks/files[j%len(files)].name)) for j in [i-1,i,i+1]]
        alpha=np.median(np.stack(window),axis=0).astype('uint8')
        alpha=np.clip((alpha.astype('float32')-8)*255/239,0,255).astype('uint8')
        matte=Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(.45))
        image=Image.open(p).convert('RGB')
        # Remove the original white contribution from soft boundary pixels.
        a=np.asarray(matte).astype('float32')/255
        rgb=np.asarray(image).astype('float32')
        rgb=np.clip((rgb-255*(1-a[...,None]))/np.maximum(a[...,None],.01),0,255).astype('uint8')
        cut=Image.fromarray(rgb).convert('RGBA'); cut.putalpha(matte)
        cut.save(rgba/p.name)
        bg=Image.new('RGBA',cut.size,'#f4f2ee'); bg.alpha_composite(cut)
        bg.convert('RGB').save(paper/p.name)
        if i==0: cut.save(assets/'portrait-cutout.png')
    common=['ffmpeg','-hide_banner','-loglevel','error','-y','-framerate','24']
    subprocess.run(common+['-i',str(rgba/'%04d.png'),'-i',str(source),'-map','0:v:0','-map','1:a:0?','-c:v','libvpx-vp9','-pix_fmt','yuva420p','-auto-alt-ref','0','-crf','30','-b:v','0','-row-mt','1','-c:a','libopus','-shortest',str(assets/'intro-cutout.webm')],check=True)
    subprocess.run(common+['-i',str(paper/'%04d.png'),'-i',str(source),'-map','0:v:0','-map','1:a:0?','-c:v','libx264','-crf','20','-pix_fmt','yuv420p','-c:a','copy','-movflags','+faststart','-shortest',str(assets/'intro-paper.mp4')],check=True)
    print(f'Created transparent WebM, matching-background MP4 and poster ({len(files)} frames).',flush=True)
