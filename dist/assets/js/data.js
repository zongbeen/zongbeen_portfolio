export const PROFILE = {
  "name": "한종빈 (zongbeen)",
  "role": "iOS 개발자",
  "experienceLabel": "iOS 개발 3년 5개월",
  "headline": "iOS 제품을 설계부터 출시·운영까지 연결합니다.",
  "summary": "C, Objective-C, Swift를 바탕으로 iOS SDK와 앱의 전체 생애주기를 책임진 경험을 정리합니다.",
  "displayName": "한종빈",
  "handle": "ZONGBEEN",
  "email": "hjb825@naver.com",
  "phone": "010-5050-5276",
  "githubUrl": "https://github.com/zongbeen",
  "velogUrl": "https://velog.io/@hjb825/posts",
  "notionUrl": "https://www.notion.so/19ecaf72207f81fe8d4fcc5dbc7a6b3d?source=copy_link",
  "pdfPath": "/resume.pdf",
  "quote": "iOS 제품을 설계부터 출시·운영까지 연결합니다."
};
export const NAV = [
  [
    "about",
    "소개"
  ],
  [
    "skills",
    "기술"
  ],
  [
    "work",
    "작업"
  ],
  [
    "career",
    "경력"
  ],
  [
    "achievements",
    "성과"
  ],
  [
    "contact",
    "연락"
  ]
];
export const SKILLS = [
  {
    "title": "언어",
    "skills": [
      "C",
      "Objective-C",
      "Swift"
    ]
  },
  {
    "title": "iOS 프레임워크",
    "skills": [
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
      "RxSwift"
    ]
  },
  {
    "title": "설계·품질",
    "skills": [
      "MVVM",
      "MVC",
      "Coordinator",
      "Clean Architecture",
      "모듈화",
      "코드 리뷰",
      "단위 테스트"
    ]
  },
  {
    "title": "개발 도구",
    "skills": [
      "Xcode",
      "Git",
      "Swift Package Manager",
      "CocoaPods",
      "Jenkins"
    ]
  }
];
export const WORK = [
  {
    "id": "inihub-app",
    "title": "통합인증 앱(이니허브) iOS 개발",
    "period": "2024.02 ~ 현재 (이후 유지보수·기능 추가)",
    "role": "iOS 단독 개발(설계·개발·배포) / 팀 7명 (iOS 1 · AOS 2 · Server 2 · Web 2)",
    "problem": "MSM(모바일 보안모듈) 유지보수 부담이 커지는 상황에서, 통합인증 시장에서 자사만 통합인증 앱이 없었습니다. 공동인증·금융인증·간편인증이 각각 분리되어 있어 iOS 인력 한 명이 대응하기에는 비용이 컸습니다.",
    "solution": "통합인증 SDK를 리팩터링하고 API를 재설계한 뒤, 신규 인증 앱의 iOS 개발을 단독으로 주도했습니다. iOS와 Android의 앱 생명주기, 백그라운드 동작, 보안 정책 차이를 분석해 공통 인증 흐름을 설계하고, 플랫폼 제약을 우회하기보다 UX 일관성과 보안·유지보수성을 기준으로 방향을 제안해 팀 합의를 이끌었습니다. 공동인증서(XSafe), FIDO, OTP 등 내부 모듈을 하나의 앱으로 통합했고, 비즈니스 로직과 에러 코드 정책, UI/UX, API 설계까지 주도했습니다. 플랫폼별 구현 전략과 공통 규칙, 코드 구조를 문서화해 Android 팀과의 협업 기준을 세웠습니다.",
    "outcome": "시연에서 완성도를 인정받아 사내 핵심 과제로 선정됐고, 영업팀과 신규 개발 인력을 포함한 통합인증제품 전담팀 신설과 서비스 확장으로 이어졌습니다. App Store에 출시해 현재까지 유지보수와 신규 기능 추가를 이어가고 있습니다. 패키지 형태로 2개 고객사가 사용했고, 클라우드 서비스형 확장 후 6개 고객사가 추가 도입해 총 8개 고객사에 도입했습니다.",
    "technologies": [
      "Swift",
      "Objective-C",
      "C",
      "UIKit",
      "SwiftUI",
      "MVVM",
      "Coordinator",
      "URLSession",
      "WKWebView",
      "LocalAuthentication",
      "Keychain",
      "AVFoundation"
    ],
    "links": [
      {
        "label": "서비스",
        "href": "https://apps.apple.com/kr/app/id6475074248"
      }
    ],
    "uiAsset": null
  },
  {
    "id": "xsafe-biometric",
    "title": "INISAFE XSafe SDK 생체인증 확장",
    "period": "2026.01 ~ 2026.03",
    "role": "iOS 단독 개발(SDK 확장·샘플 앱 제작) / 팀 2명 (iOS 1 · AOS 1)",
    "problem": "기존 XSafe SDK는 패스워드 기반으로만 공동인증서 기능을 제공해, 서명할 때마다 비밀번호를 입력해야 하는 불편이 컸습니다. 생체인증 지원 여부를 묻는 문의가 이어져 고객사 요구를 충족하고 사용 경험을 개선할 필요가 있었습니다.",
    "solution": "발급·재발급·폐기·삭제·관리·내보내기·가져오기·서명까지 패스워드로 가능하던 인증서 기능 전체를 생체인증으로도 수행할 수 있도록 iOS SDK를 확장했습니다. LocalAuthentication 기반으로 Face ID·Touch ID 인증 흐름을 설계하고, 생체인증 실패와 미지원 기기 같은 예외 상황의 처리 흐름을 정의했습니다. 패스워드와 생체인증 방식의 동작 차이, 플랫폼별 보안 정책 차이를 분석해 공통 기준과 플랫폼별 분리 항목을 구분하고, API 네이밍·오류 코드·인증 흐름을 문서화해 Android 개발자와의 협업 기준을 세웠습니다.",
    "outcome": "패스워드 방식과 동일한 범위의 인증서 기능을 생체인증으로 제공해 고객사 요구를 충족했고, 2개 고객사에 도입했습니다. 외부 개발자가 생체인증 API를 바로 참고할 수 있도록 MobilianWeb 샘플 앱을 신규 제작해, 안내 목적에 맞게 불필요한 기능 없이 구성했습니다.",
    "technologies": [
      "Objective-C",
      "C",
      "Swift",
      "UIKit",
      "WKWebView",
      "LocalAuthentication",
      "Keychain"
    ],
    "links": [],
    "uiAsset": null
  },
  {
    "id": "sample-app-redesign",
    "title": "XSafe·MobilianWeb 전면 재설계",
    "period": "2024.12 ~ 2025.06",
    "role": "iOS 단독 개발(재설계·구현) / 팀 1명 (iOS 1)",
    "problem": "XSafe SDK와 MobilianWeb 앱은 외부 개발자를 위한 API 가이드 목적의 샘플 앱을 함께 제공합니다. 기존 샘플 앱은 UI 구조가 분산되어 읽기 어렵고 API 가이드와 무관한 기능(NotificationCenter 처리, Custom Delegate 등)이 섞여 있어 고객사의 개선 요청이 들어왔습니다.",
    "solution": "부분 수정 대신 샘플 앱 전체를 처음부터 다시 설계하고 구현했습니다. iOS 공식 디자인 가이드와 기본 설정·캘린더 앱의 UI/UX 패턴을 참고해, 버튼 나열 방식을 Table View 기반 UI로 전환하고 Alert 팝업 입력을 전용 입력 화면으로 교체했습니다. 설정 기능은 각 화면 우측 버튼에 배치해 기능 간 연결성을 높였습니다. 데이터 처리도 함께 정리했습니다. 버튼 클릭 시 NotificationCenter로 알림을 보내고 전역 변수에 저장하던 기존 구조는 동시성 이슈와 상태 보장 문제가 있어, 버튼 하나에 하나의 플로우가 대응되는 단일 흐름 구조로 바꾸고 GCD 기반 비동기 처리를 Swift Concurrency(async/await)로 전환했습니다.",
    "outcome": "API 안내에 집중한 구조로 정리해 SDK 가이드 본래의 역할을 명확히 했습니다. Table View 기반 UI와 iOS 디자인 가이드 준수로 외부 개발자가 API를 파악하기 쉬워졌고, 데이터 흐름 단순화와 async/await 전환으로 신규 기능 추가와 UX 수정이 수월해졌습니다.",
    "technologies": [
      "Swift",
      "Objective-C",
      "C",
      "UIKit",
      "MVC",
      "Swift Concurrency"
    ],
    "links": [],
    "uiAsset": null,
    "metric": null
  },
  {
    "id": "cavp-validation",
    "title": "CAVP 검증 심사 리드 및 Vector 파일 변환 자동화",
    "period": "2023.07 ~ 현재 (매년 4회 진행 중)",
    "role": "iOS·AOS 검증 통합 리드 / 팀 6명 (iOS 2 · AOS 2 · Server 2) → 이후 iOS 1명으로 축소",
    "problem": "전자서명 인증 사업자로서 매년 CAVP 검증 심사를 수행해야 합니다. 기존에는 플랫폼·알고리즘별 JSON Vector 파일을 REQ, RSP를 거쳐 다시 JSON으로 변환하는 과정을 모두 수작업으로 처리해, 수십 개 파일을 반복 변환하는 데 상당한 시간이 들고 실수 위험도 컸습니다. OS별 구조와 고객사별 파일 형식이 제각각인 점도 부담이었습니다.",
    "solution": "iOS 12~26 전 운영 범위에서 암호 알고리즘 동작을 검증하고 증적을 수집했으며, 자사 Crypto 모듈의 CAVP 규격 적합성을 확인하기 위해 Hash 검증과 알고리즘별 Vector 파일 기반 테스트를 수행했습니다. OS 버전별 차이와 모듈 동작 패턴을 분석해 일관된 검증 결과를 확보했습니다. 반복 작업은 폴더 자동 스캔, 파일명·알고리즘 정보 추출, 일괄 변환과 결과 매핑까지 Shell 스크립트로 자동화했습니다. 또한 개인키 암호화에 쓰이는 PBKDF2와 전자서명 키 유도에 쓰이는 HASH-DRBG 검증을 신규로 추가해, 알고리즘 규격 분석부터 Vector 기반 테스트 설계, 결과 검증 절차까지 수립했습니다.",
    "outcome": "파일 변환·소스 증적·해시 증적 작업을 자동화해 소요 시간을 2일에서 1.5일로 단축했습니다(25% 단축). PBKDF2와 HASH-DRBG를 포함한 Crypto 모듈 전반의 CAVP 규격 적합성을 입증했고, 이를 바탕으로 주요 기업·기관의 보안 심사 통과와 대외 인증 획득에 기여했습니다.",
    "technologies": [
      "Shell Script",
      "C",
      "Objective-C",
      "CAVP"
    ],
    "links": [],
    "uiAsset": null
  },
  {
    "id": "ai-resume-site",
    "title": "AI 활용 이력서 웹사이트 개발",
    "period": "2026.09.10 ~ 2026.09.13 (4일간)",
    "role": "기획 초안(Codex) → 개발·수정(Claude Code) / 이력서 콘텐츠 작성·검토·테스트(본인)",
    "problem": "3년째 iOS 개발자로 일하며 업무에서 Claude Code와 Codex를 유지보수 목적으로 써왔지만, 기획부터 배포까지 전 과정에서 AI 코드 에이전트를 실제 업무 수준으로 활용해본 적은 없었습니다. 채용 시즌을 준비하며, 웹 프론트엔드 경험이 없는 상태에서 1인 프로젝트로 직접 시도해보기로 했습니다.",
    "solution": "Codex에게 Next.js와 Vercel 기반으로 사이트를 기획·설계하고 프로젝트 초안을 만들도록 맡긴 뒤, 이후 기능 추가와 수정은 Claude Code로 진행했습니다. 이력서에 들어갈 경력 내용과 PDF는 직접 작성했고, 매 단계 결과물을 검토하고 테스트하며 방향을 조율했습니다.",
    "outcome": "짧은 기간 안에 기획부터 배포까지 완료해 실제 이력서 사이트로 운영하고 있습니다. AI 코드 에이전트 활용 역량뿐 아니라 TypeScript와 웹 개발 전반에 대한 학습 역량도 함께 쌓았습니다.",
    "technologies": [
      "Next.js",
      "Vercel",
      "Codex",
      "Claude Code"
    ],
    "links": [
      {
        "label": "Velog",
        "href": "https://velog.io/@hjb825/Claude-Code%EB%A1%9C-%EC%9D%B4%EB%A0%A5%EC%84%9C-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EB%A9%B0-%EC%8D%A8%EB%B3%B8-ponytail-headroom"
      }
    ],
    "uiAsset": null
  }
];
export const CAREER = [
  {
    "id": "initech-ios",
    "company": "이니텍",
    "team": "인증보안팀 클라이언트개발파트",
    "role": "iOS 개발자 (대리)",
    "period": "2023.04 ~ 재직 중",
    "product": "통합인증(이니허브 SDK·App), 공동인증(INISAFE XSafe, INISAFE MobilianWeb), 내부 Core·PKI·CMP 모듈, KCMVP 검증모듈",
    "contributions": [
      "이니허브 SDK와 App을 기획·설계·개발·배포 전 단계에 걸쳐 담당했습니다.",
      "이니허브에 공동인증, 금융인증, 간편인증, 본인확인, 신분증 인증, OTP, FIDO 인증 수단을 구현했습니다.",
      "INISAFE XSafe와 INISAFE MobilianWeb을 유지보수하며 기능을 추가하고, 생체인증을 도입했으며 샘플 앱을 리팩토링했습니다.",
      "C 기반 Core·PKI·CMP 모듈을 유지보수하고, 인증서 길이 3072 확장과 PQC(양자내성암호) 기능을 추가했습니다.",
      "KCMVP 검증모듈 인증 대응을 진행했습니다."
    ],
    "outcomes": [
      "연 4개 고객사의 KCMVP 인증을 모두 완료했으며, 담당한 인증 건은 모두 통과했습니다.",
      "이니허브 SDK와 App의 출시·도입·배포를 완료했습니다.",
      "PQC(양자내성암호) 기능은 현재 개발을 진행 중입니다."
    ]
  }
];
export const ACHIEVEMENTS = [
  {
    "label": "CAVP 검증 자동화",
    "title": "반복을 줄이고, 정확성을 높이다.",
    "description": "파일 변환·소스 증적·해시 증적 작업 시간",
    "value": 25,
    "suffix": "%",
    "detail": "2일 → 1.5일 · 작업 시간 단축"
  },
  {
    "label": "이니허브",
    "title": "하나의 앱에서, 더 넓은 서비스로.",
    "description": "패키지 2개사 + 클라우드 서비스 6개사",
    "value": 8,
    "suffix": "개사",
    "detail": "총 도입 고객사"
  },
  {
    "label": "XSafe 생체인증",
    "title": "인증의 경험을 더 편리하게.",
    "description": "생체인증 확장 기능 도입",
    "value": 2,
    "suffix": "개사",
    "detail": "도입 고객사"
  },
  {
    "label": "KCMVP 인증",
    "title": "담당한 모든 인증을 통과하다.",
    "description": "연 4개 고객사 인증 완료",
    "value": 4,
    "suffix": "개사",
    "detail": "연간 인증 대응 · 담당 건 모두 통과"
  }
];
export const CONTACT = {
  "email": "hjb825@naver.com",
  "links": [
    [
      "GitHub",
      "https://github.com/zongbeen"
    ],
    [
      "Velog",
      "https://velog.io/@hjb825/posts"
    ],
    [
      "Notion",
      "https://www.notion.so/19ecaf72207f81fe8d4fcc5dbc7a6b3d?source=copy_link"
    ]
  ],
  "title": [
    "함께",
    "만들어요."
  ],
  "year": 2026
};
export const COPY = {
  "aboutTitle": [
    "만드는 사람의",
    "이야기."
  ],
  "skillsTitle": [
    "내 스택의",
    "주기율표."
  ],
  "workTitle": [
    "문제에서 시작한",
    "작업."
  ],
  "careerTitle": [
    "차곡차곡 쌓아온",
    "경험."
  ],
  "achievementsTitle": [
    "작업이 남긴",
    "변화."
  ],
  "skillsDescription": "언어부터 설계와 품질까지.<br>제품을 완성하는 기술들.",
  "workDescription": "인증의 기반부터<br>사용자가 만나는 앱까지.",
  "idTitle": "iOS 개발자 사원증",
  "idBackTitle": "저는 이런 사람입니다.",
  "idLines": [
    "C · Objective-C · Swift",
    "iOS SDK와 앱 개발",
    "설계부터 출시·운영까지",
    "인증·보안 모듈 개발",
    "AI 코드 에이전트 활용"
  ],
  "idHint": "클릭 또는 Enter로 뒤집어 보세요 ↔",
  "next": "다음 — 함께할 팀?",
  "continuing": "계속 쌓아가는 중 →",
  "uiPlaceholder": "실제 UI를 담을 공간",
  "uiPending": "화면 추가 예정",
  "uiIllustration": "Illustrative UI · 설명용 UI"
};
export const SKILL_LOGOS = {
  'Swift':'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/swift/swift-original.svg',
  'C':'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/c/c-original.svg',
  'Objective-C':'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/objectivec/objectivec-plain.svg',
  'Xcode':'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/xcode/xcode-original.svg',
  'Git':'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/git/git-original.svg',
  'Jenkins':'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/jenkins/jenkins-original.svg'
};
