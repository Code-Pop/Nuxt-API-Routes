<script setup lang="ts">
const { data: posts } = await useFetch('/api')
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
