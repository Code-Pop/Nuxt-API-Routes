import type { PostDetails } from '@/data/posts'
import { getPostDetailsUrl } from '@/data/posts'

export default defineEventHandler((event) => {
  const postSlug = getRouterParam(event, 'post')!
  return $fetch<PostDetails>(getPostDetailsUrl(postSlug))
})
