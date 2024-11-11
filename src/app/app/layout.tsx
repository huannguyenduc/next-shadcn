import React from 'react';
import MainFooter from '@/components/app/layouts/main/footer';
import MainHeader from '@/components/app/layouts/main/header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <MainHeader />
      {children}
      <MainFooter />
    </section>
  );
}
