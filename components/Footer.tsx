'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-32 px-6 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-24">
        <div className="flex flex-col items-start gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Molfi Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-2xl font-black text-white tracking-tighter uppercase font-headline">Molfi</span>
          </div>
          <p className="text-on-surface-variant text-base font-medium max-w-sm leading-relaxed text-left">
            The ultimate agentic payments and chat platform. Humans pay with attention, agents pay with stablecoins. Live on Avalanche Fuji.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-24 text-sm w-full md:w-auto text-left">
          <div className="space-y-8">
            <h4 className="font-black text-white uppercase tracking-[0.2em] text-[11px]">Product</h4>
            <ul className="space-y-4 font-bold text-on-surface-variant">
              <li><a href="/molfi-extension-1.0.0.vsix" download className="hover:text-primary transition-colors">Extension</a></li>
              <li><a href="http://localhost:3000/chat" className="hover:text-primary transition-colors">Agentic Chat</a></li>
              <li><a href="http://localhost:3002" className="hover:text-primary transition-colors">Marketers Panel</a></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="font-black text-white uppercase tracking-[0.2em] text-[11px]">Resources</h4>
            <ul className="space-y-4 font-bold text-on-surface-variant">
              <li><a href="http://localhost:3000/chat" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="https://github.com/nickthelegend/speedrun" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Source Code</a></li>
              <li><a href="https://testnet.snowtrace.io" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Fuji Snowtrace</a></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="font-black text-white uppercase tracking-[0.2em] text-[11px]">Community</h4>
            <ul className="space-y-4 font-bold text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">X / Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Telegram</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-[0.3em] text-white/20">
        <span>© 2026 Molfi</span>
        <span>Built by Nivesh (@nickthelegend) for Avalanche India Speedrun June 2026</span>
      </div>
    </footer>
  );
}
