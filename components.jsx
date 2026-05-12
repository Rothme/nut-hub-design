// Inline SVG icons — simple stroke style, 1.6px, rounded.
// Usage: <Icon name="home" size={20} />

const ICONS = {
  home: 'M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z',
  loan: 'M4 7h16M4 12h16M4 17h10',
  savings: 'M5 8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM9 12h6',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.6-7 8-7s8 3 8 7',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  arrowDown: 'M12 5v14M6 13l6 6 6-6',
  arrowUp: 'M12 19V5M6 11l6-6 6 6',
  plus: 'M12 5v14M5 12h14',
  bell: 'M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 21a2 2 0 0 0 4 0',
  chat: 'M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.3A8 8 0 1 1 21 12z',
  send: 'M22 2L11 13M22 2l-7 20-4-9-9-4z',
  check: 'M5 12l5 5L20 7',
  card: 'M3 8h18M3 12h18M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z',
  dot: 'M12 12.01',
  chevronRight: 'M9 6l6 6-6 6',
  chevronDown: 'M6 9l6 6 6-6',
  search: 'M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM21 21l-4.35-4.35',
  phone: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 13 13 0 0 0 .7 2.9 2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2-.5 13 13 0 0 0 3 .7 2 2 0 0 1 1.7 2z',
  doc: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 13h6M9 17h6',
  car: 'M5 17h14M5 17l2-7h10l2 7M5 17v3h3v-3M16 17v3h3v-3M7.5 13.5h9',
  heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z',
  plane: 'M22 16.9V14l-9-5V3.5a1.5 1.5 0 0 0-3 0V9l-9 5v2.9l9-2.4v5L8 21v1l4-1 4 1v-1l-2-1.5v-5z',
  edu: 'M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5',
  briefcase: 'M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
  wallet: 'M3 7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v2H5a2 2 0 0 0 0 4h15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM17 11h.01',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
  gift: 'M20 12v8H4v-8M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z',
  cog: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
  logout: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9',
  lock: 'M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM7 11V7a5 5 0 0 1 10 0v4',
  fingerprint: 'M12 11v2a10 10 0 0 0 .8 4M16 11.4a4 4 0 0 0-8 0v1.4a14 14 0 0 0 1 5.2M9 6.8a6 6 0 0 1 9 4.8v2.5M5 11a7 7 0 0 1 1.5-4.4M3 16a14 14 0 0 0 1 4',
  download: 'M12 4v12M6 10l6 6 6-6M4 20h16',
  filter: 'M3 5h18M6 12h12M10 19h4',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  alert: 'M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
  refresh: 'M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M21 12a9 9 0 0 1-15 6.7L3 16M3 21v-5h5',
  trend: 'M3 17l6-6 4 4 8-8M14 7h7v7',
  pie: 'M21 15.5A9 9 0 1 1 8.5 3v9.5z M14 3a9 9 0 0 1 7 7h-7z',
  copy: 'M8 4h10a2 2 0 0 1 2 2v10M16 8H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z',
  qr: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3v3h-3zM18 18h3v3h-3zM14 19h3M19 14v3',
  building: 'M3 21h18M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14M9 9h.01M13 9h.01M9 13h.01M13 13h.01M9 17h.01M13 17h.01',
  badge: 'M12 2l3 5 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z',
  question: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.1 9a3 3 0 1 1 5.8 1c0 2-3 3-3 3M12 17h.01',
  exit: 'M18 6L6 18M6 6l12 12',
  menu: 'M3 6h18M3 12h18M3 18h18',
  more: 'M5 12h.01M12 12h.01M19 12h.01',
  upload: 'M12 16V4M6 10l6-6 6 6M4 20h16',
  shieldCheck: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4',
  eye: 'M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  eyeOff: 'M3 3l18 18M10.6 10.6a3 3 0 0 0 4.2 4.2M16.7 16.7A10 10 0 0 1 12 18C6 18 2 12 2 12a18 18 0 0 1 4.2-5.2M9.9 5.1A10 10 0 0 1 12 5c6 0 10 7 10 7a18 18 0 0 1-2.2 3.2',
};

function Icon({ name, size = 20, stroke = 1.6, color = 'currentColor', filled = false, style = {} }) {
  const path = ICONS[name];
  if (!path) return <span style={{ width: size, height: size, ...style }} />;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? color : 'none'}
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, ...style }}
    >
      <path d={path} />
    </svg>
  );
}

// Logo + wordmark
function NutLogo({ size = 'md', wordmark = true, color }) {
  const sz = size === 'lg' ? 48 : size === 'sm' ? 28 : 36;
  const fs = size === 'lg' ? 18 : size === 'sm' ? 12 : 14;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <span className="nut-logo" style={{
        width: sz, height: sz, fontSize: fs,
        background: color || undefined,
      }}>
        <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
          <span>N</span>
          <span className="dot" />
        </span>
      </span>
      {wordmark && (
        <span style={{
          fontFamily: 'var(--nut-font-display)',
          fontWeight: 800, fontSize: size === 'lg' ? 20 : 15,
          color: 'var(--nut-ink)',
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}>
          NUT <span style={{ fontWeight: 500, color: 'var(--nut-ink-muted)' }}>Hub</span>
        </span>
      )}
    </span>
  );
}

