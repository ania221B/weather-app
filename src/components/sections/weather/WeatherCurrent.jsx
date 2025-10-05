import currentWeatherSmall from '../../../assets/images/bg-today-small.svg'
import currentWeatherLarge from '../../../assets/images/bg-today-large.svg'
import { getDateTimeString, getFormattedDate } from '../../../utils'
import WeatherIcon from '../../ui/WeatherIcon'
import { useSelector } from 'react-redux'

function WeatherCurrent ({ currentWeather }) {
  const { selected } = useSelector(store => store.location)

  return (
    <section className='weather-current flow'>
      <div className='stack-grid'>
        <picture>
          <source
            media='(min-width: 375px)'
            srcSet={currentWeatherLarge}
          ></source>
          <img src={currentWeatherSmall} alt='' className='bg-img' />
        </picture>
        <div className='main-content weather-current__highlighted-content'>
          <header className='flow'>
            <h2 className='fs-600 fw-bold'>{`${selected.name}, ${selected.country}`}</h2>
            <p>
              <time dateTime={getDateTimeString(currentWeather.time)}>
                {getFormattedDate(currentWeather.time)}
              </time>
            </p>
          </header>
          <div>
            <WeatherIcon weatherCode={currentWeather.weatherCode}></WeatherIcon>
            <dl>
              <dt className='sr-only'>Temperature:</dt>
              <dd className='text-preset-1'>{currentWeather.temperature}°</dd>
            </dl>
          </div>
        </div>
      </div>

      <div className='weather-current__details grid-auto-fit'>
        <dl className='weather-tile flow'>
          <dt className='weather-tile__category'>Feels Like:</dt>
          <dd className='weather-tile__value'>
            {currentWeather.feelsLike}
            {currentWeather.feelsLikeUnit}
          </dd>
        </dl>

        <dl className='weather-tile flow'>
          <dt className='weather-tile__category'>Humidity:</dt>
          <dd className='weather-tile__value'>
            {currentWeather.humidity}
            {currentWeather.humidityUnit}
          </dd>
        </dl>

        <dl className='weather-tile flow'>
          <dt className='weather-tile__category'>Wind:</dt>
          <dd className='weather-tile__value'>
            {currentWeather.wind} {currentWeather.windUnit}
          </dd>
        </dl>

        <dl className='weather-tile flow'>
          <dt className='weather-tile__category'>Precipitation:</dt>
          <dd className='weather-tile__value'>
            {currentWeather.precipitation} {currentWeather.precipitationUnit}
          </dd>
        </dl>
      </div>
    </section>
  )
}
export default WeatherCurrent
