import { WeatherIcon } from '../ui'

function WeatherHourlyListItem ({ item }) {
  return (
    <li key={item.id} className='weather-tile'>
      <WeatherIcon weatherCode={item.weatherCode}></WeatherIcon>
      <dl>
        <dt className='sr-only'>Time:</dt>
        <dd>{item.time}</dd>

        <dt className='sr-only'>Temperature:</dt>
        <dd>{item.temperature}</dd>
      </dl>
    </li>
  )
}
export default WeatherHourlyListItem
