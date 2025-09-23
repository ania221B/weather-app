import { IconDropdown, IconLoading } from '../icons'
import noise from '../assets/images/nnnoise.svg'

function Loading () {
  return (
    <article className='weather weather--loading section'>
      {/* CURRENT WEATHER */}
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
      {/* END OF CURRENT WEATHER */}

      {/* DAILY WEATHER */}
      <section className='weather-daily weather-daily--loading flow'>
        <h2 className='text-preset-5'>Daily forecast</h2>
        <div className='grid-auto-fit'>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
        </div>
      </section>
      {/* END OF DAILY WEATHER */}

      {/* HOURLY WEATHER */}
      <section className='weather-hourly weather-hourly--loading flow'>
        <header>
          <h2 className='text-preset-5'>Hourly forecast</h2>
          {/* CUSTOM SELECT */}
          <div className='custom-select'>
            <div className='btn custom-select__button'>
              <span className='custom-select__selected-value'>—</span>
              <span className='custom-select__arrow'>
                <IconDropdown></IconDropdown>
              </span>
            </div>
          </div>
          {/* END OF CUSTOM SELECT */}
        </header>

        <div className='weather-hourly__list'>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
          <div className='weather-tile'></div>
        </div>
      </section>

      {/* END OF HOURLY WEATHER */}
    </article>
  )
}
export default Loading
