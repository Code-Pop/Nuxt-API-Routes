import type { Comment } from '@/data/comments'
import { getCommentsUrl } from '@/data/comments'

export default defineEventHandler((event) => {
  const postSlug = getRouterParam(event, 'post')!
  return $fetch<Comment>(getCommentsUrl(postSlug))
})
