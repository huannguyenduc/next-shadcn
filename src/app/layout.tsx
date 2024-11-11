import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import LocaleProvider from '@/components/locale-provider';
import { ThemeProvider } from 'next-themes';
import { cn } from '@/lib/utils';
import { fontSans } from '@/lib/fonts';
type Props = {
  children: ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <LocaleProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('site');
  const locale = await getLocale();
  const title = t('title');
  const description = t('desc');

  return {
    title,
    description,
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title,
      description,
      url: 'https://nextjs.org',
      siteName: title,
      images: [
        {
          url: 'https://nextjs.org/og.png',
          width: 800,
          height: 600,
        },
        {
          url: 'https://nextjs.org/og-alt.png',
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
      locale,
      type: 'website',
    },
    // themeColor: [
    //   { media: '(prefers-color-scheme: light)', color: 'white' },
    //   { media: '(prefers-color-scheme: dark)', color: 'black' },
    // ],
  };
}
