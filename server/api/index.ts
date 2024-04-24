import type { Post } from '@/data/posts'
import { getPostsUrl } from '@/data/posts'

export default defineEventHandler(() => {
  return $fetch<Post[]>(getPostsUrl())
})
