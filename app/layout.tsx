import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payflow — Smart finance. Seamless payments.',
  description: 'A polished fintech experience for moving, managing, and growing your money.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
