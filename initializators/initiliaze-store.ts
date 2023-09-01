import { createPinia } from 'pinia'

export function initializeStore(app: ReturnType<typeof createApp>) {
  const piniaStore = createPinia()
  app.use(piniaStore)
}
