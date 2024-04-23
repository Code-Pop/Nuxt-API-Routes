<script setup lang="ts">
import type { Post } from '@/data/posts'

const { data: posts } = await useFetch<Post[]>('/api')
</script>

<template>
  <main>
    <h1>Nuxt.js Examples</h1>
    <div>
      <PostCard
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
  </main>
</template>
