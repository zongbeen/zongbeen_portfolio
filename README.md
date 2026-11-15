# zongbeen_portfolio

한종빈의 말하는 개인 포트폴리오입니다. HTML, CSS, JavaScript로 구성된 빌드가 필요 없는 정적 사이트입니다.

[포트폴리오 보기](https://zongbeenportfolio.vercel.app/)

## 로컬 실행

프로젝트 루트에서 실행한 뒤 [http://127.0.0.1:4173](http://127.0.0.1:4173)을 엽니다.

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

## 프로젝트 구조

- `dist/index.html`: 페이지 기본 구조와 메타데이터
- `dist/assets/js/data.js`: 화면 문구·사진·메뉴·프로젝트 데이터
- `dist/assets/js/app.js`: 섹션 렌더링과 화면 동작
- `dist/assets/js/hero-loop.js`: 히어로 영상 반복 재생
- `dist/assets/css/style.css`: 스타일과 반응형 레이아웃
- `dist/hero/`: 서비스에 사용하는 영상과 이미지
- `vercel.json`: `dist/`를 배포하는 Vercel 설정

## 배포

GitHub의 `main` 브랜치에 푸시하면 연결된 Vercel 프로젝트가 자동 배포합니다.


## 샘플 앱 화면과 코드 대조

`WORK`의 `uiGallery`(이미지·캡션), `uiVideo`(실기기 영상)를 수정하면 실제 화면을 바꿀 수 있습니다. FR·ST 재설계는 개요에 현재 화면, 각 사례에 전후 비교를 표시합니다. 코드 규모 수치는 접어서 볼 수 있고, PIN·생체인증 작업은 시연 영상을 먼저 표시합니다.

- `dist/assets/images/samples/`: 루트의 `imageFR/`, `imageST/`에서 선별한 실제 화면 원본
- `dist/assets/video/xsafe-biometric-demo.mp4`: 기존 로컬 미리보기의 입력값·인증서 정보를 가린 시연본
- 대조 대상: 상위 `work/INISAFEMobilianWeb`의 SDK 구현과 `work/INISAFE_MobilianWeb_Sample`의 FR·ST 샘플 코드
- FR: Table View 메뉴, 전용 발급 화면, 서버 통신의 async/await 사용을 확인했습니다.
- ST: SceneDelegate, 4개 ViewController, Service 계층, 그룹·카드·함수 검색·실행 로그 구조를 확인했습니다. 단위 테스트는 응답 해석·쿼리·정책·ViewModel 등 SDK를 직접 부르지 않는 영역이며, SDK 호출·서버 연동·생체인증은 실기기 검증과 구분합니다.
- 기존 감소율은 재설계 당시 측정값입니다. 현재 소스 전체를 동일 조건으로 다시 측정한 수치나 이번 작업에서 iOS 테스트를 실행한 결과를 뜻하지 않습니다.
