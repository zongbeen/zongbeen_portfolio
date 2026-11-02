/**
 * 화면 내용 수정 안내
 * - 히어로 상단 "iOS 개발자 · 이니텍" → HERO.eyebrow
 * - 히어로 큰 제목 / 뒤쪽 영문 → HERO.title / HERO.wordmark
 * - 소개 문단 / 현재 소속 → ABOUT.paragraphs / ABOUT.facts
 * - 사원증 사진 → ABOUT.photo.src
 * - 프로젝트 본문 / 링크 버튼 이름 → WORK
 * - 버튼·섹션 제목 등 공통 문구 → COPY
 *
 * PROFILE는 공통 인물 정보이고, HERO / ABOUT은 화면별 편집 내용입니다.
 * 화면별 문구는 의도적으로 전체 문자열로 적었습니다. PROFILE.role이나 CAREER를
 * 바꿔도 HERO.eyebrow에 회사명이 자동으로 붙거나 문구가 예기치 않게 바뀌지 않습니다.
 * 코드 구조·동작은 app.js, 배치·크기·색상은 ../css/style.css에서 수정합니다.
 */

// 공통 인물 정보: 이름, 이니셜, 사원증 직함 등에 사용합니다.
export const PROFILE = {
  name: "한종빈 (zongbeen)",
  role: "iOS 개발자",
  experienceLabel: "iOS 개발 3년 5개월",
  headline: "iOS 제품 설계부터 출시·운영까지 연결합니다.",
  summary:
    "C, Objective-C, Swift를 바탕으로 iOS SDK와 앱의 전체 생애주기를 책임진 경험을 정리합니다.",
  displayName: "한종빈",
  idRole: "iOS개발자 3년차",
  handle: "ZONGBEEN",
  email: "hjb825@naver.com",
  phone: "010-5050-5276",
  githubUrl: "https://github.com/zongbeen",
  velogUrl: "https://velog.io/@hjb825/posts",
  notionUrl:
    "https://www.notion.so/19ecaf72207f81fe8d4fcc5dbc7a6b3d?source=copy_link",
  pdfPath: "/resume.pdf",
  quote: "iOS 제품 설계부터 출시·운영까지 연결합니다.",
  initials: "ZB",
};

// 첫 화면 문구: eyebrow는 페이지에 보이는 전체 문장입니다. 회사명을 자동으로 덧붙이지 않습니다.
// title, description, experience도 각각 독립적으로 수정할 수 있습니다.
// media의 경로는 dist/index.html 기준입니다. loopLength는 영상 파일의 실제 길이와 맞춰야 합니다.
export const HERO = {
  eyebrow: "iOS 개발자",
  wordmark: "ZONGBEEN",
  title: "iOS 개발자 한종빈",
  description: "iOS 제품 설계부터 출시·운영까지 연결합니다.",
  actions: [
    {
      label: "작업 보기",
      href: "#work",
      icon: "↗",
      primary: true,
    },
    {
      label: "연락하기",
      href: "#contact",
      icon: "↗",
    },
    {
      label: "이력서 ↓",
      href: "./resume.pdf",
      download: true,
    },
  ],
  experience: "iOS 개발 3년 5개월",
  scrollHint: "아래로 스크롤 ↓",
  summary: "설계 · 출시 · 운영",
  media: {
    poster: "hero/portrait-hero.png",
    webm: "hero/intro-portrait.webm",
    mp4: "hero/intro-portrait.mp4",
    stream: "hero/intro-portrait-stream.mp4",
    loopLength: 7.5,
    label: "한종빈을 표현한 캐릭터 자기소개 영상",
  },
};

