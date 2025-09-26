import { useState } from 'react'
import WeatherForecast from './components/WeatherForecast'
import Search from './components/Search'
import Header from './components/Header'
import ApiError from './components/ApiError'
import useWeatherSearch from './hooks/useWeatherSearch'
import { useDebounce, useLocationSearch } from './hooks'
import { useSelector } from 'react-redux'

function App () {
  const units = useSelector(store => store.units)
  const { coordinates } = useSelector(store => store.location.selected)
  const { query } = useSelector(store => store.location)

  const debouncedQuery = useDebounce(query, 500)
  const {
    data: locationList = [],
    isPending: loadingLocation,
    error: locationError,
    refetch: refetchLocation
  } = useLocationSearch(debouncedQuery)

  const {
    data: weather,
    isPending: loadingWeather,
    error: weatherError,
    refetch: refetchWeather
  } = useWeatherSearch(coordinates, units)

  if (locationError) {
    return (
      <>
        <Header></Header>
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
        <Header></Header>
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
      <Header></Header>
      <main>
        <section>
          <div className='container' data-container='large'>
            <Search
              debouncedQuery={debouncedQuery}
              locationList={locationList}
              isPending={loadingLocation}
            ></Search>

            <WeatherForecast
              weather={weather}
              isPending={loadingWeather}
            ></WeatherForecast>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
