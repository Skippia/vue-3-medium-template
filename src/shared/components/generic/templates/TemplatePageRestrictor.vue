<script setup lang="ts"></script>

<template>
  <div class="page-restrictor">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page-restrictor {
  @apply mx-a w-full;
  @apply md:max-w-[1280px];
}
</style>
