<script setup lang="ts">
import { useReactiveAsideContent } from '@shared/composables/intersectionApi'

const headers = ['Section1', 'Section2', 'Section3', 'Section4', 'Section5']
const staticContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quidem
          magni aperiam cum distinctio delectus illum, libero unde vero deserunt
          explicabo dolores culpa quo temporibus labore iste exercitationem
          deleniti molestias mollitia nostrum sed voluptatem iure reprehenderit
          similique? Exercitationem modi blanditiis dicta facilis sed repellat
          nam dolor eligendi iusto pariatur. Neque doloribus eveniet nesciunt
          quos? Pariatur, nostrum, aliquid eaque, aut sunt repellat nam error
          explicabo et corrupti ullam! Unde accusamus obcaecati facere tenetur
          consectetur velit? Neque officiis veritatis est assumenda corporis
          tempora aliquam totam architecto at nemo eveniet a delectus, iste
          voluptate hic dignissimos praesentium non! Doloremque mollitia est,
          perferendis tenetur facilis magni aliquam recusandae sint nobis sit
          impedit quidem ex, itaque dicta illo? Iste natus, rerum cum temporibus
          est, ullam et nobis tenetur suscipit blanditiis ea soluta eius animi
          omnis veritatis quo ipsum reprehenderit ad debitis neque! Iure omnis
          numquam, voluptas impedit facilis officiis quaerat at eius perferendis
          sunt sequi repellat dignissimos veniam cumque voluptatem error tempora
          quidem ipsam unde. Culpa, ea id? Adipisci maiores iusto eaque
          obcaecati sequi fugiat perspiciatis reiciendis voluptas ipsum,
          repellendus cum vel aliquam velit ad modi distinctio, sapiente ipsam
          mollitia beatae! Ullam, consequuntur deleniti vel esse eius voluptas
          asperiores aspernatur officia incidunt mollitia saepe dignissimos at
          totam rerum quas, expedita quod molestiae recusandae aut dolores quam
          modi neque! Labore, accusantium soluta minima temporibus atque quasi
          hic qui dolor expedita aliquam unde necessitatibus consequatur libero,
          rerum enim a amet ullam dignissimos? Ducimus minima quae quis debitis
          mollitia enim ut expedita rerum hic, necessitatibus quibusdam
          laboriosam doloribus, perspiciatis nihil perferendis saepe libero .`

const currentSection = ref<number>(0)

useReactiveAsideContent({
  currentSection,
  getAllHeaderElements: () => document.querySelectorAll('article h2'),
})
</script>

<template>
  <main>
    <article>
      <!-- Content -->
      <section v-for="(header, index) in headers" :key="header">
        <h2 :id="String(index)">
          {{ header }}
        </h2>
        <p>{{ staticContent }}</p>
      </section>
    </article>

    <!-- Sidebar -->
    <aside>
      <div>
        <a
          v-for="(header, idxHeaderLink) in headers"
          :key="header"
          :class="{ active: idxHeaderLink == currentSection }"
          :href="`#${idxHeaderLink}`"
          >{{ header }}
        </a>
      </div>
    </aside>
  </main>
</template>

<style lang="scss" scoped>
main {
  @apply xsm:(w-full px-[2%] flex mb-800px min-h-screen bg-white text-dark border-2 mx-a p-10 text-2xl);
  @apply md:(w-3/4);
}
aside {
  @apply xsm:(text-sm);
  @apply md:(text-md);
  @apply lg:(text-lg);
}
h2 {
  @apply xsm:(text-md);
  @apply md:(text-xl);
  @apply lg:(text-2xl);
  @apply text-black font-extrabold my-5;
}
aside > div {
  @apply sticky top-20px pl-8;
}
aside > div > a {
  @apply block text-[#2c3e50] decoration-none border-l-gray border-l-2 pl-8;
}
p {
  @apply xsm:(text-sm);
  @apply md:(text-md);
  @apply lg:(text-lg);
}
a.active {
  @apply font-bold border-l border-l-black;
}
</style>
