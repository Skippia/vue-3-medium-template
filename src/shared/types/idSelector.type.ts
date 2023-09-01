/* eslint-disable no-console */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IdSelector<T extends string> = T extends `${infer F}${any}` ? (F extends '#' ? T : never) : never

function findDomById<T extends string>(id: IdSelector<T>): void {
  console.log(id)
}

const selectorId = '#mySelector'
const notSelectorId = 'mySelector'

findDomById(selectorId) // works correctly
//@ts-expect-error mistyping
findDomById(notSelectorId) // mistake
