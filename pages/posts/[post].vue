<script setup lang="ts">
import type { PostDetails } from '@/data/posts'
import type CommentSection from '~/components/CommentSection.vue';

definePageMeta({
  layout: 'breadcrumb'
})

const { data: post } = await useServerRoute<PostDetails>()

const categoryState = useCategoryState()

if (post.value) {
  categoryState.value = {
    name: post.value.category.name,
    slug: post.value.category.slug
  }
}
</script>

<template>
  <main>
    <template v-if="post">
      <h1>
        {{ post.title }}
        <CategoryLink :category="post.category" />
      </h1>
      <RenderMarkdown :source="post.content" />
      <ClientOnly>
        <Transition>
          <CommentSection :post-id="post.id" />
        </Transition>
      </ClientOnly>
    </template>
  </main>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
