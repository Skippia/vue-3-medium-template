import '../assets/styles/global.scss'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { Pinia } from 'pinia'

import { Router } from 'vue-router'

import App from './app/App.vue'

import { useLocale } from './shared/composables/i18n'

import { initializeApp } from './app/providers/initialize-app'

const { i18n, setCurrentLocale } = useLocale()

const app = createApp(App)

function startApp(app: ReturnType<typeof createApp>, { router, store }: { router: Router; store: Pinia }) {
  app.use(router)
  app.use(store)
  app.use(i18n)
  app.mount('#app')
}

initializeApp(app, { setCurrentLocale }).then(({ store, router }) => {
  startApp(app, { router, store })
})
