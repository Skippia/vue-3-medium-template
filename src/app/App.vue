<script setup lang="ts">
import { useGetRootPage } from './providers'

import { VOrganismGlobalFooter, VOrganismGlobalHeader, VOrganismNotificationRoot } from '@/shared/ui/organismes'
import { VTemplateGlobalLayout } from '@/shared/ui/templates'

const _route = useRoute()
const { getTransitionName, isShowTemplatePage } = useGetRootPage(_route)
</script>

<template>
  <VOrganismNotificationRoot />

  <VTemplateGlobalLayout>
    <template #header>
      <VOrganismGlobalHeader v-if="isShowTemplatePage" />
    </template>

    <RouterView v-slot="{ Component, route }">
      <transition :name="getTransitionName(route.meta)" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </RouterView>

    <template #footer>
      <VOrganismGlobalFooter v-if="isShowTemplatePage" />
    </template>
  </VTemplateGlobalLayout>
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
