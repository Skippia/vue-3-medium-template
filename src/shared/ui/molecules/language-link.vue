<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useI18n } from 'vue-i18n'
import { toCapitalize } from '@shared/utils/formatters'

const router = useRouter()

const { locale } = useI18n()

const locales = ['en', 'ru'] as const

const languages: { name: string; locale: TLocale }[] = [
  { name: 'russian', locale: 'ru' },
  { name: 'english', locale: 'en' },
]
type TLocale = (typeof locales)[number]

const changeLocale = (newLocale: TLocale) => {
  router.replace({
    params: {
      locale: newLocale,
    },
  })
}

const currentLocaleIs = (maybeLocale: string) => locale.value === maybeLocale
</script>

<template>
  <Menu as="div" class="menu">
    <div>
      <MenuButton class="menu__button">
        {{ $t(`navMenu.language`) }}
        <span class="menu__button-icon" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems class="menu__items">
        <div class="menu__item-wrapper">
          <MenuItem v-for="language in languages" :key="language.name" v-slot="{ active }">
            <button
              :class="{
                'dark:text-green-700 text-green-300': !active && currentLocaleIs(language.locale),
                'dark:text-dark text-white': !active && !currentLocaleIs(language.locale),
                'dark:text-green-900 text-green-300': active,
              }"
              class="menu__item"
              @click="changeLocale(language.locale)"
            >
              <span
                :class="{
                  'text-cGrey': currentLocaleIs(language.locale),
                  'opacity-0': !currentLocaleIs(language.locale),
                }"
                class="menu__item-icon"
              />
              {{ toCapitalize(language.name) }}
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style lang="scss" scoped>
.menu {
  @apply relative inline-block text-center;
  // .menu__button

  &__button {
    @apply flex items-center w-full transition-300 justify-center rounded-md bg-opacity-20 px-4 py-2 text-2xl font-medium;
    @apply hover:bg-opacity-90;
    @apply focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75;
    @apply bg-dark-500 text-white;
    @apply dark:(text-dark-500 bg-white);
    @apply md:text-sm;
  }

  // .menu__button-icon

  &__button-icon {
    @apply i-carbon-ibm-watson-language-translator ml-4 mr-2 h-5 w-5;
  }

  // .menu__items

  &__items {
    @apply absolute translate-y-[20%] translate-x-[-20%] w-40 rounded-xl shadow-lg focus:outline-none;
    @apply bg-dark-500 text-white;
    @apply dark:(text-dark-500 bg-white);
  }

  // .menu__item-wrapper

  &__item-wrapper {
    @apply px-1 py-1;
  }

  // .menu__item

  &__item {
    @apply flex w-full transition-300 items-center gap-x-3 px-2 py-2 text-sm;
  }

  // .menu__item-icon

  &__item-icon {
    @apply text-4xl;
  }
}
</style>