// 소개 문단, 오른쪽 정보 목록, 사원증 사진입니다.
// 문장 안 줄바꿈은 \n으로 입력합니다. facts 항목의 href는 링크가 필요할 때만 넣으세요.
export const ABOUT = {
  greeting: "안녕하세요,\n한종빈입니다.",
  paragraphs: [
    "C, Objective-C, Swift를 바탕으로 iOS SDK와 앱의 전체 생애주기를 책임진 경험을 정리합니다.",
    "이니허브 SDK와 App을 기획·설계·개발·배포 전 단계에 걸쳐 담당했습니다.",
  ],
  facts: [
    {
      label: "현재 소속",
      value: "이니텍 · 인증보안팀 클라이언트개발파트",
    },
    {
      label: "경력",
      value: "iOS 개발 3년 5개월",
    },
    {
      label: "이메일",
      value: "hjb825@naver.com",
      href: "mailto:hjb825@naver.com",
    },
  ],
  photo: {
    src: "hero/zongbeen.JPG",
    alt: "한종빈 증명사진",
    width: 591,
    height: 787,
  },
};

// 메뉴: [섹션 id, 화면에 보이는 메뉴 이름] 순서입니다.
export const NAV = [
  ["about", "소개"],
  ["skills", "기술"],
  ["work", "작업"],
  ["career", "경력"],
  ["achievements", "성과"],
  ["contact", "연락"],
];

// 기술 분류와 기술 이름입니다. 타일의 두 글자 기호는 기술 이름에서 자동 생성됩니다.
export const SKILLS = [
  {
    title: "언어",
    skills: ["C", "Objective-C", "Swift"],
  },
  {
    title: "iOS 프레임워크",
    skills: [
      "UIKit",
      "SwiftUI",
      "Foundation",
      "Combine",
      "URLSession",
      "Alamofire",
      "WKWebView",
      "Core Data",
      "Realm",
      "LocalAuthentication",
      "Keychain",
      "AVFoundation",
      "XCTest",
      "Swift Concurrency",
      "RxSwift",
    ],
  },
  {
    title: "설계·품질",
    skills: [
      "MVVM",
      "MVC",
      "Coordinator",
      "Clean Architecture",
      "Modularization",
      "Code Review",
      "Unit Testing",
    ],
  },
  {
    title: "개발 도구",
    skills: ["Xcode", "Git", "Swift Package Manager", "CocoaPods", "Jenkins"],
  },
];

