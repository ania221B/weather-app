import { useRef, useState } from 'react'
import { IconDropdown } from '../../icons'
import { nanoid } from 'nanoid'
import { useClickOutside } from '../../../hooks'
import { checkIndex } from '../../../utils'
import { WeatherHourlyList } from '../../lists'

function WeatherHourly ({ hourlyWeather }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedDayIndex, setSelectedDayIndex] = useState(0)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const dropDownContainerRef = useRef(null)
  const weekdays = hourlyWeather.map(item => {
    const dayName = Object.keys(item)[0]
    return {
      id: nanoid(),
      name: dayName
    }
  })
  const dayName = Object.keys(hourlyWeather[selectedDayIndex])[0]
  const hours = hourlyWeather[selectedDayIndex][dayName]

  function toggleDropdown () {
    setIsDropdownOpen(!isDropdownOpen)
    setHighlightedIndex(selectedDayIndex)
  }

  function handleKeyDown (e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      isDropdownOpen
        ? setHighlightedIndex(prevIndex => checkIndex(prevIndex + 1, weekdays))
        : setIsDropdownOpen(true)
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlightedIndex(prevIndex => checkIndex(prevIndex - 1, weekdays))
    }
    if (e.key === 'Enter') {
      e.preventDefault()
      if (isDropdownOpen && weekdays[selectedDayIndex]) {
        setSelectedDayIndex(highlightedIndex)
        setIsDropdownOpen(false)
      } else {
        setIsDropdownOpen(true)
        setHighlightedIndex(selectedDayIndex)
      }
    }
    if (e.key === 'Escape') {
      setIsDropdownOpen(false)
    }
  }

  useClickOutside(dropDownContainerRef, () => {
    setIsDropdownOpen(false)
  })

  return (
    <section className='weather-hourly flow'>
      <header>
        <h2 className='text-preset-5'>Hourly forecast</h2>
        {/* CUSTOM SELECT */}
        <div
          className='custom-select'
          data-state={isDropdownOpen ? 'open' : 'closed'}
          ref={dropDownContainerRef}
        >
          <button
            type='button'
            role='combobox'
            aria-expanded={isDropdownOpen}
            aria-haspopup='listbox'
            aria-controls='weekdays-list'
            aria-activedescendant={`option-${highlightedIndex}` || undefined}
            className='btn custom-select__button'
            data-type='toggle'
            data-variant='ripple'
            onClick={toggleDropdown}
            onKeyDown={handleKeyDown}
          >
            <span className='custom-select__selected-value'>
              {Object.keys(hourlyWeather[selectedDayIndex])[0]}
            </span>

            <IconDropdown></IconDropdown>
          </button>
          {isDropdownOpen && (
            <ul
              id='weekdays-list'
              aria-label='pick a weekday to get weather data'
              className='custom-select__dropdown custom-select__dropdown--weekdays'
              role='listbox'
              data-state={isDropdownOpen}
            >
              {weekdays.map((day, index) => {
                return (
                  <li
                    key={day.id}
                    id={`option-${index}`}
                    role='option'
                    aria-selected={index === selectedDayIndex || undefined}
                    onClick={() => {
                      setSelectedDayIndex(index)
                      setIsDropdownOpen(false)
                    }}
                    className={`custom-select__toggle btn ${
                      highlightedIndex === index ? ' highlighted' : ''
                    } ${selectedDayIndex === index ? 'selected' : ''}`}
                    data-type='toggle'
                    data-variant='ripple'
                  >
                    {day.name}
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        {/* END OF CUSTOM SELECT */}
      </header>

      <WeatherHourlyList hours={hours}></WeatherHourlyList>
    </section>
  )
}
export default WeatherHourly
