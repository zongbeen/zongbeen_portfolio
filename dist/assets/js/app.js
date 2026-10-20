// 화면 문구·사진·메뉴는 data.js에서 수정하세요.
// 이 파일의 앞부분은 HTML 생성, 뒷부분은 클릭·스크롤·영상 동작입니다.
import { prepareHeroLoop } from "./hero-loop.js";
import {
  PROFILE,
  HERO,
  ABOUT,
  NAV,
  SKILLS,
  WORK,
  CAREER,
  ACHIEVEMENTS,
  CONTACT,
  COPY,
  SKILL_LOGOS,
} from "./data.js";

// ── 1. 공통 HTML 도우미 ──
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const esc = (text) =>
  String(text).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const num = (number) => String(number).padStart(2, "0");
// 문장 속 \n을 HTML 줄바꿈으로 표시합니다.
const renderLines = (text) => String(text).split("\n").map(esc).join("<br>");
const label = (number, text) => /* HTML */ `
  <div class="eyebrow">${num(number)} — ${esc(text)}</div>
`;

// 기술 타일은 SKILLS의 순서를 그대로 따릅니다. index는 1부터, 기호는 이름의 영문 앞 두 글자입니다.
const skillList = SKILLS.flatMap((group, groupIndex) =>
  group.skills.map((name) => ({
    name,
    category: group.title,
    group: groupIndex,
  })),
).map((skill, index) => ({
  ...skill,
  index: index + 1,
  symbol:
    skill.name.replace(/[^a-zA-Z]/g, "").slice(0, 2) || skill.name.slice(0, 2),
}));

