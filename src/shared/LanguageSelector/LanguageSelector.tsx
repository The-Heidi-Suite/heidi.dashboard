import { ChevronDown, Globe } from 'lucide-react';
import { useEffect, useMemo } from 'react';

import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { saveDataInBrowserStorage } from '@/lib/browserStorage';
import SupportedLanguage from '@/type/SupportedLang';

type AllLanguage = { code: SupportedLanguage; name: string; flag: string };

const ALL_LANGUAGES: AllLanguage[] = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'dk', name: 'Dansk', flag: '' },
  { code: 'no', name: 'Norsk', flag: '' },
  { code: 'se', name: 'Svenska', flag: '' },
  { code: 'ar', name: 'العربية', flag: '' },
  { code: 'fa', name: 'فارسی', flag: '' },
  { code: 'tr', name: 'Türkçe', flag: '' },
  { code: 'ru', name: 'Русский', flag: '' },
  { code: 'uk', name: 'Українська', flag: '' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation<'translation'>();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const currentLanguage = useMemo(
    () => ALL_LANGUAGES.find((lang) => lang.code === i18n.language),
    [i18n.language]
  );

  const changeLanguage = (lang: SupportedLanguage) => {
    i18n.changeLanguage(lang);
    saveDataInBrowserStorage('i18nextLng', lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center space-x-2"
        >
          <Globe className="w-4 h-4" />
          <span className="text-lg">{currentLanguage?.flag}</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 bg-background border border-border"
      >
        {ALL_LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={clsx(
              'cursor-pointer',
              i18n.language === lang.code ? 'bg-accent' : ''
            )}
          >
            <span className="mr-2 text-lg">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
