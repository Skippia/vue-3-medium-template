/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Global types that don't high coupling in the application
 */

declare global {
  type DateString = string
  type stringURL = string
  type stringEmail = string
  type UnixTime = number
  type milliseconds = number
  type TIdSelector<T extends string> = T extends `${infer F}${infer _Rest}` ? (F extends '#' ? string : never) : never
  type TClassSelector<T extends string> = T extends `${infer F}${infer _Rest}`
    ? F extends '.'
      ? string
      : never
    : never
  type uuidV4 = string
}
export {}
