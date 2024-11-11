'use client';

import LanguageSwitcher from '@/components/app/language-switcher';
import { ThemeToggle } from '@/components/app/theme-switcher';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  const t = useTranslations();

  return (
    <>
      <Button>Click me</Button>
      <p>{t('site.desc')}</p>
      <Link href="/admin">admin</Link>
      <ThemeToggle />
      <LanguageSwitcher />
    </>
  );
};

export default HomePage;
