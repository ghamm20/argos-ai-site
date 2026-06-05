'use client'

import { useState } from 'react';

export const dynamic = 'force-static';

export default function SubmitPage() {
  const [formData, setFormData] = useState({ repoUrl: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'submitted' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatus('loading');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4242'}/audit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repo_url: formData.repoUrl, email: formData.email }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? `Audit request failed (${response.status})`);
      }

      setStatus('submitted');
    } catch (err: unknown) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Submission failed');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0b0d12', color: '#e6e8ee' }}>
      <div className="page" style={{ maxWidth: 860, margin: '0 auto', padding: '52px 48px 72px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #273247', paddingBottom: 18, marginBottom: 28 }}>
          <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6ee7b7' }}>Argos AI</div>
          <div style={{ color: '#a9b1c1', textAlign: 'right', fontSize: 12 }}>Argos-AI · Automated Audit</div>
        </header>

        <h1 style={{ fontSize: 26, margin: '0 0 6px' }}>Security Audit Submission</h1>
        <p className="sub" style={{ color: '#a9b1c1', fontSize: 13.5, marginBottom: 28 }}>
          Submit a GitHub repository after checkout. The audit report will be emailed within 5-10 minutes.
        </p>

        {status === 'submitted' ? (
          <div className="box callout ok" style={{ marginTop: 14, borderLeft: '3px solid #34d399' }}>
            <div style={{ fontWeight: 700, color: '#34d399', marginBottom: 4 }}>Submission received</div>
            <div style={{ color: '#a9b1c1', fontSize: 13.5 }}>We’re cloning and auditing {formData.repoUrl || 'your repo'} now. The report will be emailed to {formData.email}.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="box" style={{ padding: 18, backgroundColor: '#11141b', border: '1px solid #1f2330', borderRadius: 10 }}>
            <div style={{ mb: 16 }}>
              <label style={{ display: 'block', color: '#a9b1c1', marginBottom: 8, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }} for="repoUrl">GitHub repo URL</label>
              <input
                id="repoUrl"
                type="url"
                required
                placeholder="https://github.com/owner/repo"
                value={formData.repoUrl}
                onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  backgroundColor: '#0b0d12',
                  color: '#e6e8ee',
                  borderRadius: 8,
                  border: '1px solid #1f2330',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ mb: 18 }}>
              <label style={{ display: 'block', color: '#a9b1c1', marginBottom: 8, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }} for="email">Email address</label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  backgroundColor: '#0b0d12',
                  color: '#e6e8ee',
                  borderRadius: 8,
                  border: '1px solid #1f2330',
                  outline: 'none',
                }}
              />
            </div>

            {status === 'error' && (
              <div style={{ color: '#f87171', fontSize: 13.5, marginBottom: 14 }}>{error}</div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                width: '100%',
                padding: '10px 16px',
                borderRadius: 8,
                border: 'none',
                backgroundColor: status === 'loading' ? '#1f2330' : '#11141b',
                color: status === 'loading' ? '#7d879a' : '#6ee7b7',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontSize: 13,
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'loading' ? 'Running audit…' : 'Submit repository'}
            </button>
          </form>
        )}

        <div className="page-footer" style={{ marginTop: 40, color: '#7d879a', fontSize: 11, borderTop: '1px solid #273247', paddingTop: 10, textAlign: 'right' }}>
          Argos AI · Powered by Argos-AI Pipeline
        </div>
      </div>
    </div>
  );
}

