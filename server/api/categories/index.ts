import { getCategoriesUrl } from '@/data/categories'

export default defineEventHandler(() => {
  return $fetch(getCategoriesUrl())
})
