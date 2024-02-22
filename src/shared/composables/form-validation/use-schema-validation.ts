import useValidate from '@vuelidate/core'

import { useValidationHelpers } from './use-validation-helpers'

export type IForm = Record<string, string | boolean>
export type IRules = ComputedRef<Record<keyof IForm, unknown>>

export const useSchemaValidation = ({
  formValidatorManager,
  rules,
}: {
  formValidatorManager: IForm
  rules: IRules
}) => {
  const v$ = useValidate(rules, formValidatorManager)

  return { v$, ...useValidationHelpers(v$) }
}
