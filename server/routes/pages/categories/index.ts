import type { Category } from '@/data/categories'
import { getCategoriesUrl } from '@/data/categories'

export default defineEventHandler(() => {
  return $fetch<Category[]>(getCategoriesUrl())
})
