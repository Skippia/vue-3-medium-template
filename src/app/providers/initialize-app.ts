import { initializeGlobalErrorHandling } from './initialize-global-error-handling'
import { instantiateRouter } from './instantiate-router'
import { instantiateStore } from './instantiate-store'

import { directivesMap } from '../directives'

import { initializeDirectives } from '.'

import { routes } from '@/pages/routes'

export async function initializeApp(app: ReturnType<typeof createApp>) {
  initializeGlobalErrorHandling(app)
  initializeDirectives(app, directivesMap)

  const [router, store] = [instantiateRouter(routes), instantiateStore()]

  return { router, store }
}
