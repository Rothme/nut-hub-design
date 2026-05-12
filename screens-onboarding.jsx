// Mobile screens for NUT Financial Hub.
// Each screen renders within an AndroidDevice frame in the design canvas.

// ─────────────────────────────────────────────────────────────
// 1. SPLASH / WELCOME
// ─────────────────────────────────────────────────────────────
function ScreenWelcome() {
  return (
    <PhoneScreen padding={0} bottom={false} bg="var(--nut-primary-deep)">
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        background: 'linear-gradient(180deg, var(--nut-primary) 0%, var(--nut-primary-deep) 100%)',
        color: 'var(--nut-on-primary)', padding: 24, position: 'relative', overflow: 'hidden',
      }}>
        {/* decorative concentric */}
        <div style={{ position: 'absolute', right: -120, top: -120, width: 320, height: 320, borderRadius: '50%', border: '40px solid oklch(1 0 0 / 0.06)' }} />
        <div style={{ position: 'absolute', right: -60, top: -60, width: 200, height: 200, borderRadius: '50%', border: '24px solid oklch(1 0 0 / 0.08)' }} />

        <div style={{ paddingTop: 24, position: 'relative' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'oklch(1 0 0 / 0.15)', display: 'inline-flex',
              alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--nut-font-display)', fontWeight: 800,
              color: '#fff', fontSize: 18,
            }}>
              N<span style={{ width: 5, height: 5, background: 'var(--nut-accent)', borderRadius: '50%', alignSelf: 'flex-end', marginLeft: 1, marginBottom: 6 }} />
            </span>
            <span style={{ fontFamily: 'var(--nut-font-display)', fontWeight: 800, fontSize: 17, letterSpacing: '-0.02em' }}>NUT Financial Hub</span>
          </span>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '6px 12px', borderRadius: 999, marginBottom: 16,
            background: 'oklch(1 0 0 / 0.12)', fontSize: 12, fontWeight: 600,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--nut-accent)' }} />
            Official member platform
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 12 }}>
            Loans, savings &<br/>insurance — <span style={{ color: 'var(--nut-accent)' }}>built for teachers.</span>
          </h1>
          <p style={{ fontSize: 14, opacity: 0.85, lineHeight: 1.55, marginBottom: 24, maxWidth: 320 }}>
            Apply for cooperative loans, plan your savings goals and protect what matters — from one secure account.
          </p>
          <button className="nut-cta gold">
            Get started
            <Icon name="arrowRight" size={16} />
          </button>
          <button className="nut-cta ghost" style={{ color: '#fff', marginTop: 6 }}>
            I already have an account
          </button>
        </div>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', fontSize: 11, opacity: 0.7, marginTop: 16 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="lock" size={12} /> CBN licensed</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="shieldCheck" size={12} /> NDIC insured</span>
        </div>
      </div>
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. PHONE NUMBER
// ─────────────────────────────────────────────────────────────
function ScreenPhone() {
  return (
    <PhoneScreen
      header={<ScreenHeader back title="Sign in" onBack={() => {}} />}
      padding={20}
    >
      <div style={{ marginTop: 8, marginBottom: 28 }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>
          Enter your phone<br/>number
        </h2>
        <p style={{ fontSize: 14, color: 'var(--nut-ink-muted)', lineHeight: 1.5 }}>
          We'll send a 6-digit code to verify it's really you. Use the number registered with NUT.
        </p>
      </div>

      <label className="nut-label">Phone number</label>
      <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 12px',
          border: '1.5px solid var(--nut-line)', borderRadius: 12,
          background: 'var(--nut-surface)', fontSize: 15, fontWeight: 600,
        }}>
          <span style={{
            width: 22, height: 16, borderRadius: 2, overflow: 'hidden', display: 'inline-block',
            background: 'linear-gradient(90deg, #008751 33%, #fff 33% 66%, #008751 66%)',
          }} />
          +234
          <Icon name="chevronDown" size={14} />
        </div>
        <input
          className="nut-input"
          style={{ flex: 1, fontSize: 17, fontFamily: 'var(--nut-font-display)', fontWeight: 600, letterSpacing: '0.02em' }}
          defaultValue="803 412 5589"
        />
      </div>

      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: 12, background: 'var(--nut-primary-soft)', borderRadius: 12, marginBottom: 24 }}>
        <Icon name="shieldCheck" size={18} color="var(--nut-primary)" />
        <p style={{ fontSize: 12, color: 'var(--nut-primary-ink)', lineHeight: 1.5 }}>
          By continuing, you agree to NUT Financial Hub's <b>Terms of Service</b> and <b>Privacy Policy</b>. Standard SMS rates may apply.
        </p>
      </div>

      <button className="nut-cta">Send verification code</button>
      <p style={{ fontSize: 12, color: 'var(--nut-ink-faint)', textAlign: 'center', marginTop: 14 }}>
        Need help? <span style={{ color: 'var(--nut-primary)', fontWeight: 600 }}>Contact your branch officer</span>
      </p>
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. OTP
// ─────────────────────────────────────────────────────────────
function ScreenOtp() {
  const digits = ['4', '8', '2', '7', '', ''];
  return (
    <PhoneScreen
      header={<ScreenHeader back title="Verify number" onBack={() => {}} />}
      padding={20}
    >
      <div style={{ marginTop: 8, marginBottom: 28 }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>
          Enter the 6-digit code
        </h2>
        <p style={{ fontSize: 14, color: 'var(--nut-ink-muted)', lineHeight: 1.5 }}>
          Sent to <b style={{ color: 'var(--nut-ink)' }}>+234 803 412 5589</b>{' '}
          <span style={{ color: 'var(--nut-primary)', fontWeight: 600 }}>Change</span>
        </p>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
        {digits.map((d, i) => (
          <div key={i} style={{
            flex: 1, height: 56, borderRadius: 12,
            border: i === 4 ? '1.5px solid var(--nut-primary)' : '1.5px solid var(--nut-line)',
            background: 'var(--nut-surface)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--nut-font-display)', fontWeight: 700, fontSize: 22,
            color: 'var(--nut-ink)',
            position: 'relative',
          }}>
            {d || (i === 4 ? <span style={{ width: 2, height: 22, background: 'var(--nut-primary)', borderRadius: 1 }} /> : null)}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 13, marginBottom: 28 }}>
        <span style={{ color: 'var(--nut-ink-muted)' }}>Resend code in <b style={{ color: 'var(--nut-ink)' }}>0:24</b></span>
        <span style={{ color: 'var(--nut-primary)', fontWeight: 600, opacity: 0.5 }}>Resend</span>
      </div>

      <button className="nut-cta" disabled style={{ opacity: 0.6 }}>Verify and continue</button>
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. KYC — Setup intro
// ─────────────────────────────────────────────────────────────
function ScreenKycIntro() {
  const steps = [
    { icon: 'user', title: 'Personal details', sub: 'Name, DOB, NUT membership ID', state: 'done' },
    { icon: 'card', title: 'BVN verification', sub: 'Bank Verification Number', state: 'active' },
    { icon: 'doc', title: 'ID document', sub: 'NIN slip or driver\'s licence', state: 'pending' },
    { icon: 'building', title: 'School & branch', sub: 'Where you teach', state: 'pending' },
    { icon: 'fingerprint', title: 'Selfie liveness check', sub: 'Quick face scan', state: 'pending' },
  ];
  return (
    <PhoneScreen
      header={<ScreenHeader back title="Complete your profile" onBack={() => {}} />}
      padding={20}
    >
      <div style={{ marginBottom: 22 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>
          Verify your identity
        </h2>
        <p style={{ fontSize: 13.5, color: 'var(--nut-ink-muted)', lineHeight: 1.55 }}>
          The Central Bank requires us to verify every member. This takes about 4 minutes.
        </p>
        <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Progress value={0.2} />
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--nut-primary)' }}>1 / 5</span>
        </div>
      </div>

      <div className="nut-card" style={{ padding: 6 }}>
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 12px' }}>
              <span style={{
                width: 38, height: 38, borderRadius: 12, flexShrink: 0,
                background: s.state === 'done' ? 'var(--nut-primary)' : s.state === 'active' ? 'var(--nut-primary-soft)' : 'var(--nut-surface-muted)',
                color: s.state === 'done' ? '#fff' : s.state === 'active' ? 'var(--nut-primary)' : 'var(--nut-ink-faint)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {s.state === 'done' ? <Icon name="check" size={18} stroke={2.4} /> : <Icon name={s.icon} size={18} />}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--nut-ink)' }}>{s.title}</div>
                <div style={{ fontSize: 12, color: 'var(--nut-ink-faint)' }}>{s.sub}</div>
              </div>
              {s.state === 'active' && <span className="nut-pill">In progress</span>}
              {s.state === 'done' && <span className="nut-pill success">Done</span>}
              {s.state === 'pending' && <Icon name="chevronRight" size={16} color="var(--nut-ink-faint)" />}
            </div>
            {i < steps.length - 1 && <hr className="nut-divider" style={{ margin: '0 12px' }} />}
          </React.Fragment>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <button className="nut-cta">Continue to BVN <Icon name="arrowRight" size={16} /></button>
      </div>
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// 5. KYC — BVN
// ─────────────────────────────────────────────────────────────
function ScreenKycBvn() {
  return (
    <PhoneScreen
      header={<ScreenHeader back title="Step 2 of 5" onBack={() => {}} />}
      padding={20}
    >
      <Progress value={0.4} />
      <div style={{ marginTop: 22, marginBottom: 22 }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 8 }}>
          Enter your BVN
        </h2>
        <p style={{ fontSize: 13.5, color: 'var(--nut-ink-muted)', lineHeight: 1.5 }}>
          Your Bank Verification Number is an 11-digit number issued by your bank. Dial <b style={{ color: 'var(--nut-ink)' }}>*565*0#</b> from the phone linked to your account to retrieve it.
        </p>
      </div>

      <label className="nut-label">BVN (11 digits)</label>
      <div style={{ position: 'relative', marginBottom: 18 }}>
        <input
          className="nut-input"
          style={{ fontSize: 18, fontFamily: 'var(--nut-font-display)', fontWeight: 700, letterSpacing: '0.05em' }}
          defaultValue="22196 4408 33"
        />
        <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: 'var(--nut-success)', fontWeight: 600 }}>
          <Icon name="check" size={14} stroke={2.4} /> Valid
        </span>
      </div>

      <div className="nut-card" style={{ padding: 14, marginBottom: 18, background: 'var(--nut-primary-soft)', border: 'none' }}>
        <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--nut-primary-deep)', marginBottom: 8 }}>
          What we'll verify
        </div>
        {[
          ['Full legal name', 'Adaeze N. Okonkwo'],
          ['Date of birth', '14 March 1981'],
          ['Phone on record', '+234 803 412 ****'],
        ].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 13 }}>
            <span style={{ color: 'var(--nut-primary-deep)', opacity: 0.7 }}>{k}</span>
            <span style={{ fontWeight: 600, color: 'var(--nut-primary-deep)' }}>{v}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 12, color: 'var(--nut-ink-muted)', lineHeight: 1.5, marginBottom: 18 }}>
        <Icon name="lock" size={14} color="var(--nut-ink-muted)" />
        Your BVN is encrypted and never shared. We use it only to confirm your identity per CBN guidelines.
      </div>

      <button className="nut-cta">Verify BVN</button>
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// 6. KYC — ID Capture
// ─────────────────────────────────────────────────────────────
function ScreenKycId() {
  return (
    <PhoneScreen
      header={<ScreenHeader back title="Step 3 of 5" onBack={() => {}} />}
      padding={20}
    >
      <Progress value={0.6} />
      <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 22, marginBottom: 8 }}>
        Take a photo of your ID
      </h2>
      <p style={{ fontSize: 13.5, color: 'var(--nut-ink-muted)', lineHeight: 1.5, marginBottom: 18 }}>
        Place the document inside the frame. Make sure the text is clear and legible.
      </p>

      <div style={{
        position: 'relative', height: 220, borderRadius: 18, overflow: 'hidden',
        background: 'oklch(0.18 0.015 155)', marginBottom: 14,
      }}>
        {/* placeholder camera viewfinder */}
        <div style={{
          position: 'absolute', inset: 24,
          border: '2px dashed oklch(1 0 0 / 0.4)', borderRadius: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: '85%', height: '85%',
            background: 'repeating-linear-gradient(45deg, oklch(1 0 0 / 0.03) 0 6px, oklch(1 0 0 / 0.06) 6px 12px)',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'oklch(1 0 0 / 0.6)', fontSize: 11, fontFamily: 'var(--nut-font-mono)',
          }}>NIN slip / driver's licence</div>
        </div>
        {/* corner brackets */}
        {[[8,8,'tl'],[8,8,'tr'],[8,8,'bl'],[8,8,'br']].map(([_,__,p]) => {
          const map = { tl:{top:14,left:14,bt:'2px solid var(--nut-accent)',bl:'2px solid var(--nut-accent)'},
                        tr:{top:14,right:14,bt:'2px solid var(--nut-accent)',br:'2px solid var(--nut-accent)'},
                        bl:{bottom:14,left:14,bb:'2px solid var(--nut-accent)',bl:'2px solid var(--nut-accent)'},
                        br:{bottom:14,right:14,bb:'2px solid var(--nut-accent)',br:'2px solid var(--nut-accent)'} };
          const m = map[p];
          return <span key={p} style={{ position: 'absolute', width: 20, height: 20,
            top: m.top, left: m.left, right: m.right, bottom: m.bottom,
            borderTop: m.bt, borderLeft: m.bl, borderRight: m.br, borderBottom: m.bb }} />;
        })}
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 18 }}>
        {['NIN slip', "Driver's licence", 'Voter ID'].map((t, i) => (
          <button key={t} style={{
            flex: 1, padding: '10px 8px', borderRadius: 10, fontSize: 12, fontWeight: 600,
            border: i === 0 ? '1.5px solid var(--nut-primary)' : '1.5px solid var(--nut-line)',
            background: i === 0 ? 'var(--nut-primary-soft)' : 'var(--nut-surface)',
            color: i === 0 ? 'var(--nut-primary-deep)' : 'var(--nut-ink-muted)',
            cursor: 'pointer',
          }}>{t}</button>
        ))}
      </div>

      <div className="nut-card" style={{ padding: 14, marginBottom: 18, background: 'var(--nut-surface-muted)', border: 'none' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--nut-ink)', marginBottom: 6 }}>For best results</div>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, color: 'var(--nut-ink-muted)', lineHeight: 1.7 }}>
          <li>Use a flat surface with even lighting</li>
          <li>Avoid glare and shadows</li>
          <li>All four corners must be visible</li>
        </ul>
      </div>

      <button className="nut-cta">
        <Icon name="badge" size={18} /> Open camera
      </button>
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// 7. KYC — Selfie liveness
// ─────────────────────────────────────────────────────────────
function ScreenKycSelfie() {
  return (
    <PhoneScreen
      header={<ScreenHeader back title="Step 5 of 5" onBack={() => {}} />}
      padding={0}
      bg="oklch(0.16 0.015 155)"
    >
      <div style={{ padding: 20, color: '#fff', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 6, color: '#fff' }}>
          Look at the camera
        </h2>
        <p style={{ fontSize: 13.5, color: 'oklch(1 0 0 / 0.7)', lineHeight: 1.5, marginBottom: 24 }}>
          Slowly turn your head left, then right.
        </p>

        <div style={{
          flex: 1, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {/* face oval */}
          <div style={{
            width: 220, height: 280, borderRadius: '50%',
            border: '3px solid var(--nut-accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
            background: 'oklch(0.22 0.02 155)',
          }}>
            <div style={{
              width: '90%', height: '90%', borderRadius: '50%',
              background: 'repeating-radial-gradient(circle at 50% 40%, oklch(1 0 0 / 0.05) 0 6px, oklch(1 0 0 / 0.02) 6px 12px)',
            }} />
            {/* progress dots around */}
            {Array.from({ length: 16 }).map((_, i) => {
              const angle = (i / 16) * 360 - 90;
              const r = 145;
              const x = Math.cos(angle * Math.PI / 180) * r;
              const y = Math.sin(angle * Math.PI / 180) * r;
              return <span key={i} style={{
                position: 'absolute', width: 6, height: 6, borderRadius: '50%',
                background: i < 7 ? 'var(--nut-accent)' : 'oklch(1 0 0 / 0.2)',
                left: `calc(50% + ${x}px - 3px)`, top: `calc(50% + ${y}px - 3px)`,
              }} />;
            })}
          </div>
        </div>

        <div style={{
          textAlign: 'center', padding: '12px 16px',
          background: 'oklch(1 0 0 / 0.08)', borderRadius: 12,
          fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 16,
        }}>
          <Icon name="refresh" size={14} style={{ verticalAlign: 'middle', marginRight: 6 }} />
          Turn slowly to your right
        </div>
      </div>
    </PhoneScreen>
  );
}

// ─────────────────────────────────────────────────────────────
// 8. DASHBOARD (depends on user state: pending, approved, with-loan)
// ─────────────────────────────────────────────────────────────
function ScreenDashboard({ state = 'approved' }) {
  const pending = state === 'pending';
  const withLoan = state === 'with_loan';

  return (
    <PhoneScreen padding={0} bottom={false}>
      {/* gradient header */}
      <div style={{
        background: 'linear-gradient(180deg, var(--nut-primary) 0%, var(--nut-primary-deep) 100%)',
        color: 'var(--nut-on-primary)',
        padding: '20px 18px 70px',
        position: 'relative',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Avatar initials="AO" color="oklch(1 0 0 / 0.18)" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, opacity: 0.7, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Welcome back</div>
            <div style={{ fontSize: 16, fontWeight: 700, fontFamily: 'var(--nut-font-display)' }}>Mrs. Adaeze Okonkwo</div>
          </div>
          <button style={{ width: 36, height: 36, borderRadius: 12, border: 'none', background: 'oklch(1 0 0 / 0.12)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <Icon name="bell" size={18} />
            <span style={{ position: 'absolute', top: 6, right: 6, width: 7, height: 7, background: 'var(--nut-accent)', borderRadius: '50%', border: '2px solid var(--nut-primary)' }} />
          </button>
        </div>

        <div style={{ marginTop: 22 }}>
          <div style={{ fontSize: 11, opacity: 0.7, letterSpacing: '0.04em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 6 }}>
            Total wallet balance <Icon name="eye" size={12} />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
            <Naira value={486200.55} size={34} color="#fff" />
          </div>
          <div style={{ fontSize: 12, opacity: 0.75, marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Icon name="trend" size={12} color="var(--nut-accent)" />
            +₦12,400 this month · Member since 2018
          </div>
        </div>
      </div>

      {/* Pending KYC banner */}
      {pending && (
        <div style={{ margin: '-50px 16px 12px', padding: 14, background: 'var(--nut-accent)', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 12, color: 'oklch(0.25 0.05 80)', boxShadow: '0 8px 24px oklch(0.5 0.13 75 / 0.25)' }}>
          <Icon name="alert" size={22} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 800 }}>Finish your verification</div>
            <div style={{ fontSize: 11.5, opacity: 0.85 }}>Just BVN + selfie left — about 2 min</div>
          </div>
          <Icon name="arrowRight" size={18} />
        </div>
      )}

      {/* Account cards */}
      <div style={{ padding: '0 14px', marginTop: pending ? 0 : -52 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14,
        }}>
          <div className="nut-card-elevated" style={{ padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color: 'var(--nut-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <Icon name="savings" size={14} color="var(--nut-primary)" /> Savings
              </span>
              <Icon name="chevronRight" size={14} color="var(--nut-ink-faint)" />
            </div>
            <Naira value={284600} size={20} color="var(--nut-ink)" />
            <div style={{ fontSize: 11, color: 'var(--nut-success)', marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name="arrowUp" size={11} /> 4.2% APY
            </div>
          </div>
          <div className="nut-card-elevated" style={{ padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color: 'var(--nut-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <Icon name="loan" size={14} color="var(--nut-primary)" /> {withLoan ? 'Active loan' : 'Loan limit'}
              </span>
              <Icon name="chevronRight" size={14} color="var(--nut-ink-faint)" />
            </div>
            {withLoan ? (
              <>
                <Naira value={420000} size={20} />
                <div style={{ fontSize: 11, color: 'var(--nut-warn)', marginTop: 4 }}>Next: ₦27,500 · 4 May</div>
              </>
            ) : (
              <>
                <Naira value={1500000} size={20} />
                <div style={{ fontSize: 11, color: 'var(--nut-ink-muted)', marginTop: 4 }}>Pre-approved</div>
              </>
            )}
          </div>
        </div>

        <div className="nut-card-elevated" style={{ padding: 14, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, color: 'var(--nut-ink-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Icon name="shield" size={14} color="var(--nut-primary)" /> Active policies
            </span>
            <span className="nut-pill success">2 active</span>
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>Health · Bronze</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Renews 12 Aug</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>Motor · Comprehensive</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>Renews 03 Nov</div>
            </div>
          </div>
        </div>
      </div>

      {/* quick actions */}
      <div style={{ padding: '0 14px 12px' }}>
        <SectionTitle title="Quick actions" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {[
            { icon: 'arrowDown', label: 'Add money' },
            { icon: 'send', label: 'Send' },
            { icon: 'loan', label: 'Borrow' },
            { icon: 'target', label: 'Save' },
          ].map((a) => (
            <div key={a.label} style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
              padding: '12px 4px', background: 'var(--nut-surface)',
              border: '1px solid var(--nut-line)', borderRadius: 14,
            }}>
              <span style={{ width: 36, height: 36, borderRadius: 12, background: 'var(--nut-primary-soft)', color: 'var(--nut-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={a.icon} size={18} />
              </span>
              <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--nut-ink)' }}>{a.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cashflow chart */}
      <div style={{ padding: '0 14px 12px' }}>
        <div className="nut-card-elevated" style={{ padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
            <h4 style={{ fontSize: 13, fontWeight: 700 }}>Cashflow this month</h4>
            <span style={{ fontSize: 11, color: 'var(--nut-ink-faint)' }}>Apr 2026</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 10, color: 'var(--nut-ink-faint)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>In</div>
              <Naira value={156400} size={18} color="var(--nut-success)" />
            </div>
            <div>
              <div style={{ fontSize: 10, color: 'var(--nut-ink-faint)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Out</div>
              <Naira value={94120} size={18} color="var(--nut-danger)" />
            </div>
            <div style={{ flex: 1 }} />
            <span className="nut-pill">Net +₦62,280</span>
          </div>
          {/* tiny dual-bar chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 60 }}>
            {[42,55,38,72,49,66,45,78,52,68,40,82].map((h, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 1 }}>
                <div style={{ height: `${h}%`, background: 'var(--nut-primary)', borderRadius: '3px 3px 0 0', opacity: 0.85 }} />
                <div style={{ height: `${[24,30,18,38,28,42,30,46,35,40,22,48][i]}%`, background: 'var(--nut-accent)', borderRadius: '0 0 3px 3px', opacity: 0.9 }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 10, color: 'var(--nut-ink-faint)' }}>
            <span>Wk 1</span><span>Wk 2</span><span>Wk 3</span><span>Wk 4</span>
          </div>
        </div>
      </div>

      {/* recent transactions */}
      <div style={{ padding: '0 14px 14px' }}>
        <SectionTitle title="Recent activity" action="See all" />
        <div className="nut-card" style={{ padding: '4px 14px' }}>
          <TxnRow icon="briefcase" title="Salary credit · LSUBEB" sub="Apr 28, 9:02 AM" amount="124,500.00" />
          <hr className="nut-divider" />
          <TxnRow icon="loan" title="Loan repayment · Salary advance" sub="Apr 25 · Auto-debit" amount="27,500.00" neg />
          <hr className="nut-divider" />
          <TxnRow icon="target" title="School fees savings goal" sub="Apr 22" amount="15,000.00" neg status="On track" />
          <hr className="nut-divider" />
          <TxnRow icon="shield" title="Motor policy renewal" sub="Apr 14" amount="42,800.00" neg />
        </div>
      </div>

      <TabBar active="home" onChange={() => {}} />
    </PhoneScreen>
  );
}

Object.assign(window, {
  ScreenWelcome, ScreenPhone, ScreenOtp, ScreenKycIntro, ScreenKycBvn,
  ScreenKycId, ScreenKycSelfie, ScreenDashboard,
});
