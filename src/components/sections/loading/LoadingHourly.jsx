import { IconDropdown } from '../../icons'

function LoadingHourly () {
  return (
    <section className='weather-hourly weather-hourly--loading flow'>
      <header>
        <h2 className='text-preset-5'>Hourly forecast</h2>
        {/* CUSTOM SELECT */}
        <div className='custom-select'>
          <div className='btn custom-select__button'>
            <span className='custom-select__selected-value'>—</span>
            <IconDropdown></IconDropdown>
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
  )
}
export default LoadingHourly
