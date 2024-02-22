import { NavigationGuardNext } from 'vue-router'

import { initializeGlobalErrorHandling } from './initialize-global-error-handling'
import { instantiateRouter } from './instantiate-router'
import { instantiateStore } from './instantiate-store'

import { directivesMap } from '../directives'

import { initializeDirectives } from '.'

import { routes } from '@/pages/routes'
import { TLocale } from '@/shared/constants'

export async function initializeApp(
  app: ReturnType<typeof createApp>,
  options: { setCurrentLocale: (maybeNewlocale: TLocale, path: string, next: NavigationGuardNext) => Promise<void> }
) {
  initializeGlobalErrorHandling(app)
  initializeDirectives(app, directivesMap)

  const [router, store] = [instantiateRouter(routes, options), instantiateStore()]

  return { router, store }
}
