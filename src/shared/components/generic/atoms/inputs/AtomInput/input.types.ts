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

export interface IInputOptions {
  id: string
  modelValue: string
  statusValidation?: 'inactive' | 'initial-error' | 'dirty-error' | 'correct'
  placeholder?: MaybeRef<string>
  label?: MaybeRef<string>
  type?: 'text' | 'password'
  skipInitValue?: boolean
  tag?: 'input' | 'textarea'
}

export interface IInputProps extends IInputClasses, IInputOptions {}
