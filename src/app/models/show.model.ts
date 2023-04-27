export interface IShow {
  id: number;
  type: 'movie' | 'series';
  title: string;
  year: number;
  language:
    | 'en'
    | 'fr'
    | 'de'
    | 'it'
    | 'es'
    | 'pt'
    | 'ru'
    | 'ja'
    | 'ko'
    | 'zh'
    | 'ar'
    | 'he'
    | 'nl'
    | 'vi'
    | 'id'
    | 'th'
    | 'ms'
    | 'hi'
    | 'bn'
    | 'ur'
    | 'fa'
    | 'sw'
    | 'te'
    | 'pa'
    | 'gu'
    | 'ta'
    | 'mr'
    | 'kn';
  plot: string;
  rating: 'G' | 'PG' | 'PG-13' | 'R' | 'NC-17';
  image: string;
}
