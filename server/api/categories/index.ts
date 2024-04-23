import { getCategoriesUrl, Category } from '@/data/categories'

export default defineEventHandler(() => {
  return $fetch<Category[]>(getCategoriesUrl())
})
