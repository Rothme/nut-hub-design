// Loans, Savings, Insurance, Transactions, Support, Profile screens

// ─────────────────────────────────────────────────────────────
// LOANS — overview / list
// ─────────────────────────────────────────────────────────────
function ScreenLoans({ state = 'approved' }) {
  const withLoan = state === 'with_loan';
  const products = [
    { id: 'salary', icon: 'briefcase', name: 'Salary advance', sub: 'Up to 50% of net pay · 1–6 months', rate: '2.5% / month', max: 750000, color: 'var(--nut-primary)' },
    { id: 'edu', icon: 'edu', name: 'Education loan', sub: 'For your wards · 6–24 months', rate: '1.8% / month', max: 1500000, color: 'oklch(0.55 0.12 245)' },
    { id: 'asset', icon: 'car', name: 'Asset finance', sub: 'Vehicle, laptop, home equipment', rate: '2.1% / month', max: 5000000, color: 'oklch(0.62 0.12 50)' },
  ];

  return (
    <PhoneScreen padding={0} bottom={false}
      header={<ScreenHeader large title="Loans" sub="Borrow with your NUT membership" right={<button style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--nut-surface-muted)', border: 'none' }}><Icon name="question" size={16} /></button>} />}
    >
      <div style={{ padding: 16 }}>
        {withLoan && (
          <div className="nut-card-elevated" style={{ padding: 16, marginBottom: 14, background: 'linear-gradient(135deg, var(--nut-primary) 0%, var(--nut-primary-deep) 100%)', color: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: 11, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Active loan · Salary advance</span>
              <span style={{ fontSize: 11, padding: '3px 8px', background: 'oklch(1 0 0 / 0.18)', borderRadius: 999, fontWeight: 600 }}>4 / 6 paid</span>
            </div>
            <Naira value={420000} size={28} color="#fff" />
            <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>Outstanding balance · ₦140,000 left</div>
            <div style={{ marginTop: 14 }}>
              <Progress value={4/6} color="var(--nut-accent)" bg="oklch(1 0 0 / 0.15)" height={5} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 }}>
              <div>
                <div style={{ fontSize: 11, opacity: 0.7 }}>Next instalment</div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>₦27,500 on 04 May</div>
              </div>
              <button style={{ background: 'var(--nut-accent)', color: 'oklch(0.25 0.05 80)', border: 'none', padding: '10px 14px', borderRadius: 10, fontWeight: 700, fontSize: 13 }}>Pay now</button>
            </div>
          </div>
        )}

        {!withLoan && (
          <div className="nut-card-elevated" style={{ padding: 16, marginBottom: 14, background: 'var(--nut-primary-soft)', border: 'none' }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--nut-primary-deep)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>You qualify for</div>
            <Naira value={1500000} size={32} color="var(--nut-primary-deep)" />
            <div style={{ fontSize: 12, color: 'var(--nut-primary-ink)', marginTop: 4, opacity: 0.8 }}>Across all loan products · No collateral required</div>
            <button className="nut-cta" style={{ marginTop: 14 }}>Check eligibility</button>
          </div>
        )}

        <SectionTitle title="Loan products" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {products.map((p) => (
            <div key={p.id} className="nut-card" style={{ padding: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--nut-primary-soft)', color: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={p.icon} size={20} />
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: 'var(--nut-ink-faint)' }}>{p.sub}</div>
                <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--nut-primary)' }}>{p.rate}</span>
                  <span style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>· up to ₦{(p.max/1000).toFixed(0)}k</span>
                </div>
              </div>
              <Icon name="chevronRight" size={16} color="var(--nut-ink-faint)" />
            </div>
          ))}
        </div>

        <SectionTitle title="Repayment history" action="View all" />
        <div className="nut-card" style={{ padding: '4px 14px' }}>
          <TxnRow icon="check" title="Apr instalment · paid" sub="25 Apr · Auto-debit" amount="27,500.00" neg status="Paid" />
          <hr className="nut-divider" />
          <TxnRow icon="check" title="Mar instalment · paid" sub="25 Mar · Auto-debit" amount="27,500.00" neg status="Paid" />
        </div>
      </div>
      <TabBar active="loans" onChange={() => {}} />
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// LOAN — Calculator + application
// ─────────────────────────────────────────────────────────────
function ScreenLoanCalc() {
  const principal = 350000;
  const months = 6;
  const monthly = Math.round(principal / months * 1.025);

  return (
    <PhoneScreen
      header={<ScreenHeader back title="Salary advance" onBack={() => {}} />}
      padding={18}
    >
      <div style={{ marginBottom: 6 }}>
        <p style={{ fontSize: 12, color: 'var(--nut-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>How much do you need?</p>
        <Naira value={principal} size={38} />
      </div>

      {/* range */}
      <div style={{ marginTop: 12, marginBottom: 8 }}>
        <div style={{ position: 'relative', height: 32, display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', left: 0, right: 0, height: 6, background: 'var(--nut-surface-muted)', borderRadius: 3 }} />
          <div style={{ position: 'absolute', left: 0, width: '46%', height: 6, background: 'var(--nut-primary)', borderRadius: 3 }} />
          <div style={{ position: 'absolute', left: '46%', transform: 'translateX(-50%)', width: 24, height: 24, background: '#fff', border: '3px solid var(--nut-primary)', borderRadius: '50%', boxShadow: '0 2px 6px oklch(0 0 0 / 0.18)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--nut-ink-faint)', marginTop: 4 }}>
          <span>₦20,000</span><span>₦750,000</span>
        </div>
      </div>

      <SectionTitle title="Repayment period" />
      <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
        {[1,3,6,12].map((m) => (
          <button key={m} style={{
            flex: 1, padding: '12px 0', borderRadius: 12, border: m === 6 ? '1.5px solid var(--nut-primary)' : '1.5px solid var(--nut-line)',
            background: m === 6 ? 'var(--nut-primary-soft)' : 'var(--nut-surface)',
            color: m === 6 ? 'var(--nut-primary-deep)' : 'var(--nut-ink-muted)',
            fontWeight: 700, fontSize: 14, cursor: 'pointer',
          }}>{m} mo</button>
        ))}
      </div>

      <div className="nut-card" style={{ padding: 14, marginBottom: 14, background: 'var(--nut-primary-soft)', border: 'none' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--nut-primary-deep)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>Repayment summary</div>
        {[
          ['Monthly instalment', '₦' + monthly.toLocaleString()],
          ['Interest rate', '2.5% / month'],
          ['Total repayable', '₦' + (monthly * months).toLocaleString()],
          ['Processing fee', '₦3,500'],
          ['Disbursement', '~30 minutes'],
        ].map(([k, v], i) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13, borderTop: i ? '1px dashed oklch(0.85 0.04 155)' : 'none' }}>
            <span style={{ color: 'var(--nut-primary-ink)', opacity: 0.75 }}>{k}</span>
            <span style={{ fontWeight: 700, color: 'var(--nut-primary-deep)' }}>{v}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: 12, background: 'oklch(0.96 0.04 28)', borderRadius: 12, fontSize: 12, color: 'oklch(0.40 0.13 28)', display: 'flex', gap: 8, marginBottom: 18 }}>
        <Icon name="alert" size={14} />
        Repayment is auto-debited on your salary date. Late payments attract 1% per day.
      </div>

      <button className="nut-cta">Continue application <Icon name="arrowRight" size={16} /></button>
    </PhoneScreen>
  );
}

// LOAN APPROVAL STATUS
function ScreenLoanApproved() {
  return (
    <PhoneScreen padding={20} bottom={false}
      header={<ScreenHeader back title="Loan application" onBack={() => {}} />}
    >
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: 20 }}>
        <div style={{
          width: 96, height: 96, borderRadius: '50%', background: 'var(--nut-primary-soft)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18,
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', inset: -8, borderRadius: '50%', border: '2px dashed var(--nut-primary)', opacity: 0.3 }} />
          <Icon name="check" size={48} stroke={2.6} color="var(--nut-primary)" />
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>You're approved!</h2>
        <p style={{ fontSize: 14, color: 'var(--nut-ink-muted)', maxWidth: 280, lineHeight: 1.5, marginBottom: 24 }}>
          ₦350,000 will be credited to your wallet within 30 minutes.
        </p>

        <div className="nut-card" style={{ width: '100%', padding: 16, marginBottom: 18 }}>
          {[
            ['Approved amount', <Naira key="a" value={350000} size={16} />],
            ['Reference', <span key="r" style={{ fontFamily: 'var(--nut-font-mono)', fontSize: 13 }}>NUT-LN-29481</span>],
            ['Disburse to', 'Wallet · GTB ****8821'],
            ['First repayment', '04 May 2026'],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', fontSize: 13, borderBottom: '1px dashed var(--nut-line)' }}>
              <span style={{ color: 'var(--nut-ink-muted)' }}>{k}</span>
              <span style={{ fontWeight: 700 }}>{v}</span>
            </div>
          ))}
        </div>

        <div style={{ width: '100%' }}>
          <button className="nut-cta">Go to wallet</button>
          <button className="nut-cta secondary" style={{ marginTop: 8 }}>Download offer letter</button>
        </div>
      </div>
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// SAVINGS
// ─────────────────────────────────────────────────────────────
function ScreenSavings() {
  const goals = [
    { name: "Children's school fees", target: 600000, saved: 384000, due: 'Sep 2026', icon: 'edu' },
    { name: 'Family vacation', target: 250000, saved: 92000, due: 'Dec 2026', icon: 'plane' },
    { name: 'Emergency fund', target: 500000, saved: 178400, due: 'Ongoing', icon: 'shield' },
  ];
  return (
    <PhoneScreen padding={0} bottom={false}
      header={<ScreenHeader large title="Savings" sub="Build, plan, protect" right={<button style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--nut-primary)', color: '#fff', border: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="plus" size={16} stroke={2.4} /></button>} />}
    >
      <div style={{ padding: 16 }}>
        {/* Hero balance + ring chart */}
        <div className="nut-card-elevated" style={{ padding: 16, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--nut-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Total savings</div>
            <Naira value={284600} size={26} />
            <div style={{ fontSize: 12, color: 'var(--nut-success)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name="trend" size={12} /> +₦24,800 (3 months)
            </div>
          </div>
          {/* ring chart */}
          <svg width="92" height="92" viewBox="0 0 92 92">
            <circle cx="46" cy="46" r="36" fill="none" stroke="var(--nut-surface-muted)" strokeWidth="10" />
            <circle cx="46" cy="46" r="36" fill="none" stroke="var(--nut-primary)" strokeWidth="10"
              strokeDasharray="226" strokeDashoffset="60" strokeLinecap="round" transform="rotate(-90 46 46)" />
            <circle cx="46" cy="46" r="36" fill="none" stroke="var(--nut-accent)" strokeWidth="10"
              strokeDasharray="226" strokeDashoffset="170" strokeLinecap="round" transform="rotate(-90 46 46)" />
            <text x="46" y="44" fontSize="11" fontFamily="var(--nut-font-display)" fontWeight="700" textAnchor="middle" fill="var(--nut-ink-muted)">Saved</text>
            <text x="46" y="58" fontSize="14" fontFamily="var(--nut-font-display)" fontWeight="800" textAnchor="middle" fill="var(--nut-ink)">73%</text>
          </svg>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
          <div className="nut-card" style={{ padding: 12 }}>
            <div style={{ fontSize: 11, color: 'var(--nut-ink-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Flexible wallet</div>
            <Naira value={68400} size={17} />
            <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginTop: 2 }}>2.5% APY · withdraw anytime</div>
          </div>
          <div className="nut-card" style={{ padding: 12 }}>
            <div style={{ fontSize: 11, color: 'var(--nut-ink-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Goals</div>
            <Naira value={216200} size={17} />
            <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginTop: 2 }}>4.2% APY · 3 active goals</div>
          </div>
        </div>

        <SectionTitle title="My goals" action="+ New goal" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {goals.map((g) => {
            const pct = g.saved / g.target;
            return (
              <div key={g.name} className="nut-card" style={{ padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ width: 38, height: 38, borderRadius: 12, background: 'var(--nut-primary-soft)', color: 'var(--nut-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={g.icon} size={18} />
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{g.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>Auto-debit · Every Friday · Due {g.due}</div>
                  </div>
                  <span className="nut-pill">{Math.round(pct * 100)}%</span>
                </div>
                <Progress value={pct} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 12 }}>
                  <span style={{ color: 'var(--nut-ink-muted)' }}>₦{g.saved.toLocaleString()} saved</span>
                  <span style={{ fontWeight: 700, color: 'var(--nut-ink)' }}>of ₦{g.target.toLocaleString()}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <TabBar active="savings" onChange={() => {}} />
    </PhoneScreen>
  );
}

// SAVINGS — new goal
function ScreenSavingsNew() {
  return (
    <PhoneScreen
      header={<ScreenHeader back title="New savings goal" onBack={() => {}} />}
      padding={20}
    >
      <SectionTitle title="What are you saving for?" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 22 }}>
        {[
          { i: 'edu', l: 'School fees', a: true },
          { i: 'plane', l: 'Travel' },
          { i: 'shield', l: 'Emergency' },
          { i: 'gift', l: 'Wedding' },
          { i: 'car', l: 'Vehicle' },
          { i: 'briefcase', l: 'Business' },
        ].map((c) => (
          <button key={c.l} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            padding: '14px 4px', borderRadius: 14,
            border: c.a ? '1.5px solid var(--nut-primary)' : '1.5px solid var(--nut-line)',
            background: c.a ? 'var(--nut-primary-soft)' : 'var(--nut-surface)',
            color: c.a ? 'var(--nut-primary-deep)' : 'var(--nut-ink-muted)',
            cursor: 'pointer',
          }}>
            <Icon name={c.i} size={22} />
            <span style={{ fontSize: 11, fontWeight: 600 }}>{c.l}</span>
          </button>
        ))}
      </div>

      <label className="nut-label">Goal name</label>
      <input className="nut-input" defaultValue="Children's school fees 2026/27" style={{ marginBottom: 14 }} />

      <label className="nut-label">Target amount</label>
      <div style={{ position: 'relative', marginBottom: 14 }}>
        <input className="nut-input" defaultValue="600,000" style={{ paddingLeft: 32, fontFamily: 'var(--nut-font-display)', fontWeight: 700, fontSize: 17 }} />
        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--nut-ink-faint)', fontWeight: 600 }}>₦</span>
      </div>

      <label className="nut-label">Target date</label>
      <input className="nut-input" defaultValue="15 September 2026" style={{ marginBottom: 18 }} />

      <SectionTitle title="Auto-debit" />
      <div className="nut-card" style={{ padding: 14, marginBottom: 18 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Frequency</div>
            <div style={{ fontSize: 12, color: 'var(--nut-ink-faint)' }}>How often we move money in</div>
          </div>
          <select className="nut-input" style={{ width: 'auto', padding: '8px 12px', fontSize: 13 }}>
            <option>Weekly</option><option>Monthly</option>
          </select>
        </div>
        <hr className="nut-divider" style={{ margin: '12px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Amount per debit</div>
            <div style={{ fontSize: 12, color: 'var(--nut-success)' }}>₦12,500 will reach goal on time ✓</div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>₦12,500</div>
        </div>
      </div>

      <button className="nut-cta">Create goal</button>
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// INSURANCE — Catalogue
// ─────────────────────────────────────────────────────────────
function ScreenInsurance() {
  const products = [
    { id: 'health', icon: 'heart', name: 'Health insurance', sub: 'HMO cover for you and family', from: 12500, color: 'oklch(0.55 0.14 25)' },
    { id: 'motor', icon: 'car', name: 'Motor insurance', sub: 'Comprehensive & third-party', from: 28000, color: 'oklch(0.5 0.13 245)' },
    { id: 'travel', icon: 'plane', name: 'Travel insurance', sub: 'Hajj, school trips, abroad', from: 8500, color: 'oklch(0.6 0.12 290)' },
  ];
  return (
    <PhoneScreen padding={0} bottom={false}
      header={<ScreenHeader large title="Insurance" sub="Protect what matters most" />}
    >
      <div style={{ padding: 16 }}>
        {/* Active policies */}
        <SectionTitle title="My policies" action="See all" />
        <div style={{ display: 'flex', gap: 10, overflow: 'visible', marginBottom: 18 }}>
          <div className="nut-card-elevated" style={{ flex: 1, padding: 14, background: 'linear-gradient(135deg, var(--nut-primary-deep), var(--nut-primary))', color: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Icon name="heart" size={20} />
              <span style={{ fontSize: 10, padding: '3px 8px', background: 'oklch(1 0 0 / 0.18)', borderRadius: 999, fontWeight: 600 }}>Bronze</span>
            </div>
            <div style={{ fontSize: 11, opacity: 0.8, marginTop: 14 }}>Health · Hygeia HMO</div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Family of 4</div>
            <div style={{ fontSize: 11, opacity: 0.8, marginTop: 6 }}>Renews 12 Aug 2026</div>
          </div>
          <div className="nut-card-elevated" style={{ flex: 1, padding: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Icon name="car" size={20} color="var(--nut-primary)" />
              <span className="nut-pill success">Active</span>
            </div>
            <div style={{ fontSize: 11, color: 'var(--nut-ink-muted)', marginTop: 14 }}>Motor · AIICO</div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Comprehensive</div>
            <div style={{ fontSize: 11, color: 'var(--nut-ink-muted)', marginTop: 6 }}>Renews 03 Nov 2026</div>
          </div>
        </div>

        <SectionTitle title="Browse cover" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
          {products.map((p) => (
            <div key={p.id} className="nut-card" style={{ padding: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--nut-primary-soft)', color: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={p.icon} size={20} />
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: 'var(--nut-ink-faint)' }}>{p.sub}</div>
                <div style={{ fontSize: 11, color: 'var(--nut-primary)', fontWeight: 700, marginTop: 4 }}>From ₦{p.from.toLocaleString()} / year</div>
              </div>
              <button style={{ padding: '8px 12px', borderRadius: 10, border: 'none', background: 'var(--nut-primary)', color: '#fff', fontWeight: 700, fontSize: 12 }}>Get quote</button>
            </div>
          ))}
        </div>

        <div className="nut-card" style={{ padding: 14, background: 'var(--nut-accent-soft)', border: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <Icon name="alert" size={22} color="oklch(0.45 0.13 75)" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'oklch(0.35 0.12 75)' }}>Need to file a claim?</div>
            <div style={{ fontSize: 11, color: 'oklch(0.4 0.1 75)' }}>Most claims processed within 72 hours</div>
          </div>
          <Icon name="arrowRight" size={18} color="oklch(0.45 0.13 75)" />
        </div>
      </div>
      <TabBar active="insurance" onChange={() => {}} />
    </PhoneScreen>
  );
}

// INSURANCE — Quote builder (motor)
function ScreenInsuranceQuote() {
  return (
    <PhoneScreen
      header={<ScreenHeader back title="Motor insurance · 2/4" onBack={() => {}} />}
      padding={20}
    >
      <Progress value={0.5} />
      <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 22, marginBottom: 14 }}>Tell us about your vehicle</h2>

      <label className="nut-label">Coverage type</label>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 14 }}>
        <div style={{ padding: 14, borderRadius: 12, border: '1.5px solid var(--nut-line)', background: 'var(--nut-surface)' }}>
          <div style={{ fontSize: 13, fontWeight: 700 }}>Third-party</div>
          <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginTop: 2 }}>Legal minimum</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--nut-primary)', marginTop: 6 }}>₦15,000/yr</div>
        </div>
        <div style={{ padding: 14, borderRadius: 12, border: '1.5px solid var(--nut-primary)', background: 'var(--nut-primary-soft)', position: 'relative' }}>
          <span style={{ position: 'absolute', top: 8, right: 8, fontSize: 9, padding: '2px 6px', background: 'var(--nut-primary)', color: '#fff', borderRadius: 999, fontWeight: 700 }}>POPULAR</span>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--nut-primary-deep)' }}>Comprehensive</div>
          <div style={{ fontSize: 11, color: 'var(--nut-primary-ink)', opacity: 0.7, marginTop: 2 }}>Theft, fire, accident</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--nut-primary)', marginTop: 6 }}>₦82,500/yr</div>
        </div>
      </div>

      <label className="nut-label">Vehicle</label>
      <input className="nut-input" defaultValue="Toyota Corolla 2018 · Sedan" style={{ marginBottom: 12 }} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
        <div>
          <label className="nut-label">Plate number</label>
          <input className="nut-input" defaultValue="LSD-481-FW" />
        </div>
        <div>
          <label className="nut-label">Estimated value</label>
          <input className="nut-input" defaultValue="₦4,500,000" />
        </div>
      </div>

      <label className="nut-label">Add-ons</label>
      <div className="nut-card" style={{ padding: 4, marginBottom: 18 }}>
        {[
          ['Roadside assistance', '₦4,000/yr', true],
          ['Personal accident cover', '₦6,500/yr', true],
          ['Tracking device install', '₦12,000', false],
        ].map(([t, p, on]) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 12px' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{t}</div>
              <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>{p}</div>
            </div>
            <span style={{
              width: 40, height: 24, borderRadius: 12, padding: 2,
              background: on ? 'var(--nut-primary)' : 'var(--nut-surface-muted)',
              display: 'flex', alignItems: 'center', justifyContent: on ? 'flex-end' : 'flex-start',
            }}>
              <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#fff', boxShadow: '0 1px 3px oklch(0 0 0 / 0.2)' }} />
            </span>
          </div>
        ))}
      </div>

      <div style={{ padding: 14, background: 'var(--nut-primary-soft)', borderRadius: 14, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--nut-primary-deep)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Estimated quote</div>
          <Naira value={93000} size={24} color="var(--nut-primary-deep)" />
          <div style={{ fontSize: 11, color: 'var(--nut-primary-ink)', opacity: 0.8 }}>or ₦7,750/month</div>
        </div>
        <Icon name="trend" size={32} color="var(--nut-primary)" />
      </div>

      <button className="nut-cta">Continue to documents</button>
    </PhoneScreen>
  );
}

// INSURANCE — Policy certificate
function ScreenInsuranceCert() {
  return (
    <PhoneScreen
      header={<ScreenHeader back title="Policy certificate" onBack={() => {}} right={<button style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--nut-surface-muted)', border: 'none' }}><Icon name="download" size={16} /></button>} />}
      padding={20}
    >
      <div style={{
        background: 'linear-gradient(135deg, var(--nut-primary) 0%, var(--nut-primary-deep) 100%)',
        color: '#fff', borderRadius: 18, padding: 20, marginBottom: 16,
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', right: -50, top: -50, width: 160, height: 160, borderRadius: '50%', border: '20px solid oklch(1 0 0 / 0.06)' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <span style={{ fontSize: 11, opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 700 }}>Motor · Comprehensive</span>
          <span style={{ fontSize: 10, padding: '3px 8px', background: 'var(--nut-accent)', color: 'oklch(0.25 0.05 80)', borderRadius: 999, fontWeight: 700 }}>ACTIVE</span>
        </div>
        <div style={{ fontSize: 11, opacity: 0.7 }}>Policy holder</div>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 14 }}>Mrs. Adaeze Okonkwo</div>
        <div style={{ display: 'flex', gap: 18, marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 10, opacity: 0.7 }}>Policy no.</div>
            <div style={{ fontSize: 13, fontWeight: 700, fontFamily: 'var(--nut-font-mono)' }}>NUT-MTR-29481</div>
          </div>
          <div>
            <div style={{ fontSize: 10, opacity: 0.7 }}>Underwriter</div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>AIICO</div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ fontSize: 10, opacity: 0.7 }}>Valid until</div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>03 Nov 2026</div>
          </div>
          <div style={{ width: 56, height: 56, background: '#fff', borderRadius: 8, padding: 6 }}>
            <svg viewBox="0 0 21 21" width="100%" height="100%">
              {Array.from({ length: 49 }).map((_, i) => {
                const x = i % 7, y = Math.floor(i / 7);
                const filled = ((x + y * 3 + (x * y) % 5) % 3) !== 0;
                return filled ? <rect key={i} x={x*3} y={y*3} width="3" height="3" fill="#000" /> : null;
              })}
            </svg>
          </div>
        </div>
      </div>

      <SectionTitle title="Coverage details" />
      <div className="nut-card" style={{ padding: '4px 14px' }}>
        {[
          ['Sum insured', '₦4,500,000'],
          ['Vehicle', 'Toyota Corolla · LSD-481-FW'],
          ['Add-ons', 'Roadside, PA cover'],
          ['Premium', '₦93,000/yr'],
        ].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', fontSize: 13, borderBottom: '1px dashed var(--nut-line)' }}>
            <span style={{ color: 'var(--nut-ink-muted)' }}>{k}</span>
            <span style={{ fontWeight: 700 }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 18 }}>
        <button className="nut-cta">File a claim</button>
      </div>
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// TRANSACTION HISTORY
// ─────────────────────────────────────────────────────────────
function ScreenTxnHistory() {
  return (
    <PhoneScreen padding={0} bottom={false}
      header={<ScreenHeader back title="Transactions" onBack={() => {}} right={<button style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--nut-surface-muted)', border: 'none' }}><Icon name="filter" size={16} /></button>} />}
    >
      <div style={{ padding: '12px 16px' }}>
        <div style={{ display: 'flex', gap: 6, overflow: 'visible', marginBottom: 14 }}>
          {['All', 'In', 'Out', 'Loans', 'Savings', 'Insurance'].map((t, i) => (
            <button key={t} style={{
              padding: '8px 14px', fontSize: 12, fontWeight: 600, borderRadius: 999, cursor: 'pointer',
              border: i === 0 ? 'none' : '1px solid var(--nut-line)',
              background: i === 0 ? 'var(--nut-primary)' : 'var(--nut-surface)',
              color: i === 0 ? '#fff' : 'var(--nut-ink-muted)', whiteSpace: 'nowrap',
            }}>{t}</button>
          ))}
        </div>

        {[
          { d: 'Today, 28 Apr 2026', items: [
            { i: 'briefcase', t: 'Salary credit · LSUBEB', s: '9:02 AM · Ref TXN8821', a: '124,500.00', n: false },
            { i: 'send', t: 'Transfer to Chinedu O.', s: '11:45 AM · GTB ****4421', a: '15,000.00', n: true },
          ]},
          { d: 'Yesterday', items: [
            { i: 'loan', t: 'Loan repayment · Apr', s: 'Auto-debit · Salary advance', a: '27,500.00', n: true },
            { i: 'target', t: 'Goal: school fees', s: 'Auto-save', a: '12,500.00', n: true, st: 'On track' },
          ]},
          { d: '24 Apr', items: [
            { i: 'shield', t: 'Motor insurance premium', s: 'AIICO · Comprehensive', a: '7,750.00', n: true },
            { i: 'card', t: 'POS · Shoprite Lekki', s: 'Visa debit', a: '8,420.00', n: true },
          ]},
          { d: '14 Apr', items: [
            { i: 'arrowDown', t: 'Wallet top-up', s: 'From GTB ****8821', a: '50,000.00', n: false },
          ]},
        ].map((g) => (
          <div key={g.d} style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--nut-ink-faint)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{g.d}</div>
            <div className="nut-card" style={{ padding: '4px 14px' }}>
              {g.items.map((it, i) => (
                <React.Fragment key={i}>
                  <TxnRow icon={it.i} title={it.t} sub={it.s} amount={it.a} neg={it.n} status={it.st} />
                  {i < g.items.length - 1 && <hr className="nut-divider" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// SUPPORT
// ─────────────────────────────────────────────────────────────
function ScreenSupport() {
  return (
    <PhoneScreen padding={0} bottom={false}
      header={<ScreenHeader back title="Help & support" onBack={() => {}} />}
    >
      <div style={{ padding: 16 }}>
        <div className="nut-card-elevated" style={{ padding: 18, marginBottom: 16, background: 'linear-gradient(135deg, var(--nut-primary), var(--nut-primary-deep))', color: '#fff' }}>
          <Icon name="chat" size={24} />
          <h3 style={{ fontSize: 18, fontWeight: 800, marginTop: 10, marginBottom: 4 }}>How can we help, Adaeze?</h3>
          <p style={{ fontSize: 12.5, opacity: 0.85, marginBottom: 14 }}>Average response time today: 8 minutes</p>
          <button style={{ padding: '10px 14px', borderRadius: 10, background: 'var(--nut-accent)', color: 'oklch(0.25 0.05 80)', border: 'none', fontWeight: 700, fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            Start new chat <Icon name="arrowRight" size={14} />
          </button>
        </div>

        <SectionTitle title="My tickets" action="See all" />
        <div className="nut-card" style={{ padding: 4, marginBottom: 18 }}>
          {[
            { t: 'Loan disbursement delayed', s: 'TKT-2901 · Opened 2 days ago', st: 'In progress', stc: 'gold' },
            { t: 'Update next of kin', s: 'TKT-2871 · Opened 5 days ago', st: 'Resolved', stc: 'success' },
            { t: 'BVN re-verification', s: 'TKT-2840 · 1 week ago', st: 'Resolved', stc: 'success' },
          ].map((tk) => (
            <div key={tk.s} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 12px', borderBottom: '1px dashed var(--nut-line)' }}>
              <span style={{ width: 38, height: 38, borderRadius: 12, background: 'var(--nut-surface-muted)', color: 'var(--nut-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="doc" size={18} />
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{tk.t}</div>
                <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>{tk.s}</div>
              </div>
              <span className={'nut-pill ' + tk.stc}>{tk.st}</span>
            </div>
          ))}
        </div>

        <SectionTitle title="Browse topics" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
          {[
            { i: 'loan', l: 'Loans & repayment' },
            { i: 'savings', l: 'Savings & goals' },
            { i: 'shield', l: 'Insurance claims' },
            { i: 'card', l: 'Cards & wallets' },
          ].map((c) => (
            <div key={c.l} style={{ padding: 14, borderRadius: 14, border: '1px solid var(--nut-line)', background: 'var(--nut-surface)' }}>
              <Icon name={c.i} size={20} color="var(--nut-primary)" />
              <div style={{ fontSize: 13, fontWeight: 700, marginTop: 8 }}>{c.l}</div>
              <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>12 articles</div>
            </div>
          ))}
        </div>

        <div className="nut-card" style={{ padding: 14, display: 'flex', gap: 12, alignItems: 'center' }}>
          <Icon name="phone" size={20} color="var(--nut-primary)" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700 }}>Call your branch officer</div>
            <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>Lagos · Mr. Idris · 0803 558 2244</div>
          </div>
          <button style={{ padding: '8px 14px', borderRadius: 10, background: 'var(--nut-primary)', color: '#fff', border: 'none', fontWeight: 700, fontSize: 12 }}>Call</button>
        </div>
      </div>
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// PROFILE
// ─────────────────────────────────────────────────────────────
function ScreenProfile() {
  return (
    <PhoneScreen padding={0} bottom={false}
      header={<ScreenHeader large title="Profile" />}
    >
      <div style={{ padding: 16 }}>
        <div className="nut-card-elevated" style={{ padding: 18, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
          <Avatar initials="AO" size={56} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 800 }}>Mrs. Adaeze Okonkwo</div>
            <div style={{ fontSize: 12, color: 'var(--nut-ink-faint)' }}>Member since Aug 2018</div>
            <div style={{ fontSize: 11, color: 'var(--nut-primary)', fontWeight: 600, marginTop: 4, fontFamily: 'var(--nut-font-mono)' }}>NUT-LG-018-44829</div>
          </div>
          <span className="nut-pill success"><Icon name="check" size={11} stroke={2.4} /> Verified</span>
        </div>

        {[
          { t: 'Account', items: [
            { i: 'user', l: 'Personal details', s: 'Name, DOB, address' },
            { i: 'building', l: 'School & branch', s: 'Government Sec. School, Surulere' },
            { i: 'card', l: 'Linked bank accounts', s: '2 accounts linked' },
            { i: 'badge', l: 'NUT membership card', s: 'Digital ID' },
          ]},
          { t: 'Security', items: [
            { i: 'lock', l: 'Change PIN', s: 'Last changed 14 days ago' },
            { i: 'fingerprint', l: 'Biometric login', s: 'Enabled' },
            { i: 'shield', l: 'Two-factor auth', s: 'Via SMS' },
          ]},
          { t: 'Preferences', items: [
            { i: 'bell', l: 'Notifications' },
            { i: 'cog', l: 'App settings' },
            { i: 'doc', l: 'Statements & tax docs' },
          ]},
        ].map((sec) => (
          <div key={sec.t} style={{ marginBottom: 14 }}>
            <SectionTitle title={sec.t} />
            <div className="nut-card" style={{ padding: 4 }}>
              {sec.items.map((it, i) => (
                <div key={it.l} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 12px', borderBottom: i < sec.items.length - 1 ? '1px dashed var(--nut-line)' : 'none' }}>
                  <span style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--nut-primary-soft)', color: 'var(--nut-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={it.i} size={16} />
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{it.l}</div>
                    {it.s && <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>{it.s}</div>}
                  </div>
                  <Icon name="chevronRight" size={14} color="var(--nut-ink-faint)" />
                </div>
              ))}
            </div>
          </div>
        ))}

        <button className="nut-cta secondary" style={{ color: 'var(--nut-danger)', borderColor: 'oklch(0.92 0.04 28)' }}>
          <Icon name="logout" size={16} /> Sign out
        </button>
      </div>
      <TabBar active="profile" onChange={() => {}} />
    </PhoneScreen>
  );
}

Object.assign(window, {
  ScreenLoans, ScreenLoanCalc, ScreenLoanApproved,
  ScreenSavings, ScreenSavingsNew,
  ScreenInsurance, ScreenInsuranceQuote, ScreenInsuranceCert,
  ScreenTxnHistory, ScreenSupport, ScreenProfile,
});