// Naira amount with subtle styling
function Naira({ value, size = 24, sub = false, color }) {
  const formatted = (typeof value === 'number')
    ? value.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : value;
  const [whole, dec] = String(formatted).split('.');
  return (
    <span className="nut-amount" style={{ fontSize: size, color: color || 'inherit', whiteSpace: 'nowrap' }}>
      <span className="nut-naira" style={{ fontSize: size * 0.65, marginRight: 2, opacity: sub ? 0.6 : 0.55 }}>₦</span>
      {whole}
      {dec && <span style={{ opacity: 0.55, fontSize: size * 0.65 }}>.{dec}</span>}
    </span>
  );
}

// Tab bar
function TabBar({ active, onChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'loans', label: 'Loans', icon: 'loan' },
    { id: 'savings', label: 'Savings', icon: 'savings' },
    { id: 'insurance', label: 'Insurance', icon: 'shield' },
    { id: 'profile', label: 'Profile', icon: 'user' },
  ];
  return (
    <nav className="nut-tabbar">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={'nut-tab' + (active === t.id ? ' active' : '')}
          onClick={() => onChange && onChange(t.id)}
        >
          <Icon name={t.icon} size={22} stroke={active === t.id ? 2 : 1.6} />
          <span>{t.label}</span>
          <span className="dot" />
        </button>
      ))}
    </nav>
  );
}

// Scrollable phone screen body
function PhoneScreen({ children, header, scroll = true, padding = 16, bottom = true, bg }) {
  return (
    <div style={{
      flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0,
      background: bg || 'var(--nut-surface)',
    }}>
      {header}
      <div style={{
        flex: 1, overflowY: scroll ? 'auto' : 'hidden',
        padding: typeof padding === 'number' ? `${padding}px` : padding,
        paddingBottom: bottom ? 24 : padding,
      }}>
        {children}
      </div>
    </div>
  );
}

// Top header bar (mobile screens)
function ScreenHeader({ title, back, right, sub, large = false, onBack }) {
  return (
    <header style={{
      padding: '14px 16px 12px',
      background: 'var(--nut-surface)',
      borderBottom: '1px solid var(--nut-line)',
      display: 'flex', flexDirection: 'column', gap: 6,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minHeight: 28 }}>
        {back && (
          <button onClick={onBack} style={{
            width: 32, height: 32, borderRadius: 10, border: 'none',
            background: 'var(--nut-surface-muted)', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--nut-ink)',
          }}>
            <Icon name="arrowRight" size={16} style={{ transform: 'rotate(180deg)' }} />
          </button>
        )}
        {!large && (
          <h3 style={{ flex: 1, fontSize: 17, fontWeight: 700 }}>{title}</h3>
        )}
        {large && <div style={{ flex: 1 }} />}
        <div style={{ display: 'flex', gap: 8 }}>{right}</div>
      </div>
      {large && (
        <div style={{ paddingTop: 8 }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.025em' }}>{title}</h2>
          {sub && <p style={{ fontSize: 13, color: 'var(--nut-ink-muted)', marginTop: 4 }}>{sub}</p>}
        </div>
      )}
    </header>
  );
}

// Section header inside content
function SectionTitle({ title, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10, marginTop: 4 }}>
      <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--nut-ink)' }}>{title}</h4>
      {action && <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--nut-primary)', cursor: 'pointer' }}>{action}</span>}
    </div>
  );
}

// Linear progress bar
function Progress({ value = 0.5, color, height = 6, bg }) {
  return (
    <div style={{
      height, background: bg || 'var(--nut-surface-muted)',
      borderRadius: 999, overflow: 'hidden',
    }}>
      <div style={{
        width: `${Math.min(100, Math.max(0, value * 100))}%`,
        height: '100%',
        background: color || 'var(--nut-primary)',
        borderRadius: 999,
        transition: 'width .4s ease',
      }} />
    </div>
  );
}

// Avatar circle
function Avatar({ initials = 'AU', size = 36, color }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: '50%',
      background: color || 'var(--nut-primary-soft)',
      color: 'var(--nut-primary-deep)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--nut-font-display)', fontWeight: 700,
      fontSize: size * 0.36, letterSpacing: '-0.02em', flexShrink: 0,
    }}>{initials}</span>
  );
}

// Transaction row
function TxnRow({ icon, title, sub, amount, neg, status }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0' }}>
      <span style={{
        width: 38, height: 38, borderRadius: 12,
        background: neg ? 'oklch(0.96 0.04 28)' : 'var(--nut-primary-soft)',
        color: neg ? 'var(--nut-danger)' : 'var(--nut-primary)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon name={icon} size={18} />
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--nut-ink)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
        <div style={{ fontSize: 12, color: 'var(--nut-ink-faint)' }}>{sub}</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div className="nut-amount" style={{ fontSize: 14, color: neg ? 'var(--nut-ink)' : 'var(--nut-success)' }}>
          {neg ? '−' : '+'}<span className="nut-naira" style={{ fontSize: 11, opacity: 0.6 }}>₦</span>{amount}
        </div>
        {status && <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginTop: 2 }}>{status}</div>}
      </div>
    </div>
  );
}

// Empty stripe placeholder image
function PlaceholderImg({ label = 'photo', height = 120, style = {} }) {
  return (
    <div className="nut-placeholder" style={{ height, ...style }}>
      {label}
    </div>
  );
}

Object.assign(window, {
  Icon, NutLogo, Naira, TabBar, PhoneScreen, ScreenHeader,
  SectionTitle, Progress, Avatar, TxnRow, PlaceholderImg, ICONS,
});
