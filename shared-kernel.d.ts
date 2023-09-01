/**
 * Global types that don't high coupling in the application
 */

declare global {
  type UnixTime = number
  type milliseconds = number
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type TIdSelector<T extends string> = T extends `${infer F}${infer _Rest}` ? (F extends '#' ? string : never) : never
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type TClassSelector<T extends string> = T extends `${infer F}${infer _Rest}`
    ? F extends '.'
      ? string
      : never
    : never
  type uuidV4 = string
  // type CurrencyCode = 'USD' | 'RUB' | 'EUR'
}
export {}
