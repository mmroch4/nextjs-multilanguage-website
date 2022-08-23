import en from './en';
import fr from './fr';
import pt from './pt';

export type Locale = 'en' | 'fr' | 'pt';

export const locales = ['en', 'fr', 'pt'];

export type Language = {
  title: string;
  description: string;
  grid: { title: string; paragraph: string }[];
  footer: string;
};

export const languages = {
  en,
  fr,
  pt,
};
