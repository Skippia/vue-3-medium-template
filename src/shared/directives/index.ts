import { Directive } from 'vue'
import { vTilt } from './vTilt'

export const directivesMap = [
  {
    name: 'tilt',
    directive: vTilt as Directive<unknown, unknown>,
  },
]
