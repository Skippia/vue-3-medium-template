import { ref } from 'vue'

import { DetectedBarcode } from './types'

export function useQrCodeReader() {
  const options = [{ text: 'outline', value: paintOutline }]
  const TORCH_IS_SUPPORTED = ref(false)
  const isShowSpinner = ref(true)
  const isRenderQrCodeStream = ref(false)
  const isEnableTorch = ref(false)
  const qrCodeLastValue = ref()
  const selected = ref(options[0])

  function paintOutline(detectedCodes: DetectedBarcode[], ctx: CanvasRenderingContext2D) {
    for (const detectedCode of detectedCodes) {
      const [firstPoint, ...otherPoints] = detectedCode.cornerPoints

      ctx.strokeStyle = 'red'

      ctx.beginPath()
      ctx.moveTo(firstPoint.x, firstPoint.y)
      for (const { x, y } of otherPoints) {
        ctx.lineTo(x, y)
      }
      ctx.lineTo(firstPoint.x, firstPoint.y)
      ctx.closePath()
      ctx.stroke()
    }
  }

  function toggleTorch() {
    isEnableTorch.value = !isEnableTorch.value
  }

  function activateQrCodeScanning() {
    isRenderQrCodeStream.value = true
    isShowSpinner.value = true
  }

  function stopQrCodeScanning() {
    isRenderQrCodeStream.value = false
  }

  return {
    selected,
    TORCH_IS_SUPPORTED,
    isRenderQrCodeStream,
    isShowSpinner,
    isEnableTorch,
    toggleTorch,
    activateQrCodeScanning,
    stopQrCodeScanning,
    qrCodeLastValue,
  }
}
