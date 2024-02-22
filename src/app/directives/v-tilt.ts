import { useMouseInElement } from '@vueuse/core'

export const vTilt = {
  mounted(el: HTMLElement) {
    const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(el)

    const cardTransform = computed(() => {
      const MAX_ROTATION = 6
      const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2) // handles x-axis
      const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2) // handles y-axis
      return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
    })

    let animationFrameId: number | null = null

    watch(cardTransform, (newCardTransform) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }

      animationFrameId = requestAnimationFrame(() => {
        el.style.transform = newCardTransform
        animationFrameId = null
      })
    })

    el.style.transition = 'transform 0.25s ease-out'
  },
}
