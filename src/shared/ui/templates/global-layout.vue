<script setup lang="ts">
import { VTemplatePageRestrictor } from '.'
</script>

<template>
  <div class="global-container">
    <VTemplatePageRestrictor>
      <slot name="header" />

      <slot name="default" />

      <slot name="footer" />
    </VTemplatePageRestrictor>
  </div>
</template>

<style lang="scss" scoped>
.global-container {
  @apply flex flex-col justify-between;
  @apply max-w-[var(--max-width)] w-full mx-auto;
  @apply min-h-100vh h-full;
  @apply bg-backgroundColor;
  @apply bg-backgroundColor;
  // overflow-x: hidden;
}
</style>
