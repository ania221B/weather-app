import useWeatherSearch from './hooks/useWeatherSearch'
import { useDebounce, useLocationSearch } from './hooks'
import { useSelector } from 'react-redux'
import { Header, SkipToMain } from './components/layout'
import { ApiError, Modal } from './components/common'
import { Search, ToolsMenu, WeatherForecast } from './components/sections'
import { useRef } from 'react'
import { FavouriteList } from './components/favourites'
import { ComparisonView } from './components/comparison'

function App () {
  const units = useSelector(store => store.units)
  const { coordinates } = useSelector(store => store.location.selected)
  const { query } = useSelector(store => store.location)
  const { modalState, modalContent } = useSelector(store => store.modal)
  const { favouriteList } = useSelector(store => store.favourites)
  const { comparisonList } = useSelector(store => store.comparison)
  const isModalOpen = modalState !== 'closed'

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

  const modalRef = useRef()

  if (locationError) {
    return (
      <>
        <SkipToMain></SkipToMain>
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
        <SkipToMain></SkipToMain>
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
      <SkipToMain></SkipToMain>
      <Header></Header>
      <main id='main-content'>
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

          <ToolsMenu></ToolsMenu>
        </section>
      </main>
      {isModalOpen && (
        <Modal modal={modalRef}>
          {modalContent === 'favourites' && (
            <FavouriteList favourites={favouriteList}></FavouriteList>
          )}
          {modalContent === 'comparison' && (
            <ComparisonView comparisonList={comparisonList}></ComparisonView>
          )}
        </Modal>
      )}
    </>
  )
}

export default App
