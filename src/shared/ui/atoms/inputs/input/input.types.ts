import { MaybeRef } from 'vue'

/**
 * Classes that affect to appearance of component
 * (depends on current state of input)
 */
export interface IInputClasses {
  commonClasses?: string
  commonLabelClasses?: string
  inactiveClasses?: string
  inactiveLabelClasses?: string
  activeClasses?: string
  activeLabelClasses?: string
  errorClasses?: string
  errorLabelClasses?: string
  successClasses?: string
  successLabelClasses?: string
}

export type IInputOptions = {
  id: string
  modelValue: string
  statusValidation?: 'inactive' | 'initial-error' | 'dirty-error' | 'correct'
  placeholder?: MaybeRef<string> | ComputedRef<string | undefined>
  label?: MaybeRef<string> | ComputedRef<string | undefined>
  type?: 'text' | 'password'
  skipInitValue?: boolean
  tag?: 'input' | 'textarea' | 'checkbox'
}

export interface IInputProps extends IInputClasses, IInputOptions {}
