import { useEffect, useRef, useState } from 'react'
import { IconLoading, IconSearch } from '../icons'
import { useClickOutside } from '../hooks'
import { checkIndex } from '../utils'

function SearchBar ({
  location,
  debouncedLocation,
  locationList,
  isPending,
  setCoordinates,
  setAppError,
  setLocation
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const inputRef = useRef(null)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const dropdownContainerRef = useRef(null)

  useEffect(() => {
    // --- Suggestion list handling logic ---

    if (
      inputRef.current === document.activeElement &&
      !isPending &&
      locationList.length > 0
    ) {
      setIsExpanded(true)
      setSelectedOptionIndex(0)
    }

    // --- Error logic ---
    // clear previous errors when input changes
    if (debouncedLocation) {
      setAppError('')
    }
    if (
      !isPending &&
      locationList.length === 0 &&
      debouncedLocation.length >= 3
    ) {
      setAppError('No search result found!')
    } else if (locationList.length > 0) {
      setAppError('')
    }
  }, [isPending, locationList])

  function handleSubmit (e) {
    e.preventDefault()

    if (!location) {
      setIsExpanded(false)
      return
    }

    if (locationList?.length > 0) {
      const chosen = locationList[selectedOptionIndex]

      setAppError('')

      setCoordinates({
        name: chosen.name,
        country: chosen.country,
        latitude: chosen.latitude,
        longitude: chosen.longitude
      })
      setIsExpanded(false)
    } else {
      setAppError('No search result found!')
    }
  }

  function handleChange (e) {
    setLocation(e.target.value)
  }

  function handleSelect (location) {
    setAppError('')
    setCoordinates({
      name: location.name,
      country: location.country,
      latitude: location.latitude,
      longitude: location.longitude
    })
    setIsExpanded(false)
    setLocation(location.name)
  }

  function handleKeyDown (e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      isExpanded
        ? setSelectedOptionIndex(prevIndex =>
            checkIndex(prevIndex + 1, locationList)
          )
        : setIsExpanded(true)
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()

      setSelectedOptionIndex(prevIndex =>
        checkIndex(prevIndex - 1, locationList)
      )
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      if (locationList[selectedOptionIndex]) {
        handleSelect(locationList[selectedOptionIndex])
      }
    }
    if (e.key === 'Escape') {
      setIsExpanded(false)
    }
  }

  useClickOutside(dropdownContainerRef, () => {
    setIsExpanded(false)
  })

  return (
    <search className='search-menu'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='search-form__control-wrapper'>
          <label htmlFor='search-input'>
            <span>
              <IconSearch></IconSearch>
            </span>
            <span className='sr-only'>Search a place</span>
          </label>

          <input
            id='search-input'
            type='text'
            role='combobox'
            aria-expanded={isExpanded}
            aria-controls='suggestion-list'
            aria-autocomplete='list'
            aria-activedescendant={`option-${selectedOptionIndex}` || undefined}
            name='search'
            value={location}
            onChange={e => handleChange(e)}
            onFocus={() => setIsExpanded(true)}
            onKeyDown={handleKeyDown}
            placeholder='Search for a place...'
            ref={inputRef}
          />
          {isPending &&
            inputRef.current === document.activeElement &&
            location.length > 0 && (
              <div
                id='loading-suggestions'
                className='search-menu__suggestion-list search-menu__suggestion-list--loading'
                role='status'
                aria-live='polite'
              >
                <div
                  key='loading-status'
                  className='search-menu__suggestion-list__item search-menu__suggestion-list--loading__item'
                >
                  <div className='loading__icon'>
                    <IconLoading></IconLoading>
                  </div>
                  <p>Search in progress...</p>
                </div>
              </div>
            )}
          {locationList?.length > 0 && isExpanded && (
            <ul
              id='suggestion-list'
              className='search-menu__suggestion-list'
              role='listbox'
              aria-label='Search suggestions'
              aria-live='polite'
              data-state='open'
              ref={dropdownContainerRef}
            >
              {locationList.map((location, index) => {
                return (
                  <li
                    key={location.id}
                    id={`option-${index}`}
                    role='option'
                    aria-selected={selectedOptionIndex === index || undefined}
                    onMouseDown={() => handleSelect(location)}
                    className={`search-menu__suggestion-list__item btn btn-toggle ${
                      selectedOptionIndex === index ? 'selected' : ''
                    }`}
                  >
                    <p>
                      {location.name}, {location.country}
                    </p>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <button type='submit' className='btn btn--search'>
          Search
        </button>
      </form>
    </search>
  )
}
export default SearchBar
