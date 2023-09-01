<script setup lang="ts">
interface IPropsButton {
  isDisabled?: boolean
}

const { isDisabled = false } = defineProps<IPropsButton>()
</script>

<template>
  <button :disabled="isDisabled" class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  @apply flex items-center justify-center gap-x-3 px-10 py-3 rounded-md opacity-80 transition-300;
  @apply hover:(scale-96 opacity-100);
  @apply sm:(w-fit);
}
.button[disabled] {
  @apply opacity-50 pointer-events-none;
}
</style>
