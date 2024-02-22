<script setup lang="ts">
import { isDark, toggleTheme } from '@shared/composables/others'
</script>

<template>
  <label class="toggle-switch">
    <input
      :checked="!isDark"
      type="checkbox"
      class="toggle-switch__input"
      @click="toggleTheme()"
    />
    <div class="toggle-switch__slider">
      <span
        class="toggle-switch__slider-weather"
        :class="{
          'i-fluent-weather-sunny-16-filled': !isDark,
          'i-fluent-weather-moon-16-filled': isDark,
        }"
      ></span>
    </div>
  </label>
</template>

<style lang="scss" scoped>
.toggle-switch {
  --height: 40px;
  --width: 80px;
  --padding: 5px;

  display: block;
  width: var(--width);
  height: var(--height);
  cursor: pointer;
  @apply border-2 rounded-3xl;
  @apply bg-white dark:bg-dark;

  &__input {
    display: none;
  }

  &__slider {
    position: relative;
    width: 100%;
    height: 100%;
    @apply flex items-center text-3xl;
  }

  &__slider-weather {
    position: absolute;
    top: 50%;
    left: var(--padding);
    transform: translateY(-50%);
    transition: transform 0.3s ease;
    /* Иконка будет черной в светлой теме и белой в темной */
    @apply bg-black dark:bg-white;
  }

  &__input:checked + &__slider &__slider-weather {
    transform: translateY(-50%)
      translateX(calc(var(--width) - 100% - (var(--padding) * 2)));
  }
}
</style>
