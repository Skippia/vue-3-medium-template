<script setup lang="ts">
import { useVModel } from '@vueuse/core'

import { IInputProps, IInputClasses } from './input/input.types'

import { u } from '@/shared/utils/formatters'

const props = defineProps<IInputProps>()

/**
 * If we pass down some categoryClass != '' -> it overrides default category class in AtomInput
 */
const customClasses: Required<IInputClasses> = {
  commonClasses: `${u(
    props.commonClasses
  )} pb-2 pl-3 border-b-2 font-semibold bg-transparent placeholder:(font-normal) rounded-none outline-none`,
  activeClasses: `${u(props.activeClasses)} border-b-2 border-primary`,
  activeLabelClasses: `${u(props.activeLabelClasses)}`,
  inactiveClasses: `${u(props.inactiveClasses)} border-b-black/50`,
  inactiveLabelClasses: `${u(props.inactiveLabelClasses)}`,
  errorClasses: `${u(props.errorClasses)} border-cRed text-cRed`,
  commonLabelClasses: `${u(props.commonLabelClasses)}`,
  errorLabelClasses: `${u(props.errorLabelClasses)}`,
  successClasses: `${u(props.successClasses)} border-emerald text-emerald-800`,
  successLabelClasses: `${u(props.successLabelClasses)}`,
}
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const proxyModelValue = useVModel(props, 'modelValue', emit)
</script>

<template>
  <AtomInput v-bind="{ ...props, ...customClasses }" v-model="proxyModelValue" />
</template>

<style lang="scss" scoped></style>
