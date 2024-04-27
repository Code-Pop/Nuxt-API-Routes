<script setup lang="ts">
import type { Comment } from '@/data/comments'

const props = defineProps<{ postId: string }>()
const commentsUrl = `/api/posts/${props.postId}/comments`

const { data: comments } = await useAsyncData<Comment[]>(
  () => $fetch(commentsUrl),
  { default: () => [] }
)

const commenterInput = ref('')
const contentInput = ref('')

const submit = async () => {
  const formFields = {
    commenter: commenterInput.value,
    content: contentInput.value
  }

  comments.value.push({
    ...formFields,
    id: 0,
    postId: ''
  })

  commenterInput.value = ''
  contentInput.value = ''

  await $fetch<Comment>(commentsUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formFields)
  })

  refreshNuxtData(commentsUrl)
}
</script>

<template>
  <div class="comment-section">
    <h3>Comments</h3>
    <form class="comment-form" @submit.prevent="submit">
      Your name: <input v-model="commenterInput" class="field commenter" type="text">
      <textarea v-model="contentInput" class="field content" />
      <input class="submit" type="submit" value="Submit">
    </form>
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
