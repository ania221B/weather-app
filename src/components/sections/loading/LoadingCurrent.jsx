import { IconLoading } from '../../../icons'
import noise from '../../../assets/images/nnnoise.svg'

function LoadingCurrent () {
  return (
    <section className='weather-current weather-current--loading flow'>
      <div className='stack-grid'>
        <picture>
          <img className='bg-img' src={noise}></img>
        </picture>
        <div className='main-content  weather-current--loading__highlighted-content'>
          <div className='loading__icon'>
            <IconLoading></IconLoading>
          </div>
          <h2 className='fs-400 fw-medium'>Loading...</h2>
        </div>
      </div>

      <div className='weather-current__details grid-auto-fit'>
        <dl className='weather-tile flow'>
          <dt className='weather-tile__category'>Feels Like:</dt>
          <dd className='weather-tile__value'>—</dd>
        </dl>

        <dl className='weather-tile flow'>
          <dt className='weather-tile__category'>Humidity:</dt>
          <dd className='weather-tile__value'>—</dd>
        </dl>

        <dl className='weather-tile flow'>
          <dt className='weather-tile__category'>Wind:</dt>
          <dd className='weather-tile__value'>—</dd>
        </dl>

        <dl className='weather-tile flow'>
          <dt className='weather-tile__category'>Precipitation:</dt>
          <dd className='weather-tile__value'>—</dd>
        </dl>
      </div>
    </section>
  )
}
export default LoadingCurrent
