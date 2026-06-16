import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ArrowUpRight, Download, Monitor, Terminal, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Download Molfi VS Code Extension — molfi.fun',
  description: 'Download and install the Molfi AI Chat VS Code Extension. Claude-Code-style sidebar with 13 models, x402 payments, and watch-to-earn ads.',
};

export default function DownloadPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-on-surface antialiased overflow-x-hidden selection:bg-primary selection:text-on-primary dot-grid pb-24">
      <Navbar />

      {/* Hero */}
      <header className="relative pt-48 pb-16 px-6 overflow-hidden flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-12">
          <Monitor size={14} />
          VS CODE EXTENSION
        </div>

        <h1 className="text-5xl md:text-[5rem] font-black tracking-[-0.04em] mb-8 leading-[1.0] font-headline max-w-4xl mx-auto">
          Molfi for <span className="text-primary italic">VS Code</span>
        </h1>

        <p className="text-on-surface-variant text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed text-center">
          A Claude-Code-style AI chat sidebar right inside your editor. 13 models, x402 agentic payments, and watch-to-earn video ads — all without leaving VS Code.
        </p>

        {/* Download CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 relative z-10">
          <a
            href="/molfi-extension-1.0.0.vsix"
            download
            className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 primary-glow hover:opacity-90 active:scale-95 transition-all w-full sm:w-auto text-center"
          >
            <Download size={16} />
            Download .vsix (v1.0.0)
          </a>
          <a
            href="https://github.com/nickthelegend/molfi-x402-extension"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto rounded-2xl border border-outline-variant/20 bg-surface px-10 py-5 text-xs font-black uppercase tracking-widest text-white hover:border-primary/20 transition-all text-center cursor-pointer flex items-center justify-center gap-2"
          >
            View Source <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse duration-[10s]" />
      </header>

      {/* Installation Steps */}
      <section className="max-w-3xl mx-auto px-6 py-16 w-full">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 font-headline tracking-tight">Install in 3 Steps</h2>
        <div className="flex flex-col gap-6">
          {/* Step 1 */}
          <div className="glass p-8 rounded-[2rem] border border-outline-variant/10 hover:border-primary/20 transition-all">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-black text-lg">1</span>
              </div>
              <div>
                <h3 className="text-lg font-black text-white mb-2">Download the .vsix file</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  Click the download button above to save <code className="bg-surface-container px-2 py-0.5 rounded text-primary text-xs">molfi-extension-1.0.0.vsix</code> to your machine.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass p-8 rounded-[2rem] border border-outline-variant/10 hover:border-primary/20 transition-all">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-black text-lg">2</span>
              </div>
              <div>
                <h3 className="text-lg font-black text-white mb-2">Install via Terminal or VS Code</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  Run the following command in your terminal:
                </p>
                <pre className="rounded-xl bg-black/40 p-4 border border-outline-variant/10 text-xs font-mono text-on-surface-variant overflow-x-auto">
{`code --install-extension molfi-extension-1.0.0.vsix`}
                </pre>
                <p className="text-on-surface-variant text-xs mt-3 leading-relaxed">
                  Or open VS Code → Extensions → <code className="bg-surface-container px-1.5 py-0.5 rounded text-primary text-[10px]">···</code> → Install from VSIX…
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass p-8 rounded-[2rem] border border-outline-variant/10 hover:border-primary/20 transition-all">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-black text-lg">3</span>
              </div>
              <div>
                <h3 className="text-lg font-black text-white mb-2">Start Chatting</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  Click the Molfi icon in the Activity Bar. Select a model, type a message, and start streaming AI completions. Watch ads to earn credits or use your Fuji USDC wallet for x402 payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-4xl mx-auto px-6 py-16 w-full">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 font-headline tracking-tight">What&apos;s Inside</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: '🤖', title: '13 AI Models', desc: 'From Llama 3.3 70B to Claude Opus 4 — switch models mid-conversation.' },
            { icon: '💳', title: 'x402 Payments', desc: 'EIP-3009 USDC micro-payments on Avalanche Fuji, handled automatically.' },
            { icon: '🎬', title: 'Watch-to-Earn Ads', desc: 'Non-skippable video ads grant chat credits with cryptographic proof.' },
            { icon: '🔐', title: 'Built-in Wallet', desc: 'Secure local key storage with SIWE authentication and balance tracking.' },
          ].map((f) => (
            <div key={f.title} className="glass p-8 rounded-[2rem] border border-outline-variant/10 hover:border-primary/20 transition-all hover:-translate-y-1 duration-300">
              <span className="text-3xl block mb-4">{f.icon}</span>
              <h3 className="text-lg font-black text-white mb-2 font-headline">{f.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