// 대표 작업: links[].label을 그대로 버튼에 표시합니다.
// uiAsset에 이미지 경로를 넣으면 실제 이미지를 표시합니다.
// 이미지가 없을 때 illustration이 있으면 설명용 UI, null이면 이미지 준비 영역을 표시합니다.
// WORK의 cases는 같은 프로젝트 안의 개별 재설계 사례입니다. metrics는 측정 기준과 함께, aiWorkflow는 실제 역할 순서로 적습니다.
export const WORK = [
  {
    id: "inihub-app",
    title: "통합인증 앱(이니허브) iOS 개발",
    period: "2024.02 ~ 현재 (이후 유지보수·기능 추가)",
    role: "iOS 단독 개발(설계·개발·배포) / 팀 7명 (iOS 1 · AOS 2 · Server 2 · Web 2)",
    problem:
      "MSM(모바일 보안모듈) 유지보수 부담이 커지는 상황에서, 통합인증 시장에서 자사만 통합인증 앱이 없었습니다. 공동인증·금융인증·간편인증이 각각 분리되어 있어 iOS 인력 한 명이 대응하기에는 비용이 컸습니다.",
    solution:
      "통합인증 SDK를 리팩터링하고 API를 재설계한 뒤, 신규 인증 앱의 iOS 개발을 단독으로 주도했습니다. iOS와 Android의 앱 생명주기, 백그라운드 동작, 보안 정책 차이를 분석해 공통 인증 흐름을 설계하고, 플랫폼 제약을 우회하기보다 UX 일관성과 보안·유지보수성을 기준으로 방향을 제안해 팀 합의를 이끌었습니다. 공동인증서(XSafe), FIDO, OTP 등 내부 모듈을 하나의 앱으로 통합했고, 비즈니스 로직과 에러 코드 정책, UI/UX, API 설계까지 주도했습니다. 플랫폼별 구현 전략과 공통 규칙, 코드 구조를 문서화해 Android 팀과의 협업 기준을 세웠습니다.",
    outcome:
      "시연에서 완성도를 인정받아 사내 핵심 과제로 선정됐고, 영업팀과 신규 개발 인력을 포함한 통합인증제품 전담팀 신설과 서비스 확장으로 이어졌습니다. App Store에 출시해 현재까지 유지보수와 신규 기능 추가를 이어가고 있습니다. 패키지 형태로 2개 고객사가 사용했고, 클라우드 서비스형 확장 후 6개 고객사가 추가 도입해 총 8개 고객사에 도입했습니다.",
    technologies: [
      "Swift",
      "Objective-C",
      "C",
      "UIKit",
      "SwiftUI",
      "MVVM",
      "MVC",
      "Coordinator",
      "URLSession",
      "WKWebView",
      "LocalAuthentication",
      "Keychain",
      "AVFoundation",
    ],
    links: [
      {
        label: "앱 보기",
        href: "https://apps.apple.com/kr/app/id6475074248",
      },
    ],
    uiAsset: null,
    illustration: null,
  },
  {
    id: "xsafe-biometric",
    title: "INISAFE XSafe SDK PIN·생체인증 확장",
    period: "2026.01 ~ 2026.03",
    role: "iOS 단독 개발(SDK 확장·샘플 앱 제작) / 팀 2명 (iOS 1 · AOS 1)",
    problem:
      "기존 XSafe SDK는 패스워드 기반으로 인증서 기능을 제공해, 서명할 때마다 패스워드를 입력해야 하는 불편이 있었습니다. 생체인증 지원 여부를 묻는 문의가 이어져 고객사 요구를 충족하고 사용 경험을 개선할 필요가 있었습니다.",
    solution:
      "패스워드 기반의 iOS SDK에 PIN과 생체인증 방식을 추가했습니다. 생체인증은 PIN으로 발급한 인증서에만 등록할 수 있도록 하고, 해당 인증서의 확장키를 확인한 뒤 생체 등록과 서명을 수행하도록 구성했습니다. 고객사 앱에서 생체인증 API를 호출하면 SDK 내부에서 LocalAuthentication을 통한 인증 요청과 결과 처리를 담당하도록 설계했습니다. Face ID·Touch ID 인증 흐름을 설계하고, 생체인증 실패와 미지원 기기 같은 예외 상황의 처리 흐름을 정의했습니다. PIN과 생체인증 방식의 동작 차이, 플랫폼별 보안 정책 차이를 분석해 공통 기준과 플랫폼별 분리 항목을 구분하고, API 네이밍·오류 코드·인증 흐름을 문서화해 Android 개발자와의 협업 기준을 세웠습니다.",
    outcome:
      "기존 패스워드 방식에 더해 PIN과 생체인증을 제공하도록 확장했고, 2개 고객사에 도입했습니다. 생체 등록을 마친 인증서는 서명할 인증서를 선택한 뒤 PIN 입력 대신 Face ID·Touch ID로 인증할 수 있습니다. 외부 개발자가 생체인증 API를 바로 참고할 수 있도록 MobilianWeb 샘플 앱을 신규 제작해, 안내 목적에 맞게 불필요한 기능 없이 구성했습니다.",
    technologies: [
      "Objective-C",
      "C",
      "Swift",
      "UIKit",
      "WKWebView",
      "LocalAuthentication",
      "Keychain",
    ],
    links: [],
    sdkOverview: {
      title: "PIN·생체인증 SDK 확장 구조",
      description:
        "기존 패스워드 기반 SDK에 PIN과 생체인증을 추가했습니다. 고객사 앱은 API를 호출하고, SDK가 생체인증 요청과 결과 처리를 담당합니다.",
      clientTitle: "고객사 앱 · 샘플 앱",
      clientDescription: "XSafe 생체인증 API 호출",
      sdkTitle: "XSafe iOS SDK",
      capabilities: [
        {
          label: "기존",
          title: "패스워드 기반 인증서 기능",
        },
        {
          label: "이번에 추가",
          title: "PIN · 생체인증",
        },
      ],
      platformTitle: "iOS LocalAuthentication",
      platformDescription: "Face ID · Touch ID",
      registrationTitle: "생체 등록 조건",
      registrationSteps: ["PIN 발급 인증서", "확장키 확인", "생체 등록"],
      impactValue: "2곳",
      impactLabel: "고객사 도입",
      sampleNote:
        "샘플 앱은 외부 개발자가 SDK API 사용법을 확인할 수 있도록 별도로 제작했습니다.",
      flowDetailsLabel: "PIN·생체 서명 사용 흐름 보기",
    },
    flowComparison: {
      title: "추가한 인증 방식의 서명 흐름",
      description: "PIN 서명과 생체 등록 후 서명의 입력 방식 비교",
      flows: [
        {
          title: "PIN 서명",
          condition: "이번에 추가한 방식",
          steps: ["서명할 인증서 선택", "PIN 입력", "서명 결과 확인"],
          highlightStep: 1,
        },
        {
          title: "생체 서명",
          condition: "PIN 발급·생체 등록 후",
          steps: [
            "서명할 인증서 선택",
            "Face ID·Touch ID 인증",
            "서명 결과 확인",
          ],
          highlightStep: 1,
        },
      ],
      prerequisite:
        "PIN으로 발급한 인증서의 확장키를 확인한 후 생체인증을 등록할 수 있습니다.",
    },
    uiAsset: null,
    illustration: null,
  },
  {
    id: "sample-app-redesign",
    title: "XSafe·MobilianWeb 샘플 앱 재설계",
    period: "FR 2024.12 ~ 2025.06 · ST 2026.08 말 ~ 2026.09 중순",
    role: "iOS 단독 담당 · FR 설계·구현 / ST 요구사항·구조 설계·코드 검증·실기기 테스트",
    problem:
      "XSafe는 기존 Static Library(ST)와 기존 API를 래핑한 Framework·XCFramework(FR)를 함께 제공하며, ST 사용 고객사 지원을 위해 두 방식을 모두 유지보수합니다. 외부 개발자가 API 사용법을 쉽게 파악하도록 FR과 ST 샘플 앱을 각각 재설계했습니다.",
    solution:
      "FR은 UI와 데이터 흐름을 API 가이드 목적에 맞게 정리했습니다. ST는 최신 SDK의 Scene 생명주기 요구에 대응하면서 MVVM·Service·Context 중심으로 구조를 바꿨습니다. ST의 요구사항과 개선 방향은 직접 정하고, Claude Code에 구현·테스트 작성을 맡긴 뒤 코드와 실기기 동작을 재확인했습니다.",
    outcome:
      "FR은 API 안내와 기능 확장이 쉬운 구조로 개선했습니다. ST는 주석 제외 전체 코드를 16,386줄에서 6,742줄로, ViewController 개수를 37개에서 4개로 줄였습니다. XIB 38개·4,304줄을 Storyboard로 통합해 XIB를 제거했고, 하드코딩을 73개에서 2개로 축소했습니다. Service 단위 테스트 통과와 전 기능 실기기 테스트 완료 후 고객사 1곳에 배포했습니다.",
    cases: [
      {
        title: "FR — API 가이드 구조 개선",
        period: "2024.12 ~ 2025.06",
        problem:
          "XSafe SDK와 MobilianWeb 앱은 외부 개발자를 위한 API 가이드 목적의 샘플 앱을 함께 제공합니다. 기존 샘플 앱은 UI 구조가 분산되어 읽기 어렵고 API 가이드와 무관한 기능(NotificationCenter 처리, Custom Delegate 등)이 섞여 있어 고객사의 개선 요청이 들어왔습니다.",
        solution:
          "부분 수정 대신 샘플 앱 전체를 처음부터 다시 설계하고 구현했습니다. iOS 공식 디자인 가이드와 기본 설정·캘린더 앱의 UI/UX 패턴을 참고해, 버튼 나열 방식을 Table View 기반 UI로 전환하고 Alert 팝업 입력을 전용 입력 화면으로 교체했습니다. 설정 기능은 각 화면 우측 버튼에 배치해 기능 간 연결성을 높였습니다. 데이터 처리도 함께 정리했습니다. 버튼 클릭 시 NotificationCenter로 알림을 보내고 전역 변수에 저장하던 기존 구조는 동시성 이슈와 상태 보장 문제가 있어, 버튼 하나에 하나의 플로우가 대응되는 단일 흐름 구조로 바꾸고 GCD 기반 비동기 처리를 Swift Concurrency(async/await)로 전환했습니다.",
        outcome:
          "API 안내에 집중한 구조로 정리해 SDK 가이드 본래의 역할을 명확히 했습니다. Table View 기반 UI와 iOS 디자인 가이드 준수로 외부 개발자가 API를 파악하기 쉬워졌고, 데이터 흐름 단순화와 async/await 전환으로 신규 기능 추가와 UX 수정이 수월해졌습니다. 앱 코드 전체는 약 9,160줄에서 6,176줄로 줄였고, Storyboard와 ViewModel 코드도 함께 축소했습니다.",
        metrics: [
          {
            label: "앱 코드 전체",
            value: "약 32.6% 감소",
            note: "약 9,160줄 → 6,176줄",
          },
          {
            label: "Storyboard",
            value: "32.9% 감소",
            note: "2,890줄 → 1,938줄",
          },
          {
            label: "ViewModel (Swift)",
            value: "37.9% 감소",
            note: "2,517줄 → 1,564줄",
          },
          {
            label: "SignViewModel (Swift)",
            value: "59.2% 감소",
            note: "1,022줄 → 417줄",
          },
          {
            label: "ManageViewModel (Swift)",
            value: "36.9% 감소",
            note: "781줄 → 493줄",
          },
        ],
      },
      {
        title: "ST — 최신 환경 대응과 구조 개선",
        period: "2026.08 말 ~ 2026.09 중순",
        problem:
          "Xcode 27·iOS 27·macOS 27 출시 후 실기기 호환성 테스트 중, ST 샘플 앱이 AppDelegate 메서드 호출 전에 런타임 오류로 종료되는 문제를 발견했습니다. 오류 로그와 Apple 공식 문서, Google·GitHub 검색, AI 질의를 교차 확인해 최신 SDK의 UIScene 생명주기 요구를 파악했습니다. 다수의 XIB로 유지보수도 어려워 호환성 수정과 함께 재설계를 진행했습니다.",
        solution:
          "Scene 생명주기를 도입하고 여러 XIB를 하나의 Storyboard로 통합했습니다. 생성된 코드가 여러 곳에 분산된 것을 확인한 뒤 MVVM으로 역할을 나누고 XSafe 함수 호출을 Service 계층에 모으도록 지시했습니다. URL·정규식 패턴·화면 문구·설정값은 Context에 집중시켰습니다. FR에서 사용 중인 대체 함수도 활용했습니다.",
        outcome:
          "외부 개발자가 Service에서 XSafe 함수 사용법을 직관적으로 읽고 검색할 수 있게 개선했습니다. Claude Code가 작성한 Service 로직 단위 테스트를 실행해 모두 통과한 것을 확인하고, 재설계 샘플의 전 기능을 직접 실기기에서 재확인했습니다. 고객사 1곳에 배포했습니다.",
        metrics: [
          {
            label: "전체 코드",
            value: "58.9% 감소",
            note: "16,386줄 → 6,742줄 · 주석 제외",
          },
          {
            label: "XIB 개수",
            value: "38개 → 0개",
            note: "4,304줄 → 0줄 · Storyboard로 통합",
          },
          {
            label: "ViewController 개수",
            value: "37개 → 4개",
            note: "개수 기준 약 89.2% 감소",
          },
          {
            label: "하드코딩 지점",
            value: "73개 → 2개",
            note: "URL·정규식·화면 문구·설정값",
          },
          {
            label: "고객사 배포",
            value: "1곳",
            note: "전 기능 실기기 테스트 완료",
          },
        ],
        aiWorkflow: [
          "직접 재설계 요구사항과 구조 개선 방향을 지정했습니다.",
          "Claude Code 단독으로 전체 기능 구현과 Service 단위 테스트 작성을 진행했습니다.",
          "생성된 코드를 검증해 MVVM·Service 분리를 지시하고, 실기기에서 전 기능을 재확인했습니다.",
        ],
      },
    ],
    technologies: [
      "Swift",
      "Objective-C",
      "C",
      "UIKit",
      "Storyboard",
      "MVC",
      "MVVM",
      "Swift Concurrency",
      "Claude Code",
    ],
    links: [],
    uiAsset: null,
    metric: null,
    illustration: null,
  },
  {
    id: "cavp-validation",
    title: "CAVP 검증 심사 리드 및 Vector 파일 변환 자동화",
    period: "2023.07 ~ 현재 (매년 4회 진행 중)",
    role: "iOS·AOS 검증 통합 리드 / 팀 6명 (iOS 2 · AOS 2 · Server 2) → 이후 iOS 1명으로 축소",
    problem:
      "전자서명 인증 사업자로서 매년 CAVP 검증 심사를 수행해야 합니다. 기존에는 플랫폼·알고리즘별 JSON Vector 파일을 REQ, RSP를 거쳐 다시 JSON으로 변환하는 과정을 모두 수작업으로 처리해, 수십 개 파일을 반복 변환하는 데 상당한 시간이 들고 실수 위험도 컸습니다. OS별 구조와 고객사별 파일 형식이 제각각인 점도 부담이었습니다.",
    solution:
      "iOS 12~26 전 운영 범위에서 암호 알고리즘 동작을 검증하고 증적을 수집했으며, 자사 Crypto 모듈의 CAVP 규격 적합성을 확인하기 위해 Hash 검증과 알고리즘별 Vector 파일 기반 테스트를 수행했습니다. OS 버전별 차이와 모듈 동작 패턴을 분석해 일관된 검증 결과를 확보했습니다. 반복 작업은 폴더 자동 스캔, 파일명·알고리즘 정보 추출, 일괄 변환과 결과 매핑까지 Shell 스크립트로 자동화했습니다. 또한 개인키 암호화에 쓰이는 PBKDF2와 전자서명 키 유도에 쓰이는 HASH-DRBG 검증을 신규로 추가해, 알고리즘 규격 분석부터 Vector 기반 테스트 설계, 결과 검증 절차까지 수립했습니다.",
    outcome:
      "파일 변환·소스 증적·해시 증적 작업을 자동화해 소요 시간을 2일에서 1.5일로 단축했습니다(25% 단축). PBKDF2와 HASH-DRBG를 포함한 Crypto 모듈 전반의 CAVP 규격 적합성을 입증했고, 이를 바탕으로 주요 기업·기관의 보안 심사 통과와 대외 인증 획득에 기여했습니다.",
    technologies: ["Shell Script", "C", "Objective-C", "CAVP"],
    links: [],
    uiAsset: null,
    illustration: {
      title: "CAVP",
      rows: ["파일 변환", "소스 증적", "해시 증적"],
    },
  },
  {
    id: "ai-portfolio-site",
    title: "AI 활용 말하는 포트폴리오 구축",
    period: "배포 후 유지보수·개선 중",
    role: "콘텐츠 작성·요구사항 정의·결과 검토(본인) / 구현·수정·검증 협업(Codex)",
    problem:
      "경력·기술·대표 작업을 소개하는 개인 포트폴리오를 캐릭터 자기소개 영상과 함께 구성했습니다. 영상과 이름이 겹치는 문제, 반복 재생 시 끊김, PC 작업 패널의 과도한 여백 등 실제 미리보기에서 발견한 문제를 해결하고, 콘텐츠를 직접 수정하기 쉬운 구조로 정리할 필요가 있었습니다.",
    solution:
      "원하는 화면과 동작을 구체적으로 제시하고 Codex와 구현·수정을 반복했습니다. HTML·CSS·JavaScript로 빌드가 필요 없는 정적 사이트를 구성하고, 캐릭터 영상의 배경 분리와 Canvas 2D 합성, 반복 구간을 미리 버퍼링하는 재생 방식을 적용했습니다. 화면 밖에서는 영상 재생을 멈추도록 제어하고, 모바일 대응과 키보드 조작을 확인했습니다. 문구·사진·프로젝트 정보를 data.js에 모으고 렌더링·동작 코드를 분리해 직접 편집할 수 있도록 개선했습니다.",
    outcome:
      "GitHub main 브랜치와 Vercel을 연결해 푸시 시 자동 배포되는 개인 포트폴리오로 운영하고 있습니다. PC·모바일 미리보기에서 영상 재생, 가로 넘침, 메뉴·프로젝트 패널과 키보드 동작을 점검했습니다. 실제 사용 중 발견한 문제를 요구사항으로 구체화하고 AI의 구현 결과를 확인하며, 콘텐츠 수정부터 검증·배포까지 반복하는 작업 흐름을 구축했습니다.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Canvas 2D",
      "Media Source Extensions",
      "GitHub",
      "Vercel",
      "Codex",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zongbeen/zongbeen_portfolio",
      },
    ],
    uiAsset: null,
    illustration: {
      title: "AI",
      rows: ["요구사항 정의", "구현·검증", "개선·배포"],
    },
  },
];

