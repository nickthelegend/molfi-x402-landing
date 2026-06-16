import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import CopyButton from '../components/CopyButton';
import { ArrowUpRight } from 'lucide-react';

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
    <main className="flex flex-col min-h-screen bg-background text-on-surface antialiased overflow-x-hidden selection:bg-primary selection:text-on-primary dot-grid pb-24">
      <Navbar />

      {/* Hero Section */}
      <header className="relative pt-48 pb-24 px-6 overflow-hidden flex flex-col items-center text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          POWERED BY AVALANCHE FUJI · x402
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-[5.5rem] font-black tracking-[-0.04em] mb-8 leading-[1.0] font-headline max-w-4xl mx-auto">
          The Most <span className="text-primary italic">Agentic</span> Way <br /> to Pay AI
        </h1>

        {/* Subheadline */}
        <p className="text-on-surface-variant text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed text-center">
          Humans pay with attention. Agents pay with stablecoins. One endpoint. Two economies. Live on Avalanche Fuji.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24 relative z-10">
          <a
            href="http://localhost:3000/chat"
            className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 primary-glow hover:opacity-90 active:scale-95 transition-all w-full sm:w-auto text-center"
          >
            Launch Molfi App
          </a>
          <button
            className="w-full sm:w-auto rounded-2xl border border-outline-variant/20 bg-surface px-10 py-5 text-xs font-black uppercase tracking-widest text-white hover:border-primary/20 transition-all text-center cursor-pointer"
          >
            Watch 60s demo
          </button>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse duration-[10s]" />
      </header>

      {/* How x402 Works Diagram */}
      <section className="max-w-4xl mx-auto px-6 py-16 w-full">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 font-headline tracking-tight">How <span className="text-primary">x402</span> Works</h2>
        <div className="glass p-8 rounded-[2.5rem] relative overflow-hidden border border-outline-variant/10">
          {/* CSS-Animated Diagram SVG Sequence */}
          <div className="w-full aspect-[16/9] flex items-center justify-center bg-black/40 rounded-3xl border border-white/5 relative">
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
              <text x="230" y="165" fill="#c899ff" fontSize="12" fontFamily="monospace" transform="rotate(-23 230 165)">1. Request (Unpaid)</text>

              {/* Step 2 Arrow: Backend -> Client (402) */}
              <path d="M340 150 L160 230" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 5">
                <animate attributeName="stroke-dashoffset" values="0;50" dur="2s" repeatCount="indefinite" />
              </path>
              <text x="270" y="200" fill="#ef4444" fontSize="12" fontFamily="monospace" transform="rotate(-23 270 200)">2. HTTP 402 Redirect</text>

              {/* Step 3 Arrow: Client -> Backend (with X-PAYMENT EIP-3009) */}
              <path d="M160 240 L340 160" stroke="#c899ff" strokeWidth="2">
                <animate attributeName="stroke-dashoffset" values="50;0" dur="2.5s" repeatCount="indefinite" />
              </path>
              <text x="250" y="225" fill="#bb83fd" fontSize="12" fontFamily="monospace" transform="rotate(-23 250 225)">3. X-PAYMENT Sign</text>

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
              <path d="M340 120 L120 200" stroke="#c899ff" strokeWidth="2">
                <animate attributeName="stroke-dashoffset" values="0;50" dur="2.5s" repeatCount="indefinite" />
              </path>
              <text x="200" y="130" fill="#c899ff" fontSize="12" fontFamily="monospace" transform="rotate(-20 200 130)">6. SSE Stream + Tx Hash</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Hybrid Rails Comparison */}
      <section className="max-w-7xl mx-auto px-6 py-16 w-full">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 font-headline tracking-tight">Two Economies. One Endpoint.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Attention card */}
          <div className="group relative bg-surface-container rounded-[2.5rem] overflow-hidden border border-outline-variant/10 hover:border-primary/20 transition-all flex flex-col justify-between h-full p-12 hover:-translate-y-1 duration-300">
            <div>
              <span className="text-4xl">🎬</span>
              <h3 className="text-3xl font-black text-white mt-6 mb-4 font-headline tracking-tight flex items-center gap-3">
                Pay with Attention
              </h3>
              <p className="text-on-surface-variant font-medium leading-relaxed mb-6 text-left">
                Designed for Human Users. Watch a non-skippable 15-second sponsor video ad to instantly claim chat credits. Credits are tracked off-chain and secured via tamper-proof HS256-signed JWTs.
              </p>
            </div>
            <div className="border-t border-white/5 pt-6 mt-6 text-left">
              <span className="inline-block text-[11px] font-mono bg-surface-container-low text-primary border border-outline-variant/10 px-4 py-1.5 rounded-xl">
                Authorization: Bearer &lt;JWT&gt;
              </span>
            </div>
          </div>

          {/* Stablecoin card */}
          <div className="group relative bg-surface-container rounded-[2.5rem] overflow-hidden border border-outline-variant/10 hover:border-primary/20 transition-all flex flex-col justify-between h-full p-12 hover:-translate-y-1 duration-300">
            <div>
              <span className="text-4xl">💸</span>
              <h3 className="text-3xl font-black text-white mt-6 mb-4 font-headline tracking-tight flex items-center gap-3">
                Pay with Stablecoins
              </h3>
              <p className="text-on-surface-variant font-medium leading-relaxed mb-6 text-left">
                Designed for Autonomous Agents. Execute completions programmatically using USDC stablecoins. Leverage Coinbase's HTTP 402 protocol standards to sign EIP-3009 transfer authorizations directly on Avalanche Fuji.
              </p>
            </div>
            <div className="border-t border-white/5 pt-6 mt-6 text-left">
              <span className="inline-block text-[11px] font-mono bg-surface-container-low text-primary border border-outline-variant/10 px-4 py-1.5 rounded-xl">
                X-PAYMENT: &lt;Base64 EIP-3009&gt;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Model & Price Grid */}
      <section className="max-w-4xl mx-auto px-6 py-16 w-full">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4 font-headline tracking-tight">Live Model Pricing</h2>
        <p className="text-sm text-on-surface-variant text-center mb-10">Real-time costs fetched from our backend endpoints.</p>
        <div className="overflow-hidden rounded-[2.5rem] border border-outline-variant/10 bg-surface-container shadow-2xl">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-outline-variant/10 bg-surface-container-high">
                <th className="p-6 font-black uppercase tracking-wider text-[11px] text-white">AI Model</th>
                <th className="p-6 font-black uppercase tracking-wider text-[11px] text-white">USDC Cost (Agent Rail)</th>
                <th className="p-6 font-black uppercase tracking-wider text-[11px] text-white">Credits Cost (Human Rail)</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m) => {
                const isPremium = m.usdcCost >= 0.01;
                return (
                  <tr
                    key={m.id}
                    className={`border-b border-outline-variant/10 hover:bg-white/5 transition-all ${
                      isPremium ? 'bg-primary/5' : ''
                    }`}
                  >
                    <td className="p-6 font-bold text-white flex items-center gap-3">
                      {m.name}
                      {isPremium && (
                        <span className="rounded-lg bg-primary/20 border border-primary/30 px-2.5 py-0.5 text-[9px] font-black text-primary uppercase tracking-wider">
                          PREMIUM
                        </span>
                      )}
                    </td>
                    <td className="p-6 font-mono text-primary font-bold">{m.usdcCost.toFixed(3)} USDC</td>
                    <td className="p-6 font-mono text-on-surface-variant">{m.creditCost} Credits</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Agent Builder Code Block */}
      <section className="max-w-4xl mx-auto px-6 py-16 w-full">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-10 font-headline tracking-tight">For Agent Builders</h2>
        <div className="bg-surface-container p-8 rounded-[2.5rem] border border-outline-variant/10">
          <div className="flex items-center justify-between border-b border-outline-variant/10 pb-4 mb-6">
            <span className="text-[11px] font-mono text-on-surface-variant uppercase tracking-widest">HTTP Request Snippet</span>
            <CopyButton text={`const res = await fetch('https://api.molfi.fun/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-PAYMENT': xPaymentBase64SignatureHeader // base64 EIP-3009 signature
  },
  body: JSON.stringify({
    model: 'llama-3.3-70b',
    messages: [{ role: 'user', content: 'Autonomous stablecoin payment!' }]
  })
});`} />
          </div>
          <pre className="rounded-2xl bg-black/40 p-6 border border-outline-variant/10 text-xs font-mono text-on-surface-variant overflow-x-auto text-left">
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
      <section className="max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="rounded-[2.5rem] border border-primary/20 bg-primary/5 p-12 md:p-20 text-center shadow-xl relative overflow-hidden">
          {/* Ambient light */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-5xl relative z-10 block mb-6">📢</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-4 font-headline tracking-tight relative z-10">
            For Advertisers & Marketers
          </h2>
          <p className="text-on-surface-variant text-base font-medium max-w-xl mx-auto mb-10 leading-relaxed relative z-10 text-center">
            Want to put your video ads on Molfi? Access verifiable impressions tracked directly on-chain and earn payouts programmatically.
          </p>
          <a
            href="http://localhost:3002"
            className="relative z-10 inline-flex items-center gap-2 bg-primary text-on-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs primary-glow hover:opacity-90 active:scale-95 transition-all"
          >
            Open Marketers Dashboard
          </a>
        </div>
      </section>

      {/* Hackathon Card */}
      <section className="max-w-4xl mx-auto px-6 py-12 w-full">
        <div className="rounded-[2.5rem] border border-outline-variant/10 bg-surface-container p-12 text-center shadow-2xl">
          <span className="text-4xl block mb-4">🏔️</span>
          <h2 className="text-3xl font-black text-white mt-3 mb-3 font-headline tracking-tight">Hackathon Submission</h2>
          <p className="text-on-surface-variant text-sm font-medium max-w-lg mx-auto mb-8 leading-relaxed text-center">
            Built for the **Avalanche India Team1 Speedrun June 2026 — Agentic Payments Track**.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-on-surface-variant mb-8">
            <span className="rounded-xl border border-outline-variant/10 bg-surface-container-low px-4 py-2">Chain: Fuji Testnet (43113)</span>
            <span className="rounded-xl border border-outline-variant/10 bg-surface-container-low px-4 py-2">USDC: 0x5425...1Bc65</span>
            <span className="rounded-xl border border-outline-variant/10 bg-surface-container-low px-4 py-2">Protocol: Coinbase x402</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-black uppercase tracking-wider text-primary">
            <a href="https://github.com/nickthelegend/speedrun" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              GitHub Codebase <ArrowUpRight size={12} />
            </a>
            <span className="text-outline-variant hidden sm:inline">•</span>
            <a href="https://testnet.snowtrace.io" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              Fuji Snowtrace <ArrowUpRight size={12} />
            </a>
            <span className="text-outline-variant hidden sm:inline">•</span>
            <a href="/molfi-extension-1.0.0.vsix" download className="hover:underline flex items-center gap-1">
              VS Code Extension (.vsix) <ArrowUpRight size={12} />
            </a>
            <span className="text-outline-variant hidden sm:inline">•</span>
            <a href="#" className="hover:underline flex items-center gap-1">
              Judge Cheatsheet PDF <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
