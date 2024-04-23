import { getCategoryDetailsUrl, CategoryDetails } from '@/data/categories'

export default defineEventHandler((event) => {
  const categorySlug = getRouterParam(event, 'category')!
  return $fetch<CategoryDetails>(getCategoryDetailsUrl(categorySlug))
})
