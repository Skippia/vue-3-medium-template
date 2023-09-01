import { toCapitalize } from './toCapitalize'

export const toCapitalizeEach = (words: string) =>
  words
    .split(' ')
    .map((w) => toCapitalize(w))
    .join(' ')
