export const useServerRoute = function<T> () {
  const pagePath = useRoute().path
  return useFetch<T>('/pages' + pagePath)
}
