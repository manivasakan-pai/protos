/* Added on top of the dashboard proto for the protos link (Mani, 2026-11-13: "the exact same dashboard design, don't change
   any, just add the new part"). Two things only:
   1. Home's example-card subtitle ("Leaders are creating decks for") becomes the app's "Create decks for [group] [dice]":
      the group menu (the proto's own menu) swaps the four cards to that group's prompts, the dice shows four others.
      Leadership starts on the proto's own four cards, so Home opens exactly as before.
   2. The sidebar plan card's button opens pricing v2 (pricing-v2.html?modal=1) over the dashboard, in a frame.
   Everything else is the proto as published. */
(function () {
  const HP = window.HERO_PROMPT;
  if (!HP) return;
  const PROMPTS = {"creator": [{"short": "Brand partnership pitch with audience demographics and rates", "full": "my company brand partnership pitch covering audience demographics engagement benchmarks content categories past collaborations and proposed partnership structure with deliverables and rates"}, {"short": "2026 content strategy across platforms with monetization roadmap", "full": "my company content strategy for 2026 covering platform priorities content pillars monthly themes production cadence metrics to track and monetization roadmap"}, {"short": "Digital product launch with 30-day promotion plan", "full": "my company digital product launch presentation covering the product problem it solves target audience pricing launch plan and 30-day promotion strategy"}, {"short": "Audience growth engagement and top content of the quarter", "full": "my company audience insights presentation for brand partners covering follower growth by platform engagement benchmarks audience demographics top performing content of the quarter and what it means for upcoming collaborations"}], "consulting": [{"short": "12-week digital transformation proposal for retail client", "full": "my company consulting proposal for a retail client covering engagement scope methodology team structure timeline and fees for a 12-week digital transformation assessment"}, {"short": "Strategic options with trade-offs and implementation roadmap", "full": "my company strategy recommendation covering current state diagnosis market opportunity analysis three strategic options with trade-offs and recommended path forward with implementation roadmap"}, {"short": "Key findings and 3 decisions for the CEO", "full": "my company executive briefing for the CEO covering 4 key findings from our analysis implications for the business and 3 decisions required in the next 30 days"}, {"short": "Engagement kickoff with objectives workstreams and governance", "full": "my company project kickoff presentation for the client steering committee covering engagement objectives workstreams team roles governance cadence key milestones and what we need from the client in the first 30 days"}], "marketing": [{"short": "Q2 channel performance learnings and Q3 budget recommendation", "full": "Q2 campaign results for my company covering spend performance channel breakdown top creatives key learnings and budget recommendation for Q3"}, {"short": "Internal product launch with positioning and success metrics", "full": "my company product launch presentation for internal stakeholders covering positioning target audience go-to-market plan launch timeline and success metrics"}, {"short": "New product GTM strategy with 90-day success metrics", "full": "my company go-to-market strategy for the new product launch covering target segments positioning messaging channels launch timeline and 90-day success metrics"}, {"short": "Brand refresh rationale new identity and rollout plan", "full": "my company brand refresh presentation for the leadership team covering why we are refreshing the brand audience research new visual identity messaging pillars rollout plan and success metrics"}], "sales": [{"short": "Mid-market SaaS pitch with differentiators and case studies", "full": "Sales pitch deck for my company targeting a mid-market SaaS prospect covering pain points our solution differentiators 3 customer case studies and a clear call to action"}, {"short": "Enterprise QBR with renewal risks and expansion opportunities", "full": "Quarterly business review from my company for enterprise account covering usage trends expansion opportunities renewal risks and recommended next steps for Q4"}, {"short": "Competitor positioning with objections and how to win", "full": "my company competitive battle card covering our positioning against top 3 competitors key differentiators common objections and how to win each deal"}, {"short": "Pipeline by stage deals at risk and what moves this week", "full": "my company pipeline update for the weekly sales call covering pipeline value by stage new opportunities deals at risk forecast vs quota and what moves this week"}], "support": [{"short": "Quarterly support trends CSAT and product process fixes", "full": "my company quarterly support review for leadership covering ticket volume by category resolution time trends CSAT scores top recurring issues and recommended product and process fixes"}, {"short": "Account health scores at-risk accounts and intervention playbook", "full": "my company customer health report covering account health scores by segment at-risk accounts churn signals top reasons for dissatisfaction and recommended intervention playbook"}, {"short": "Onboarding flow with time-to-value benchmarks and activation fixes", "full": "my company customer onboarding guide presentation covering onboarding steps time-to-value benchmarks common drop-off points and recommendations to improve activation for new accounts"}, {"short": "Escalation tiers response targets and handoff rules", "full": "my company escalation playbook presentation for the support team covering severity definitions escalation tiers response time targets handoff rules to engineering customer communication templates and how we review escalations"}], "legal": [{"short": "Regulatory changes with business impact and required actions", "full": "my company quarterly compliance update for the leadership team covering 3 new regulatory changes business impact assessment required actions ownership and implementation timeline"}, {"short": "Top legal risks with mitigations and recommended actions", "full": "my company risk assessment presentation covering top 5 legal and regulatory risks probability and impact scoring current mitigations gaps and recommended actions for the board"}, {"short": "New policy rollout with effective date for employees", "full": "my company new policy rollout presentation for all employees covering why the policy is changing what is changing effective date how it affects their work and how to ask questions"}, {"short": "Standard contract terms negotiation limits and escalation", "full": "my company contract playbook presentation for the sales team covering standard terms what can be negotiated fallback positions red lines and when to escalate to legal"}], "leadership": [{"short": "Q4 revenue performance and 2026 strategic priorities", "full": "Board update for my company for Q4 covering revenue performance vs target OKR progress and 2026 strategic priorities for a 10-person executive team"}, {"short": "Q3 OKR progress with risks and recommended actions", "full": "my company OKR review for Q3 covering progress against company objectives key results by team risks to delivery and recommended actions to close the gap before year end"}, {"short": "Q3 results team milestones and 6-month priorities", "full": "Company all-hands for my company covering Q3 business results team milestones product direction and priorities for the next 6 months"}, {"short": "Annual strategy offsite with priorities and big bets", "full": "my company leadership offsite presentation covering the year in review market shifts 3 strategic priorities for next year big bets with owners and the decisions the team must make this week"}], "engineering": [{"short": "Monolith to microservices migration plan with phases", "full": "my company technical architecture proposal for migrating the monolith to microservices covering current limitations proposed design migration phases estimated effort and risk mitigation"}, {"short": "H2 roadmap with platform investments and quarterly milestones", "full": "my company engineering roadmap for H2 covering planned infrastructure investments platform improvements team capacity allocation and key technical milestones by quarter"}, {"short": "Top 5 tech debt items with engineering effort", "full": "my company tech debt review for engineering leadership covering debt inventory prioritization framework top 5 items to address and estimated engineering investment required"}, {"short": "Outage timeline root cause and prevention actions", "full": "my company incident postmortem for engineering covering the outage timeline customer impact root cause analysis what went well what went wrong and prevention actions with owners and due dates"}], "data_analytics": [{"short": "Q3 insights on revenue trends and churn signals", "full": "my company Q3 data insights presentation for leadership covering revenue trends user behavior anomalies churn signals and 3 data-backed recommendations for Q4"}, {"short": "Industry trends and strategic implications for the business", "full": "my company market trends report covering industry growth drivers competitive landscape shifts emerging customer behaviors and 3 strategic implications for the business"}, {"short": "A/B test results with significance and next steps", "full": "my company A/B test results presentation covering experiment hypothesis methodology results statistical significance business impact and recommended next steps"}, {"short": "KPI dashboard walkthrough with definitions and how to read it", "full": "my company KPI dashboard walkthrough for business teams covering the metrics tracked how each is defined data sources refresh cadence how to read the trends and where to ask questions"}], "operations": [{"short": "Q3 throughput SLA performance and process bottlenecks", "full": "my company Q3 operations review for leadership covering throughput metrics SLA performance top 5 process bottlenecks root cause analysis and improvement initiatives planned for Q4"}, {"short": "New process rollout with training plan for ops", "full": "my company new process rollout presentation for the operations team covering the problem with current workflow the new process step by step change timeline training plan and how success will be measured"}, {"short": "Vendor scorecard cost comparison and selection rationale", "full": "my company vendor review covering evaluation criteria performance scorecard for 3 shortlisted vendors cost comparison risk assessment and recommended selection with rationale"}, {"short": "Next year demand forecast capacity gaps and hiring plan", "full": "my company capacity planning presentation for leadership covering demand forecast for next year current capacity by team projected gaps hiring and automation options costs and the recommended plan"}], "finance": [{"short": "Q3 ARR growth burn rate and runway update", "full": "my company Q3 investor update covering ARR growth gross margin improvement burn rate cash runway top 3 milestones achieved and outlook for Q4 and FY2026"}, {"short": "Annual budget variance analysis and FY2026 proposal", "full": "my company annual budget review for department heads covering FY2025 actuals vs budget variance analysis key drivers and FY2026 budget proposal by department"}, {"short": "YTD performance with risks and board decisions required", "full": "my company board report covering financial performance YTD vs plan cash position key business metrics risks and opportunities and decisions required from the board"}, {"short": "Series B raise with metrics use of funds and milestones", "full": "my company Series B fundraising deck for investors covering traction and key metrics market opportunity business model unit economics use of funds and milestones for the next 18 months"}], "design": [{"short": "Design process and case studies for new client", "full": "my company design portfolio presentation for a prospective client covering our process 4 selected case studies team structure and approach to their current brief"}, {"short": "User insights and design recommendations for next sprint", "full": "my company UX research findings presentation covering research objectives methodology 5 key user insights usability issues discovered and design recommendations for the next sprint"}, {"short": "Fintech design proposal with deliverables timeline and team", "full": "my company design proposal for a fintech client covering discovery findings design strategy deliverables timeline and team structure for a 3-month engagement"}, {"short": "Design system principles components and adoption plan", "full": "my company design system overview for product and engineering covering design principles foundations core components accessibility standards contribution process and adoption plan for the next two quarters"}], "product": [{"short": "Q3 prioritized features with trade-offs and milestones", "full": "my company Q3 product roadmap review covering prioritized features trade-off decisions resource allocation and key milestones for engineering and design teams"}, {"short": "Internal feature launch with technical approach and metrics", "full": "my company feature announcement deck for internal stakeholders covering the problem we are solving solution overview technical approach launch plan and success metrics"}, {"short": "Top 5 competitors with positioning gaps and recommendations", "full": "my company competitive analysis covering the top 5 competitors feature comparison positioning gaps pricing benchmark and strategic recommendations for the next roadmap cycle"}, {"short": "Customer interview insights and what we build next", "full": "my company user research readout for the product team covering research goals who we spoke to 5 key insights pain points by segment opportunities ranked by impact and what we build next"}], "teacher": [{"short": "Year 10 biology lesson on cellular respiration", "full": "Lesson plan presentation for Year 10 biology covering learning objectives the concept of cellular respiration 3 interactive activities formative assessment and homework task"}, {"short": "Year 9 World War I overview with discussions", "full": "Concept explainer deck for Year 9 students covering the causes and consequences of World War I using timelines key figures and 3 discussion questions to drive classroom engagement"}, {"short": "Semester course objectives assessment breakdown and grading", "full": "Course overview presentation for semester 1 covering course objectives weekly topics assessment breakdown grading criteria and expectations for first-year university students"}, {"short": "Back to school night with curriculum expectations and contact", "full": "Back to school night presentation for parents covering the curriculum for the year classroom expectations homework policy how progress is reported and the best ways to get in touch"}], "student": [{"short": "Research on social media impact on teen mental health", "full": "Research presentation on the impact of social media on teenage mental health covering literature review methodology survey findings analysis limitations and recommendations for a university psychology course"}, {"short": "Mobile app proposal with features and 6-week timeline", "full": "Project proposal presentation for a mobile app idea covering problem statement target users proposed solution feature set competitive landscape and 6-week development timeline"}, {"short": "Startup pitch with business model traction and funding ask", "full": "Startup pitch covering the problem being solved target market proposed solution business model go-to-market approach traction to date and funding ask"}, {"short": "Novel analysis with themes characters and key takeaways", "full": "Book report presentation on a classic novel covering plot summary main characters central themes historical context memorable quotes and key takeaways for a literature class"}]};
  const GROUPS = [["general", "General", ["creator"]], ["consulting", "Consulting", ["consulting"]], ["marketing", "Marketing", ["marketing"]], ["sales_support", "Sales and support", ["sales", "support"]], ["people_legal", "People and legal", ["legal"]], ["leadership", "Leadership", ["leadership"]], ["engineering_data", "Engineering and data", ["engineering", "data_analytics"]], ["ops_finance", "Ops and finance", ["operations", "finance"]], ["design_product", "Design and product", ["design", "product"]], ["education", "Education", ["teacher", "student"]]];
  const ROW = ["row", "emoji"].includes(new URLSearchParams(location.search).get("tags"));
  const ic = (n) => '<i class="ph-light ph-' + n + '"></i>';
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const S = { group: "leadership", picks: null, turns: 0 };
  const groupOf = (id) => GROUPS.find((g) => g[0] === id);
  const pool = () => {
    const own = groupOf(S.group)[2].flatMap((r) => PROMPTS[r] || []);
    // Leadership opens on the proto's own example cards, then the leadership persona's prompts
    return S.group === "leadership" ? (window.HERO_EXAMPLES || []).map((x) => ({ short: x.text, full: x.text })).concat(own) : own;
  };
  const count = () => (window.HERO_EXAMPLES || []).length || 4;
  const picks = () => S.picks || [...Array(Math.min(count(), pool().length)).keys()];
  const shuffled = (l) => l.map((v) => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map((x) => x[1]);
  const roll = (n, cur, size) => {
    const fresh = shuffled([...Array(n).keys()].filter((i) => !cur.includes(i))).slice(0, size);
    return fresh.length >= size ? fresh : fresh.concat(shuffled(cur.filter((i) => i < n)).slice(0, size - fresh.length));
  };

  const card = (t, i, anim) => {
    const st = anim && !reduce ? ' style="animation-delay:' + i * 40 + 'ms"' : "";
    const cls = "hx-pcard" + (ROW ? " r" : "") + (anim && !reduce ? " cdf-in" : "");
    return ROW
      ? '<button class="' + cls + '" data-nx="' + i + '" title="' + esc(t.full) + '"' + st + '><span class="t">' + esc(t.short) + '</span><span class="ar">' + ic("arrow-up-left") + "</span></button>"
      : '<button class="' + cls + '" data-nx="' + i + '" title="' + esc(t.full) + '"' + st + '><span class="t">' + esc(t.short) + '</span><span class="f">' + ic("arrow-up-left") + "</span></button>";
  };
  const cards = (anim) => { const p = pool(); return picks().map((i) => p[i]).filter(Boolean).map((t, i) => card(t, i, anim)).join(""); };
  const head = () =>
    '<div class="hx-cl cdf"><span>Create decks for</span>' +
    '<button type="button" class="cdf-pill" aria-haspopup="menu" aria-expanded="false"><span class="cdf-lbl">' + esc(groupOf(S.group)[1]) + "</span>" + ic("caret-down") + "</button>" +
    '<button type="button" class="cdf-dice" data-tip="Show other prompts" aria-label="Show other prompts"' + (pool().length <= count() ? " disabled" : "") + '><span class="cdf-spin" style="transform:rotate(' + S.turns * 360 + 'deg)">' + ic("dice-five") + "</span></button></div>";
  const chips = () => '<div class="hx-chips hx-cards4">' + head() + cards(false) + "</div>";

  // Home only (the prompt-only top section): swap the original subtitle and cards for the new row
  const origHtml = HP.html, origChips = HP.chips;
  HP.html = () => { const h = origHtml(), c = origChips(); return h.includes(c) ? h.replace(c, chips()) : h; };

  // Refresh the cards in place, so the dice keeps its element and its spin animates
  function refresh() {
    const box = document.querySelector(".hxp .hx-cards4");
    if (!box) return;
    box.querySelectorAll("[data-nx]").forEach((b) => b.remove());
    box.insertAdjacentHTML("beforeend", cards(true));
    const lbl = box.querySelector(".cdf-lbl"); if (lbl) lbl.textContent = groupOf(S.group)[1];
    const dice = box.querySelector(".cdf-dice"); if (dice) dice.disabled = pool().length <= count();
  }

  document.addEventListener("click", (e) => {
    const pill = e.target.closest(".hxp .cdf-pill");
    if (pill && window.UI) {
      window.UI.openMenu(pill, GROUPS.map((g) => ({ label: g[1], check: g[0] === S.group, onClick: () => { if (g[0] !== S.group) { S.group = g[0]; S.picks = null; refresh(); } } })), { width: 224 });
      return;
    }
    const dice = e.target.closest(".hxp .cdf-dice");
    if (dice) {
      const n = pool().length;
      if (n <= count()) return;
      S.turns += 1;
      const sp = dice.querySelector(".cdf-spin"); if (sp) sp.style.transform = "rotate(" + S.turns * 360 + "deg)";
      S.picks = roll(n, picks(), count());
      refresh();
      return;
    }
    const nx = e.target.closest(".hxp [data-nx]");
    if (nx) {
      const p = pool(), t = p[picks()[+nx.dataset.nx]], hx = nx.closest(".hxp"), ta = hx && hx.querySelector("textarea");
      if (ta && t) { ta.value = t.full; ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); }
      if (hx) hx.classList.add("is-typing");
    }
  });

  // The sidebar plan button opens pricing v2 over the dashboard (capture phase: the proto's own pricing view never opens)
  let frame = null, back = null;
  function openPricing(from, extra) {
    if (frame) return;
    back = from || null;
    const theme = document.documentElement.getAttribute("data-preferred-theme") === "dark" ? "dark" : "light";
    frame = document.createElement("iframe");
    frame.src = "pricing-v2.html?modal=1&theme=" + theme + (extra || "");
    frame.title = "Plans";
    frame.setAttribute("allowtransparency", "true");
    frame.style.cssText = "position:fixed;inset:0;width:100%;height:100%;border:0;z-index:2000;background:transparent;color-scheme:normal";
    document.body.appendChild(frame);
    frame.addEventListener("load", () => { try { frame.contentWindow.focus(); } catch (err) { /* cross-origin never happens here */ } });
  }
  window.addEventListener("message", (e) => {
    if (e.data !== "pricing-v2-close" || !frame) return;
    frame.remove(); frame = null;
    if (back && back.focus) back.focus();
  });
  document.addEventListener("click", (e) => {
    const b = e.target.closest(".side .plan .btn");
    if (!b) return;
    e.preventDefault(); e.stopImmediatePropagation(); e.stopPropagation();
    openPricing(b);
  }, true);
  // Old links to this page (?open=1, ?review=before|after) open the pricing straight away
  const q = new URLSearchParams(location.search), rv = q.get("review");
  if (q.get("open") === "1" || rv === "before" || rv === "after") addEventListener("load", () => openPricing(null, rv === "before" || rv === "after" ? "&review=" + rv : ""));

  const css = document.createElement("style");
  css.textContent =
    ".hx-cl.cdf{display:flex;align-items:center;gap:6px}" +
    ".cdf-pill{display:inline-flex;align-items:center;gap:4px;height:28px;padding:0 8px 0 10px;border:0;border-radius:999px;background:var(--color-bg-secondary);color:var(--color-text);font:500 13px/18px var(--font-family-default);cursor:pointer;transition:background .15s}" +
    ".cdf-pill:hover,.cdf-pill[aria-expanded=true]{background:var(--color-bg-tertiary)}" +
    ".cdf-pill i{font-size:14px;color:var(--color-icon-secondary)}" +
    ".cdf-dice{display:grid;place-items:center;width:28px;height:28px;border:0;border-radius:6px;background:none;color:var(--color-icon-secondary);cursor:pointer}" +
    ".cdf-dice:hover{background:var(--color-bg-secondary);color:var(--color-icon)}" +
    ".cdf-dice[disabled]{opacity:.4;cursor:default}" +
    ".cdf-spin{display:inline-flex;font-size:16px;transition:transform .52s cubic-bezier(.2,0,0,1)}" +
    ".hx-pcard.cdf-in{animation:cdfIn .24s cubic-bezier(.2,0,0,1) both}" +
    "@keyframes cdfIn{from{opacity:0;transform:translateY(14px);filter:blur(3px)}to{opacity:1;transform:none;filter:none}}" +
    "@media (prefers-reduced-motion:reduce){.cdf-spin{transition:none}}";
  document.head.appendChild(css);
})();
