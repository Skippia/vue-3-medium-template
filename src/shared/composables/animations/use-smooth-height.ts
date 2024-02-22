/* eslint-disable @typescript-eslint/no-explicit-any */
export const useSmoothHeight = (factor = 1) => {
  const beforeEnter: any = (el: HTMLElement) => {
    el.style.height = '0'
  }
  const enter: any = (el: HTMLElement) => {
    el.style.height = el.scrollHeight * factor + 'px'
  }
  const beforeLeave: any = (el: HTMLElement) => {
    el.style.height = el.scrollHeight * factor + 'px'
  }
  const leave: any = (el: HTMLElement) => {
    el.style.height = '0'
  }

  return { beforeEnter, enter, beforeLeave, leave }
}
