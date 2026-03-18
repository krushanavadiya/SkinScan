// Dashboard personalization and interactions based on localStorage skinType

const SKIN_ADVICE = {
  Dry: {
    label: 'Dry Skin ID',
    pill: 'Dry • Barrier-first',
    focus: [
      'Layer humectants (glycerin, hyaluronic acid) under ceramide-rich creams.',
      'Avoid foaming cleansers; favour milky or balm textures.',
      'Use buffered retinoids and short-contact exfoliation only when skin is calm.',
    ],
    recommendations: [
      {
        title: 'Cream Cleanser',
        badge: 'AM / PM',
        desc: 'Non-foaming cleanse that protects lipids while removing sunscreen.',
        tags: ['barrier', 'non-stripping'],
      },
      {
        title: 'Ceramide Moisturiser',
        badge: 'Daily',
        desc: 'Rich but breathable; seals hydration and reduces tightness.',
        tags: ['ceramides', 'repair'],
      },
      {
        title: 'Occlusive Balm',
        badge: 'Night',
        desc: 'A thin sealing layer on dry zones to lock moisture in.',
        tags: ['slug-lite', 'winter'],
      },
    ],
    amRoutine: [
      { icon: '💧', label: 'Creamy\ncleanser' },
      { icon: '🧴', label: 'Hydrating\nessence' },
      { icon: '🧴', label: 'Ceramide\nmoisturiser' },
      { icon: '🧴', label: 'Occlusive\nlayer' },
      { icon: '🌤️', label: 'Cushion SPF' },
    ],
    ingredient: {
      name: 'Ceramides',
      tagline: 'The brick-and-mortar of your moisture barrier.',
      detail:
        'Ceramides replenish the lipids that keep moisture sealed in. Pair with cholesterol and fatty acids for a full barrier-support cocktail.',
    },
  },
  Oily: {
    label: 'Oily Skin ID',
    pill: 'Oily • Clarity-first',
    focus: [
      'Salicylic acid 2–3x weekly to keep pores clear.',
      'Use gel moisturisers instead of skipping hydration.',
      'Blotting papers over harsh stripping toners.',
    ],
    recommendations: [
      {
        title: 'Gel Cleanser',
        badge: 'AM / PM',
        desc: 'Gentle surfactants that remove oil without over-stripping.',
        tags: ['low pH', 'daily'],
      },
      {
        title: 'BHA Exfoliant',
        badge: '2–3× / wk',
        desc: 'Salicylic acid to keep pores clear and reduce congestion.',
        tags: ['salicylic', 'pores'],
      },
      {
        title: 'Oil-Free Moisturiser',
        badge: 'Daily',
        desc: 'Light hydration that reduces rebound oiliness.',
        tags: ['gel-cream', 'non-comedogenic'],
      },
    ],
    amRoutine: [
      { icon: '🫧', label: 'Gentle gel\ncleanser' },
      { icon: '🧪', label: 'BHA\n(t-zone)' },
      { icon: '💦', label: 'Gel\nmoisturiser' },
      { icon: '🌤️', label: 'Matte\nSPF' },
      { icon: '🩹', label: 'Spot\ncorrector' },
    ],
    ingredient: {
      name: 'Salicylic Acid',
      tagline: 'Oil-soluble exfoliant for congested skin.',
      detail:
        'Salicylic acid travels into the pore lining to dissolve excess oil and buildup. Start 1–2x weekly and follow with simple hydration.',
    },
  },
  Combination: {
    label: 'Combination Skin ID',
    pill: 'Combination • Zonal care',
    focus: [
      'Use lighter textures on the T‑zone, richer creams on cheeks.',
      'Spot-treat congestion instead of treating your whole face as oily.',
      'Introduce actives slowly and only where needed.',
    ],
    recommendations: [
      {
        title: 'Gentle Cleanser',
        badge: 'AM / PM',
        desc: 'A middle-ground cleanser that won’t dry cheeks or leave shine.',
        tags: ['balanced', 'daily'],
      },
      {
        title: 'Targeted Exfoliant',
        badge: '1–2× / wk',
        desc: 'Use BHA on the T‑zone or AHA on texture zones—never everywhere.',
        tags: ['zone-based', 'slow start'],
      },
      {
        title: 'Two Moisturisers',
        badge: 'Daily',
        desc: 'Light gel for T‑zone + cream for cheeks to match each zone.',
        tags: ['mix & match', 'seasonal'],
      },
    ],
    amRoutine: [
      { icon: '🫧', label: 'Gentle\ncleanser' },
      { icon: '🧪', label: 'Targeted\nexfoliant' },
      { icon: '💧', label: 'Hydrating\nserum' },
      { icon: '🧴', label: 'Light gel\nfor T‑zone' },
      { icon: '🧴', label: 'Cream for\ncheeks' },
      { icon: '🌤️', label: 'Broad\nSPF' },
    ],
    ingredient: {
      name: 'Niacinamide',
      tagline: 'Balances tone and sebum in one step.',
      detail:
        'Niacinamide helps regulate oil production while supporting barrier function and evening tone—ideal for multi-zone complexions.',
    },
  },
  Sensitive: {
    label: 'Sensitive Skin ID',
    pill: 'Sensitive • Barrier-first',
    focus: [
      'Short, fragrance-free ingredient lists only.',
      'Patch-test every new serum on the jawline first.',
      'Prioritise barrier repair over brightness or intensity.',
    ],
    recommendations: [
      {
        title: 'Non-foaming Cleanser',
        badge: 'AM / PM',
        desc: 'Minimal fragrance-free formula that won’t sting or strip.',
        tags: ['fragrance-free', 'gentle'],
      },
      {
        title: 'Barrier Serum',
        badge: 'Daily',
        desc: 'Panthenol + soothing extracts to calm and support repair.',
        tags: ['panthenol', 'cica'],
      },
      {
        title: 'Mineral SPF',
        badge: 'AM',
        desc: 'Zinc-based sunscreen to reduce irritation risk.',
        tags: ['zinc oxide', 'low irritation'],
      },
    ],
    amRoutine: [
      { icon: '🫧', label: 'Non-foaming\ncleanser' },
      { icon: '🩹', label: 'Barrier\nserum' },
      { icon: '🧴', label: 'Cream\nmoisturiser' },
      { icon: '🌤️', label: 'Mineral\nSPF' },
      { icon: '🧊', label: 'Cool\ncompress' },
    ],
    ingredient: {
      name: 'Centella Asiatica',
      tagline: 'Soothing green for reactive moments.',
      detail:
        'Centella (cica) calms visible redness and supports repair. Look for products that combine it with panthenol and ceramides.',
    },
  },
  Balanced: {
    label: 'Balanced Skin ID',
    pill: 'Balanced • Maintain & Explore',
    focus: [
      'Keep a steady rhythm: cleanse, treat, moisturise, protect.',
      'Experiment with one new active at a time.',
      'Prioritise long-term consistency over quick changes.',
    ],
    recommendations: [
      {
        title: 'Gentle Cleanser',
        badge: 'AM / PM',
        desc: 'A consistent base that won’t destabilise your barrier.',
        tags: ['simple', 'daily'],
      },
      {
        title: 'Antioxidant Serum',
        badge: 'AM',
        desc: 'Vitamin C (or a derivative) to brighten and guard.',
        tags: ['vitamin C', 'brightening'],
      },
      {
        title: 'Light Moisturiser + SPF',
        badge: 'AM',
        desc: 'Hydration and protection—your highest ROI habit.',
        tags: ['SPF', 'consistency'],
      },
    ],
    amRoutine: [
      { icon: '🫧', label: 'Gentle\ncleanser' },
      { icon: '🧪', label: 'Vitamin C\nserum' },
      { icon: '💧', label: 'Hydrating\nserum' },
      { icon: '🧴', label: 'Light\nmoisturiser' },
      { icon: '🌤️', label: 'SPF\n50+' },
    ],
    ingredient: {
      name: 'Vitamin C',
      tagline: 'Brightness and antioxidant guardrail.',
      detail:
        'Vitamin C supports collagen and shields against free radicals. Start with lower percentages and stabilised forms if you are new to it.',
    },
  },
};

