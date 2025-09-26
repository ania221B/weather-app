import SearchBar from './SearchBar'

function Search ({ debouncedQuery, locationList, isPending }) {
  return (
    <header className='search'>
      <h1 className='text-preset-2'>How’s the sky looking today?</h1>
      <SearchBar
        debouncedQuery={debouncedQuery}
        locationList={locationList}
        isPending={isPending}
      ></SearchBar>
    </header>
  )
}
export default Search
