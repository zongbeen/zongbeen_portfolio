// Feed one cached clip into a continuous timeline, avoiding native loop seeks.
// Keep three loops ahead, and discard old media periodically to bound memory use.
export function prepareHeroLoop(video, shouldPlay) {
  const Source = window.MediaSource || window.ManagedMediaSource;
  const type = 'video/mp4; codecs="avc1.64001f, mp4a.40.2"';
  if (!Source?.isTypeSupported(type)) return;

  const clipLength = 5.5;
  const media = new Source();
  const url = URL.createObjectURL(media);
  const request = new AbortController();
  let buffer, bytes, cycle = 0, lastPruned = 0, stopped = false;

  function dispose() {
    stopped = true;
    request.abort();
    video.removeEventListener('timeupdate', fill);
    video.removeEventListener('error', fallback);
    media.removeEventListener('sourceclose', fallback);
    URL.revokeObjectURL(url);
  }

  function fallback() {
    if (stopped) return;
    dispose();
    delete video.dataset.heroPlayback;
    video.loop = true;
    video.removeAttribute('src');
    video.load();
    if (shouldPlay()) video.play().catch(() => {});
  }

  function fill() {
    if (stopped || !bytes || !buffer || buffer.updating || media.readyState !== 'open') return;
    try {
      const time = video.currentTime;
      if (time > clipLength * 4 && time - lastPruned > clipLength * 2) {
        lastPruned = time;
        buffer.remove(0, time - clipLength * 2);
        return;
      }
      if (cycle * clipLength - time < clipLength * 3) {
        buffer.timestampOffset = cycle * clipLength;
        buffer.appendBuffer(bytes);
        cycle++;
      }
    } catch {
      fallback();
    }
  }

  media.addEventListener('sourceopen', () => {
    if (stopped) return;
    try {
      buffer = media.addSourceBuffer(type);
      buffer.mode = 'segments';
      buffer.addEventListener('updateend', fill);
      buffer.addEventListener('error', fallback);
      media.duration = Infinity;
      fill();
    } catch {
      fallback();
    }
  }, { once: true });
  media.addEventListener('sourceclose', fallback);
  video.addEventListener('error', fallback);
  video.addEventListener('timeupdate', fill);
  window.addEventListener('pagehide', event => { if (!event.persisted) dispose(); }, { once: true });

  video.dataset.heroPlayback = 'continuous-matte';
  video.disableRemotePlayback = true;
  video.loop = false;
  video.src = url;
  fetch(new URL('../../hero/intro-portrait-stream.mp4', import.meta.url), { signal: request.signal })
    .then(response => { if (!response.ok) throw new Error('Hero clip unavailable'); return response.arrayBuffer(); })
    .then(data => { bytes = data; fill(); })
    .catch(fallback);
}
