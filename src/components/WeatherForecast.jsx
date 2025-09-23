import { nanoid } from 'nanoid'
import { getTime, getWeekday } from '../utils'
import Loading from './Loading'
import WeatherCurrent from './WeatherCurrent'
import WeatherDaily from './WeatherDaily'
import WeatherHourly from './WeatherHourly'

function WeatherForecast ({ weather, coordinates, appError, isPending }) {
  if (isPending) {
    return <Loading></Loading>
  }

  if (appError) {
    return (
      <div className='weather section' role='status' aria-live='polite'>
        <p className='text-preset-4 clr-neutral-000 mx-auto'>{appError}</p>
      </div>
    )
  }

  const mappedDailyData = weather.daily.days.map((day, index) => {
    return {
      id: nanoid(),
      day: getWeekday(day),
      temperature: `${weather.daily.temperature[index]}°`,
      feelsLike: `${weather.daily.feelsLike[index]}°`,
      weatherCode: weather.daily.weatherCode[index]
    }
  })

  const mappedHourlyData = weather.hourly.time
    .reduce((groups, item, index) => {
      const lastGroup = groups[groups.length - 1]
      if (!lastGroup || lastGroup.length === 24) {
        groups.push([{ item, index }])
      } else {
        lastGroup.push({ item, index })
      }
      return groups
    }, [])
    .map(group => {
      const mappedWeekday = group.map(({ item, index }) => {
        return {
          id: nanoid(),
          time: getTime(item),
          temperature: `${weather.hourly.temperature[index]}°`,
          weatherCode: weather.hourly.weatherCode[index]
        }
      })

      return {
        [getWeekday(group[0].item, true)]: mappedWeekday
      }
    })

  return (
    <article className='weather section'>
      {/* CURRENT WEATHER */}
      <WeatherCurrent
        coordinates={coordinates}
        currentWeather={weather.current}
      ></WeatherCurrent>
      {/* END OF CURRENT WEATHER */}

      {/* DAILY WEATHER */}
      <WeatherDaily dailyWeather={mappedDailyData}></WeatherDaily>
      {/* END OF DAILY WEATHER */}

      {/* HOURLY WEATHER */}
      <WeatherHourly hourlyWeather={mappedHourlyData}></WeatherHourly>
      {/* END OF HOURLY WEATHER */}
    </article>
  )
}
export default WeatherForecast
