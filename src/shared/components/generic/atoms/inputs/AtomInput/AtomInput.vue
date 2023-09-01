<script setup lang="ts">
import { unref } from 'vue'
import { useConfigClasses } from './useConfigClasses'
import { IInputProps, IInputClasses } from './input.types'

const props = withDefaults(defineProps<IInputProps & { isValidate?: boolean }>(), {
  placeholder: 'Placeholder',
  skipInitValue: true,
  type: 'text',
  statusValidation: 'inactive',
  label: undefined,
  tag: 'input',
  isValidate: true,
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

/**
 * For unidentified config classes setups default classes
 */

const configClasses: Required<IInputClasses> = {
  commonClasses: `px-6 py-4 font-bold placeholder:(text-cGrey) hover:scale-98
      transition-300 rounded-lg focus:(outline-black-900 outline-none) outline-none`,
  commonLabelClasses: 'font-semibold text-sm',
  activeClasses: 'border-b-2 mb-[-2px] border-blue-500',
  activeLabelClasses: 'text-primary',
  inactiveClasses: 'bg-tertiary',
  inactiveLabelClasses: 'text-tertiary', //!!
  errorClasses: 'bg-red-100 text-cRed border-b-2 mb-[-2px] border-cRed',
  errorLabelClasses: 'text-cRed',
  successClasses: 'bg-emerald-100 text-emerald-900',
  successLabelClasses: 'text-emerald-900', //!!
}

const { isErrorSignal, isValidationSuccess, isInactive, isActive, toggleFocus } = useConfigClasses(
  configClasses,
  props as Required<IInputProps>
)

const labelReactiveClasses = props.isValidate
  ? reactive({
      [configClasses.commonLabelClasses]: true,
      // [configClasses.inactiveLabelClasses]: isInactive,
      [configClasses.activeLabelClasses]: isActive,
      [configClasses.errorLabelClasses]: isErrorSignal,
      // [configClasses.successLabelClasses]: props.statusValidation === 'correct',
    })
  : reactive({
      [configClasses.activeLabelClasses]: isActive,
      [configClasses.commonLabelClasses]: true,
    })

const componentReactiveClasses = props.isValidate
  ? reactive({
      [configClasses.commonClasses]: true,
      [configClasses.inactiveClasses]: isInactive,
      [configClasses.errorClasses]: isErrorSignal,
      [configClasses.successClasses]: isValidationSuccess,
      [configClasses.activeClasses]: isActive,
    })
  : reactive({
      [configClasses.commonClasses]: true,
      [configClasses.inactiveClasses]: isInactive,
      [configClasses.activeClasses]: isActive,
    })
</script>

<template>
  <div class="input-wrapper">
    <label v-if="unref(props.label)" :class="labelReactiveClasses" :for="id">{{ unref(props.label) }}</label>
    <component
      :is="tag"
      :id="id"
      :name="id"
      :type="type"
      :placeholder="unref(placeholder)"
      :class="componentReactiveClasses"
      @focus="toggleFocus()"
      @blur="toggleFocus()"
      @input="(e: Event) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style lang="scss" scoped>
input,
textarea {
  caret-color: black;
}
textarea {
  resize: none;
  height: 130px;
}
.input-wrapper {
  @apply flex flex-col items-left gap-y-2;
}
</style>
