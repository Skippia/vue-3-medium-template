<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { useInfinityScroll } from '@shared/composables/intersection-api'

import { VAtomCubeLoader } from '@/shared/ui/atoms/loader'

export type TBlog = {
  id: number | string
  authorId: string
  title: string
  text: string
  views: number
  category: string
  date_created: number
  tags: string[]
  imgPreview: string
}

const initData: TBlog[] = [
  {
    id: 1,
    authorId: '115',
    title: 'Agile Development for Software Teams',
    text: 'In this blog post, we will discuss agile development for software teams...',
    views: 110,
    category: 'Software development',
    date_created: 1623456789,
    tags: ['App', 'Management', 'Data'],
    imgPreview: 'https://example.com/img8.jpg',
  },
  {
    id: 2,
    authorId: '115',
    title: 'Agile Development for Software Teams',
    text: 'In this blog post, we will discuss agile development for software teams...',
    views: 110,
    category: 'Software development',
    date_created: 1623456789,
    tags: ['App', 'Management', 'Data'],
    imgPreview: 'https://example.com/img8.jpg',
  },
  {
    id: 3,
    authorId: '115',
    title: 'Agile Development for Software Teams',
    text: 'In this blog post, we will discuss agile development for software teams...',
    views: 110,
    category: 'Software development',
    date_created: 1623456789,
    tags: ['App', 'Management', 'Data'],
    imgPreview: 'https://example.com/img8.jpg',
  },
]

const el = ref<HTMLElement>()
const data = ref<TBlog[]>()
const isLoading = ref<boolean>(false)

async function loadMoreData(amount: number): Promise<TBlog[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return new Array(amount).fill('*').map(() => ({
    id: uuidv4(),
    authorId: '115',
    title: 'Agile Development for Software Teams',
    text: 'In this blog post, we will discuss agile development for software teams...',
    views: 110,
    category: 'Software development',
    date_created: 1623456789,
    tags: ['App', 'Management', 'Data'],
    imgPreview: 'https://example.com/img8.jpg',
  }))
}

const { reactiveData, initInfinityScrollViaVueUse /*, initInfinityScrollViaNativeAPI */ } = useInfinityScroll<TBlog>({
  initData,
  getRootEl: () => el as Ref<HTMLElement>,
  isLoading,
  loadMoreData,
})

watch(
  reactiveData,
  (newVal) => {
    data.value = newVal
  },
  {
    immediate: true,
  }
)

// nextTick(() => {
//   initInfinityScrollViaNativeAPI('card-blog:last-child')
// })
initInfinityScrollViaVueUse()
</script>

<template>
  <div ref="el" class="my-container">
    <div v-for="item in data" :key="item.id" class="card-blog">
      {{ item }}
    </div>
    <VAtomCubeLoader v-if="isLoading" />
  </div>
</template>

<style lang="scss" scoped>
.my-container {
  @apply w-3/4 max-w-[500px] mx-a my-10 flex flex-col gap-y-3 max-h-600px overflow-y-scroll bg-gray-500 rounded;
}

.card-blog {
  @apply border bg-gray-500/5 rounded p-3;
}
</style>
