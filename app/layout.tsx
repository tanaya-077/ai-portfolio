
import type { Metadata } from 'next';
import { Space_Grotesk, DM_Mono } from 'next/font/google';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './globals.css';
import ScrollProvider from '@/components/ScrollProvider';

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const monoFont = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Tanaya | Agentic AI Developer',
  description:
    'Building intelligent AI agents, automation systems and thoughtful digital experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${displayFont.variable} ${monoFont.variable}`}
      >
        <ScrollProvider />
        {children}
      </body>
    </html>
  );
}