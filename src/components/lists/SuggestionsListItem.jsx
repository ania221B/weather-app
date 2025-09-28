function SuggestionsListItem ({
  suggestion,
  index,
  selectedOptionIndex,
  onSelect
}) {
  return (
    <li
      id={`option-${index}`}
      role='option'
      aria-selected={selectedOptionIndex === index || undefined}
      onMouseDown={() => onSelect(suggestion)}
      className={`search-menu__suggestion-list__item btn btn-toggle ${
        selectedOptionIndex === index ? 'selected' : ''
      }`}
    >
      <p>
        {suggestion.name}, {suggestion.country}
      </p>
    </li>
  )
}
export default SuggestionsListItem
