// Responsive web member portal — desktop view of the same data.

function WebMemberPortal() {
  const navItems = [
    { id: 'dash', icon: 'home', l: 'Dashboard', active: true },
    { id: 'loan', icon: 'loan', l: 'Loans' },
    { id: 'sav', icon: 'savings', l: 'Savings' },
    { id: 'ins', icon: 'shield', l: 'Insurance' },
    { id: 'tx', icon: 'card', l: 'Transactions' },
    { id: 'sup', icon: 'chat', l: 'Support' },
  ];

  return (
    <div className="nut-app" style={{ display: 'flex', flexDirection: 'row', height: '100%', background: 'var(--nut-surface-muted)' }}>
      {/* sidebar */}
      <aside style={{
        width: 232, background: 'var(--nut-surface)', borderRight: '1px solid var(--nut-line)',
        display: 'flex', flexDirection: 'column', padding: '20px 14px',
      }}>
        <div style={{ padding: '4px 8px 22px' }}>
          <NutLogo size="md" />
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {navItems.map((n) => (
            <button key={n.id} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 12px', borderRadius: 10, border: 'none', cursor: 'pointer',
              background: n.active ? 'var(--nut-primary-soft)' : 'transparent',
              color: n.active ? 'var(--nut-primary-deep)' : 'var(--nut-ink-muted)',
              fontWeight: n.active ? 700 : 500, fontSize: 14, textAlign: 'left',
              fontFamily: 'inherit',
            }}>
              <Icon name={n.icon} size={18} />
              {n.l}
            </button>
          ))}
        </nav>
        <div style={{ flex: 1 }} />
        <div style={{ padding: 14, background: 'var(--nut-primary-soft)', borderRadius: 12 }}>
          <Icon name="badge" size={18} color="var(--nut-primary)" />
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--nut-primary-deep)', marginTop: 6 }}>NUT membership</div>
          <div style={{ fontSize: 11, color: 'var(--nut-primary-ink)', opacity: 0.75 }}>Verified · Lagos branch</div>
        </div>
        <button style={{ marginTop: 10, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10, borderRadius: 10, background: 'transparent', border: 'none', color: 'var(--nut-ink-muted)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13 }}>
          <Icon name="cog" size={16} /> Settings
        </button>
      </aside>

      {/* main */}
      <main style={{ flex: 1, padding: '20px 32px 40px', overflowY: 'auto' }}>
        {/* topbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}>
          <div style={{ flex: 1, position: 'relative', maxWidth: 380 }}>
            <Icon name="search" size={16} color="var(--nut-ink-faint)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
            <input className="nut-input" placeholder="Search transactions, loans, policies…" style={{ paddingLeft: 38, fontSize: 13, background: 'var(--nut-surface)' }} />
          </div>
          <div style={{ flex: 1 }} />
          <button style={{ width: 38, height: 38, borderRadius: 12, background: 'var(--nut-surface)', border: '1px solid var(--nut-line)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <Icon name="bell" size={16} />
            <span style={{ position: 'absolute', top: 8, right: 8, width: 7, height: 7, background: 'var(--nut-accent)', borderRadius: '50%', border: '2px solid var(--nut-surface)' }} />
          </button>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 14px 6px 6px', background: 'var(--nut-surface)', border: '1px solid var(--nut-line)', borderRadius: 24 }}>
            <Avatar initials="AO" size={28} />
            <span style={{ fontSize: 13, fontWeight: 600 }}>Adaeze O.</span>
          </span>
        </div>

        {/* header */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.025em' }}>Good afternoon, Adaeze 👋</h2>
            <p style={{ fontSize: 13, color: 'var(--nut-ink-muted)', marginTop: 4 }}>Here's your financial overview · Tuesday, 28 April 2026</p>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="nut-cta secondary" style={{ width: 'auto', padding: '10px 16px' }}>
              <Icon name="arrowDown" size={14} /> Add money
            </button>
            <button className="nut-cta" style={{ width: 'auto', padding: '10px 16px' }}>
              <Icon name="loan" size={14} /> Apply for loan
            </button>
          </div>
        </div>

        {/* stat row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 18 }}>
          {[
            { l: 'Wallet balance', v: 486200.55, d: 'Available now', icon: 'wallet', color: 'var(--nut-primary)', trend: '+₦12,400 this mo' },
            { l: 'Total savings', v: 284600, d: '3 active goals', icon: 'savings', color: 'oklch(0.55 0.12 245)', trend: '4.2% APY' },
            { l: 'Active loan', v: 140000, d: 'Outstanding · 2 mo left', icon: 'loan', color: 'oklch(0.55 0.13 35)', trend: 'Next ₦27,500 · 4 May' },
            { l: 'Insurance', v: 2, d: 'active policies', icon: 'shield', color: 'oklch(0.5 0.13 155)', count: true, trend: 'Health, Motor' },
          ].map((s) => (
            <div key={s.l} className="nut-card-elevated" style={{ padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--nut-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.l}</span>
                <span style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--nut-primary-soft)', color: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={s.icon} size={16} />
                </span>
              </div>
              {s.count
                ? <div className="nut-amount" style={{ fontSize: 26 }}>{s.v} <span style={{ fontSize: 13, color: 'var(--nut-ink-faint)', fontWeight: 500 }}>{s.d}</span></div>
                : <Naira value={s.v} size={22} />}
              {!s.count && <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginTop: 2 }}>{s.d}</div>}
              <div style={{ fontSize: 11, color: 'var(--nut-success)', marginTop: 8, fontWeight: 600 }}>{s.trend}</div>
            </div>
          ))}
        </div>

        {/* big chart + side panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14, marginBottom: 18 }}>
          <div className="nut-card-elevated" style={{ padding: 22 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700 }}>Net cashflow</h4>
                <p style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginTop: 2 }}>Last 6 months</p>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['1M', '3M', '6M', '1Y'].map((p, i) => (
                  <button key={p} style={{
                    padding: '6px 12px', fontSize: 11, fontWeight: 600, borderRadius: 8,
                    border: 'none', cursor: 'pointer',
                    background: i === 2 ? 'var(--nut-primary-soft)' : 'transparent',
                    color: i === 2 ? 'var(--nut-primary)' : 'var(--nut-ink-muted)',
                  }}>{p}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 24, marginBottom: 12, fontSize: 12 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--nut-ink-muted)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--nut-primary)' }} /> Income
                </div>
                <Naira value={847200} size={17} color="var(--nut-ink)" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--nut-ink-muted)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--nut-accent)' }} /> Expenses
                </div>
                <Naira value={502800} size={17} color="var(--nut-ink)" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--nut-ink-muted)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--nut-success)' }} /> Net saved
                </div>
                <Naira value={344400} size={17} color="var(--nut-success)" />
              </div>
            </div>

            {/* SVG line+bar chart */}
            <svg viewBox="0 0 600 200" style={{ width: '100%', height: 200 }}>
              {/* grid */}
              {[0, 1, 2, 3].map((i) => (
                <line key={i} x1="40" x2="590" y1={40 + i * 40} y2={40 + i * 40} stroke="var(--nut-line)" strokeDasharray="3,3" />
              ))}
              {[0, 50, 100, 150].reverse().map((v, i) => (
                <text key={i} x="32" y={44 + i * 40} fontSize="9" fill="var(--nut-ink-faint)" textAnchor="end">{v}k</text>
              ))}
              {/* bars (income vs expense, monthly) */}
              {[
                [110, 70], [125, 82], [98, 58], [142, 92], [128, 78], [156, 94],
              ].map(([inc, exp], i) => {
                const x = 70 + i * 90;
                const incH = inc * 1.0;
                const expH = exp * 1.0;
                return (
                  <g key={i}>
                    <rect x={x} y={200 - incH - 30} width="14" height={incH} fill="var(--nut-primary)" rx="2" />
                    <rect x={x + 18} y={200 - expH - 30} width="14" height={expH} fill="var(--nut-accent)" rx="2" />
                    <text x={x + 16} y={185} fontSize="10" fill="var(--nut-ink-faint)" textAnchor="middle">{['Nov','Dec','Jan','Feb','Mar','Apr'][i]}</text>
                  </g>
                );
              })}
              {/* net savings line */}
              <path d="M 77 130 Q 167 110 257 138 T 437 96 T 617 84"
                fill="none" stroke="var(--nut-success)" strokeWidth="2.5" strokeLinecap="round" />
              {[130, 118, 138, 100, 96, 84].map((y, i) => (
                <circle key={i} cx={77 + i * 90} cy={y} r="3.5" fill="#fff" stroke="var(--nut-success)" strokeWidth="2" />
              ))}
            </svg>
          </div>

          {/* spending breakdown donut */}
          <div className="nut-card-elevated" style={{ padding: 22 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>Where it went</h4>
            <p style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginBottom: 14 }}>This month · ₦94,120</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
              <svg width="160" height="160" viewBox="0 0 160 160">
                <circle cx="80" cy="80" r="60" fill="none" stroke="var(--nut-surface-muted)" strokeWidth="20" />
                {/* arcs: 38, 28, 18, 16 */}
                {[
                  { c: 'var(--nut-primary)', d: 0.38, off: 0 },
                  { c: 'oklch(0.55 0.12 245)', d: 0.28, off: 0.38 },
                  { c: 'var(--nut-accent)', d: 0.18, off: 0.66 },
                  { c: 'oklch(0.55 0.14 25)', d: 0.16, off: 0.84 },
                ].map((a, i) => {
                  const C = 2 * Math.PI * 60;
                  return <circle key={i} cx="80" cy="80" r="60" fill="none" stroke={a.c} strokeWidth="20"
                    strokeDasharray={`${a.d * C} ${C}`} strokeDashoffset={-a.off * C}
                    transform="rotate(-90 80 80)" strokeLinecap="butt" />;
                })}
                <text x="80" y="78" fontSize="11" textAnchor="middle" fill="var(--nut-ink-muted)" fontFamily="var(--nut-font-display)">Total</text>
                <text x="80" y="94" fontSize="16" textAnchor="middle" fontWeight="800" fill="var(--nut-ink)" fontFamily="var(--nut-font-display)">₦94k</text>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { l: 'Loan repayment', v: '₦35,200', c: 'var(--nut-primary)' },
                { l: 'Goals & savings', v: '₦27,500', c: 'oklch(0.55 0.12 245)' },
                { l: 'Insurance', v: '₦16,800', c: 'var(--nut-accent)' },
                { l: 'Bills & transfers', v: '₦14,620', c: 'oklch(0.55 0.14 25)' },
              ].map((r) => (
                <div key={r.l} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: r.c }} />
                  <span style={{ flex: 1, color: 'var(--nut-ink-muted)' }}>{r.l}</span>
                  <span style={{ fontWeight: 700 }}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* loan progress + activity */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <div className="nut-card-elevated" style={{ padding: 22 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700 }}>Active loan</h4>
                <p style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>Salary advance · NUT-LN-29481</p>
              </div>
              <span className="nut-pill">4 / 6 paid</span>
            </div>
            <Naira value={140000} size={28} />
            <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginTop: 2 }}>Outstanding of ₦420,000 borrowed</div>
            <div style={{ marginTop: 14 }}>
              <Progress value={4/6} height={8} />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: 'var(--nut-ink-muted)' }}>
                <span>Started 4 Dec 2025</span>
                <span>Ends 4 Jul 2026</span>
              </div>
            </div>
            <div style={{ marginTop: 18, padding: 14, background: 'var(--nut-primary-soft)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 11, color: 'var(--nut-primary-deep)' }}>Next instalment · 04 May</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--nut-primary-deep)' }}>₦27,500</div>
              </div>
              <button style={{ padding: '8px 14px', borderRadius: 10, background: 'var(--nut-primary)', color: '#fff', border: 'none', fontWeight: 700, fontSize: 13 }}>Pay early</button>
            </div>
          </div>

          <div className="nut-card-elevated" style={{ padding: 22 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
              <h4 style={{ fontSize: 14, fontWeight: 700 }}>Recent activity</h4>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--nut-primary)' }}>See all</span>
            </div>
            <div style={{ marginTop: 6 }}>
              <TxnRow icon="briefcase" title="Salary credit · LSUBEB" sub="Apr 28" amount="124,500.00" />
              <hr className="nut-divider" />
              <TxnRow icon="loan" title="Loan repayment" sub="Apr 25 · Auto-debit" amount="27,500.00" neg />
              <hr className="nut-divider" />
              <TxnRow icon="target" title="Goal · school fees" sub="Apr 22" amount="15,000.00" neg />
              <hr className="nut-divider" />
              <TxnRow icon="shield" title="Motor premium · AIICO" sub="Apr 14" amount="7,750.00" neg />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Object.assign(window, { WebMemberPortal });
