// Design tokens for NUT Financial Hub
// Three palette options + two type pairings, exposed via Tweaks.

window.NUT_PALETTES = {
  forest: {
    name: 'Forest (default)',
    primary: 'oklch(0.40 0.10 155)',
    primaryDeep: 'oklch(0.32 0.09 155)',
    primarySoft: 'oklch(0.94 0.045 155)',
    primaryInk: 'oklch(0.22 0.06 155)',
    accent: 'oklch(0.78 0.13 85)',
    accentSoft: 'oklch(0.95 0.06 85)',
    success: 'oklch(0.62 0.14 150)',
    danger: 'oklch(0.58 0.18 28)',
    warn: 'oklch(0.72 0.15 65)',
    surface: 'oklch(0.985 0.005 95)',
    surfaceMuted: 'oklch(0.965 0.008 95)',
    line: 'oklch(0.92 0.008 95)',
    ink: 'oklch(0.20 0.015 155)',
    inkMuted: 'oklch(0.45 0.012 155)',
    inkFaint: 'oklch(0.62 0.01 155)',
    onPrimary: '#ffffff',
  },
  navy: {
    name: 'Navy + Gold',
    primary: 'oklch(0.32 0.09 255)',
    primaryDeep: 'oklch(0.24 0.08 255)',
    primarySoft: 'oklch(0.94 0.03 255)',
    primaryInk: 'oklch(0.22 0.06 255)',
    accent: 'oklch(0.74 0.14 80)',
    accentSoft: 'oklch(0.95 0.05 80)',
    success: 'oklch(0.60 0.13 155)',
    danger: 'oklch(0.58 0.18 28)',
    warn: 'oklch(0.72 0.15 65)',
    surface: 'oklch(0.985 0.004 255)',
    surfaceMuted: 'oklch(0.965 0.008 255)',
    line: 'oklch(0.92 0.008 255)',
    ink: 'oklch(0.18 0.02 255)',
    inkMuted: 'oklch(0.42 0.015 255)',
    inkFaint: 'oklch(0.60 0.01 255)',
    onPrimary: '#ffffff',
  },
  sage: {
    name: 'Modern Sage',
    primary: 'oklch(0.52 0.07 165)',
    primaryDeep: 'oklch(0.40 0.075 165)',
    primarySoft: 'oklch(0.95 0.025 165)',
    primaryInk: 'oklch(0.28 0.055 165)',
    accent: 'oklch(0.66 0.13 35)',
    accentSoft: 'oklch(0.95 0.04 35)',
    success: 'oklch(0.62 0.13 155)',
    danger: 'oklch(0.58 0.18 28)',
    warn: 'oklch(0.72 0.15 65)',
    surface: 'oklch(0.985 0.005 100)',
    surfaceMuted: 'oklch(0.97 0.008 100)',
    line: 'oklch(0.92 0.008 100)',
    ink: 'oklch(0.22 0.02 165)',
    inkMuted: 'oklch(0.46 0.015 165)',
    inkFaint: 'oklch(0.62 0.012 165)',
    onPrimary: '#ffffff',
  },
};

window.NUT_FONTS = {
  jakarta: {
    name: 'Plus Jakarta Sans + DM Sans',
    display: '"Plus Jakarta Sans", system-ui, sans-serif',
    body: '"DM Sans", system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
    google: 'family=Plus+Jakarta+Sans:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500',
  },
  manrope: {
    name: 'Manrope + Inter',
    display: '"Manrope", system-ui, sans-serif',
    body: '"Inter", system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
    google: 'family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500',
  },
  geist: {
    name: 'Geist',
    display: '"Geist", system-ui, sans-serif',
    body: '"Geist", system-ui, sans-serif',
    mono: '"Geist Mono", ui-monospace, monospace',
    google: 'family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500',
  },
};

// Helper to apply tokens as CSS custom properties on :root
window.applyNutTokens = function (paletteKey, fontKey) {
  const p = window.NUT_PALETTES[paletteKey] || window.NUT_PALETTES.forest;
  const f = window.NUT_FONTS[fontKey] || window.NUT_FONTS.jakarta;
  const r = document.documentElement;
  Object.entries(p).forEach(([k, v]) => {
    if (k === 'name') return;
    r.style.setProperty('--nut-' + k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()), v);
  });
  r.style.setProperty('--nut-font-display', f.display);
  r.style.setProperty('--nut-font-body', f.body);
  r.style.setProperty('--nut-font-mono', f.mono);
  // load google fonts
  const id = 'nut-google-fonts';
  let link = document.getElementById(id);
  if (!link) {
    link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  link.href = `https://fonts.googleapis.com/css2?${f.google}&display=swap`;
};
