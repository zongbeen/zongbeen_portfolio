# zongbeen_portfolio

한종빈의 말하는 포트폴리오입니다.

배포 주소: https://zongbeenportfolio.vercel.app

GitHub: https://github.com/zongbeen/zongbeen_portfolio

빌드가 필요 없는 정적 사이트입니다. `dist/`를 웹 서버에서 제공하면 됩니다.

## Vercel 배포

GitHub의 `main` 브랜치에 푸시하거나 PR을 병합하면 Vercel이 프로덕션 사이트를 자동으로 배포합니다. 연결된 Vercel 프로젝트는 `zongbeen/zongbeen_portfolio`입니다.

아래 명령은 수동 배포가 필요할 때 사용합니다.

`zongbeen_portfolio/` 폴더에서 실행하세요.

```sh
npx vercel login
npx vercel --prod
```

`vercel.json`에서 빌드와 의존성 설치 없이 `dist/`를 배포하도록 설정합니다. 환경 변수는 필요하지 않습니다. `.vercel/`의 프로젝트 연결 정보는 Git에서 제외합니다.

Git 저장소를 Vercel에 연결하는 경우 Root Directory는 이 README가 있는 폴더, Framework Preset은 **Other**, Output Directory는 **dist**로 설정하세요. Build Command와 Install Command는 비워 두세요. 현재 저장소 루트가 `zongbeen_portfolio/`이면 Root Directory는 기본값을 사용합니다.

Vercel 응답 헤더는 `vercel.json`에 정의합니다. 기존 `dist/_headers`와 동일하게 검색 색인 방지와 보안 헤더를 유지합니다.

- 콘텐츠: `dist/assets/js/data.js`
- 화면과 동작: `dist/assets/js/app.js`
- 스타일: `dist/assets/css/style.css`
- 영상·정지 이미지·OG 이미지: `dist/hero/`
- 원본 이력서: `../zongbeen-resume-web-main/src/data/resume.ts`

## 나중에 UI 추가하기

`WORK`의 해당 프로젝트에서 `uiAsset: null`을 실제 이미지의 상대 경로로 바꾸세요. 예: `assets/images/inihub.jpg`. 이미지가 연결되면 예약된 UI 영역에 자동으로 표시됩니다. 원본 이미지 파일은 별도로 추가해야 합니다.

재설계 프로젝트의 `metric: null`은 측정 후 입력할 예약 필드입니다. 성과 카드에도 추가하려면 `ACHIEVEMENTS`에 실제 측정값과 설명을 넣으세요.

## 영상

원본은 1280×720, 24fps, 약 6초입니다. 440×704 인물 영역을 크롭해 660×1056으로 내보냈습니다. 재생 속도는 유지하고 영상·음성의 마지막/처음 0.5초를 함께 크로스페이드했습니다. 최종 루프는 약 5.5초이며 MP4(H.264/AAC), WebM(VP9/Opus)을 제공합니다.

브라우저의 유음 자동재생 허용 여부에 따라 소리가 차단될 수 있습니다. 이때 첫 포인터/키보드 조작 또는 소리 버튼으로 소리가 켜집니다. 히어로 35% 미만 노출, 탭 비활성화 시 정지합니다.

모션 감소 설정에서는 장식 모션과 Lenis를 끄고 성과 카드를 일반 세로 흐름으로 제공합니다. 웹 화면에는 전화번호를 노출하지 않습니다. 다운로드 PDF는 제공된 원본입니다.

색인 방지 메타데이터와 `_headers`의 X-Robots-Tag를 포함합니다. 호스팅 제공자가 `_headers`를 지원하는지와 별도로 HTML에도 noindex가 적용됩니다.

## 히어로 구성

`design/hero-master-layout`에서는 마스터 프롬프트의 중앙 영상과 뒤쪽 영문 외곽선 구도를 유지합니다. 글자 크기는 `clamp(48px, 17vw, 300px)`이며, 이름·숫자·직함 등 콘텐츠는 기존 `data.js`를 그대로 사용합니다.

인물 주변을 420×640 상반신 구도로 크롭한 `intro-portrait.webm`과 투명 포스터 `portrait-hero.png`를 사용합니다. 영상 레이어를 격리해 `multiply`를 유지하면서 뒤쪽 이름이 얼굴이나 흰 셔츠 위로 비치는 것을 방지합니다. 기존 영상의 약 5.5초 루프·24fps·음성 타이밍을 유지합니다.

VP9 투명을 지원하지 않는 브라우저용 `intro-portrait.mp4`는 색상과 흑백 마스크를 좌우로 담습니다. 이 파일은 단독 재생용이 아니며, 사이트에서만 활성화되는 Canvas 2D 대체 경로로 합성합니다. 동일한 영상에서 색·마스크·음성이 재생되어 별도 영상 사이의 동기화가 필요하지 않습니다. 프레임 콜백은 영상이 정지하면 멈추며, WebGL이나 외부 프런트엔드 라이브러리는 사용하지 않습니다.
