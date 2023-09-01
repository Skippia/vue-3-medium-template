<script setup lang="ts">
import { AtomText } from '../atoms/texts'
import { AtomToggleDarkMode } from '../atoms/switches'
import { AtomSpinnerLoader } from '../atoms/loader'
import { MoleculeLanguageLink } from '../molecules'

const props = defineProps<{ isRender: boolean }>()
</script>

<template>
  <div class="container-page">
    <template v-if="props.isRender">
      <AtomText>Header</AtomText>

      <nav class="link-container">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/qrcode-generator">Qr code generator</router-link>
        <router-link class="link" to="/qrcode-reader">Qr code reader</router-link>
        <router-link class="link" to="/intersection-api/reactive-aside-content">Reactive aside content</router-link>
        <router-link class="link" to="/intersection-api/infinity-scroll">Infinity Scroll</router-link>
        <AtomToggleDarkMode class="header__theme-toggler" />
      </nav>

      <MoleculeLanguageLink class="w-1/2 mx-a my-5" />

      <AtomSpinnerLoader size="middle" color="rgba(var(--teal-700))" speed="normal" class="my-10" />
    </template>

    <slot />
    <AtomText v-if="props.isRender">Footer</AtomText>
  </div>
</template>

<style lang="scss" scoped>
.container-page {
  @apply flex flex-col w-full min-h-screen h-full mx-a;
}

.link-container {
  @apply flex flex-wrap justify-center gap-6;
  // @apply flex w-1/2 mx-a justify-evenly py-5 px-3 bg-gray-200;
}
.header__theme-toggler {
  @apply max-w-1/3;
}
</style>
