import { getPostDetailsUrl } from '@/data/posts'

export default defineEventHandler((event) => {
  const postSlug = getRouterParam(event, 'post')!
  return $fetch(getPostDetailsUrl(postSlug))
})
