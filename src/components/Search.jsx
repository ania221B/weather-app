import SearchBar from './SearchBar'

function Search ({
  location,
  debouncedLocation,
  locationList,
  setLocation,
  isPending,
  setCoordinates,
  setAppError
}) {
  return (
    <header className='search'>
      <h1 className='text-preset-2'>How’s the sky looking today?</h1>
      <SearchBar
        location={location}
        debouncedLocation={debouncedLocation}
        locationList={locationList}
        isPending={isPending}
        setCoordinates={setCoordinates}
        setAppError={setAppError}
        setLocation={setLocation}
      ></SearchBar>
    </header>
  )
}
export default Search
