@'
'use client'

import { useState } from 'react';

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
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '52px 48px 72px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #273247', paddingBottom: 18, marginBottom: 28 }}>
          <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6ee7b7' }}>Argos AI</div>
          <div style={{ color: '#a9b1c1', textAlign: 'right', fontSize: 12 }}>Argos-AI - Automated Audit</div>
        </header>

        <h1 style={{ fontSize: 26, margin: '0 0 6px' }}>Security Audit Submission</h1>
        <p style={{ color: '#a9b1c1', fontSize: 13.5, marginBottom: 28 }}>
          Submit a GitHub repository after checkout. The audit report will be emailed within 5-10 minutes.
        </p>

        {status === 'submitted' ? (
          <div style={{ marginTop: 14, borderLeft: '3px solid #34d399', padding: 18, backgroundColor: '#11141b', borderRadius: 10 }}>
            <div style={{ fontWeight: 700, color: '#34d399', marginBottom: 4 }}>Submission received</div>
            <div style={{ color: '#a9b1c1', fontSize: 13.5 }}>We are cloning and auditing {formData.repoUrl || 'your repo'} now. The report will be emailed to {formData.email}.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ padding: 18, backgroundColor: '#11141b', border: '1px solid #1f2330', borderRadius: 10 }}>
            <div style={{ marginBottom: 1