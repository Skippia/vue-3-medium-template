// import { useDark, useToggle } from '@vueuse/core'

/**
 * Somehow i have bug with immediate change color without animations
 * (my transitions don't work at the moment of switch color)
 */
// export const isDark = useDark()
// export const toggleTheme = useToggle(isDark)

export const isDark = ref(false)

export function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark')
    isDark.value = false
  } else {
    document.documentElement.classList.add('dark')
    isDark.value = true
  }
}
