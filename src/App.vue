<script setup lang="ts">
import { OrganismNotificationRoot } from './shared/components/generic/organismes'
import { TemplatePage } from './shared/components/generic/templates'

const route = useRoute()
const isShowTemplatePage = computed(() => !!route.meta.isShowTemplatePage)
</script>

<template>
  <OrganismNotificationRoot />

  <TemplatePage :is-render="isShowTemplatePage">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </TemplatePage>
</template>

<style lang="scss">
[v-cloak] {
  display: none !important;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.page-enter-active {
  transition: all 0.5s ease;
}

.page-leave-active {
  transition: all 0.25s ease;
}
</style>
