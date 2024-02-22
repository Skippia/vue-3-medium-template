import { NavigationGuardNext } from 'vue-router'
import { TLocale, default_locale, supported_locales } from '@shared/constants'

export function useLastLocaleLS() {
  return useLocalStorage<null | TLocale>('locale', null)
}

export function setLastLocaleLS(newValue: TLocale | null) {
  const lastLocale = useLastLocaleLS()
  if (lastLocale.value !== newValue) {
    lastLocale.value = newValue
  }
}

export function getLocaleFromLanguageNavigator(): string {
  //@ts-expect-error unknown
  return (window.navigator.language || window.navigator?.userLanguage || default_locale).split('-')[0]
}

export function removeLocaleParam(path: string) {
  const temp = path.split('/')
  return temp.length === 3 ? temp.slice(2).join('/') : temp.slice(1).join('/')
}

export function localeIsSupported(locale: TLocale) {
  return supported_locales.includes(locale)
}

export async function loadLocale(maybeNewlocale: string) {
  return await useFetch(`/server/locales/${maybeNewlocale}.json`).json()
}

/**
 * Try to determine the user's locale ->
 * save preferred locale to local storage and return it
 */
export function setPrefferableLocale() {
  const userLocale = useLastLocaleLS()

  /**
   * If we haven't yet saved locale in locale storage
   * try to get it from window.navigator.
   * If we don't support this locale -> use default one.
   * Afterwards load it & add to i18n
   */
  if (!userLocale.value) {
    console.log("We don't have yet saved locale")

    const preferableLocale = getLocaleFromLanguageNavigator()

    let selectedLocale

    if (supported_locales.includes(preferableLocale)) {
      selectedLocale = preferableLocale
    } else {
      selectedLocale = default_locale
      console.warn(`user preferable locale is not supported: ${preferableLocale}, was setted: ${selectedLocale}`)
    }
    console.log('Set preferable locale as:', selectedLocale)

    userLocale.value = selectedLocale as TLocale
    return selectedLocale
  }
  console.log('Hello again! Your preferable local:', userLocale.value)

  return userLocale.value
}

/**
 * Occured problem with loading locale - redirect to home page with default locale
 */
export function redirectToDefaultLocale(path: string, next: NavigationGuardNext) {
  const correctPath = removeLocaleParam(path)
  next(`${default_locale}/${correctPath}`)
}
