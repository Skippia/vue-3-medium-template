export type IResponseError = {
  message: string
  statusCode: number
}
export interface IResponseFull<D> {
  data: Ref<D | null>
  error: Ref<IResponseError | null>
}
