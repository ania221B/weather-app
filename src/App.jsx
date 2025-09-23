import { useState } from 'react'
import WeatherForecast from './components/WeatherForecast'
import Search from './components/Search'
import Header from './components/Header'
import ApiError from './components/ApiError'
import useWeatherSearch from './hooks/useWeatherSearch'
import { useDebounce, useLocationSearch } from './hooks'

function App () {
  const [currentCoordinates, setCurrentCoordinates] = useState({
    name: 'Tokyo',
    country: 'Japan',
    latitude: 35.41,
    longitude: 139.46
  })
  const metricUnits = {
    temperature: 'celsius',
    windSpeed: 'kmh',
    precipitation: 'mm'
  }
  const imperialUnits = {
    temperature: 'fahrenheit',
    windSpeed: 'mph',
    precipitation: 'inch'
  }
  const [appError, setAppError] = useState('')

  const [units, setUnits] = useState(metricUnits)

  const isMetric =
    units.temperature === 'celsius' &&
    units.windSpeed === 'kmh' &&
    units.precipitation === 'mm'
      ? true
      : false

  const [location, setLocation] = useState('')
  const debouncedLocation = useDebounce(location, 500)
  const {
    data: locationList = [],
    isPending: loadingLocation,
    error: locationError,
    refetch: refetchLocation
  } = useLocationSearch(debouncedLocation)

  const {
    data: weather,
    isPending: loadingWeather,
    error: weatherError,
    refetch: refetchWeather
  } = useWeatherSearch(currentCoordinates, units)

  if (locationError) {
    return (
      <>
        <Header
          units={units}
          setUnits={setUnits}
          metricUnits={metricUnits}
          imperialUnits={imperialUnits}
          isMetric={isMetric}
        ></Header>

        <main>
          <section>
            <div className='container' data-container='large'>
              <ApiError onRetry={refetchLocation}></ApiError>
            </div>
          </section>
        </main>
      </>
    )
  }

  if (weatherError) {
    return (
      <>
        <Header
          units={units}
          setUnits={setUnits}
          metricUnits={metricUnits}
          imperialUnits={imperialUnits}
          isMetric={isMetric}
        ></Header>

        <main>
          <section>
            <div className='container' data-container='large'>
              <ApiError onRetry={refetchWeather}></ApiError>
            </div>
          </section>
        </main>
      </>
    )
  }

  return (
    <>
      <Header
        units={units}
        setUnits={setUnits}
        metricUnits={metricUnits}
        imperialUnits={imperialUnits}
        isMetric={isMetric}
      ></Header>

      <main>
        <section>
          <div className='container' data-container='large'>
            <Search
              location={location}
              debouncedLocation={debouncedLocation}
              locationList={locationList}
              setLocation={setLocation}
              isPending={loadingLocation}
              setCoordinates={setCurrentCoordinates}
              setAppError={setAppError}
            ></Search>

            <WeatherForecast
              weather={weather}
              coordinates={currentCoordinates}
              appError={appError}
              isPending={loadingWeather}
            ></WeatherForecast>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
