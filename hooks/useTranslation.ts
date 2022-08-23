import { useRouter } from 'next/router';
import { languages, Locale, locales } from '../locales';

export function useTranslation() {
  const router = useRouter();

  const language = languages[router.locale as Locale];

  function switchLanguage(locale: Locale): void {
    if (!locales.includes(locale)) return;

    router.push(router.pathname, router.asPath, { locale });
  }

  return { language, locale: router.locale, switchLanguage };
}
