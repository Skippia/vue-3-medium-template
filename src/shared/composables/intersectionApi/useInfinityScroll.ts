import { useInfiniteScroll } from '@vueuse/core'
import { MaybeRef } from 'vue'

export function useInfinityScroll<T>({
  initData,
  getRootEl,
  isLoading,
  loadMoreData,
  rootMargin = '100px',
  loadingElements = 3,
}: {
  initData: T[]
  getRootEl: () => MaybeRef<HTMLElement>
  isLoading: Ref<boolean>
  loadMoreData: (amount: number) => Promise<T[]>
  rootMargin?: string
  loadingElements?: number
}) {
  const reactiveData = ref(initData) as Ref<T[]>

  async function _loadMoreData(amount: number) {
    isLoading.value = true
    try {
      const result = await loadMoreData(amount)
      return result
    } finally {
      isLoading.value = false
    }
  }

  // Option 1: use native Observer API
  function initInfinityScrollViaNativeAPI(lastElClass: string) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            const newData = await _loadMoreData(loadingElements)

            reactiveData.value = [...reactiveData.value, ...newData]

            observer.unobserve(entry.target)
            observer.observe(document.querySelector(`.${lastElClass}`) as HTMLElement)
          }
        })
      },
      {
        threshold: 1,
        root: unref(getRootEl()),
        rootMargin,
      }
    )
    const lastEl = document.querySelector(`.${lastElClass}`) as HTMLElement
    observer.observe(lastEl)
  }

  // Option 2: use @vueuse library
  function initInfinityScrollViaVueUse() {
    useInfiniteScroll(
      getRootEl(),
      async () => {
        const newData = await _loadMoreData(loadingElements)

        reactiveData.value = [...reactiveData.value, ...newData]
      },
      { distance: parseFloat(rootMargin) }
    )
  }

  return { initInfinityScrollViaVueUse, initInfinityScrollViaNativeAPI, reactiveData }
}
