import App from './App.vue'
import { directivesMap } from './shared/directives'
import { initializeDirectives, initializeRouter, initializeStore } from '../initializators'
import { routes } from './pages/routes'
import '../assets/styles/global.scss'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { useLocale } from './shared/composables/i18n/useLocales'

const app = createApp(App)

const { i18n, setCurrentLocale } = useLocale()

initializeDirectives(app, directivesMap)
initializeRouter(app, routes, { setCurrentLocale })
initializeStore(app)

app.use(i18n)
app.mount('#app')
