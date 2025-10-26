import { getFullTime } from '../../utils'
import { IconSunrise, IconSunset } from '../icons'
import { WeatherIcon } from '../ui'

function WeatherDailyListItem ({ item }) {
  const { day, temperatureMax, temperatureMin, sunrise, sunset, weatherCode } =
    item
  return (
    <li>
      <article className='weather-tile'>
        <h3 className='weather-tile__category'>
          <span className='sr-only'>Day:</span>
          <span>{day}</span>
        </h3>

        <WeatherIcon weatherCode={weatherCode}></WeatherIcon>

        <dl className='weather-tile__list'>
          <dt className='weather-tile__icon'>
            <IconSunrise></IconSunrise>
            <span className='sr-only'>Sunrise:</span>
          </dt>
          <dd className='weather-tile__value weather-tile__time'>
            {getFullTime(sunrise)}
          </dd>

          <dt className='weather-tile__icon'>
            <IconSunset></IconSunset>
            <span className='sr-only'>Sunset:</span>
          </dt>
          <dd className='weather-tile__value weather-tile__time'>
            {getFullTime(sunset)}
          </dd>

          <dt className='sr-only weather-tile__temperature-category'>
            Temperature:
          </dt>
          <dd className='weather-tile__value weather-tile__temperature-max'>
            {temperatureMax}
          </dd>

          <dt className='sr-only weather-tile__temperature-category'>
            Feels Like:
          </dt>
          <dd className='weather-tile__value weather-tile__temperature-min'>
            {temperatureMin}
          </dd>
        </dl>
      </article>
    </li>
  )
}
export default WeatherDailyListItem
