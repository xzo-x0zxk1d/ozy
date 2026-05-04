import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import { Providers } from '@/app/providers';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
});

export const metadata: Metadata = {
  title: 'Ozy Bot — Discord Bot Dashboard',
  description: 'Professional Discord bot with 150+ commands and advanced server management',
  openGraph: {
    title: 'Ozy Bot',
    description: 'Premium Discord Bot',
    url: 'https://ozy-bot.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <CustomCursor />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
