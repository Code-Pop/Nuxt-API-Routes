<script setup lang="ts">
import type { Comment } from '@/data/comments'

const props = defineProps<{ postId: string }>()
const comments = await $fetch<Comment[]>(`/api/posts/${props.postId}/comments`)
</script>

<template>
  <div class="comment-section">
    <h3>Comments</h3>
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <span class="commenter">{{ comment.commenter }}:</span>
      <p>{{ comment.content }}</p>
    </div>
  </div>
</template>

<style lang="scss">
@use "@/assets/styles/colors.scss";

.comment-section {
  margin-top:50px;
}

.comment-section h3 {
  font-size: 18pt;
  margin-bottom: 10px;
}

.comment {
  color: white;
  margin-top: 10px;
  border-top: 1px solid colors.$green-dark;
  padding-top: 10px;
}

.commenter {
  font-size: 14pt;
  color: colors.$green-medium;
}

.comment-form .field {
  background-color: colors.$green-dark;
  color: white;
  padding: 5px 10px;
  border: none;
  margin-bottom: 10px;
  font-size: 12pt;
}

.comment-form .commenter {
  margin-left: 10px;
}

.comment-form .content {
  display: block;
  width: 100%;
}

.submit {
  cursor: pointer;
  background-color: colors.$dark;
  color: colors.$green-medium;
  border: 1px solid colors.$green-medium;
  padding: 5px 10px;
  font-size: 12pt;
  display: block;
}
</style>
