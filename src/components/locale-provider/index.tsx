import { PropsWithChildren } from 'react';

import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

export type ProviderProps = PropsWithChildren<{
  locale: string;
  messages: AbstractIntlMessages;
}>;

const LocaleProvider = ({ children, locale, messages }: ProviderProps) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};

export default LocaleProvider;
