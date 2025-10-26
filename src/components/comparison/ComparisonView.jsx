import { useDispatch } from 'react-redux'
import IconDelete from '../icons/IconDelete'
import {
  clearComparison,
  removeFromComparison
} from '../../features/comparison/comparisonSlice'
import { getDateTimeString, getFormattedDate } from '../../utils'
import { WeatherIcon } from '../ui'
import { useEffect } from 'react'
import { toggleIsListEmpty } from '../../features/modal/modalSlice'

function ComparisonView ({ comparisonList }) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (comparisonList.length === 0) {
      dispatch(toggleIsListEmpty(true))
    } else {
      dispatch(toggleIsListEmpty(false))
    }
  }, [comparisonList.length])

  if (comparisonList.length === 0) {
    return (
      <div className='comparison-view comparison-view--empty'>
        <h2>Compare locations</h2>
        <p>
          You don't have any locations to compare yet. Hit the ⚖️ button to add
          some.
        </p>
      </div>
    )
  }
  return (
    <div className='comparison-view'>
      <h2>Compare locations</h2>
      <ul className='comparison-view__list grid-auto-fit' role='list'>
        {comparisonList.map(item => {
          const { id, name, country } = item.location
          const {
            temperatureUnit,
            feelsLikeUnit,
            humidityUnit,
            windUnit,
            precipitationUnit,
            time,
            temperature,
            feelsLike,
            humidity,
            wind,
            precipitation,
            weatherCode
          } = item.weather
          return (
            <li key={id} className='weather-tile'>
              <article className='weather-tile__wrapper'>
                <header className='weather-tile__header'>
                  <div className='weather-tile__header__text'>
                    <h2 className='fs-500 fw-bold'>{`${name}, ${country}`}</h2>
                    <p className='fs-300'>
                      <time dateTime={getDateTimeString(time)}>
                        {getFormattedDate(time)}
                      </time>
                    </p>
                  </div>
                  <WeatherIcon weatherCode={weatherCode}></WeatherIcon>
                </header>
                <div className='weather-tile__details grid-auto-fit'>
                  <dl className='weather-tile'>
                    <dt className='weather-tile__category'>Temperature:</dt>
                    <dd className='weather-tile__value'>
                      {temperature}
                      {temperatureUnit}
                    </dd>
                  </dl>

                  <dl className='weather-tile'>
                    <dt className='weather-tile__category'>Feels Like:</dt>
                    <dd className='weather-tile__value'>
                      {feelsLike}
                      {feelsLikeUnit}
                    </dd>
                  </dl>

                  <dl className='weather-tile'>
                    <dt className='weather-tile__category'>Humidity:</dt>
                    <dd className='weather-tile__value'>
                      {humidity}
                      {humidityUnit}
                    </dd>
                  </dl>

                  <dl className='weather-tile'>
                    <dt className='weather-tile__category'>Wind:</dt>
                    <dd className='weather-tile__value'>
                      {wind} {windUnit}
                    </dd>
                  </dl>

                  <dl className='weather-tile'>
                    <dt className='weather-tile__category'>Precipitation:</dt>
                    <dd className='weather-tile__value'>
                      {precipitation} {precipitationUnit}
                    </dd>
                  </dl>
                </div>
              </article>

              <button
                type='button'
                className='btn'
                onClick={() => {
                  dispatch(removeFromComparison({ id }))
                }}
                data-variant='scale-up'
                data-type='remove'
              >
                <IconDelete></IconDelete>

                <span className='sr-only'>Remove</span>
              </button>
            </li>
          )
        })}
      </ul>
      <button
        type='button'
        className='btn'
        onClick={() => dispatch(clearComparison())}
        data-type='clear'
        data-variant='ripple'
      >
        <span>Clear List</span>

        <IconDelete></IconDelete>
      </button>
    </div>
  )
}
export default ComparisonView
