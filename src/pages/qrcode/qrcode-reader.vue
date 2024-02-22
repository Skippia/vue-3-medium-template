<script lang="ts" setup>
import { QrcodeStream } from 'vue-qrcode-reader'
import { type DetectedBarcode, useQrCodeReader } from '@shared/composables/qr-code'

import { VAtomSpinnerLoader } from '@/shared/ui/atoms/loader'
import { VAtomButton } from '@/shared/ui/atoms/buttons'
import { VAtomOutput } from '@/shared/ui/atoms/outputs'

const {
  selected,
  TORCH_IS_SUPPORTED,
  isRenderQrCodeStream,
  isShowSpinner,
  isEnableTorch,
  toggleTorch,
  activateQrCodeScanning,
  stopQrCodeScanning,
  qrCodeLastValue,
} = useQrCodeReader()

/**
 * Hooks for qr code reader
 */

function onError(error: { name: string }) {
  if (error.name === 'NotAllowedError') {
    console.warn('user denied camera access permission')
  } else if (error.name === 'NotFoundError') {
    console.warn('no suitable camera device installed')
  } else if (error.name === 'NotSupportedError') {
    console.warn('page is not served over HTTPS (or localhost)')
  } else if (error.name === 'NotReadableError') {
    console.warn('maybe camera is already in use')
  } else if (error.name === 'OverconstrainedError') {
    console.warn('did you request the front camera although there is none?')
  } else if (error.name === 'StreamApiNotSupportedError') {
    console.warn('browser seems to be lacking features')
  } else {
    console.error('unexprected qr code error happened', error)
  }
}

function onDetect(detectedCodes: DetectedBarcode[]) {
  console.log('qr code information:', detectedCodes[0])
  const { rawValue } = detectedCodes[0]
  qrCodeLastValue.value = rawValue
}

function onReady(capabilities: MediaTrackCapabilities & { torch: unknown }) {
  TORCH_IS_SUPPORTED.value = !!capabilities.torch

  setTimeout(() => {
    isShowSpinner.value = false
  }, 300)
}
</script>
<template>
  <div class="flex flex-col items-center gap-y-5">
    <nav class="my-3 flex flex-col items-center gap-y-3">
      <VAtomButton
        :is-disabled="isRenderQrCodeStream"
        class="bg-emerald-200 text-emerald-900"
        @click="activateQrCodeScanning"
        >Start QR code scanning</VAtomButton
      >
      <VAtomButton
        :is-disabled="!isRenderQrCodeStream"
        class="bg-orange-200 text-orange-900"
        @click="stopQrCodeScanning"
        >Stop QR code scanning</VAtomButton
      >

      <VAtomButton
        v-if="TORCH_IS_SUPPORTED"
        :is-disabled="!isRenderQrCodeStream"
        class="bg-orange-200 text-orange-900"
        @click="toggleTorch"
        >Toggle torch</VAtomButton
      >
    </nav>

    <VAtomSpinnerLoader
      v-if="isRenderQrCodeStream && isShowSpinner"
      size="large"
      color="rgba(var(--teal-50))"
      speed="normal"
      class="mt-10"
    />

    <qrcode-stream
      v-if="isRenderQrCodeStream"
      v-show="!isShowSpinner"
      class="h-50"
      :track="selected.value"
      :torch="isEnableTorch"
      @camera-on="onReady"
      @detect="onDetect"
      @error="onError"
    />

    <VAtomOutput v-if="qrCodeLastValue" class="w-9/10" :value="qrCodeLastValue" />
  </div>
</template>
