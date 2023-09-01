<script setup lang="ts">
import { TemplatePageRestrictor } from '@shared/components/generic/templates'
import { AtomInput } from '@shared/components/generic/atoms/inputs'
import QrcodeVue, { Level, RenderAs } from 'qrcode.vue'
import { IFormInfo } from '@shared/composables/formValidation'

const value = ref('qrcode')
const level = ref<Level>('M')
const renderAs = ref<RenderAs>('svg')

const inputInfo: IFormInfo<{ qrcode: string }> = {
  id: 'qrcode-input-id',
  label: computed(() => 'Qrcode'),
  placeholder: 'Input data for qrcode',
  field: 'qrcode',
  tag: 'input',
}
</script>

<template>
  <TemplatePageRestrictor class="flex flex-col items-center border-neutral my-4 border-2 rounded-lg p-4">
    <qrcode-vue class="mx-auto my-10" :value="value" :size="200" :level="level" :render-as="renderAs" />
    <AtomInput
      v-model="value"
      active-classes="border-b-2 mb-[-2px] border-emerald-600"
      active-label-classes="text-white"
      :is-validate="false"
      v-bind="{ ...inputInfo }"
    />
  </TemplatePageRestrictor>
</template>
