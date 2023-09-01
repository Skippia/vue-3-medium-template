import useValidate from '@vuelidate/core'
import { MaybeRef } from '@vueuse/core'

export type IFormInfo<F> = {
  id: string
  label: MaybeRef<string>
  placeholder: MaybeRef<string>
  field: keyof F
  tag: 'input' | 'textarea'
}

export const useValidationHelpers = (v$: ReturnType<typeof useValidate>) => {
  const isFormValid = computed(() => v$.value.$silentErrors.length === 0)

  const touch = (field: string) => v$.value[field]?.$touch()

  const getIsError = (field: string) => v$.value[field]?.$silentErrors?.length > 0

  const getIsDirty = (field: string) => v$.value[field]?.$dirty

  const getProxy = (field: string) => v$.value[field]

  const getMessage = (field: string) => v$.value[field]?.$silentErrors[0]?.$message

  const isDirtyAndError = (field: string) => getIsError(field) && getIsDirty(field)

  const isDirtyAndNotError = (field: string) => !getIsError(field) && getIsDirty(field)

  const isNotDirtyAndError = (field: string) => getIsError(field) && !getIsDirty(field)

  const getStatusValidation = (field: string) => {
    if (isNotDirtyAndError(field)) return 'initial-error'
    else if (!getIsDirty(field)) return 'inactive'
    else if (isDirtyAndError(field)) return 'dirty-error'
    else return 'correct'
  }

  return {
    touch,
    getProxy,
    getIsError,
    getIsDirty,
    getMessage,
    isDirtyAndError,
    isDirtyAndNotError,
    getStatusValidation,
    isFormValid,
  }
}
