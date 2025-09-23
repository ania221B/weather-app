import { weatherApi } from './weatherApi'

async function fetchWeather (coordinates, units) {
  const { data } = await weatherApi.get('/', {
    params: {
      latitude: coordinates.latitude, // Tokyo: 35.41
      longitude: coordinates.longitude, // Tokyo: 139.46
      current:
        'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation,weather_code',
      hourly: 'temperature_2m,weather_code',
      daily: 'temperature_2m_mean,weather_code,apparent_temperature_mean',
      temperature_unit: units.temperature,
      wind_speed_unit: units.windSpeed,
      precipitation_unit: units.precipitation,
      timezone: 'auto'
    }
  })
  return data
}

export default fetchWeather
