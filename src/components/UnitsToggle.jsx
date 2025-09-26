import { useRef, useState } from 'react'
import { IconCheckmark, IconUnits } from '../icons'
import { useClickOutside } from '../hooks'
import { useDispatch, useSelector } from 'react-redux'
import {
  checkIsMenuMetric,
  toggleAllUnits,
  toggleUnit
} from '../features/units/unitsSlice'

function UnitsToggle () {
  const dispatch = useDispatch()
  const units = useSelector(store => store.units)
  const isMetric = useSelector(checkIsMenuMetric)
  const [isOpen, setIsOpen] = useState(false)
  const dropdownContainerRef = useRef(null)
  const triggerRef = useRef(null)

  function toggleDropdown () {
    setIsOpen(previousState => !previousState)
  }

  function closeDropdown () {
    setIsOpen(false)
    triggerRef.current?.focus
  }

  useClickOutside(dropdownContainerRef, () => {
    setIsOpen(false)
  })

  function handleTriggerKeyDown (e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIsOpen(true)

      setTimeout(() => {
        dropdownContainerRef.current?.querySelector('ul button')?.focus()
      }, 0)
    }
    if (e.key === 'Escape') {
      e.preventDefault()
      closeDropdown()
    }
  }

  function handleMenuKeyDown (e) {
    if (e.key === 'Escape') {
      e.preventDefault()
      closeDropdown()
    }
  }

  return (
    <div
      className='custom-select units-menu'
      data-state={isOpen ? 'open' : 'closed'}
      ref={dropdownContainerRef}
    >
      <button
        type='button'
        ref={triggerRef}
        className='btn btn-units custom-select__button'
        aria-label='select units used in weather forecast'
        aria-expanded={isOpen}
        aria-haspopup='true'
        aria-controls='units-menu'
        onClick={toggleDropdown}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className='custom-select__icon'>
          <IconUnits></IconUnits>
        </span>
        <span className='custom-select__label'>Units</span>
      </button>

      {isOpen && (
        <ul
          id='units-menu'
          className='custom-select__dropdown custom-select__dropdown--units'
          role='menu'
          onKeyDown={handleMenuKeyDown}
        >
          <li>
            <button
              type='button'
              role='menuitem'
              className='btn btn-toggle custom-select__toggle'
              onClick={() => dispatch(toggleAllUnits())}
            >
              Switch to {`${isMetric ? 'Imperial' : 'Metric'}`}
            </button>
          </li>
          <li>
            <h2 className='custom-select__category'>Temperature</h2>
            <button
              type='button'
              role='menuitem'
              className='btn btn-toggle custom-select__toggle'
              onClick={() =>
                dispatch(
                  toggleUnit({ category: 'temperature', value: 'celsius' })
                )
              }
            >
              <span>Celsius (°C)</span>
              <span>
                {units.temperature === 'celsius' ? (
                  <IconCheckmark></IconCheckmark>
                ) : (
                  ''
                )}
              </span>
            </button>
            <button
              type='button'
              role='menuitem'
              className='btn btn-toggle custom-select__toggle'
              onClick={() =>
                dispatch(
                  toggleUnit({ category: 'temperature', value: 'fahrenheit' })
                )
              }
            >
              <span>Fahrenheit (°F)</span>
              <span>
                {units.temperature === 'fahrenheit' ? (
                  <IconCheckmark></IconCheckmark>
                ) : (
                  ''
                )}
              </span>
            </button>
          </li>
          <li>
            <h2 className='custom-select__category'>Wind Speed</h2>
            <button
              type='button'
              role='menuitem'
              className='btn btn-toggle custom-select__toggle'
              onClick={() =>
                dispatch(toggleUnit({ category: 'windSpeed', value: 'kmh' }))
              }
            >
              <span>km/h</span>
              <span>
                {units.windSpeed === 'kmh' ? (
                  <IconCheckmark></IconCheckmark>
                ) : (
                  ''
                )}
              </span>
            </button>
            <button
              type='button'
              role='menuitem'
              className='btn btn-toggle custom-select__toggle'
              onClick={() =>
                dispatch(toggleUnit({ category: 'windSpeed', value: 'mph' }))
              }
            >
              <span>mph</span>
              <span>
                {units.windSpeed === 'mph' ? (
                  <IconCheckmark></IconCheckmark>
                ) : (
                  ''
                )}
              </span>
            </button>
          </li>
          <li>
            <h2 className='custom-select__category'>Precipitation</h2>
            <button
              type='button'
              role='menuitem'
              className='btn btn-toggle custom-select__toggle'
              onClick={() =>
                dispatch(toggleUnit({ category: 'precipitation', value: 'mm' }))
              }
            >
              <span>Millimeters (mm)</span>
              <span>
                {units.precipitation === 'mm' ? (
                  <IconCheckmark></IconCheckmark>
                ) : (
                  ''
                )}
              </span>
            </button>
            <button
              type='button'
              className='btn btn-toggle custom-select__toggle'
              onClick={() =>
                dispatch(
                  toggleUnit({ category: 'precipitation', value: 'inch' })
                )
              }
            >
              <span>Inches (in)</span>
              <span>
                {units.precipitation === 'inch' ? (
                  <IconCheckmark></IconCheckmark>
                ) : (
                  ''
                )}
              </span>
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}
export default UnitsToggle
