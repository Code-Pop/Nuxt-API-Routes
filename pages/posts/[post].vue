<script setup lang="ts">
import type { PostDetails } from '@/data/posts'

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
    </template>
  </main>
</template>
