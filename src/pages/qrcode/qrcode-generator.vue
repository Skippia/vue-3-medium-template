<script setup lang="ts">
import QrcodeVue, { Level, RenderAs } from 'qrcode.vue'

import { IFormInfo } from '@/shared/composables/form-validation'
import { VTemplatePageRestrictor } from '@/shared/ui/templates'
import { VAtomInput } from '@/shared/ui/atoms/inputs'

const value = ref('qrcode')
const level = ref<Level>('M')
const renderAs = ref<RenderAs>('svg')

const inputInfo: IFormInfo<{ qrcode: string }> = {
  id: 'qrcode-input-id',
  label: computed(() => 'Qrcode'),
  placeholder: computed(() => 'Input data for qrcode'),
  field: 'qrcode',
  tag: 'input',
}
</script>

<template>
  <VTemplatePageRestrictor class="my-4 p-4" flex flex-col items-center border-2 border-neutral rounded-lg>
    <qrcode-vue class="mx-auto my-10" :value="value" :size="200" :level="level" :render-as="renderAs" />
    <VAtomInput
      v-model="value"
      active-classes="border-b-2 mb-[-2px] border-emerald-600"
      active-label-classes="text-white"
      :is-validate="false"
      v-bind="{ ...inputInfo }"
    />
  </VTemplatePageRestrictor>
</template>