// 경력 타임라인 전용 데이터입니다. 수정해도 HERO와 ABOUT의 문구는 바뀌지 않습니다.
export const CAREER = [
  {
    id: "initech-ios",
    company: "이니텍",
    team: "인증보안팀 클라이언트개발파트",
    role: "iOS 개발자 (대리)",
    period: "2023.04 ~ 재직 중",
    product:
      "통합인증(이니허브 SDK·App), 공동인증(INISAFE XSafe, INISAFE MobilianWeb), 내부 Core·PKI·CMP 모듈, KCMVP 검증모듈",
    contributions: [
      "이니허브 SDK와 App을 기획·설계·개발·배포 전 단계에 걸쳐 담당했습니다.",
      "이니허브에 공동인증, 금융인증, 간편인증, 본인확인, 신분증 인증, OTP, FIDO 인증 수단을 구현했습니다.",
      "INISAFE XSafe와 INISAFE MobilianWeb을 유지보수하며 기능을 추가하고, 생체인증을 도입했으며 샘플 앱을 리팩토링했습니다.",
      "C 기반 Core·PKI·CMP 모듈을 유지보수하고, 인증서 길이 3072 확장과 PQC(양자내성암호) 기능을 추가했습니다.",
      "KCMVP 검증모듈 인증 대응을 진행했습니다.",
    ],
    outcomes: [
      "연 4개 고객사의 KCMVP 인증을 모두 완료했으며, 담당한 인증 건은 모두 통과했습니다.",
      "이니허브 SDK와 App의 출시·도입·배포를 완료했습니다.",
      "PQC(양자내성암호) 기능은 현재 개발을 진행 중입니다.",
    ],
  },
];

