import { Directive } from 'vue'

export function initializeDirectives(
  app: ReturnType<typeof createApp>,
  directivesMap: { name: string; directive: Directive<unknown, unknown> }[]
) {
  directivesMap.forEach(({ name, directive }) => {
    app.directive(name, directive)
  })
}
