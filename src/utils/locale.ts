export const languages = {
  'vi-VN': {
    name: 'Vietnamese',
    flag: '🇻🇳',
    unicode: '1f1fb-1f1f3',
  },
  'en-US': {
    name: 'English',
    flag: '🇺🇸',
    unicode: '1f1fa-1f1f8',
  },
};

export const MatchLanguage = (locale: string) => {
  return Object.keys(languages).includes(locale);
};

export type ILanguage = {
  [K in keyof typeof languages]: {
    name: string;
    flag: string;
    unicode: string;
  };
};

export const defaultLocale: keyof typeof languages = 'en-US';
