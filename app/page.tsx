import React from 'react';

interface ModelConfig {
  id: string;
  name: string;
  usdcCost: number;
  creditCost: number;
  description: string;
}

// Fetch models with revalidation
async function getModels(): Promise<ModelConfig[]> {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8787';
  try {
    const res = await fetch(`${backendUrl}/v1/models`, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error('Failed to fetch models');
    return await res.json();
  } catch (error) {
    console.error('Error fetching models, returning fallback:', error);
    return [
      { id: 'llama-3.3-70b', name: 'Llama 3.3 70B', usdcCost: 0.001, creditCost: 1, description: 'High performance open-weights instruction model.' },
      { id: 'deepseek-v3', name: 'DeepSeek V3', usdcCost: 0.002, creditCost: 1, description: 'Mixture-of-Experts chat model from DeepSeek.' },
      { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', usdcCost: 0.003, creditCost: 2, description: 'Fast and lightweight multimodal model by Google.' },
      { id: 'gpt-4o-mini', name: 'GPT-4o Mini', usdcCost: 0.005, creditCost: 3, description: 'Fast and affordable helper model from OpenAI.' },
      { id: 'claude-sonnet-4.5', name: 'Claude Sonnet 4.5', usdcCost: 0.01, creditCost: 5, description: 'State-of-the-art intelligence from Anthropic.' },
      { id: 'gpt-4o', name: 'GPT-4o', usdcCost: 0.01, creditCost: 5, description: 'OpenAI high-intelligence flagship model.' },
      { id: 'claude-opus-4.x', name: 'Claude Opus 3', usdcCost: 0.03, creditCost: 10, description: 'Anthropic master model for complex reasoning.' },
    ];
  }
}

export default async function Home() {
  const models = await getModels();

  return (
    <div className="min-h-screen bg-bg text-text dot-grid pb-24 selection:bg-accent/30">
      {/* Sticky top nav (glass) */}
      <nav className="sticky top-0 z-50 flex h-16 items-center justify-between px-6 md:px-12 border-b border-border bg-surface/75 backdrop-blur-md">
        <div className="flex items-center gap-2">
          {/* Inline SVG Rocket Logo */}
          <svg className="h-6 w-6 text-accent animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22L12 17L22 22L12 2Z" fill="currentColor" />
            <path d="M12 17V11" stroke="#000" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-xl font-bold tracking-wider text-text font-display">
            MOLFI<span className="text-accent">.</span>FUN
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-text-muted">
          <span className="hover:text-text cursor-pointer transition-colors">PRODUCTS ▾</span>
          <span className="hover:text-text cursor-pointer transition-colors">RESOURCES ▾</span>
          <span className="hover:text-text cursor-pointer transition-colors">$MOLFI ▾</span>
        </div>

        <div>
          <a
            href="http://localhost:3000/chat"
            className="pill-accent px-5 py-2 text-xs font-bold transition-all hover:brightness-110 tracking-wide uppercase shadow-lg shadow-accent/20"
          >
            Launch App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Powered by Avalanche Fuji Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-dim px-4 py-1.5 text-xs font-semibold text-accent-2 tracking-wide mb-8">
          <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
          ● POWERED BY AVALANCHE FUJI · x402
        </div>

        {/* Massive Headline */}
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-none headline">
          The Most <em className="not-italic text-accent-2">Agentic</em> Way to Pay AI
        </h1>

        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Humans pay with attention. Agents pay with stablecoins. One endpoint. Two economies. Live on Avalanche Fuji.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="http://localhost:3000/chat"
            className="w-full sm:w-auto pill-accent px-8 py-4 text-sm font-bold transition-all hover:scale-105 hover:brightness-110 shadow-lg shadow-accent/30 text-center"
          >
            Launch App
          </a>
          <button
            className="w-full sm:w-auto rounded-full border border-border bg-surface px-8 py-4 text-sm font-semibold text-text hover:border-accent hover:bg-surface-2 transition-all text-center cursor-pointer"
          >
            Watch 60s demo
          </button>
        </div>
      </header>

      {/* How x402 Works Diagram */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 headline">How <span className="text-accent">x402</span> Works</h2>
        <div className="glass p-8 rounded-2xl relative overflow-hidden border-2 border-border-2">
          {/* CSS-Animated Diagram SVG Sequence */}
          <div className="w-full aspect-[16/9] flex items-center justify-center bg-black/40 rounded-xl border border-border relative">
            <svg className="w-full h-full p-4" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Nodes */}
              <rect x="40" y="200" width="120" height="60" rx="8" fill="#14141a" stroke="#1f1f26" strokeWidth="2" />
              <text x="100" y="235" fill="#ffffff" fontSize="14" fontFamily="monospace" textAnchor="middle">Client</text>

              <rect x="340" y="100" width="120" height="60" rx="8" fill="#14141a" stroke="#1f1f26" strokeWidth="2" />
              <text x="400" y="135" fill="#ffffff" fontSize="14" fontFamily="monospace" textAnchor="middle">Backend</text>

              <rect x="340" y="300" width="120" height="60" rx="8" fill="#14141a" stroke="#1f1f26" strokeWidth="2" />
              <text x="400" y="335" fill="#ffffff" fontSize="14" fontFamily="monospace" textAnchor="middle">Fuji USDC</text>

              <rect x="640" y="200" width="120" height="60" rx="8" fill="#14141a" stroke="#1f1f26" strokeWidth="2" />
              <text x="700" y="235" fill="#ffffff" fontSize="14" fontFamily="monospace" textAnchor="middle">OpenRouter</text>

              {/* Step 1 Arrow: Client -> Backend (unpaid) */}
              <path d="M160 215 L340 135" stroke="#8a8a93" strokeWidth="2" strokeDasharray="5 5">
                <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite" />
              </path>
              <text x="230" y="165" fill="#ad46ff" fontSize="12" fontFamily="monospace" transform="rotate(-23 230 165)">1. Request (Unpaid)</text>

              {/* Step 2 Arrow: Backend -> Client (402) */}
              <path d="M340 150 L160 230" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5">
                <animate attributeName="stroke-dashoffset" values="0;50" dur="2s" repeatCount="indefinite" />
              </path>
              <text x="270" y="200" fill="#ef4444" fontSize="12" fontFamily="monospace" transform="rotate(-23 270 200)">2. HTTP 402 Redirect</text>

              {/* Step 3 Arrow: Client -> Backend (with X-PAYMENT EIP-3009) */}
              <path d="M160 240 L340 160" stroke="#ad46ff" strokeWidth="2">
                <animate attributeName="stroke-dashoffset" values="50;0" dur="2.5s" repeatCount="indefinite" />
              </path>
              <text x="250" y="225" fill="#c98aff" fontSize="12" fontFamily="monospace" transform="rotate(-23 250 225)">3. X-PAYMENT Sign</text>

              {/* Step 4 Arrow: Backend -> Fuji USDC */}
              <path d="M400 160 L400 300" stroke="#22c55e" strokeWidth="2" strokeDasharray="5 5">
                <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite" />
              </path>
              <text x="410" y="235" fill="#22c55e" fontSize="12" fontFamily="monospace">4. Settle On-Chain</text>

              {/* Step 5 Arrow: Backend -> OpenRouter */}
              <path d="M460 135 L640 215" stroke="#22c55e" strokeWidth="2">
                <animate attributeName="stroke-dashoffset" values="50;0" dur="2s" repeatCount="indefinite" />
              </path>
              <text x="530" y="165" fill="#22c55e" fontSize="12" fontFamily="monospace" transform="rotate(23 530 165)">5. Fetch Stream</text>

              {/* Step 6 Arrow: Backend -> Client */}
              <path d="M340 120 L120 200" stroke="#ad46ff" strokeWidth="2">
                <animate attributeName="stroke-dashoffset" values="0;50" dur="2.5s" repeatCount="indefinite" />
              </path>
              <text x="200" y="130" fill="#ad46ff" fontSize="12" fontFamily="monospace" transform="rotate(-20 200 130)">6. SSE Stream + Tx Hash</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Hybrid Rails Comparison */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 headline">Two Economies. One Endpoint.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Attention card */}
          <div className="glass p-8 rounded-2xl border-2 border-border hover:border-accent/40 transition-all flex flex-col justify-between">
            <div>
              <span className="text-4xl">🎬</span>
              <h3 className="text-2xl font-bold text-text mt-4 mb-3 headline">Pay with Attention</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                Designed for Human Users. Watch a non-skippable 15-second sponsor video ad to instantly claim chat credits. Credits are tracked off-chain and secured via tamper-proof HS256-signed JWTs.
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <span className="inline-block text-xs font-mono bg-surface-2 text-accent-2 border border-border px-3 py-1 rounded">
                Authorization: Bearer &lt;JWT&gt;
              </span>
            </div>
          </div>

          {/* Stablecoin card */}
          <div className="glass p-8 rounded-2xl border-2 border-border hover:border-accent/40 transition-all flex flex-col justify-between">
            <div>
              <span className="text-4xl">💸</span>
              <h3 className="text-2xl font-bold text-text mt-4 mb-3 headline">Pay with Stablecoins</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                Designed for Autonomous Agents. Execute completions programmatically using USDC stablecoins. Leverage Coinbase's HTTP 402 protocol standards to sign EIP-3009 transfer authorizations directly on Avalanche Fuji.
              </p>
            </div>
            <div className="border-t border-border pt-4">
              <span className="inline-block text-xs font-mono bg-surface-2 text-accent-2 border border-border px-3 py-1 rounded">
                X-PAYMENT: &lt;Base64 EIP-3009&gt;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Model & Price Grid */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 headline">Live Model Pricing</h2>
        <p className="text-sm text-text-muted text-center mb-10">Real-time costs fetched from our backend endpoints.</p>
        <div className="overflow-hidden rounded-2xl border-2 border-border-2 bg-surface shadow-2xl">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2">
                <th className="p-4 font-bold text-text">AI Model</th>
                <th className="p-4 font-bold text-text">USDC Cost (Agent Rail)</th>
                <th className="p-4 font-bold text-text">Credits Cost (Human Rail)</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m) => {
                const isPremium = m.usdcCost >= 0.01;
                return (
                  <tr
                    key={m.id}
                    className={`border-b border-border/40 hover:bg-surface-2/30 transition-all ${
                      isPremium ? 'bg-accent-dim/10' : ''
                    }`}
                  >
                    <td className="p-4 font-semibold text-text flex items-center gap-2">
                      {m.name}
                      {isPremium && (
                        <span className="rounded bg-accent/20 border border-accent/30 px-2 py-0.5 text-[9px] font-bold text-accent-2 uppercase">
                          PREMIUM
                        </span>
                      )}
                    </td>
                    <td className="p-4 font-mono text-accent-2">{m.usdcCost.toFixed(3)} USDC</td>
                    <td className="p-4 font-mono text-text-muted">{m.creditCost} Credits</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Agent Builder Code Block */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 headline">For Agent Builders</h2>
        <div className="glass p-6 rounded-2xl border-2 border-border-2">
          <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
            <span className="text-xs font-mono text-text-muted uppercase">HTTP Request Snippet</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(`const res = await fetch('https://api.molfi.fun/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-PAYMENT': xPaymentBase64SignatureHeader // base64 EIP-3009 signature
  },
  body: JSON.stringify({
    model: 'llama-3.3-70b',
    messages: [{ role: 'user', content: 'Autonomous stablecoin payment!' }]
  })
});`);
              }}
              className="text-xs text-accent hover:text-accent-2 cursor-pointer font-bold transition-all"
            >
              [Copy Snippet]
            </button>
          </div>
          <pre className="rounded bg-black p-4 border border-border text-xs font-mono text-text-muted overflow-x-auto">
{`const res = await fetch('https://api.molfi.fun/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-PAYMENT': xPaymentBase64SignatureHeader // base64 EIP-3009 signature
  },
  body: JSON.stringify({
    model: 'llama-3.3-70b',
    messages: [{ role: 'user', content: 'Autonomous stablecoin payment!' }]
  })
});`}
          </pre>
        </div>
      </section>

      {/* For Marketers Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="rounded-2xl border-2 border-accent/40 bg-accent-dim/20 p-8 md:p-12 text-center shadow-xl shadow-accent/5">
          <span className="text-4xl">📢</span>
          <h2 className="text-2xl md:text-3xl font-bold text-text mt-4 mb-3 headline">For Advertisers & Marketers</h2>
          <p className="text-sm text-text-muted max-w-xl mx-auto mb-8 leading-relaxed">
            Want to put your video ads on Molfi? Access verifiable impressions tracked directly on-chain and earn payouts programmatically.
          </p>
          <a
            href="http://localhost:3002"
            className="inline-block pill-accent px-8 py-4 text-xs font-bold uppercase transition-all hover:scale-105 hover:brightness-110 shadow-lg shadow-accent/20"
          >
            Open Marketers Dashboard
          </a>
        </div>
      </section>

      {/* Hackathon Card */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="rounded-2xl border border-border bg-surface p-8 text-center glass shadow-2xl">
          <span className="text-3xl">🏔️</span>
          <h2 className="text-2xl font-bold text-text mt-3 mb-2 headline">Hackathon Submission</h2>
          <p className="text-xs text-text-muted max-w-lg mx-auto mb-6 leading-relaxed">
            Built for the **Avalanche India Team1 Speedrun June 2026 — Agentic Payments Track**.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-text-muted mb-4">
            <span className="rounded border border-border bg-surface-2 px-3 py-1.5">Chain: Fuji Testnet (43113)</span>
            <span className="rounded border border-border bg-surface-2 px-3 py-1.5">USDC: 0x5425...1Bc65</span>
            <span className="rounded border border-border bg-surface-2 px-3 py-1.5">Protocol: Coinbase x402</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-xs font-semibold text-accent">
            <a href="https://github.com/nickthelegend/speedrun" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Codebase</a>
            <span>•</span>
            <a href="https://testnet.snowtrace.io" target="_blank" rel="noopener noreferrer" className="hover:underline">Fuji Snowtrace</a>
            <span>•</span>
            <a href="/molfi-extension-1.0.0.vsix" download className="hover:underline">VS Code Extension (.vsix)</a>
            <span>•</span>
            <a href="#" className="hover:underline">Judge Cheatsheet PDF</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-text-muted border-t border-border/40 mt-16 pt-8">
        Built by Nivesh (<a href="https://github.com/nickthelegend" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@nickthelegend</a>) for Avalanche India Speedrun June 2026.
      </footer>
    </div>
  );
}
