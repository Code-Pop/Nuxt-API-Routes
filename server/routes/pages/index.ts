import { getPostsUrl } from '@/data/posts'

export default defineEventHandler(() => {
  return $fetch(getPostsUrl())
})
