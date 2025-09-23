import { geoApi } from './geoApi'
async function fetchLocation (location) {
  const { data } = await geoApi.get('/', {
    params: {
      name: `${location}`,
      count: 4
    }
  })
  return data.results || []
}

export default fetchLocation
