# zongbeen_portfolio

> 말하는 캐릭터가 직접 소개하는 iOS 개발자 **한종빈**의 개인 포트폴리오

**[🔗 zongbeenportfolio.vercel.app](https://zongbeenportfolio.vercel.app/)**

빌드 도구도, 프레임워크도 없습니다. HTML · CSS · JavaScript만으로 만든 정적 사이트이고, 모든 문구와 프로젝트 정보는 파일 하나(`data.js`)에서 수정합니다.

## 주요 특징

- **말하는 히어로** — 배경을 제거한 캐릭터 자기소개 영상이 페이지 배경 위에 그대로 놓입니다. 소리 재생을 먼저 시도하고, 브라우저가 막으면 첫 클릭·터치에서 켭니다. 화면 밖으로 나가면 멈추고 돌아오면 이어서 재생합니다.
- **끊김 없는 반복 재생** — 영상을 이어 붙인 타임라인으로 미리 버퍼링해 반복 지점의 끊김을 없앴습니다(Media Source Extensions).
- **투명 영상 폴백** — VP9 알파 WebM을 기본으로 쓰고, 알파를 지원하지 않는 브라우저에서는 컬러와 마스크를 나란히 담은 H.264 영상을 Canvas 2D로 합성합니다.
- **인터랙션** — 흔들리다 뒤집히는 사원증, 원소 주기율표 형태의 기술 스택, 펼쳐지는 대표 작업 패널, 스크롤로 그려지는 경력 타임라인, 가로로 넘어가는 성과 카드와 숫자 카운트업
- **실제 작업 화면** — 프로젝트마다 실기기 시연 영상, 전후 비교 화면, 코드 규모 변화를 함께 보여 줍니다.
- **접근성·반응형** — 360px부터 대응하고, 키보드 조작·건너뛰기 링크·`prefers-reduced-motion`을 지원합니다.

## 기술 구성

| 구분 | 내용 |
| --- | --- |
| 마크업·스타일·동작 | HTML, CSS, JavaScript(ES Modules). 빌드 단계 없음 |
| 스크롤 | [Lenis](https://github.com/darkroomengineering/lenis) |
| 폰트 | Pretendard, Inter Tight, Instrument Serif, JetBrains Mono |
| 호스팅 | Vercel — `main` 브랜치 푸시 시 자동 배포 |

## 프로젝트 구조

```text
dist/
├── index.html              페이지 뼈대와 메타데이터
├── resume.pdf              이력서
├── assets/
│   ├── js/
│   │   ├── data.js         문구·사진·메뉴·프로젝트 데이터 (콘텐츠는 여기서 수정)
│   │   ├── app.js          섹션 렌더링과 화면 동작
│   │   └── hero-loop.js    히어로 영상 이어 붙여 재생
│   ├── css/style.css       스타일과 반응형 레이아웃
│   ├── images/             프로젝트 화면 이미지
│   └── video/              프로젝트 시연 영상
└── hero/                   히어로 영상·포스터·OG 이미지
vercel.json                 dist/를 배포하는 Vercel 설정
```

## 로컬 실행

설치할 것이 없습니다. 프로젝트 루트에서 아래를 실행하고 [http://127.0.0.1:4173](http://127.0.0.1:4173)을 엽니다.

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

## 콘텐츠 수정

`dist/assets/js/data.js`만 고치면 화면이 바뀝니다. `app.js`는 이 값을 읽어 화면을 만듭니다.

| 바꾸려는 것 | 위치 |
| --- | --- |
| 첫 화면 문구·버튼·영상 경로 | `HERO` |
| 소개 문단·정보 목록·사원증 사진 | `ABOUT` |
| 메뉴·기술 목록 | `NAV`, `SKILLS` |
| 대표 작업(본문·링크·화면·영상) | `WORK` |
| 경력·성과·연락처 | `CAREER`, `ACHIEVEMENTS`, `CONTACT` |
| 섹션 제목·버튼 문구 | `COPY` |

- 프로젝트 화면은 `uiGallery`(이미지·캡션)와 `uiVideo`(시연 영상)로 바꿉니다.
- 이미지·영상 경로는 `dist/index.html` 기준입니다.
- 문장 안 줄바꿈은 `\n`으로 입력합니다.
- 코드 규모 감소율은 재설계 당시 측정한 값이며, 현재 소스를 다시 측정한 결과가 아닙니다.

## 배포

GitHub의 `main` 브랜치에 푸시하면 연결된 Vercel 프로젝트가 자동으로 배포합니다. 빌드와 의존성 설치는 필요하지 않습니다.

## 연락

- 이메일 · [hjb825@naver.com](mailto:hjb825@naver.com)
- GitHub · [@zongbeen](https://github.com/zongbeen)
- Blog · [velog.io/@hjb825](https://velog.io/@hjb825/posts)
