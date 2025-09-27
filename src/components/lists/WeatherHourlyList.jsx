import { WeatherHourlyListItem } from '.'

function WeatherHourlyList ({ hours }) {
  return (
    <ul className='weather-hourly__list' aria-label='weather hour by hour'>
      {hours.map(hour => {
        return (
          <WeatherHourlyListItem
            item={hour}
            key={hour.id}
          ></WeatherHourlyListItem>
        )
      })}
    </ul>
  )
}
export default WeatherHourlyList
