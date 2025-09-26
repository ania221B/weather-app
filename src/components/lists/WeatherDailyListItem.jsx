import { WeatherIcon } from '../ui'

function WeatherDailyListItem ({ item }) {
  const { id, day, temperature, feelsLike, weatherCode } = item
  return (
    <li key={id}>
      <article className='weather-tile'>
        <h3 className='weather-tile__category'>
          <span className='sr-only'>Day:</span>
          <span>{day}</span>
        </h3>

        <WeatherIcon weatherCode={weatherCode}></WeatherIcon>
        <dl>
          <dt className='sr-only'>Temperature:</dt>
          <dd className='weather-tile__value'>{temperature}</dd>

          <dt className='sr-only'>Feels Like:</dt>
          <dd className='weather-tile__value'>{feelsLike}</dd>
        </dl>
      </article>
    </li>
  )
}
export default WeatherDailyListItem