function renderHeroAction(action) {
  return /* HTML */ `
    <a
      class="pill ${action.primary ? "primary" : ""}"
      href="${esc(action.href)}"
      ${action.download ? "download" : ""}
    >
      ${esc(action.label)}${
        action.icon
          ? /* HTML */ `
              <span>${esc(action.icon)}</span>
            `
          : ""
      }
    </a>
  `;
}
function renderFact(fact) {
  return /* HTML */ `
    <div>
      <dt>${esc(fact.label)}</dt>
      <dd>
        ${
          fact.href
            ? /* HTML */ `
                <a href="${esc(fact.href)}">${esc(fact.value)}</a>
              `
            : esc(fact.value)
        }
      </dd>
    </div>
  `;
}
function workUI(project) {
  if (project.uiAsset)
    return /* HTML */ `
      <div class="ui-slot">
        <img
          src="${esc(project.uiAsset)}"
          alt="${esc(project.title)} 실제 화면"
        />
      </div>
    `;
  if (!project.illustration)
    return /* HTML */ `
      <div class="ui-slot" data-ui-slot="${project.id}">
        <span class="slot-symbol" aria-hidden="true">▧</span>
        <p>${COPY.uiPlaceholder}</p>
        <small>${COPY.uiPending}</small>
      </div>
    `;
  return /* HTML */ `
    <div class="ui-slot">
      <small>${COPY.uiIllustration}</small>
      <div class="mock-ui" aria-hidden="true">
        <div class="mono">${esc(project.illustration.title)}</div>
        <i></i>
        <i></i>
        ${project.illustration.rows
          .map(
            (text) => /* HTML */ `
              <div class="mock-row">
                ${esc(text)}
                <span style="float:right">✓</span>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

// ── 2. 화면 생성: 수정할 섹션 이름으로 검색하세요 ──
function renderHeader() {
  return /* HTML */ `
    <a
      class="brand"
      href="#hero"
      aria-label="${esc(PROFILE.displayName)}, 맨 위로"
    >
      <span class="mark">${esc(PROFILE.initials)}</span>
      ${PROFILE.displayName}
    </a>
    <div class="nav-wrap">
      <nav aria-label="주 메뉴">
        ${NAV.map(
          ([id, t]) => /* HTML */ `
            <a href="#${id}">${t}</a>
          `,
        ).join("")}
        <span class="nav-indicator" aria-hidden="true"></span>
      </nav>
      <button class="fullscreen" aria-label="전체화면 전환">
        ${COPY.fullscreen}
      </button>
      <button
        class="menu-toggle"
        aria-expanded="false"
        aria-controls="mobile-menu"
      >
        ${COPY.menu}
      </button>
    </div>
  `;
}
function renderMobileMenu() {
  return /* HTML */ `
    <button class="pill" id="close-menu">${COPY.closeMenu}</button>
    <div role="navigation" aria-label="모바일 메뉴">
      ${NAV.map(
        ([id, t], i) => /* HTML */ `
          <a href="#${id}">
            <small>${num(i + 1)}</small>
            ${t}
          </a>
        `,
      ).join("")}
    </div>
  `;
}

// Hero 섹션
function renderHero() {
  return /* HTML */ `
    <section class="hero" id="hero" aria-labelledby="hero-title">
      <div class="eyebrow">${esc(HERO.eyebrow)}</div>
      <div class="hero-name" aria-hidden="true">${esc(HERO.wordmark)}</div>
      <div class="hero-stage">
        <video
          id="hero-video"
          muted
          loop
          autoplay
          playsinline
          preload="auto"
          poster="${esc(HERO.media.poster)}"
          aria-label="${esc(HERO.media.label)}"
        >
          <source src="${esc(HERO.media.webm)}" type="video/webm" />
          <source src="${esc(HERO.media.mp4)}" type="video/mp4" />
        </video>
      </div>
      <button
        class="sound blocked"
        aria-label="${COPY.soundOnAria}"
        aria-pressed="false"
      >
        <span aria-hidden="true">▶</span>
      </button>
      <span class="sound-status">${COPY.soundOn}</span>
      <div class="hero-copy">
        <h1 id="hero-title">${esc(HERO.title)}</h1>
        <p>${esc(HERO.description)}</p>
        <div class="actions">
          ${HERO.actions.map(renderHeroAction).join("")}
        </div>
      </div>
      <div class="hero-bottom">
        <span class="mono">${esc(HERO.experience)}</span>
        <span>${esc(HERO.scrollHint)}</span>
        <span class="mono">${esc(HERO.summary)}</span>
      </div>
    </section>
  `;
}

// About 섹션
function renderAbout() {
  return /* HTML */ `
    <section class="section" id="about" aria-labelledby="about-title">
      <div class="container">
        ${label(1, COPY.sectionLabels.about)}
        <h2 id="about-title">
          ${COPY.aboutTitle[0]}
          <em>${COPY.aboutTitle[1]}</em>
        </h2>
        <div class="about-grid">
          <div class="intro-copy reveal">
            <h3>${renderLines(ABOUT.greeting)}</h3>
            ${ABOUT.paragraphs
              .map(
                (text) => /* HTML */ `
                  <p>${esc(text)}</p>
                `,
              )
              .join("")}
          </div>
          <div class="id-wrap reveal">
            <div class="lanyard" aria-hidden="true"></div>
            <div class="id-swing">
              <button
                class="id-card"
                aria-label="사원증 뒤집기"
                aria-pressed="false"
              >
                <span class="id-face">
                  <span class="id-band" style="display:block">
                    ${COPY.idTitle}
                  </span>
                  <img
                    class="id-photo"
                    src="${esc(ABOUT.photo.src)}"
                    alt="${esc(ABOUT.photo.alt)}"
                    loading="lazy"
                    width="${ABOUT.photo.width}"
                    height="${ABOUT.photo.height}"
                  />
                  <span class="id-name">${PROFILE.displayName}</span>
                  <span class="id-role">${PROFILE.idRole}</span>
                  <span
                    class="barcode"
                    style="display:block"
                    aria-hidden="true"
                  ></span>
                  <small>${PROFILE.handle}</small>
                </span>
                <span class="id-face id-back">
                  <h3>${COPY.idBackTitle}</h3>
                  ${COPY.idLines
                    .map(
                      (t) => /* HTML */ `
                        <p>${t}</p>
                      `,
                    )
                    .join("")}
                </span>
              </button>
            </div>
            <p class="id-hint">${COPY.idHint}</p>
          </div>
          <div class="about-facts reveal">
            <dl class="facts">${ABOUT.facts.map(renderFact).join("")}</dl>
            <blockquote class="quote">“${PROFILE.quote}”</blockquote>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Skills 섹션
function renderSkills() {
  return /* HTML */ `
    <section class="section" id="skills" aria-labelledby="skills-title">
      <div class="container">
        ${label(2, COPY.sectionLabels.skills)}
        <div class="section-top">
          <h2 id="skills-title">
            ${COPY.skillsTitle[0]}
            <em>${COPY.skillsTitle[1]}</em>
          </h2>
          <p>${renderLines(COPY.skillsDescription)}</p>
        </div>
        <div class="filters" role="group" aria-label="기술 분류 필터">
          <button
            class="chip active"
            data-filter="${COPY.allSkills}"
            aria-pressed="true"
          >
            ${COPY.allSkills}
          </button>
          ${SKILLS.map(
            (g) => /* HTML */ `
              <button
                class="chip"
                data-filter="${g.title}"
                aria-pressed="false"
              >
                ${g.title}
              </button>
            `,
          ).join("")}
        </div>
        <div class="skills-layout">
          <div class="periodic">
            ${skillList
              .map(
                (s) => /* HTML */ `
                  <button
                    class="element reveal"
                    data-skill="${s.index}"
                    data-category="${s.category}"
                    style="--delay:${(((s.index - 1) % 8) + Math.floor((s.index - 1) / 8)) * 45}ms"
                    aria-label="${s.name}, ${s.category}"
                  >
                    <small>${num(s.index)}</small>
                    <strong>${s.symbol}</strong>
                    <span>${s.name}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
          <aside class="inspector" aria-label="선택한 기술">
            <small>${COPY.skillInspector}</small>
            <div id="skill-info"></div>
          </aside>
        </div>
      </div>
    </section>
  `;
}

// Work 섹션
// 같은 프로젝트의 FR·ST 사례는 cases 배열로 관리하며, 처음에는 모두 접어 둡니다.
function renderWorkCases(cases) {
  return /* HTML */ `
    <div class="work-cases">
      ${cases
        .map(
          (item) => /* HTML */ `
            <details class="work-case">
              <summary>
                <span>${esc(item.title)}</span>
                <small>${esc(item.period)}</small>
              </summary>
              <div class="work-case-content">
                <p class="work-text">${esc(item.problem)}</p>
                <div class="work-points">
                  <div>
                    <h4>${COPY.workApproach}</h4>
                    <p tabindex="0">${esc(item.solution)}</p>
                  </div>
                  <div>
                    <h4>${COPY.workOutcome}</h4>
                    <p tabindex="0">${esc(item.outcome)}</p>
                  </div>
                </div>
                ${
                  item.metrics?.length
                    ? /* HTML */ `
                        <dl class="work-case-metrics">
                          ${item.metrics
                            .map(
                              (metric) => /* HTML */ `
                                <div>
                                  <dt>${esc(metric.label)}</dt>
                                  <dd>${esc(metric.value)}</dd>
                                  <small>${esc(metric.note)}</small>
                                </div>
                              `,
                            )
                            .join("")}
                        </dl>
                      `
                    : ""
                }
                ${
                  item.aiWorkflow?.length
                    ? /* HTML */ `
                        <div class="work-case-workflow">
                          <h4>${COPY.workAiWorkflow}</h4>
                          <ol>
                            ${item.aiWorkflow
                              .map(
                                (step) => /* HTML */ `
                                  <li>${esc(step)}</li>
                                `,
                              )
                              .join("")}
                          </ol>
                        </div>
                      `
                    : ""
                }
              </div>
            </details>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderWork() {
  return /* HTML */ `
    <section class="section" id="work" aria-labelledby="work-title">
      <div class="container">
        ${label(3, COPY.sectionLabels.work)}
        <div class="section-top">
          <h2 id="work-title">
            ${COPY.workTitle[0]}
            <em>${COPY.workTitle[1]}</em>
          </h2>
          <p>${renderLines(COPY.workDescription)}</p>
        </div>
        <div class="work-panels" style="--work-count:${WORK.length}">
          ${WORK.map(
            (p, i) => /* HTML */ `
              <article class="work-panel ${i === 0 ? "active" : ""}">
                <button
                  class="work-trigger"
                  aria-expanded="${i === 0}"
                  aria-controls="work-${p.id}"
                >
                  <small>${num(i + 1)}</small>
                  <span>${p.title}</span>
                </button>
                <div class="work-body" id="work-${p.id}" ${i ? "inert" : ""}>
                  <div class="mono">${p.period}</div>
                  <h3>${p.title}</h3>
                  <p class="role">${p.role}</p>
                  <div
                    class="work-detail ${p.cases?.length ? "work-detail--cases" : ""}"
                  >
                    <div>
                      <p class="work-text">${p.problem}</p>
                      <div class="work-points">
                        <div>
                          <h4>${COPY.workApproach}</h4>
                          <p tabindex="0">${p.solution}</p>
                        </div>
                        <div>
                          <h4>${COPY.workOutcome}</h4>
                          <p tabindex="0">${p.outcome}</p>
                        </div>
                      </div>
                    </div>
                    ${p.cases?.length ? "" : workUI(p)}
                  </div>
                  ${p.cases?.length ? renderWorkCases(p.cases) : ""}
                  <div class="tool-chips">
                    ${p.technologies
                      .map(
                        (t) => /* HTML */ `
                          <span>${t}</span>
                        `,
                      )
                      .join("")}
                  </div>
                  ${p.links
                    .map(
                      (l) => /* HTML */ `
                        <a
                          class="pill"
                          style="margin-top:18px"
                          href="${esc(l.href)}"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ${esc(l.label)} ↗
                        </a>
                      `,
                    )
                    .join("")}
                </div>
              </article>
            `,
          ).join("")}
        </div>
      </div>
    </section>
  `;
}

// Career 섹션
function renderCareer() {
  return /* HTML */ `
    <section class="section" id="career" aria-labelledby="career-title">
      <div class="container">
        ${label(4, COPY.sectionLabels.career)}
        <h2 id="career-title">
          ${COPY.careerTitle[0]}
          <em>${COPY.careerTitle[1]}</em>
        </h2>
        <div class="timeline">
          <div class="timeline-fill" aria-hidden="true"></div>
          ${CAREER.map(
            (c) => /* HTML */ `
              <article class="timeline-item reveal">
                <div class="career-card">
                  <small>${c.period}</small>
                  <h3>${c.company}</h3>
                  <p>${c.team} · ${c.role}</p>
                  <ul>
                    ${c.contributions
                      .map(
                        (t) => /* HTML */ `
                          <li>${t}</li>
                        `,
                      )
                      .join("")}
                  </ul>
                </div>
              </article>
            `,
          ).join("")}
          <div class="timeline-item">
            <a class="next-card" href="#contact">
              <span>${COPY.next}</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Achievements 섹션
// 숫자와 단위 사이의 간격은 CSS가 담당하므로 HTML 공백을 넣지 않습니다.
const renderMetric = (achievement) =>
  `<b data-count="${achievement.value}" style="font-weight:500">${esc(achievement.value)}</b><span>${esc(achievement.suffix)}</span>`;

function renderAchievements() {
  return /* HTML */ `
    <section
      class="achievements"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      <div class="achievements-sticky">
        <div class="container">
          ${label(5, COPY.sectionLabels.achievements)}
          <h2 id="achievements-title">
            ${COPY.achievementsTitle[0]}
            <em>${COPY.achievementsTitle[1]}</em>
          </h2>
          <div class="achievement-track">
            ${ACHIEVEMENTS.map(
              (a, i) => /* HTML */ `
                <article class="achievement-card">
                  <small>${num(i + 1)} / ${a.label}</small>
                  <h3>${a.title}</h3>
                  <p>${a.description}</p>
                  <div class="metric">${renderMetric(a)}</div>
                  <div class="metric-detail">${a.detail}</div>
                </article>
              `,
            ).join("")}
            <div class="achievement-card achievement-end">
              ${COPY.continuing}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Contact 섹션
function renderContact() {
  return /* HTML */ `
    <section
      class="contact section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div class="container">
        ${label(6, COPY.sectionLabels.contact)}
        <h2 class="contact-heading" id="contact-title">
          ${CONTACT.title
            .map((t) => [...t].map((c) => `<span>${esc(c)}</span>`).join(""))
            .join("<br>")}
        </h2>
        <div class="contact-bottom">
          <div>
            <div class="email-row">
              <a class="email" href="mailto:${CONTACT.email}">
                ${CONTACT.email}
              </a>
              <button class="copy" aria-live="polite">${COPY.copyEmail}</button>
            </div>
            <div class="socials">
              ${CONTACT.links
                .map(
                  ([t, u]) => /* HTML */ `
                    <a
                      href="${esc(u)}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ${t} ↗
                    </a>
                  `,
                )
                .join("")}
            </div>
          </div>
          <svg
            class="hello-badge"
            viewBox="0 0 120 120"
            role="img"
            aria-label="${COPY.badgeLabel}"
          >
            <defs>
              <path
                id="circle"
                d="M60,60m-44,0a44,44 0 1,1 88,0a44,44 0 1,1 -88,0"
              />
            </defs>
            <text><textPath href="#circle">${COPY.badgeText}</textPath></text>
            <path d="M45 60h30m-9-9 9 9-9 9" stroke="#777" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  `;
}
function renderFooter() {
  return /* HTML */ `
    <span>© ${CONTACT.year} ${PROFILE.displayName}</span>
    <a href="#hero">${COPY.backToTop}</a>
  `;
}

function renderPage() {
  $("#header").innerHTML = renderHeader();
  $("#mobile-menu").innerHTML = renderMobileMenu();
  $("#main").innerHTML = [
    renderHero(),
    renderAbout(),
    renderSkills(),
    renderWork(),
    renderCareer(),
    renderAchievements(),
    renderContact(),
  ].join("");
  $("#footer").innerHTML = renderFooter();
}
renderPage();

// ── 3. 화면 동작: 문구를 바꾸려면 data.js를 수정하세요 ──

// 모션 감소 설정과 스크롤 등장
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.08 },
);
$$(".reveal").forEach((e) => observer.observe(e));

// 부드러운 스크롤
let lenis = null;
if (!reduced) {
  import("https://cdn.jsdelivr.net/npm/lenis@1.3.11/+esm")
    .then(({ default: Lenis }) => {
      lenis = new Lenis({ duration: 1.05, anchors: true });
      requestAnimationFrame(function tick(t) {
        lenis.raf(t);
        requestAnimationFrame(tick);
      });
    })
    .catch(() => {});
}

// 기술 타일 선택과 분류 필터
function selectSkill(index) {
  const s = skillList.find((s) => s.index === index);
  if (!s) return;
  const related = WORK.filter((p) => p.technologies.includes(s.name));
  $("#skill-info").innerHTML = /* HTML */ `
    <div class="skill-glyph" aria-hidden="true">
      ${SKILL_LOGOS[s.name] ? `<img src="${SKILL_LOGOS[s.name]}" width="34" height="34" alt="">` : s.symbol}
    </div>
    <h3>${s.name}</h3>
    <p>${s.category}</p>
    ${
      related.length
        ? `<p>${COPY.relatedWork}</p><ul>${related
            .map(
              (p) => /* HTML */ `
                <li><a href="#work">${p.title}</a></li>
              `,
            )
            .join("")}</ul>`
        : `<p>${esc(COPY.noRelatedWork)}</p>`
    }
  `;
  $$(".element").forEach((e) =>
    e.classList.toggle("selected", +e.dataset.skill === index),
  );
}
selectSkill(Math.min(3, skillList.length));
$$(".element").forEach((e) => {
  e.addEventListener("pointerenter", () => selectSkill(+e.dataset.skill));
  e.addEventListener("focus", () => selectSkill(+e.dataset.skill));
  e.addEventListener("click", () => selectSkill(+e.dataset.skill));
});
$$("[data-filter]").forEach((b) =>
  b.addEventListener("click", () => {
    $$("[data-filter]").forEach((x) => {
      x.classList.toggle("active", x === b);
      x.setAttribute("aria-pressed", x === b);
    });
    $$(".element").forEach(
      (e) =>
        (e.hidden =
          b.dataset.filter !== COPY.allSkills &&
          e.dataset.category !== b.dataset.filter),
    );
  }),
);

// 대표 작업 아코디언
function activatePanel(panel) {
  $$(".work-panel").forEach((p) => {
    const active = p === panel;
    p.classList.toggle("active", active);
    p.querySelector("button").setAttribute("aria-expanded", active);
    p.querySelector(".work-body").inert = !active;
  });
}
$$(".work-panel").forEach((p) => {
  p.querySelector("button").addEventListener("click", () => activatePanel(p));
  p.addEventListener("pointerenter", (e) => {
    if (
      e.pointerType === "mouse" &&
      innerWidth > 760 &&
      !p.contains(document.activeElement)
    )
      activatePanel(p);
  });
});

// 사원증 뒤집기와 흔들림
const card = $(".id-card");
function flip() {
  card.classList.toggle("flipped");
  card.setAttribute("aria-pressed", card.classList.contains("flipped"));
}
card.addEventListener("click", flip);
card.addEventListener("pointerenter", (e) => {
  if (
    e.pointerType === "mouse" &&
    !reduced &&
    !card.classList.contains("flipped")
  )
    flip();
});
$(".id-wrap").addEventListener("pointermove", (e) => {
  if (reduced) return;
  const r = e.currentTarget.getBoundingClientRect();
  $(".id-swing").style.setProperty(
    "--swing",
    `${((e.clientX - r.left) / r.width - 0.5) * 12}deg`,
  );
});
$(".id-wrap").addEventListener("pointerleave", () =>
  $(".id-swing").style.setProperty("--swing", "3deg"),
);

// 히어로 영상과 소리
const video = $("#hero-video"),
  sound = $(".sound");
let heroVisible = true,
  audioWanted = false,
  blocked = true,
  autoTried = false;
function updateSound() {
  sound.classList.toggle("blocked", blocked);
  sound.setAttribute("aria-pressed", audioWanted && !video.muted);
  sound.setAttribute(
    "aria-label",
    video.muted ? COPY.soundOnAria : COPY.soundOffAria,
  );
  sound.firstElementChild.textContent = video.muted ? "▶" : "❚❚";
  $(".sound-status").textContent = video.muted
    ? COPY.soundOn
    : COPY.soundPlaying;
}
async function enableAudio() {
  if (!heroVisible) return;
  audioWanted = true;
  video.muted = false;
  try {
    await video.play();
    blocked = false;
  } catch {
    video.muted = true;
    audioWanted = false;
    blocked = true;
    video.play().catch(() => {});
  }
  updateSound();
}
prepareHeroLoop(video, () => heroVisible && !document.hidden, HERO.media);
video.addEventListener("emptied", () => {
  const stage = video.closest(".hero-stage");
  stage.querySelector(".hero-matte")?.remove();
  stage.classList.remove("hero-stage--canvas");
});
// H.264 carries color and its grayscale matte side by side for browsers without VP9 alpha.
// The 2D canvas is only activated for that fallback; the same video drives both pixels and audio.
function enableHeroMatte() {
  const stage = video.closest(".hero-stage");
  if (stage.classList.contains("hero-stage--canvas")) return;
  const canvas = document.createElement("canvas"),
    packed = document.createElement("canvas");
  canvas.className = "hero-matte";
  canvas.setAttribute("aria-hidden", "true");
  canvas.width = video.videoWidth / 2;
  canvas.height = video.videoHeight;
  packed.width = video.videoWidth;
  packed.height = video.videoHeight;
  const output = canvas.getContext("2d"),
    reader = packed.getContext("2d", { willReadFrequently: true });
  if (!output || !reader) return;
  const frame = output.createImageData(canvas.width, canvas.height);
  stage.append(canvas);
  stage.classList.add("hero-stage--canvas");
  function draw() {
    if (!canvas.isConnected || video.readyState < 2) return;
    reader.drawImage(video, 0, 0);
    const pixels = reader.getImageData(0, 0, packed.width, packed.height).data;
    const width = canvas.width,
      height = canvas.height;
    for (let y = 0; y < height; y++)
      for (let x = 0; x < width; x++) {
        const source = (y * packed.width + x) * 4,
          target = (y * width + x) * 4;
        frame.data[target] = pixels[source];
        frame.data[target + 1] = pixels[source + 1];
        frame.data[target + 2] = pixels[source + 2];
        frame.data[target + 3] = pixels[source + width * 4];
      }
    output.putImageData(frame, 0, 0);
  }
  if (video.requestVideoFrameCallback) {
    const next = () => {
      if (!canvas.isConnected) return;
      draw();
      video.requestVideoFrameCallback(next);
    };
    video.requestVideoFrameCallback(next);
  } else {
    // 스크롤 진행 바·메뉴·타임라인·성과 카드
    let scheduled = 0;
    const next = () => {
      if (!canvas.isConnected) {
        scheduled = 0;
        return;
      }
      draw();
      scheduled = video.paused ? 0 : requestAnimationFrame(next);
    };
    video.addEventListener("playing", () => {
      if (!scheduled) scheduled = requestAnimationFrame(next);
    });
    video.addEventListener("seeked", draw);
  }
  draw();
}
function checkHeroAlpha() {
  if (
    video.dataset.heroPlayback === "continuous-matte" ||
    video.currentSrc === new URL(HERO.media.mp4, document.baseURI).href
  ) {
    enableHeroMatte();
    return;
  }
  if (video.currentSrc !== new URL(HERO.media.webm, document.baseURI).href)
    return;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return;
  context.drawImage(video, 0, 0, 1, 1, 0, 0, 1, 1);
  if (context.getImageData(0, 0, 1, 1).data[3] > 240) {
    video.src = HERO.media.mp4;
    video.load();
    if (heroVisible && !document.hidden) video.play().catch(() => {});
  }
}
video.addEventListener("loadeddata", checkHeroAlpha);
if (video.readyState >= 2) checkHeroAlpha();
video.addEventListener(
  "playing",
  () => {
    if (autoTried) return;
    autoTried = true;
    enableAudio();
  },
  { once: true },
);
video.play().catch(() => {});
function gesture(e) {
  if (e.target.closest(".sound")) return;
  if (blocked && heroVisible) enableAudio();
}
document.addEventListener("pointerdown", gesture);
document.addEventListener("keydown", (e) => {
  if (["Enter", " "].includes(e.key)) gesture(e);
});
sound.addEventListener("click", () => {
  if (video.muted) enableAudio();
  else {
    audioWanted = false;
    video.muted = true;
    blocked = false;
    updateSound();
  }
});
new IntersectionObserver(
  (entries) => {
    heroVisible = entries[0].intersectionRatio >= 0.35;
    if (!heroVisible) video.pause();
    else if (!document.hidden) {
      video.muted = !audioWanted;
      video.play().catch(() => {
        video.muted = true;
        blocked = true;
        updateSound();
      });
    }
  },
  { threshold: [0, 0.35, 1] },
).observe($("#hero"));
document.addEventListener("visibilitychange", () => {
  if (document.hidden) video.pause();
  else if (heroVisible) video.play().catch(() => {});
});

// 모바일 메뉴와 전체화면
let menuOpener = null;
function closeMenu() {
  $("#mobile-menu").hidden = true;
  $(".menu-toggle").setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
  lenis?.start();
  menuOpener?.focus();
}
$(".menu-toggle").addEventListener("click", () => {
  menuOpener = document.activeElement;
  $("#mobile-menu").hidden = false;
  $(".menu-toggle").setAttribute("aria-expanded", "true");
  document.body.classList.add("menu-open");
  lenis?.stop();
  $("#close-menu").focus();
});
$("#close-menu").addEventListener("click", closeMenu);
$$("#mobile-menu a").forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => {
  if ($("#mobile-menu").hidden) return;
  if (e.key === "Escape") closeMenu();
  if (e.key === "Tab") {
    const focusables = $$("#mobile-menu button, #mobile-menu a");
    const first = focusables[0],
      last = focusables.at(-1);
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});
$(".fullscreen").addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    $(".fullscreen").title = COPY.fullscreenUnavailable;
  }
});

