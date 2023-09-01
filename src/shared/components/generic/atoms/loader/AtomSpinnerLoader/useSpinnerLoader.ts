import { computed } from 'vue'

export type TSizeLoader = 'small' | 'middle' | 'large'
export type TSpeedLoader = 'slow' | 'normal' | 'fast'
export type TSizeLoaderOptions = Record<'dimensionSizeSpinner' | 'borderSizeSpinner' | 'background', string>
export type TSpeedLoaderOptions = Record<'animationTime', string>

export const useSpinnerLoader = (props: Partial<{ size: TSizeLoader; speed: TSpeedLoader }>) => {
  let sizeOptions = {} as TSizeLoaderOptions
  let speedOptions = {} as TSpeedLoaderOptions

  if (props?.size === 'small') {
    sizeOptions = {
      dimensionSizeSpinner: '30px',
      borderSizeSpinner: '4px',
      background: 'background-color: transparent',
    }
  } else if (props?.size === 'large') {
    sizeOptions = {
      dimensionSizeSpinner: '90px',
      borderSizeSpinner: '10px',
      background: 'background-color: transparent',
    }
  } else {
    sizeOptions = {
      dimensionSizeSpinner: '60px',
      borderSizeSpinner: '7px',
      background: 'background-color: transparent',
    }
  }

  if (props?.speed === 'slow') {
    speedOptions = { animationTime: '1.7s' }
  } else if (props?.speed === 'fast') {
    speedOptions = { animationTime: '0.7s' }
  } else {
    speedOptions = { animationTime: '1.2s' }
  }

  const getSpinnerOptions = computed(() => ({ ...sizeOptions, ...speedOptions }))

  return { getSpinnerOptions }
}
