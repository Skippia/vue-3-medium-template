import {
  NavigationGuardNext,
  RouteLocationNormalizedLoaded,
  RouteMeta,
  RouteRecordRaw,
  createRouter,
  createWebHistory,
} from 'vue-router'

import { RouteNames, TLocale, environments } from '@shared/constants'

const isShowLoader = ref(false)

function getTransitionName(transitionMeta: RouteMeta) {
  return transitionMeta?.transition && typeof transitionMeta?.transition === 'string'
    ? transitionMeta.transition
    : 'page'
}

export function useGetRootPage(route: RouteLocationNormalizedLoaded) {
  return {
    isShowTemplatePage: computed(() => !!route.meta.isShowTemplatePage),
    getTransitionName,
    isShowLoader,
  }
}

export function instantiateRouter(
  routes: RouteRecordRaw[],
  options: { setCurrentLocale: (maybeNewlocale: TLocale, path: string, next: NavigationGuardNext) => Promise<void> }
) {
  const router = createRouter({
    history: createWebHistory(environments.BASE_URL),
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
    document.title = `${environments.TITLE} - ${to.meta.title}`
    isShowLoader.value = true
    const { setCurrentLocale } = options
    const currentLocale = (to.params.locale as TLocale) || 'en'
    await setCurrentLocale(currentLocale, to.path, next)
  })

  router.afterEach(() => {
    isShowLoader.value = false
  })

  return router
}
