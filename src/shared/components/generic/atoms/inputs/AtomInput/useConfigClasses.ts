import { IInputClasses, IInputProps } from './input.types'

export function useConfigClasses(
  configClasses: Required<IInputClasses>,
  //@ts-expect-error unknown error
  props: ReturnType<typeof defineProps<Required<IInputProps>>>
) {
  const waitCondition = props.skipInitValue === true ? ['inactive', 'initial-error'] : ['inactive']
  const [isFocus, toggleFocus] = useToggle(false)

  const isEmpty = computed(() => props.modelValue === '')
  const isErrorSignal = computed(
    () => props.statusValidation === 'dirty-error' && ((isEmpty.value && !isFocus.value) || !isEmpty.value)
  )

  const isInactiveSignal = computed(() => waitCondition.includes(props.statusValidation))

  const isValidationSuccess = computed(() => props.statusValidation === 'correct')

  const isActive = computed(() => isFocus.value && !isErrorSignal.value)

  const isInactive = computed(() => isInactiveSignal.value && !isFocus.value)

  function initConfigClasses(
    configClasses: Required<IInputClasses>,
    //@ts-expect-error unknown error
    props: ReturnType<typeof defineProps<IInputProps>>
  ) {
    ;(Object.keys(configClasses) as (keyof IInputClasses)[]).forEach((classesCategory) => {
      if (!(props[classesCategory] === '' || typeof props[classesCategory] === 'undefined')) {
        configClasses[classesCategory] = props[classesCategory] as string
      }
    })
  }

  initConfigClasses(configClasses, props)

  return {
    initConfigClasses,
    waitCondition,
    isErrorSignal,
    isInactiveSignal,
    isValidationSuccess,
    isInactive,
    isActive,
    toggleFocus,
    isFocus,
  }
}
