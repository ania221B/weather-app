import { useEffect, useRef, useState } from 'react'
import { IconSearch } from '../../../icons'
import { useClickOutside } from '../../../hooks'
import { checkIndex } from '../../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation, setQuery } from '../../../features/location/locationSlice'
import { setResultsError } from '../../../features/error/errorSlice'
import { SuggestionsList } from '../../lists'

function SearchBar ({ debouncedQuery, locationList, isPending }) {
  const dispatch = useDispatch()
  const { query } = useSelector(store => store.location)
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
    if (debouncedQuery) {
      dispatch(setResultsError(''))
    }
    if (!isPending && locationList.length === 0 && debouncedQuery.length >= 3) {
      dispatch(setResultsError('No search result found!'))
    } else if (locationList.length > 0) {
      dispatch(setResultsError(''))
    }
  }, [isPending, locationList])

  function handleSubmit (e) {
    e.preventDefault()

    if (!query) {
      setIsExpanded(false)
      return
    }

    if (locationList?.length > 0) {
      const chosen = locationList[selectedOptionIndex]

      dispatch(setResultsError(''))

      dispatch(
        setLocation({
          name: chosen.name,
          country: chosen.country,
          coordinates: {
            latitude: chosen.latitude,
            longitude: chosen.longitude
          }
        })
      )
      setIsExpanded(false)
    } else {
      dispatch(setResultsError('No search result found!'))
    }
  }

  function handleChange (e) {
    dispatch(setQuery(e.target.value))
  }

  function handleSelect (location) {
    dispatch(setResultsError(''))
    dispatch(
      setLocation({
        name: location.name,
        country: location.country,
        coordinates: {
          latitude: location.latitude,
          longitude: location.longitude
        }
      })
    )
    setIsExpanded(false)
    dispatch(setQuery(location.name))
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
            value={query}
            onChange={e => handleChange(e)}
            onFocus={() => setIsExpanded(true)}
            onKeyDown={handleKeyDown}
            placeholder='Search for a place...'
            ref={inputRef}
          />
          <SuggestionsList
            isPending={isPending}
            query={query}
            isExpanded={isExpanded}
            suggestions={locationList}
            selectedOptionIndex={selectedOptionIndex}
            onSelect={handleSelect}
            dropdownContainerRef={dropdownContainerRef}
            inputRef={inputRef}
          ></SuggestionsList>
        </div>

        <button type='submit' className='btn btn--search'>
          Search
        </button>
      </form>
    </search>
  )
}
export default SearchBar
