<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { TTypeNotification } from '@shared/store/notifications/types'

import { useNotificationStore } from '@/shared/store/notifications'
import { VAtomButton } from '@/shared/ui/atoms/buttons'
import { VTemplatePageRestrictor } from '@/shared/ui/templates'
import OrganismContactForm from '@/modules/example-module/components/organism-contact-form.vue'

// defineOptions({
//   name: 'HomePage',
// })

const notificationStore = useNotificationStore()

function addNotification() {
  const idx = +Math.round(Math.random() * 2)

  notificationStore.addNotification({
    id: uuidv4(),
    type: ['success', 'error', 'warning'].at(idx) as TTypeNotification,
    message: [
      `You successfully have done something. But don't relax.`,
      `You have error. It's not time for relax.`,
      `Looks like you have warning. Be careful.`,
    ].at(idx) as string,
    duration: 4000,
  })
}

function removeLastNotification() {
  notificationStore.removeLastNotification()
}
function removeFirstNotification() {
  notificationStore.removeFirstNotification()
}

function clearAllNotifications() {
  notificationStore.clearAllNotifications()
}
</script>

<template>
  <main class="contacts">
    <OrganismContactForm v-tilt />
    <div class="notification-buttons-container">
      <VAtomButton class="bg-emerald-500" @click="addNotification">Add notification</VAtomButton>
      <VAtomButton class="bg-amber-500" @click="removeLastNotification">Remove last notification</VAtomButton>
      <VAtomButton class="bg-sky-500" @click="removeFirstNotification">Remove first notification</VAtomButton>
      <VAtomButton class="bg-red-500" @click="clearAllNotifications">Clear all notifications</VAtomButton>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.contacts {
  @apply flex flex-col items-center gap-y-8 p-6 rounded-xl bg-white/60;
}
.notification-buttons-container {
  @apply xsm:(flex flex-wrap gap-6 justify-center);
}
</style>
