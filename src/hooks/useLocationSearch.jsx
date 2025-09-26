import { useQuery } from '@tanstack/react-query'
import { fetchLocation } from '../apis'
import { normalizeLocations } from '../utils'

function useLocationSearch (location) {
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ['locations', location.toLowerCase()],
    queryFn: () => {
      if (!location || location.length < 3) return []
      return fetchLocation(location)
    },
    select: normalizeLocations,
    enabled: !!location && location.length >= 3,
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
