export function useReactiveAsideContent({
  getAllHeaderElements,
  currentSection,
}: {
  currentSection: Ref<number>
  getAllHeaderElements: () => NodeListOf<Element>
}): void {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            currentSection.value = Number(entry.target.getAttribute('id'))
          }
        })
      },
      {
        rootMargin: '0px 0px -90% 0px',
      }
    )

    const allHeaderElements = getAllHeaderElements()

    allHeaderElements.forEach((section) => {
      observer.observe(section)
    })
  })
}
