function normalizeWeather (data) {
  if (
    !data?.current_units ||
    !data?.current ||
    !data?.daily ||
    !data?.daily_units ||
    !data?.hourly ||
    !data?.hourly_units
  )
    return null
  const current = data.current
  const currentUnits = data.current_units
  const daily = data.daily
  const dailyUnits = data.daily_units
  const hourly = data.hourly
  const hourlyUnits = data.hourly_units

  return {
    current: {
      temperatureUnit:
        typeof currentUnits?.temperature_2m === 'string'
          ? currentUnits.temperature_2m
          : '',
      feelsLikeUnit:
        typeof currentUnits?.apparent_temperature === 'string'
          ? currentUnits.apparent_temperature
          : '',
      humidityUnit:
        typeof currentUnits?.relative_humidity_2m === 'string'
          ? currentUnits.relative_humidity_2m
          : '',
      windUnit:
        typeof currentUnits?.wind_speed_10m === 'string'
          ? currentUnits.wind_speed_10m
          : '',
      precipitationUnit:
        typeof currentUnits?.precipitation === 'string'
          ? currentUnits.precipitation
          : '',
      time: typeof current?.time === 'string' ? current.time : '',
      temperature:
        typeof current?.temperature_2m === 'number'
          ? current.temperature_2m
          : 0,
      feelsLike:
        typeof current?.apparent_temperature === 'number'
          ? current.apparent_temperature
          : 0,
      humidity:
        typeof current?.relative_humidity_2m === 'number'
          ? current.relative_humidity_2m
          : 0,
      wind:
        typeof current?.wind_speed_10m === 'number'
          ? current.wind_speed_10m
          : 0,
      precipitation:
        typeof current?.precipitation === 'number' ? current.precipitation : 0,
      weatherCode:
        typeof current?.weather_code === 'number' ? current.weather_code : null
    },
    daily: {
      temperatureUnit:
        typeof dailyUnits?.temperature_2m_mean === 'string'
          ? dailyUnits.temperature_2m_mean
          : '',
      feelsLikeUnit:
        typeof dailyUnits?.apparent_temperature_mean === 'string'
          ? dailyUnits.apparent_temperature_mean
          : '',
      days: Array.isArray(daily?.time) ? daily.time : [],
      temperature: Array.isArray(daily?.temperature_2m_mean)
        ? daily.temperature_2m_mean
        : [],
      feelsLike: Array.isArray(daily?.apparent_temperature_mean)
        ? daily.apparent_temperature_mean
        : [],
      weatherCode: Array.isArray(daily?.weather_code)
        ? daily.weather_code
        : null
    },
    hourly: {
      temperatureUnit:
        typeof hourlyUnits?.temperature_2m === 'string'
          ? hourlyUnits.temperature_2m
          : '',
      time: Array.isArray(hourly?.time) ? hourly.time : [],
      temperature: Array.isArray(hourly?.temperature_2m)
        ? hourly.temperature_2m
        : [],
      weatherCode: Array.isArray(hourly?.weather_code)
        ? hourly.weather_code
        : null
    }
  }
}

export default normalizeWeather
