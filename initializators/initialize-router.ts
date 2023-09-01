import { NavigationGuardNext, RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { GlobalConstants, TLocale } from '@shared/constants'

export function initializeRouter(
  app: ReturnType<typeof createApp>,
  routes: RouteRecordRaw[],
  options: { setCurrentLocale: (maybeNewlocale: TLocale, path: string, next: NavigationGuardNext) => Promise<void> }
) {
  const router = createRouter({
    history: createWebHistory(GlobalConstants.BASE_URL),
    routes,
    scrollBehavior(_, __, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0, behavior: 'smooth' }
      }
    },
  })

  router.beforeEach(async (to, _, next) => {
    document.title = `${GlobalConstants.VITE_APP_TITLE} - ${to.meta.title}`
    const { setCurrentLocale } = options
    const currentLocale = (to.params.locale as TLocale) || 'en'
    await setCurrentLocale(currentLocale, to.path, next)
  })
  app.use(router)
}
