import { useQuery } from '@tanstack/react-query'
import { fetchLocation } from '../apis'
import { normalizeLocations } from '../utils'
import useDebounce from './useDebounce'

function useLocationSearch (location) {
  const debounced = useDebounce(location)
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ['locations', debounced.toLowerCase()],
    queryFn: () => fetchLocation(debounced),
    select: normalizeLocations,
    enabled: !!debounced && debounced.length >= 3,
    retry: (failureCount, error) => {
      if (error.response?.status === 400) {
        return false
      }
      return failureCount < 3
    }
  })

  return { data, isPending, error, refetch }
}
export default useLocationSearch
