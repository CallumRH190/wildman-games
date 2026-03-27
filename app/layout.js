import { Barlow_Condensed, DM_Sans, DM_Mono } from 'next/font/google';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

export const metadata = {
  title: 'The Wildman Challenge — May 2026 | Marbella',
  description:
    'A premium mens fitness and mental resilience event. 4 days in Marbella. Structured challenge. Real standards. May 28–31, 2026. 20 places only.',
  keywords: [
    'wildman challenge',
    'wildman games',
    'men fitness event',
    'mental resilience retreat',
    'marbella adventure',
    'mens performance event 2026',
  ],
  openGraph: {
    title: 'The Wildman Challenge — May 2026 | Marbella',
    description:
      'A premium mens fitness and mental resilience event. 4 days in Marbella. 20 places. Book your fit call.',
    url: 'https://wildmanchallenge.com',
    siteName: 'Wildman Challenge',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Wildman Challenge — Marbella 2026',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wildman Challenge — May 2026 | Marbella',
    description: 'A premium mens fitness and mental resilience event. 20 places. May 28–31.',
    images: ['/assets/og-image.jpg'],
  },
  icons: {
    icon: '/assets/FAVICON_.png',
    shortcut: '/assets/FAVICON_.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
