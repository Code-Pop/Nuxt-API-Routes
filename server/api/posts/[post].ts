import { getPostDetailsUrl, PostDetails } from '@/data/posts'

export default defineEventHandler((event) => {
  const postSlug = getRouterParam(event, 'post')!
  return $fetch<PostDetails>(getPostDetailsUrl(postSlug))
})
