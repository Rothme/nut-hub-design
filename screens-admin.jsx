// Admin portal — KPIs, queues, user management, audit logs.

function AdminPortal() {
  return (
    <div className="nut-app" style={{ display: 'flex', flexDirection: 'row', height: '100%', background: 'var(--nut-surface-muted)' }}>
      {/* sidebar */}
      <aside style={{
        width: 232, background: 'oklch(0.18 0.018 155)', color: '#fff',
        display: 'flex', flexDirection: 'column', padding: '20px 14px',
      }}>
        <div style={{ padding: '4px 8px 22px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--nut-accent)', color: 'oklch(0.25 0.05 80)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--nut-font-display)', fontWeight: 800, fontSize: 14 }}>
            N<span style={{ width: 4, height: 4, background: 'var(--nut-primary)', borderRadius: '50%', marginLeft: 1, alignSelf: 'flex-end', marginBottom: 4 }} />
          </span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 800 }}>NUT Hub</div>
            <div style={{ fontSize: 10, opacity: 0.6, letterSpacing: '0.1em' }}>OPERATIONS</div>
          </div>
        </div>

        {[
          { sec: 'Overview', items: [
            { i: 'home', l: 'Dashboard', active: true },
            { i: 'pie', l: 'Reports' },
            { i: 'trend', l: 'Analytics' },
          ]},
          { sec: 'Queues', items: [
            { i: 'badge', l: 'KYC review', count: 24 },
            { i: 'loan', l: 'Loan approvals', count: 16 },
            { i: 'shield', l: 'Insurance underwriting', count: 8 },
            { i: 'chat', l: 'Support tickets', count: 41 },
          ]},
          { sec: 'Manage', items: [
            { i: 'user', l: 'Members' },
            { i: 'building', l: 'Branches' },
            { i: 'doc', l: 'Audit logs' },
          ]},
        ].map((g) => (
          <div key={g.sec} style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'oklch(1 0 0 / 0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0 12px 6px' }}>{g.sec}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {g.items.map((n) => (
                <button key={n.l} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  padding: '9px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
                  background: n.active ? 'oklch(1 0 0 / 0.1)' : 'transparent',
                  color: n.active ? '#fff' : 'oklch(1 0 0 / 0.65)',
                  fontWeight: n.active ? 600 : 500, fontSize: 13, textAlign: 'left',
                  fontFamily: 'inherit',
                }}>
                  <Icon name={n.i} size={16} />
                  <span style={{ flex: 1 }}>{n.l}</span>
                  {n.count != null && (
                    <span style={{ fontSize: 11, padding: '2px 8px', background: 'var(--nut-accent)', color: 'oklch(0.25 0.05 80)', borderRadius: 999, fontWeight: 700 }}>{n.count}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div style={{ flex: 1 }} />
        <div style={{ padding: 12, background: 'oklch(1 0 0 / 0.05)', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Avatar initials="OI" color="oklch(1 0 0 / 0.18)" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 600 }}>Officer Idris</div>
            <div style={{ fontSize: 10, opacity: 0.6 }}>Lagos branch · Admin</div>
          </div>
          <Icon name="more" size={14} color="oklch(1 0 0 / 0.6)" />
        </div>
      </aside>

      <main style={{ flex: 1, padding: '20px 32px 40px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}>
          <div>
            <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.025em' }}>Operations dashboard</h2>
            <p style={{ fontSize: 12, color: 'var(--nut-ink-muted)', marginTop: 2 }}>Tuesday, 28 April 2026 · Last sync 2 min ago</p>
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ position: 'relative', maxWidth: 280, flex: 1 }}>
            <Icon name="search" size={14} color="var(--nut-ink-faint)" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
            <input className="nut-input" placeholder="Search member, ticket, ID…" style={{ paddingLeft: 34, padding: '10px 12px 10px 34px', fontSize: 12 }} />
          </div>
          <button className="nut-cta" style={{ width: 'auto', padding: '10px 16px', fontSize: 13 }}>
            <Icon name="download" size={14} /> Export report
          </button>
        </div>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 18 }}>
          {[
            { l: 'Total members', v: '128,422', d: '+1,840 this month', trend: '+1.4%', color: 'var(--nut-primary)' },
            { l: 'Active loan book', v: '₦8.4B', d: '4,182 active loans', trend: '+₦220M', color: 'oklch(0.55 0.13 35)' },
            { l: 'Savings under management', v: '₦12.1B', d: '64% goal-based', trend: '+3.2%', color: 'oklch(0.55 0.12 245)' },
            { l: 'Default rate', v: '2.1%', d: 'NPL · industry avg 4.8%', trend: '−0.3pp', color: 'var(--nut-success)' },
          ].map((s) => (
            <div key={s.l} className="nut-card-elevated" style={{ padding: 18 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--nut-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>{s.l}</div>
              <div className="nut-amount" style={{ fontSize: 26, color: 'var(--nut-ink)' }}>{s.v}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                <span style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>{s.d}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: s.color, padding: '2px 8px', background: 'var(--nut-primary-soft)', borderRadius: 999 }}>{s.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Two-column: Loan book chart | Approval queues */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14, marginBottom: 18 }}>
          <div className="nut-card-elevated" style={{ padding: 22 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10 }}>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700 }}>Loan book by product</h4>
                <p style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>Active disbursements · last 12 months</p>
              </div>
              <div style={{ display: 'flex', gap: 16, fontSize: 11 }}>
                {[
                  { c: 'var(--nut-primary)', l: 'Salary advance' },
                  { c: 'oklch(0.55 0.12 245)', l: 'Education' },
                  { c: 'var(--nut-accent)', l: 'Asset finance' },
                ].map((x) => (
                  <span key={x.l} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--nut-ink-muted)' }}>
                    <span style={{ width: 8, height: 8, borderRadius: 2, background: x.c }} />{x.l}
                  </span>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 700 240" style={{ width: '100%', height: 240 }}>
              {[0, 1, 2, 3, 4].map((i) => (
                <line key={i} x1="40" x2="690" y1={30 + i * 40} y2={30 + i * 40} stroke="var(--nut-line)" strokeDasharray="3,3" />
              ))}
              {[800, 600, 400, 200, 0].map((v, i) => (
                <text key={i} x="32" y={34 + i * 40} fontSize="10" fill="var(--nut-ink-faint)" textAnchor="end">{v}M</text>
              ))}
              {Array.from({ length: 12 }).map((_, i) => {
                const x = 60 + i * 53;
                const a = 60 + Math.sin(i * 0.6) * 20 + i * 4;
                const b = 30 + Math.cos(i * 0.4) * 12 + i * 2;
                const c = 18 + Math.sin(i * 0.3) * 8 + i * 1.5;
                return (
                  <g key={i}>
                    <rect x={x} y={210 - a} width="14" height={a} fill="var(--nut-primary)" rx="2" />
                    <rect x={x + 16} y={210 - b} width="14" height={b} fill="oklch(0.55 0.12 245)" rx="2" />
                    <rect x={x + 32} y={210 - c} width="14" height={c} fill="var(--nut-accent)" rx="2" />
                    <text x={x + 23} y={224} fontSize="9" fill="var(--nut-ink-faint)" textAnchor="middle">
                      {['M','J','J','A','S','O','N','D','J','F','M','A'][i]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="nut-card-elevated" style={{ padding: 22 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>Today's queues</h4>
            <p style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginBottom: 14 }}>Items awaiting action</p>
            {[
              { l: 'KYC review', v: 24, sla: '~2h SLA', icon: 'badge', color: 'var(--nut-primary)' },
              { l: 'Loan approvals', v: 16, sla: '5 urgent', icon: 'loan', color: 'oklch(0.55 0.13 35)' },
              { l: 'Insurance underwriting', v: 8, sla: 'within SLA', icon: 'shield', color: 'oklch(0.5 0.13 155)' },
              { l: 'Support tickets', v: 41, sla: '12 unassigned', icon: 'chat', color: 'oklch(0.55 0.12 245)' },
            ].map((q, i) => (
              <div key={q.l} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: i ? '1px dashed var(--nut-line)' : 'none' }}>
                <span style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--nut-primary-soft)', color: q.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={q.icon} size={16} />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{q.l}</div>
                  <div style={{ fontSize: 10, color: 'var(--nut-ink-faint)' }}>{q.sla}</div>
                </div>
                <span className="nut-amount" style={{ fontSize: 18 }}>{q.v}</span>
                <Icon name="chevronRight" size={14} color="var(--nut-ink-faint)" />
              </div>
            ))}
          </div>
        </div>

        {/* Loan approvals queue table */}
        <div className="nut-card-elevated" style={{ padding: 22, marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700 }}>Loan approval queue</h4>
              <p style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>16 pending · sorted by submission time</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['All', 'Salary', 'Education', 'Asset'].map((t, i) => (
                <button key={t} style={{
                  padding: '6px 12px', fontSize: 11, fontWeight: 600, borderRadius: 8, cursor: 'pointer',
                  border: i === 0 ? 'none' : '1px solid var(--nut-line)',
                  background: i === 0 ? 'var(--nut-primary)' : 'transparent',
                  color: i === 0 ? '#fff' : 'var(--nut-ink-muted)',
                }}>{t}</button>
              ))}
            </div>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
            <thead>
              <tr style={{ textAlign: 'left', color: 'var(--nut-ink-faint)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: 10 }}>
                <th style={{ padding: '10px 8px' }}>Member</th>
                <th style={{ padding: '10px 8px' }}>Product</th>
                <th style={{ padding: '10px 8px' }}>Amount</th>
                <th style={{ padding: '10px 8px' }}>Term</th>
                <th style={{ padding: '10px 8px' }}>Score</th>
                <th style={{ padding: '10px 8px' }}>Submitted</th>
                <th style={{ padding: '10px 8px', textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { n: 'Adaeze Okonkwo', id: 'NUT-LG-018-44829', p: 'Salary advance', a: '350,000', t: '6 mo', sc: 82, st: 'High', date: '28 Apr · 09:14' },
                { n: 'Chinedu Eze', id: 'NUT-AB-012-22119', p: 'Education', a: '1,200,000', t: '24 mo', sc: 74, st: 'Medium', date: '28 Apr · 08:42' },
                { n: 'Hauwa Bello', id: 'NUT-KN-007-58311', p: 'Asset finance', a: '2,800,000', t: '18 mo', sc: 68, st: 'Medium', date: '28 Apr · 08:01' },
                { n: 'Tunde Adekola', id: 'NUT-OY-014-19228', p: 'Salary advance', a: '120,000', t: '3 mo', sc: 91, st: 'High', date: '27 Apr · 17:55', urgent: true },
                { n: 'Grace Anyanwu', id: 'NUT-RV-009-66510', p: 'Education', a: '800,000', t: '12 mo', sc: 58, st: 'Low', date: '27 Apr · 16:30' },
              ].map((r, i) => (
                <tr key={i} style={{ borderTop: '1px solid var(--nut-line)' }}>
                  <td style={{ padding: '12px 8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <Avatar initials={r.n.split(' ').map(s => s[0]).join('')} size={28} />
                      <div>
                        <div style={{ fontWeight: 600 }}>{r.n}</div>
                        <div style={{ fontSize: 10, color: 'var(--nut-ink-faint)', fontFamily: 'var(--nut-font-mono)' }}>{r.id}</div>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '12px 8px' }}>{r.p}</td>
                  <td style={{ padding: '12px 8px' }} className="nut-amount">₦{r.a}</td>
                  <td style={{ padding: '12px 8px', color: 'var(--nut-ink-muted)' }}>{r.t}</td>
                  <td style={{ padding: '12px 8px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ width: 36, height: 6, borderRadius: 3, background: 'var(--nut-surface-muted)', position: 'relative', overflow: 'hidden' }}>
                        <span style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: r.sc + '%', background: r.sc >= 80 ? 'var(--nut-success)' : r.sc >= 65 ? 'var(--nut-accent)' : 'var(--nut-danger)' }} />
                      </span>
                      <span style={{ fontWeight: 700 }}>{r.sc}</span>
                    </span>
                  </td>
                  <td style={{ padding: '12px 8px', color: 'var(--nut-ink-muted)' }}>
                    {r.date}
                    {r.urgent && <span className="nut-pill danger" style={{ marginLeft: 6 }}>SLA</span>}
                  </td>
                  <td style={{ padding: '12px 8px', textAlign: 'right' }}>
                    <span style={{ display: 'inline-flex', gap: 6 }}>
                      <button style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid var(--nut-line)', background: 'var(--nut-surface)', fontWeight: 600, fontSize: 11, cursor: 'pointer' }}>Review</button>
                      <button style={{ padding: '6px 10px', borderRadius: 8, border: 'none', background: 'var(--nut-primary)', color: '#fff', fontWeight: 600, fontSize: 11, cursor: 'pointer' }}>Approve</button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Audit log */}
        <div className="nut-card-elevated" style={{ padding: 22 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700 }}>Audit log</h4>
              <p style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>Latest privileged actions</p>
            </div>
            <button style={{ fontSize: 12, fontWeight: 600, color: 'var(--nut-primary)', background: 'transparent', border: 'none', cursor: 'pointer' }}>View full log</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { who: 'Officer Idris', what: 'Approved loan ₦350,000 for Adaeze Okonkwo', when: '2 min ago', tag: 'LOAN.APPROVE' },
              { who: 'Officer Tade', what: 'Verified KYC for Chinedu Eze · NIN match', when: '14 min ago', tag: 'KYC.APPROVE' },
              { who: 'Officer Idris', what: 'Re-assigned ticket TKT-2901 to underwriting', when: '32 min ago', tag: 'TICKET.ROUTE' },
              { who: 'System', what: 'Scheduled auto-debit batch · 1,422 instalments', when: '1h ago', tag: 'BATCH.RUN' },
              { who: 'Officer Adunni', what: 'Issued motor policy NUT-MTR-29481 to A. Okonkwo', when: '2h ago', tag: 'POLICY.ISSUE' },
            ].map((e, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: i ? '1px dashed var(--nut-line)' : 'none', fontSize: 12 }}>
                <Avatar initials={e.who[0] + (e.who.split(' ')[1]?.[0] || '')} size={28} />
                <span style={{ fontFamily: 'var(--nut-font-mono)', fontSize: 10, color: 'var(--nut-primary)', padding: '3px 8px', background: 'var(--nut-primary-soft)', borderRadius: 4 }}>{e.tag}</span>
                <span style={{ flex: 1 }}><b>{e.who}</b> · {e.what}</span>
                <span style={{ color: 'var(--nut-ink-faint)' }}>{e.when}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// KYC review detail view (admin)
function AdminKycReview() {
  return (
    <div className="nut-app" style={{ background: 'var(--nut-surface-muted)', height: '100%' }}>
      <header style={{ background: '#fff', borderBottom: '1px solid var(--nut-line)', padding: '14px 28px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <button style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--nut-surface-muted)', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="arrowRight" size={14} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <div>
          <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>Queues / KYC review</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>Application #KYC-22841 · Chinedu Eze</div>
        </div>
        <div style={{ flex: 1 }} />
        <span className="nut-pill gold">Pending review</span>
        <button style={{ padding: '8px 14px', borderRadius: 10, border: '1px solid var(--nut-line)', background: '#fff', fontWeight: 600, fontSize: 12 }}>Reject</button>
        <button className="nut-cta" style={{ width: 'auto', padding: '8px 14px', fontSize: 12 }}>
          <Icon name="check" size={14} stroke={2.4} /> Approve KYC
        </button>
      </header>

      <div style={{ padding: 28, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14, overflowY: 'auto' }}>
        {/* Left — uploaded docs and member info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="nut-card-elevated" style={{ padding: 22 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 14 }}>Submitted documents</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <div>
                <PlaceholderImg label="ID front · NIN slip" height={160} />
                <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginTop: 6 }}>Captured 28 Apr · 8:39 AM · Sharp</div>
              </div>
              <div>
                <PlaceholderImg label="Selfie · liveness frame" height={160} />
                <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginTop: 6 }}>3 frames · Pass match 96%</div>
              </div>
            </div>
          </div>

          <div className="nut-card-elevated" style={{ padding: 22 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 14 }}>Member details</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', fontSize: 13 }}>
              {[
                ['Full name (KYC)', 'Chinedu Patrick Eze'],
                ['Full name (BVN)', 'Chinedu Patrick Eze', true],
                ['Date of birth', '4 March 1979'],
                ['NIN', '821 4408 9912', true],
                ['Phone', '+234 803 558 4421'],
                ['School', 'Federal Govt. College Ijanikin'],
                ['NUT branch', 'Lagos · Surulere chapter'],
                ['Member since', '12 March 2014'],
              ].map(([k, v, ok]) => (
                <div key={k}>
                  <div style={{ fontSize: 10, color: 'var(--nut-ink-faint)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>{k}</div>
                  <div style={{ fontWeight: 600, marginTop: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                    {v}
                    {ok && <Icon name="check" size={12} stroke={2.4} color="var(--nut-success)" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — verification checks */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="nut-card-elevated" style={{ padding: 22 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>Automated checks</h4>
            <p style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginBottom: 14 }}>Run 28 Apr · 8:42 AM</p>
            {[
              { l: 'BVN match', s: 'pass', d: 'Name + DOB exact match' },
              { l: 'NIMC NIN check', s: 'pass', d: 'Verified via NIMC API' },
              { l: 'Selfie liveness', s: 'pass', d: '96% match · 3 frames' },
              { l: 'Document quality', s: 'warn', d: 'Glare in upper-right corner' },
              { l: 'PEP / sanctions screen', s: 'pass', d: 'No matches' },
              { l: 'Duplicate detection', s: 'pass', d: 'Unique applicant' },
            ].map((c, i) => (
              <div key={c.l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderTop: i ? '1px dashed var(--nut-line)' : 'none' }}>
                <span style={{
                  width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                  background: c.s === 'pass' ? 'oklch(0.94 0.05 150)' : c.s === 'warn' ? 'var(--nut-accent-soft)' : 'oklch(0.96 0.04 28)',
                  color: c.s === 'pass' ? 'var(--nut-success)' : c.s === 'warn' ? 'oklch(0.45 0.13 75)' : 'var(--nut-danger)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={c.s === 'pass' ? 'check' : 'alert'} size={12} stroke={2.4} />
                </span>
                <div style={{ flex: 1, fontSize: 12 }}>
                  <div style={{ fontWeight: 600 }}>{c.l}</div>
                  <div style={{ color: 'var(--nut-ink-faint)' }}>{c.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="nut-card-elevated" style={{ padding: 22 }}>
            <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>Officer note</h4>
            <textarea
              defaultValue="ID quality acceptable but slight glare on upper right. BVN/NIMC match is exact. Recommend approve."
              style={{
                width: '100%', minHeight: 80, padding: 12, borderRadius: 10,
                border: '1px solid var(--nut-line)', resize: 'none',
                fontFamily: 'inherit', fontSize: 13,
              }}
            />
            <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)', marginTop: 6 }}>Notes are stored on the audit trail — visible to senior officers only.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { AdminPortal, AdminKycReview });
