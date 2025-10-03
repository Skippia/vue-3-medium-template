import { RouteNames } from '@shared/constants'

import Home from './index.vue'

export const routes = [
  {
    path: '/',
    name: RouteNames.HOME,
    meta: { title: 'Home', isShowTemplatePage: true },
    component: Home,
  },
  {
    path: '/intersection-api',
    children: [
      {
        path: 'infinity-scroll',
        name: RouteNames.INFINITY_SCROLL,
        component: () => import('./intersection-api/infinity-scroll.vue'),
        meta: { title: 'Infinity scroll', isShowTemplatePage: true },
      },
      {
        path: 'reactive-aside-content',
        name: RouteNames.REACTIVE_ASIDE_CONTENT,
        component: () => import('./intersection-api/reactive-aside-content.vue'),
        meta: {
          title: 'Reactive aside content',
          isShowTemplatePage: true,
        },
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: RouteNames.NOT_FOUND,
    redirect: {
      name: RouteNames.HOME,
    },
  },
]
