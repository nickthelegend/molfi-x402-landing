import './globals.css';
import { Metadata } from 'next';

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
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
