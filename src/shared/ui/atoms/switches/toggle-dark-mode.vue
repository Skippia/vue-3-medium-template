<script setup lang="ts">
import { isDark, toggleTheme } from '@shared/composables/others'
</script>

<template>
  <label class="toggle-switch__label">
    <input :checked="!isDark" type="checkbox" class="toggle-switch__input" @click="toggleTheme()" />
    <div class="toggle-switch__slider">
      <span class="toggle-switch__slider-weather" />
    </div>
  </label>
</template>

<style lang="scss" scoped>
$height: 40px;
$width: 80px;

.toggle-switch {
  // .toggle-switch__label

  &__label {
    @apply w-full cursor-pointer border-1 bg-white border-2 rounded-3xl;
    @apply dark:(bg-dark);
    height: $height;
    width: $width;
  }

  // .toggle-switch__input

  &__input {
    @apply display-none outline-0 border-0;
  }

  // .toggle-switch__slider

  &__slider {
    @apply flex items-center w-full h-full text-3xl;
  }

  // .toggle-switch__slider-weather

  &__slider-weather {
    transform: translateX(calc($width / 2));
    @apply transition-300 i-fluent-weather-sunny-16-filled bg-black translate-x-[20%];
    @apply dark:(i-fluent-weather-moon-16-filled translate-x-[150%]);
  }
}
</style>
