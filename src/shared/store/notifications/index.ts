import { defineStore } from 'pinia'
import { TNotification } from './types'

const STORE_NOTIFICATION_NAME = 'notification'

export const useNotificationStore = defineStore(STORE_NOTIFICATION_NAME, {
  state: () => ({
    currentNotifications: [] as TNotification[],
  }),
  getters: {
    getAllNotifications: (state) => computed(() => state.currentNotifications),
    getLastNotification: (state) => computed(() => state.currentNotifications.at(-1)),
    getNotificationById: (state) => (id: uuidV4) =>
      computed(() => state.currentNotifications.find((notification) => notification.id === id)),
  },
  actions: {
    addNotification(newNotification: TNotification) {
      const { duration, id } = newNotification

      if (duration) {
        setTimeout(() => {
          this.removeNotificationById(id)
        }, duration)
      }

      this.$state.currentNotifications.push(newNotification)
    },
    removeLastNotification() {
      this.$state.currentNotifications.pop()
    },
    removeFirstNotification() {
      this.$state.currentNotifications.shift()
    },
    clearAllNotifications() {
      this.$state.currentNotifications = []
    },
    removeNotificationById(id: uuidV4) {
      const idx = this.$state.currentNotifications.findIndex((notification) => notification.id === id)
      if (idx !== -1) {
        this.$state.currentNotifications.splice(idx, 1)
      }
    },
  },
})
