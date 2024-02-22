<script setup lang="ts"></script>

<template>
  <footer class="footer">Footer</footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply flex flex-col items-center gap-y-6;
  @apply w-full relative;
  @apply bg-backgroundColor text-white;
  @apply xl:(px-4);

  // header-divider
  &::after {
    content: '';
    @apply absolute top-0 left-0 bg-backgroundColor h-1px bg-white;
    width: 150vw;
    left: -50vw;
  }
}
</style>
