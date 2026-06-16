import './globals.css';
import { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-display' });
const bodyFont = Inter({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Molfi.fun — Pay AI with Attention or Stablecoins',
  description: 'The agentic payments playground built on Avalanche Fuji using the x402 protocol.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${bodyFont.variable} ${mono.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}

