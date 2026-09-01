import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payflow —  UI Demo',
  description: "A fictional fintech interface built as a portfolio project using Next.js, TypeScript, and Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