// 이메일 복사
$(".copy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(CONTACT.email);
    $(".copy").textContent = COPY.copiedEmail;
  } catch {
    $(".copy").textContent = COPY.copyEmailFallback;
    const range = document.createRange();
    range.selectNodeContents($(".email"));
    const selection = getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
});

// 성과 숫자 카운트업
const counted = new Set();
const counterObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting || counted.has(e.target)) return;
      counted.add(e.target);
      const target = +e.target.dataset.count;
      if (reduced) return;
      const start = performance.now();
      function step(t) {
        const progress = Math.min((t - start) / 1400, 1);
        e.target.textContent = Math.round(target * (1 - (1 - progress) ** 3));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }),
  { threshold: 0.7 },
);
$$("[data-count]").forEach((e) => counterObserver.observe(e));
let scheduled = false;
function scrollFrame() {
  scheduled = false;
  const y = scrollY,
    max = document.documentElement.scrollHeight - innerHeight;
  $(".progress").style.transform = `scaleX(${max ? y / max : 0})`;
  $("#header").classList.toggle("scrolled", y > 40);
  let current = "";
  for (const [id] of NAV) {
    if ($("#" + id).getBoundingClientRect().top < innerHeight * 0.45)
      current = id;
  }
  $$("nav a").forEach((a) => {
    const active = a.hash === "#" + current;
    a.classList.toggle("active", active);
    if (active) {
      a.setAttribute("aria-current", "location");
      $(".nav-indicator").style.transform =
        `translateX(${a.offsetLeft + a.offsetWidth / 2 - 7}px)`;
    } else a.removeAttribute("aria-current");
  });
  $(".nav-indicator").style.opacity = current ? "1" : "0";
  const timeline = $(".timeline"),
    tr = timeline.getBoundingClientRect();
  timeline.style.setProperty(
    "--timeline",
    Math.max(0, Math.min(1, (innerHeight * 0.75 - tr.top) / tr.height)),
  );
  $$(".timeline-item").forEach((e) =>
    e.classList.toggle(
      "lit",
      e.getBoundingClientRect().top < innerHeight * 0.75,
    ),
  );
  if (!reduced) {
    const section = $("#achievements"),
      r = section.getBoundingClientRect(),
      track = $(".achievement-track");
    const progress = Math.max(
      0,
      Math.min(1, -r.top / (section.offsetHeight - innerHeight)),
    );
    const travel = Math.max(
      0,
      track.scrollWidth - $(".achievements .container").clientWidth,
    );
    track.style.transform = `translateX(${-progress * travel}px)`;
  }
}
function schedule() {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(scrollFrame);
  }
}
addEventListener("scroll", schedule, { passive: true });
addEventListener("resize", schedule);
scrollFrame();
