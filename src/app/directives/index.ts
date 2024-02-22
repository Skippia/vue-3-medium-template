import { Directive } from 'vue'

import { vTilt } from './v-tilt'

export const directivesMap = [
  {
    name: 'tilt',
    directive: vTilt as Directive<unknown, unknown>,
  },
]
