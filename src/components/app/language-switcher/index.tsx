import { Locale } from '@/config';
import { setUserLocale } from '@/services/locales';
import React, { useTransition } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLocale } from 'next-intl';

interface LanguageSwitcherProps {}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();

  const handleLocaleChange = (value: unknown) => {
    startTransition(() => {
      setUserLocale(value as Locale);
    });
  };

  return (
    <Select
      onValueChange={(val) => handleLocaleChange(val)}
      disabled={isPending}
      defaultValue={locale}
    >
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en-US">EN</SelectItem>
          <SelectItem value="vi-VN">VI</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
