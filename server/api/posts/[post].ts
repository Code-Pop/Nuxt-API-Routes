import { getPostDetailsUrl } from '@/data/posts'

export default defineEventHandler((event) => {
  const postSlug = getRouterParam(event, 'post')!.toString()
  return $fetch(getPostDetailsUrl(postSlug))
})
