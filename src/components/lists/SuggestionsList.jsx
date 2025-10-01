import { IconLoading } from '../icons'
import SuggestionsListItem from './SuggestionsListItem'

function SuggestionsList ({
  isPending,
  query,
  isExpanded,
  suggestions,
  selectedOptionIndex,
  onSelect,
  dropdownContainerRef,
  inputRef
}) {
  // --- loading state
  if (
    isPending &&
    inputRef.current === document.activeElement &&
    query.length > 0
  )
    return (
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
    )

  // --- Suggestions list ---
  if (suggestions?.length > 0 && isExpanded)
    return (
      <ul
        id='suggestion-list'
        className='search-menu__suggestion-list'
        role='listbox'
        aria-label='Search suggestions'
        aria-live='polite'
        data-state='open'
        ref={dropdownContainerRef}
      >
        {suggestions.map((location, index) => {
          return (
            <SuggestionsListItem
              key={location.id}
              suggestion={location}
              index={index}
              selectedOptionIndex={selectedOptionIndex}
              onSelect={onSelect}
            ></SuggestionsListItem>
          )
        })}
      </ul>
    )
  return null
}
export default SuggestionsList
