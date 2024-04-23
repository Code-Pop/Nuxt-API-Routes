import { getPostsUrl, Post } from '@/data/posts'

export default defineEventHandler(() => {
  return $fetch<Post[]>(getPostsUrl())
})