// 성과 카드: value만 숫자로 입력하세요. 숫자 카운트업에 사용합니다.
export const ACHIEVEMENTS = [
  {
    label: "CAVP 검증 자동화",
    title: "반복을 줄이고, 정확성을 높이다.",
    description: "파일 변환·소스 증적·해시 증적 작업 시간",
    value: 25,
    suffix: "%",
    detail: "2일 → 1.5일 · 작업 시간 단축",
  },
  {
    label: "이니허브",
    title: "하나의 앱에서, 더 넓은 서비스로.",
    description: "패키지 2개사 + 클라우드 서비스 6개사",
    value: 8,
    suffix: "개사",
    detail: "총 도입 고객사",
  },
  {
    label: "XSafe 생체인증",
    title: "인증의 경험을 더 편리하게.",
    description: "생체인증 확장 기능 도입",
    value: 2,
    suffix: "개사",
    detail: "도입 고객사",
  },
  {
    label: "KCMVP 인증",
    title: "담당한 모든 인증을 통과하다.",
    description: "연 4개 고객사 인증 완료",
    value: 4,
    suffix: "개사",
    detail: "연간 인증 대응 · 담당 건 모두 통과",
  },
];

// 연락처와 푸터 연도입니다. title 배열의 항목마다 화면에서 줄을 바꿉니다.
export const CONTACT = {
  email: "hjb825@naver.com",
  links: [
    ["GitHub", "https://github.com/zongbeen"],
    ["Velog", "https://velog.io/@hjb825/posts"],
    [
      "Notion",
      "https://www.notion.so/19ecaf72207f81fe8d4fcc5dbc7a6b3d?source=copy_link",
    ],
  ],
  title: ["함께", "만들어요."],
  year: 2026,
};

