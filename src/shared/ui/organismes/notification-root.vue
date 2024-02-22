<script setup lang="ts">
import { MoleculeNotification } from '../molecules'

import { useNotificationStore } from '@/shared/store/notifications'

const notificationStore = useNotificationStore()

const notifications = notificationStore.getAllNotifications
</script>

<template>
  <TransitionGroup name="list-animation" tag="div" mode="out-in" class="notification-container" appear>
    <MoleculeNotification v-for="notification in notifications" :key="notification.id" :notification="notification" />
  </TransitionGroup>
</template>

<style lang="scss" scoped>
.notification-container {
  @apply max-w-[800px];
  @apply xsm:(w-full px-[2%] flex items-center justify-start flex-col gap-y-4 fixed top-2 left-1/2 translate-x-[-50%] z-9999);
  @apply md:(w-1/2);
}
</style>
