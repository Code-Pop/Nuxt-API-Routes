import { getCategoryDetailsUrl } from '@/data/categories'

export default defineEventHandler((event) => {
  const categorySlug = getRouterParam(event, 'category')!
  return $fetch(getCategoryDetailsUrl(categorySlug))
})
