<script setup lang="ts">
import OrganismContactForm from '~/modules/ExampleModule/components/OrganismContactForm.vue'
import { TemplatePageRestrictor } from '@shared/components/generic/templates'
import { AtomButton } from '@shared/components/generic/atoms/buttons'
import { useNotificationStore } from '@shared/store/notifications'
import { v4 as uuidv4 } from 'uuid'
import { TTypeNotification } from '@shared/store/notifications/types'

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
    <TemplatePageRestrictor class="contacts-container">
      <OrganismContactForm v-tilt />
      <div class="notification-buttons-container">
        <AtomButton class="bg-emerald-500" @click="addNotification">Add notification</AtomButton>
        <AtomButton class="bg-amber-500" @click="removeLastNotification">Remove last notification</AtomButton>
        <AtomButton class="bg-sky-500" @click="removeFirstNotification">Remove first notification</AtomButton>
        <AtomButton class="bg-red-500" @click="clearAllNotifications">Clear all notifications</AtomButton>
      </div>
    </TemplatePageRestrictor>
  </main>
</template>

<style lang="scss" scoped>
.contacts-container {
  @apply flex flex-col items-center gap-y-8 p-6 rounded-xl bg-white/60;
}
.contacts {
  @apply flex flex-col items-center overflow-hidden;
}

.notification-buttons-container {
  @apply xsm:(flex flex-wrap gap-6 justify-center);
}
</style>