const COMMUNITY_REVIEWS = [
  {
    quote: '“My routine finally feels boring—in the most soothing way.”',
    name: 'Leah • Sensitive / Dry',
  },
  {
    quote: '“The AM tiles make it impossible to ‘forget’ SPF.”',
    name: 'Rami • Oily / Humid climate',
  },
  {
    quote: '“Love that it tells me what not to chase this month.”',
    name: 'Jules • Combination',
  },
  {
    quote: '“My barrier stopped yelling at me on day 10.”',
    name: 'Nora • Sensitive',
  },
  {
    quote: '“It made me retire three toners I never needed.”',
    name: 'Chloe • Balanced',
  },
];

function initDashboardYearAndRetake() {
  const spans = document.querySelectorAll('#year');
  const year = new Date().getFullYear();
  spans.forEach((s) => (s.textContent = String(year)));

  const retake = document.getElementById('retake-footer-dashboard');
  if (retake) {
    retake.addEventListener('click', () => {
      localStorage.clear();
      window.location.href = 'index.html';
    });
  }
}

function hydrateDashboardFromSkinType() {
  const skinType = localStorage.getItem('skinType') || 'Balanced';
  const config = SKIN_ADVICE[skinType] || SKIN_ADVICE.Balanced;

  const pill = document.getElementById('skin-pill');
  const value = document.getElementById('skin-id-value');
  const focusList = document.getElementById('skin-focus-list');
  const ingredientName = document.getElementById('ingredient-name');
  const ingredientTagline = document.getElementById('ingredient-tagline');
  const ingredientDetail = document.getElementById('ingredient-detail');
  const greeting = document.getElementById('dashboard-greeting');
  const recSubtitle = document.getElementById('rec-subtitle');

  if (pill) pill.textContent = config.pill;
  if (value) value.textContent = config.label;

  if (focusList) {
    focusList.innerHTML = '';
    config.focus.forEach((line) => {
      const li = document.createElement('li');
      li.textContent = line;
      focusList.appendChild(li);
    });
  }

  if (ingredientName) ingredientName.textContent = config.ingredient.name;
  if (ingredientTagline) ingredientTagline.textContent = config.ingredient.tagline;
  if (ingredientDetail) ingredientDetail.textContent = config.ingredient.detail;

  if (greeting) {
    greeting.textContent = `Here’s a calm, ${skinType.toLowerCase()}-aware plan that prioritises your barrier and what you’ll actually keep using.`;
  }

  populateAmRoutine(config.amRoutine);
  populateRecommendations(config.recommendations, skinType, recSubtitle);
}

