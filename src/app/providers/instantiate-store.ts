import { createPinia } from 'pinia'

export function instantiateStore() {
  const piniaStore = createPinia()
  return piniaStore
}
