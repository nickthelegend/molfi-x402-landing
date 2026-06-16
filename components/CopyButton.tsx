'use client';

import React, { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-xs text-accent hover:text-accent-2 cursor-pointer font-bold transition-all"
    >
      {copied ? '[Copied!]' : '[Copy Snippet]'}
    </button>
  );
}
