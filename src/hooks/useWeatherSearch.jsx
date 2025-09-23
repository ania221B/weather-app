import { useQuery } from '@tanstack/react-query'
import normalizeWeather from '../utils/normalizeWeather'
import fetchWeather from '../apis/fetchWeather'

function useWeatherSearch (coordinates, units) {
  const { data, isPending, error, refetch } = useQuery({
    queryKey: ['coordinates', coordinates, units],
    queryFn: () => fetchWeather(coordinates, units),
    select: normalizeWeather,
    enabled: !!coordinates,
    retry: (failureCount, error) => {
      if (error.response?.status === 400) {
        return false
      }
      return failureCount < 3
    }
  })
  return { data, isPending, error, refetch }
}
export default useWeatherSearch
