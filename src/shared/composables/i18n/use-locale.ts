import { createI18n } from 'vue-i18n'
import { NavigationGuardNext } from 'vue-router'
import {
  setPrefferableLocale,
  setLastLocaleLS,
  localeIsSupported,
  loadLocale,
  redirectToDefaultLocale,
  useLastLocaleLS,
  removeLocaleParam,
} from '@shared/utils/others'

import { dateTimeFormats, default_locale, numberFormats, supported_locales, TLocale } from '@shared/constants'

export const useLocale = () => {
  const i18n = createI18n({
    locale: setPrefferableLocale(),
    fallbackLocale: default_locale,
    globalInjection: true,
    legacy: false,
    messages: {},
    numberFormats,
    dateTimeFormats,
  })

  function addNewLocale(locale: TLocale, localeData: object) {
    //@ts-expect-error 123
    i18n.global.setLocaleMessage(locale, localeData)
  }

  function changeGlobalLocale(locale: TLocale) {
    if (i18n.global.locale.value !== locale) {
      i18n.global.locale.value = locale
      document.querySelector('html')?.setAttribute('lang', locale)
    }
  }

  function localeIsAvailable(locale: TLocale) {
    return i18n.global.availableLocales.includes(locale)
  }

  /**
   * Set new locale as current locale and save to local storage
   */
  function setLoadedLocale(locale: TLocale, messages: object) {
    addNewLocale(locale, messages)
    changeGlobalLocale(locale)
    setLastLocaleLS(locale)
  }

  async function setCurrentLocale(maybeNewlocale: TLocale, path: string, next: NavigationGuardNext) {
    /**
     *  Currently we don't have such a locale in storage
     */
    if (!localeIsAvailable(maybeNewlocale)) {
      console.warn('Currently this locale is not available', maybeNewlocale)

      /**
       * This locale can be loaded asynchronously
       */
      if (localeIsSupported(maybeNewlocale)) {
        console.log('This locale is supported', maybeNewlocale)

        /**
         * Try to load this locale
         */
        const { data: localeData, error } = await loadLocale(maybeNewlocale)

        if (localeData.value && !error.value) {
          console.log('This locale was successfully loaded')
          setLoadedLocale(maybeNewlocale, localeData.value)
          next()
        } else {
          console.error(error)
          console.warn('There was a problem loading this locale')
          redirectToDefaultLocale(path, next)
        }
      } else {
        console.log('This locale is not supported! Set previous saved locale')

        /**
         * There is not such locale --> use last saved locale and redirect
         * (potentially we can't save not supported locale)
         */
        const lastLocale = useLastLocaleLS()

        /**
         * But if some way in LS is located not supported locale -> set default
         */
        if (!supported_locales.includes(lastLocale.value as string)) {
          console.warn('Someone forged our locale! Restore to default...')
          lastLocale.value = default_locale as TLocale
        }
        changeGlobalLocale(lastLocale.value as TLocale)
        const pathWithoutLocaleParam = removeLocaleParam(path)

        next(`${lastLocale.value}/${pathWithoutLocaleParam}`)
      }
    } else {
      console.log(`This locale (${maybeNewlocale}) is already loaded and available`)
      /**
       *  We have already loaded the locale
       */
      changeGlobalLocale(maybeNewlocale)
      setLastLocaleLS(maybeNewlocale)
      next()
    }
  }

  return {
    i18n,
    setCurrentLocale,
  }
}
