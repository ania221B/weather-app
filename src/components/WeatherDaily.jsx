import WeatherIcon from './WeatherIcon'

function WeatherDaily ({ dailyWeather }) {
  return (
    <section className='weather-daily flow'>
      <h2 className='text-preset-5'>Daily forecast</h2>
      <ul className='grid-auto-fit' role='list'>
        {dailyWeather.map(item => {
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
        })}
      </ul>
    </section>
  )
}
export default WeatherDaily
