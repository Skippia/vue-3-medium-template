import { z } from 'zod'

const envValitatorSchema = z.object({
  // Frontend
  NODE_ENV: z.string(),
  BASE_URL: z.string(),
  TITLE: z.string(),

  // i18n
  I18N_DEFAULT_LOCALE: z.string(),
  I18N_SUPPORTED_LOCALES: z.string(),

  // 3rd party sevice
  API_EXAMPLE_KEY: z.string(),

  // Backend
  BACKEND_BASE_URL: z.string(),
})

export const environments = envValitatorSchema.parse({
  // Frontend
  NODE_ENV: import.meta.env.VITE_APP_NODE_ENV,
  BASE_URL: import.meta.env.VITE_APP_BASE_URL,
  TITLE: import.meta.env.VITE_APP_TITLE,

  // 3rd party sevice
  API_EXAMPLE_KEY: import.meta.env.VITE_APP_API_EXAMPLE_KEY,

  // i18n
  I18N_DEFAULT_LOCALE: import.meta.env.VITE_APP_I18N_DEFAULT_LOCALE,
  I18N_SUPPORTED_LOCALES: import.meta.env.VITE_APP_I18N_SUPPORTED_LOCALES,

  // Backend
  BACKEND_BASE_URL: import.meta.env.VITE_APP_BACKEND_BASE_URL,
})

// console.log('environments', environments)
