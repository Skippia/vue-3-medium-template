<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useContactFormValidation, IContactFormFields } from '../composables/form-validation'

import { IFormInfo } from '@/shared/composables/form-validation'
import { VAtomInput } from '@/shared/ui/atoms/inputs'
import { VAtomButton } from '@/shared/ui/atoms/buttons'

const { isFormValid, formValidatorManager, touch, getStatusValidation } = useContactFormValidation()

const { t } = useI18n()

// Just describe our inputs (it's not related with validation at all)
const formInfoInputs: IFormInfo<IContactFormFields>[] = [
  {
    id: 'contact-email-id',
    label: computed(() => t(`common.email`)),
    placeholder: computed(() => t(`common.formPlaceholder.email`)),
    field: 'email',
    tag: 'input',
  },
  {
    id: 'contact-name-id',
    label: computed(() => t(`common.name`)),
    placeholder: computed(() => t(`common.formPlaceholder.name`)),
    field: 'name',
    tag: 'input',
  },
  {
    id: 'contact-theme-id',
    label: computed(() => t(`common.theme`)),
    placeholder: computed(() => t(`common.formPlaceholder.theme`)),
    field: 'theme',
    tag: 'input',
  },
  {
    id: 'contact-message-id',
    label: computed(() => t(`common.message`)),
    placeholder: computed(() => t(`common.formPlaceholder.message`)),
    field: 'message',
    tag: 'textarea',
  },
]
</script>

<template>
  <div class="contacts-form-container">
    <form class="contacts-form">
      <div class="contacts-form__inputs">
        <VAtomInput
          v-for="formInfoInput in formInfoInputs"
          :key="formInfoInput.id"
          v-model="formValidatorManager[formInfoInput.field]"
          class="contacts-form__input w-full"
          v-bind="{
            ...formInfoInput,
            statusValidation: getStatusValidation(formInfoInput.field),
          }"
          @input="touch(formInfoInput.field)"
        />
      </div>

      <VAtomButton :is-disabled="!isFormValid" class="contact-form__send-button">
        {{ $t(`common.button.send`) }}
      </VAtomButton>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.contacts-form-container {
  @apply flex flex-col w-full;
  @apply sm:(w-4/5);
  @apply md:(flex-row w-full justify-between gap-x-8);
}
.contacts-form {
  @apply xsm:(w-full flex flex-col mx-a gap-y-6);
  @apply md:(w-3/4);
  @apply 2xl:(w-1/2);

  // .contacs-form__inputs

  &__inputs {
    @apply w-full mx-auto flex justify-between gap-y-6 flex-wrap;
    @apply md:(flex-row gap-x-6);
    // @apply lg:(w-1/2);
  }

  // .contacts-form__input

  &__input {
    @apply w-full;
  }

  &__input:nth-child(1) {
    @apply xsm:w-full;
    @apply lg:w-[45%];
  }

  &__input:nth-child(2) {
    @apply xsm:w-full;
    @apply lg:w-[45%];
  }
}
.contact-form {
  // .contact-form__send-button

  &__send-button {
    @apply bg-primary text-white mx-a w-fit;
    @apply lg:(self-end w-fit);
  }
}
</style>
