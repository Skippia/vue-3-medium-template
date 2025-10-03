import '../assets/styles/global.scss'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { Pinia } from 'pinia'

import { Router } from 'vue-router'

import App from './app/App.vue'

import { initializeApp } from './app/providers/initialize-app'

const app = createApp(App)

function startApp(app: ReturnType<typeof createApp>, { router, store }: { router: Router; store: Pinia }) {
  app.use(router)
  app.use(store)
  app.mount('#app')
}

initializeApp(app).then(({ store, router }) => {
  startApp(app, { router, store })
})
