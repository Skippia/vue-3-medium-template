<script setup lang="ts">
import { TNotification, TTypeNotification } from '@store/notifications/types'

const { notification } = defineProps<{ notification: TNotification }>()

type TNotificationStyle = {
  iconClasses: string
  borderClasses: string
  backgroundClasses: string
  titleClasses: string
  textClasses: string
  titleString: string
}
type TNotificationStyles = Record<TTypeNotification, TNotificationStyle>

const notificationStyles: TNotificationStyles = {
  success: {
    iconClasses: 'i-fluent-checkmark-square-24-filled bg-emerald-800',
    borderClasses: 'border-2 border-emerald-800',
    backgroundClasses: 'bg-green-200/80',
    titleClasses: 'border-t-2 border-b-2 border-emerald-800 text-emerald-800',
    textClasses: 'text-emerald-800',
    titleString: 'Well done!',
  },
  error: {
    iconClasses: 'i-fluent-cloud-error-16-regular bg-red-800',
    borderClasses: 'border-2 border-red-800',
    backgroundClasses: 'bg-red-200/80',
    titleClasses: 'border-t-2 border-b-2 border-red-800 text-red-800',
    textClasses: 'text-red-800',
    titleString: 'Alert!',
  },
  warning: {
    iconClasses: 'i-carbon-warning-alt bg-orange-800',
    borderClasses: 'border-2 border-orange-800',
    backgroundClasses: 'bg-orange-200/80',
    titleClasses: 'border-t-2 border-b-2 border-orange-800 text-orange-800',
    textClasses: 'text-orange-800',
    titleString: 'Warning!',
  },
}

const getStyle = (type: TTypeNotification, property: keyof TNotificationStyle) => {
  return notificationStyles[type][property]
}

const iconClasses = computed(() => getStyle(notification.type, 'iconClasses'))
const borderClasses = computed(() => getStyle(notification.type, 'borderClasses'))
const backgroundClasses = computed(() => getStyle(notification.type, 'backgroundClasses'))
const titleClasses = computed(() => getStyle(notification.type, 'titleClasses'))
const textClasses = computed(() => getStyle(notification.type, 'textClasses'))
const titleString = computed(() => getStyle(notification.type, 'titleString'))
</script>

<template>
  <div class="notification" :class="[borderClasses, backgroundClasses]">
    <div class="notification__icon" :class="[iconClasses]"></div>
    <p class="notification__title" :class="[titleClasses]">[{{ titleString }}] &nbsp;</p>
    <p class="notification__text" :class="[textClasses]">
      {{ notification.message }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  @apply xsm:(w-full flex justify-start items-center mx-a py-2 px-[2%] gap-x-[1%] rounded-md border-2 shadow-lg);

  // .notification__icon

  &__icon {
    @apply flex justify-center items-center min-w-[2.5rem] text-5xl;
  }

  // .notification__title

  &__title {
    @apply xsm:(text-sm);
    @apply md:(text-md);
    white-space: nowrap;
    @apply flex justify-center items-center font-extrabold text-2xl;
  }

  // .notification__text
  &__text {
    @apply xsm:(text-sm);
    @apply md:(text-md);
    word-break: break-word;
    @apply text-xl overflow-auto p-3 max-h-[5rem] font-bold;
  }
}
</style>
