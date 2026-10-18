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
