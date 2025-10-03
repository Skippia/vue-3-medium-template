<script setup lang="ts">
import { VAtomToggleDarkMode } from '../atoms/switches'
</script>

<template>
  <header class="header">
    <nav class="link-container">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/intersection-api/reactive-aside-content">Reactive aside content</router-link>
      <router-link class="link" to="/intersection-api/infinity-scroll">Infinity Scroll</router-link>

      <VAtomToggleDarkMode class="header__theme-toggler" />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply flex flex-col items-center;
  @apply w-full;
}
.link-container {
  @apply flex items-center justify-center gap-x-6;
  @apply w-full;
  @apply bg-black/20 text-white;
  @apply xl:(px-4);
}
</style>
