import { helpers, required, email, maxLength, minLength } from '@vuelidate/validators'
import { useSchemaValidation } from '@shared/composables/formValidation'

export type IContactFormFields = {
  email: string
  name: string
  theme: string
  message: string
}

export function useContactFormValidation() {
  // 1. Create a form
  const formValidatorManager: IContactFormFields = reactive({ email: '', name: '', theme: '', message: '' })

  // 2. Set up rules
  const rules: ComputedRef<Record<keyof IContactFormFields, unknown>> = computed(() => ({
    email: {
      required: helpers.withMessage('Input an name, please', required),
      email: helpers.withMessage("It doesn't look as email", email),
      maxLength: helpers.withMessage('Max length equals 16', maxLength(40)),
    },
    name: {
      required: helpers.withMessage('Input an email, please', required),
      minLength: helpers.withMessage('Min length equals 2', minLength(2)),
      maxLength: helpers.withMessage('Max length equals 16', maxLength(16)),
    },
    theme: {
      required: helpers.withMessage('Input an theme, please', required),
      minLenth: helpers.withMessage('Min length equals 2', minLength(3)),
      maxLength: helpers.withMessage('Max length equals 16', maxLength(16)),
    },
    message: {
      required: helpers.withMessage('Input an email, please', required),
      minLength: helpers.withMessage('Min length equals 2', minLength(2)),
      maxLength: helpers.withMessage('Max length equals 16', maxLength(255)),
    },
  }))

  // 3. Generate validator helpers based on schema and rules
  const { isFormValid, touch, getStatusValidation } = useSchemaValidation({ formValidatorManager, rules })

  return { isFormValid, formValidatorManager, touch, getStatusValidation }
}
