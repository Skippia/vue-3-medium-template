import { GlobalConstants } from '.'

export const supported_locales: string[] = GlobalConstants.I18N_SUPPORTED_LOCALES?.split(',') || ['en', 'ru']
export const default_locale: string = GlobalConstants.I18N_DEFAILT_LOCALE || 'en'
export type TLocale = 'en' | 'ru'

export const dateTimeFormats = {
  en: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  },
  ru: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  },
}

export const numberFormats = {
  en: {
    currency: {
      style: 'currency',
      currency: 'USD',
    },
  },
  ru: {
    currency: {
      style: 'currency',
      currency: 'RUB',
    },
  },
}
