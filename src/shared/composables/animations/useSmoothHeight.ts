export const useSmoothHeight = (factor = 1) => {
  const beforeEnter = (el: HTMLElement) => (el.style.height = '0')
  const enter = (el: HTMLElement) => (el.style.height = `${el.scrollHeight * factor}px`)
  const beforeLeave = (el: HTMLElement) => (el.style.height = `${el.scrollHeight * factor}px`)
  const leave = (el: HTMLElement) => (el.style.height = '0')

  return { beforeEnter, enter, beforeLeave, leave }
}