function populateAmRoutine(items) {
  const strip = document.getElementById('am-strip');
  if (!strip) return;
  strip.innerHTML = '';
  items.forEach((item) => {
    const chip = document.createElement('div');
    chip.className = 'am-chip';
    const icon = document.createElement('div');
    icon.className = 'am-chip-icon';
    icon.textContent = item.icon;
    const label = document.createElement('div');
    label.innerText = item.label;
    chip.appendChild(icon);
    chip.appendChild(label);
    strip.appendChild(chip);
  });
}

function populateCommunity() {
  const ul = document.getElementById('community-ticker');
  if (!ul) return;
  ul.innerHTML = '';

  const all = [...COMMUNITY_REVIEWS, ...COMMUNITY_REVIEWS];
  all.forEach((r) => {
    const li = document.createElement('li');
    li.className = 'community-item';
    li.innerHTML = `${r.quote}<span>${r.name}</span>`;
    ul.appendChild(li);
  });
}

function populateRecommendations(items, skinType, subtitleEl) {
  const grid = document.getElementById('rec-grid');
  if (!grid) return;
  grid.innerHTML = '';

  if (subtitleEl) {
    subtitleEl.textContent = `For ${skinType} Skin ID`;
  }

  const safeItems = Array.isArray(items) && items.length ? items : SKIN_ADVICE.Balanced.recommendations;
  safeItems.forEach((rec) => {
    const card = document.createElement('div');
    card.className = 'rec-card';

    const tagsHtml = (rec.tags || [])
      .slice(0, 4)
      .map((t) => `<span class="rec-tag">${t}</span>`)
      .join('');

    card.innerHTML = `
      <div class="rec-top">
        <p class="rec-title">${rec.title}</p>
        <span class="rec-badge">${rec.badge}</span>
      </div>
      <p class="rec-desc">${rec.desc}</p>
      <div class="rec-tags">${tagsHtml}</div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initDashboardYearAndRetake();
  hydrateDashboardFromSkinType();
  populateCommunity();
});

