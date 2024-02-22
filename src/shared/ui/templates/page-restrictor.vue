<script setup lang="ts"></script>

<template>
  <div class="page-restrictor">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page-restrictor {
  @apply flex flex-col items-center justify-between mx-a;
  @apply h-full w-full min-h-100vh;
  max-width: var(--content-width);
}
</style>
