import { Metadata } from 'next';
import { Protest_Revolution } from 'next/font/google';

import { ThemeProvider } from '@/components/custom/theme-provider';

import './globals.css';

const tillana = Protest_Revolution({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tillana',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Kiko',
  description: '',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '',
    title: 'Kiko',
    images: [
      {
        url: '/favicon.png',
        alt: 'Kiko',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiko',
    images: ['/favicon.png'],
  },
  icons: {
    icon: '/favicon.png',
  },
};

export const viewport = {
  maximumScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${tillana.variable} font-sans font-semibold`}
      // `next-themes` injects an extra classname to the body element to avoid
      // visual flicker before hydration. Hence the `suppressHydrationWarning`
      // prop is necessary to avoid the React hydration mismatch warning.
      // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
      suppressHydrationWarning
    >
      <head></head>
      <body className="antialiased">
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
