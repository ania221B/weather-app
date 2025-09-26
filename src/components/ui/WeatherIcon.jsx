import {
  iconDrizzle,
  iconFog,
  iconOvercast,
  iconPartlyCloudy,
  iconRain,
  iconSnow,
  iconStorm,
  iconSunny
} from '../../assets/icons/weather-icons'

function WeatherIcon ({ weatherCode }) {
  const drizzle = [51, 53, 55]
  const fog = [45, 48]
  const partlyCloudy = [1, 2]
  const overcast = [3]
  const rain = [61, 63, 65, 66, 67, 80, 81, 82]
  const snow = [71, 73, 75, 77, 85, 86]
  const storm = [95, 96, 99]
  const sunny = [0]

  let icon
  let description
  if (drizzle.includes(weatherCode)) {
    icon = iconDrizzle
    description = 'Drizzle, light to dense intensity rain with small droplets.'
  }
  if (fog.includes(weatherCode)) {
    icon = iconFog
    description = 'Fog with limited visibility, possible rime fog.'
  }
  if (overcast.includes(weatherCode)) {
    icon = iconOvercast
    description = 'Overcast sky, clouds covering the entire sky.'
  }
  if (partlyCloudy.includes(weatherCode)) {
    icon = iconPartlyCloudy
    description = 'Partly cloudy sky with scattered clouds.'
  }
  if (rain.includes(weatherCode)) {
    icon = iconRain
    description =
      'Rain, from light to heavy intensity, or rain showers, including freezing rain.'
  }
  if (snow.includes(weatherCode)) {
    icon = iconSnow
    description =
      'Snow, from light to heavy snowfall, or snow showers, including snow grains.'
  }
  if (storm.includes(weatherCode)) {
    icon = iconStorm
    description =
      'Thunderstorm with moderate to heavy intensity, including possible hail.'
  }
  if (sunny.includes(weatherCode)) {
    icon = iconSunny
    description = 'Clear sky, no clouds.'
  }

  return (
    <div className='weather-icon'>
      <img src={icon} alt={description} />
    </div>
  )
}
export default WeatherIcon
