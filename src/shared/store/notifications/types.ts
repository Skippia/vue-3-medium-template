export type TTypeNotification = 'success' | 'error' | 'warning'

export type TNotification = {
  id: uuidV4
  type: TTypeNotification
  message: string
  duration?: milliseconds
}
