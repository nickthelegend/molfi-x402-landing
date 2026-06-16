import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text dot-grid pb-20">
      {/* Navbar */}
      <nav className="flex h-16 items-center justify-between px-6 md:px-12 border-b border-border bg-surface/50 backdrop-blur">
        <div className="text-xl font-bold tracking-tight text-text">
          MOLFI<span className="text-accent">.</span>FUN
        </div>
        <div className="flex items-center gap-4">
          <a
            href="http://localhost:3000/chat"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent/90 transition-all"
          >
            Launch App
          </a>
        </div>
      </nav>

      {/* 1. Hero Section */}
      <header className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Pay AI with <span className="text-accent">Attention</span> or <span className="text-accent">Stablecoins</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
          Molfi.fun is a multi-model AI assistant playground. Humans watch short ads to earn chat credits, while autonomous agents pay micro-cents in USDC on Avalanche Fuji using x402 headers.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="http://localhost:3000/chat"
            className="w-full sm:w-auto rounded-lg bg-accent px-8 py-3.5 text-base font-bold text-white hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all text-center"
          >
            Launch Molfi Chat
          </a>
          <a
            href="https://testnet.snowtrace.io"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-lg border border-border bg-surface px-8 py-3.5 text-base font-semibold text-text hover:border-text-muted transition-all text-center"
          >
            Explore on Snowtrace
          </a>
        </div>
      </header>

      {/* 2. The Agentic Payment Problem */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">The Missing Web Payment Protocol</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-xl">
            <span className="text-2xl">👤</span>
            <h3 className="text-lg font-bold text-text mt-3 mb-2">Humans don't have wallets</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Standard consumer web users don't have Web3 wallets configured or stablecoins ready to pay micro-cents for everyday AI queries.
            </p>
          </div>
          <div className="glass p-6 rounded-xl">
            <span className="text-2xl">🤖</span>
            <h3 className="text-lg font-bold text-text mt-3 mb-2">Agents don't have eyeballs</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Autonomous scripts and AI agents cannot watch sponsor video ads to top up credits. They need a programmatically signed stablecoin payment.
            </p>
          </div>
          <div className="glass p-6 rounded-xl">
            <span className="text-2xl">⚡</span>
            <h3 className="text-lg font-bold text-text mt-3 mb-2">Everyone wants Claude</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Both economies access the exact same completions endpoint, powered by OpenRouter to route requests to premium models like Claude 3.5 Sonnet.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How x402 works */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">How x402 Works on Molfi</h2>
        <div className="glass p-6 rounded-xl font-mono text-xs text-text-muted leading-relaxed">
          <div className="flex items-center gap-2 mb-4 border-b border-border pb-2">
            <span className="h-3 w-3 rounded-full bg-accent" />
            <span className="text-text font-bold uppercase text-[10px]">Protocol Exchange Sequence</span>
          </div>
          <ol className="list-decimal pl-4 flex flex-col gap-2.5">
            <li>
              Client sends completions prompt to <code className="text-accent-2">POST /v1/chat/completions</code>
            </li>
            <li>
              Server replies with <code className="text-accent-2">HTTP 402 Payment Required</code> detailing Circle USDC Fuji contract <code className="text-text">0x5425890298aed601595a70AB815c96711a31Bc65</code>
            </li>
            <li>
              Client signs EIP-3009 <code className="text-text">transferWithAuthorization</code> signature and places it inside <code className="text-accent-2">X-PAYMENT</code> request header
            </li>
            <li>
              Server settles signature on-chain and streams completion with <code className="text-accent-2">X-PAYMENT-RESPONSE</code> transaction receipt
            </li>
          </ol>
        </div>
      </section>

      {/* 4. Cost Table */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Model Cost Table</h2>
        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-xl">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-2">
                <th className="p-4 font-bold text-text">AI Model</th>
                <th className="p-4 font-bold text-text">USDC Cost (Agent Rail)</th>
                <th className="p-4 font-bold text-text">Credits Cost (Human Rail)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/40 hover:bg-surface-2/30 transition-all">
                <td className="p-4 text-text font-semibold">Llama 3.3 70B</td>
                <td className="p-4 font-mono text-accent-2">0.001 USDC</td>
                <td className="p-4">1 Credit</td>
              </tr>
              <tr className="border-b border-border/40 hover:bg-surface-2/30 transition-all">
                <td className="p-4 text-text font-semibold">DeepSeek V3</td>
                <td className="p-4 font-mono text-accent-2">0.002 USDC</td>
                <td className="p-4">1 Credit</td>
              </tr>
              <tr className="border-b border-border/40 hover:bg-surface-2/30 transition-all">
                <td className="p-4 text-text font-semibold">Gemini 2.5 Flash</td>
                <td className="p-4 font-mono text-accent-2">0.003 USDC</td>
                <td className="p-4">2 Credits</td>
              </tr>
              <tr className="border-b border-border/40 hover:bg-surface-2/30 transition-all">
                <td className="p-4 text-text font-semibold">GPT-4o Mini</td>
                <td className="p-4 font-mono text-accent-2">0.005 USDC</td>
                <td className="p-4">3 Credits</td>
              </tr>
              <tr className="border-b border-border/40 hover:bg-surface-2/30 transition-all">
                <td className="p-4 text-text font-semibold">Claude Sonnet 4.5</td>
                <td className="p-4 font-mono text-accent-2">0.010 USDC</td>
                <td className="p-4">5 Credits</td>
              </tr>
              <tr className="border-b border-border/40 hover:bg-surface-2/30 transition-all">
                <td className="p-4 text-text font-semibold">GPT-4o</td>
                <td className="p-4 font-mono text-accent-2">0.010 USDC</td>
                <td className="p-4">5 Credits</td>
              </tr>
              <tr className="hover:bg-surface-2/30 transition-all">
                <td className="p-4 text-text font-semibold">Claude Opus 3</td>
                <td className="p-4 font-mono text-accent-2">0.030 USDC</td>
                <td className="p-4">10 Credits</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. For Agent Builders */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">For Agent Builders</h2>
        <div className="glass p-6 rounded-xl">
          <p className="text-sm text-text-muted mb-4 leading-relaxed">
            Integrating Molfi completions in your autonomous scripts is simple. The endpoint behaves as standard OpenAI/OpenRouter chat APIs but prompts with a 402 signature request.
          </p>
          <pre className="rounded bg-bg p-4 border border-border text-xs font-mono text-text-muted overflow-x-auto">
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

      {/* 6. Submission Card */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center glass shadow-2xl">
          <span className="text-3xl">🏔️</span>
          <h2 className="text-2xl font-bold text-text mt-3 mb-2">Hackathon Submission Details</h2>
          <p className="text-sm text-text-muted max-w-lg mx-auto mb-6 leading-relaxed">
            This project was built for the **Avalanche India Team1 Speedrun June 2026 — Agentic Payments Track**.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-text-muted">
            <span className="rounded border border-border bg-surface px-3 py-1">Chain: Fuji Testnet (43113)</span>
            <span className="rounded border border-border bg-surface px-3 py-1">USDC: 0x5425...1Bc65</span>
            <span className="rounded border border-border bg-surface px-3 py-1">Protocol: Coinbase x402</span>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="text-center text-xs text-text-muted border-t border-border/40 mt-16 pt-8">
        Built by Nivesh (<a href="https://github.com/nickthelegend" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@nickthelegend</a>) for Avalanche India Speedrun June 2026.
      </footer>
    </div>
  );
}