// 나머지 화면 문구와 버튼 안내입니다. 제목 배열은 [일반 글자, 회색 기울임 글자]입니다.
// 설명 안 줄바꿈은 <br> 대신 \n을 사용하세요.
export const COPY = {
  aboutTitle: ["만드는 사람의", "이야기."],
  skillsTitle: ["내 스택의", "주기율표."],
  workTitle: ["문제에서 시작한", "작업."],
  careerTitle: ["차곡차곡 쌓아온", "경험."],
  achievementsTitle: ["작업이 남긴", "변화."],
  skillsDescription: "언어부터 설계와 품질까지.\n제품을 완성하는 기술들.",
  workDescription: "인증의 기반부터\n사용자가 만나는 앱까지.",
  idTitle: "iOS 개발자 사원증",
  idBackTitle: "저는 이런 사람입니다.",
  idLines: [
    "C · Objective-C · Swift",
    "iOS SDK와 앱 개발",
    "설계부터 출시·운영까지",
    "인증·보안 모듈 개발",
    "AI 코드 에이전트 활용",
  ],
  idHint: "클릭해서 뒤집어 보세요 ↔",
  next: "다음 — 함께할 팀?",
  continuing: "계속 쌓아가는 중 →",
  uiPlaceholder: "실제 UI를 담을 공간",
  uiPending: "화면 추가 예정",
  uiIllustration: "Illustrative UI · 설명용 UI",
  sectionLabels: {
    about: "소개",
    skills: "기술",
    work: "대표 작업",
    career: "경력",
    achievements: "성과",
    contact: "연락",
  },
  fullscreen: "전체화면 ⛶",
  menu: "메뉴",
  closeMenu: "닫기 ×",
  backToTop: "맨 위로 ↑",
  allSkills: "전체",
  skillInspector: "기술 살펴보기",
  relatedWork: "관련 작업",
  noRelatedWork: "이력서에 기재된 기술입니다.",
  workAiWorkflow: "Claude Code 활용과 담당 역할",
  workApproach: "접근",
  workOutcome: "결과",
  copyEmail: "이메일 복사 ↗",
  copiedEmail: "복사됨 ✓",
  copyEmailFallback: "이메일을 선택해 복사해 주세요",
  badgeLabel: "반갑습니다",
  badgeText: "반갑습니다 · 함께 만들어요 · ",
  soundOn: "소리 켜기",
  soundPlaying: "소리 재생 중",
  soundOnAria: "영상 소리 켜기",
  soundOffAria: "영상 소리 끄기",
  fullscreenUnavailable: "이 브라우저에서는 전체화면을 지원하지 않습니다.",
};

// 기술 인스펙터 로고입니다. 기술 이름과 키를 일치시키세요.
export const SKILL_LOGOS = {
  Swift:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/swift/swift-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/c/c-original.svg",
  "Objective-C":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/objectivec/objectivec-plain.svg",
  Xcode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/xcode/xcode-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/git/git-original.svg",
  Jenkins:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/jenkins/jenkins-original.svg",
};
