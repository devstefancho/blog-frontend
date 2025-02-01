import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/layouts/NavBar';
import Footer from '@/layouts/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Theme } from '@/constants/theme';
import 'highlight.js/styles/github-dark.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "DevStefanCho's Blog",
  description: 'blog for IT development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeFromCookie =
    cookies().get('x-theme')?.value === Theme.DARK ? Theme.DARK : Theme.LIGHT;

  return (
    <html lang="en" className={themeFromCookie}>
      <head>
        <meta
          name="google-site-verification"
          content="ZzOImKe9PcfLg8MvS7bJpK7JVu8zgjKoXo28HU8zfs0"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@docsearch/css@3"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider xTheme={themeFromCookie}>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
