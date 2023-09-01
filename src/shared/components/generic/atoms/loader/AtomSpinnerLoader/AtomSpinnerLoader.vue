<script setup lang="ts">
import { TSizeLoader, TSpeedLoader, useSpinnerLoader } from './useSpinnerLoader'

const props = defineProps<{ size?: TSizeLoader; speed?: TSpeedLoader; color: string }>()

const dimensionSizeSpinner = ref<string>()
const borderSizeSpinner = ref<string>()
const animationTime = ref<string>()

const { getSpinnerOptions } = useSpinnerLoader(props)

watch(
  getSpinnerOptions,
  (spinnerOptions) => {
    dimensionSizeSpinner.value = spinnerOptions.dimensionSizeSpinner
    borderSizeSpinner.value = spinnerOptions.borderSizeSpinner
    animationTime.value = spinnerOptions.animationTime
  },
  {
    immediate: true,
  }
)
</script>

<template>
  <div :style="getSpinnerOptions.background" class="container-loader mx-a">
    <div class="loader-animation lds-dual-ring"></div>
  </div>
</template>

<style lang="scss" scoped>
.container-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  user-select: none;
}

.loader-animation {
  animation: animate-circle v-bind(animationTime) linear infinite;
}

@keyframes animate-circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.lds-dual-ring {
  display: inline-block;
  width: v-bind(dimensionSizeSpinner);
  height: v-bind(dimensionSizeSpinner);
  user-select: none;
}
.lds-dual-ring:after {
  content: '';
  display: block;
  width: v-bind(dimensionSizeSpinner);
  height: v-bind(dimensionSizeSpinner);
  border-radius: 50%;
  border: v-bind(borderSizeSpinner) solid #fff;
  border-color: v-bind(color) transparent v-bind(color) transparent;
  user-select: none;
}
</style>
