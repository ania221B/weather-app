import { useRef, useState } from 'react'
import { IconUnits } from '../icons'
import { useClickOutside } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import {
  checkIsMenuMetric,
  toggleAllUnits
} from '../../features/units/unitsSlice'
import UnitOption from '../ui/UnitOption'
import UnitCategory from '../ui/UnitCategory'

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
        <IconUnits className='custom-select__icon'></IconUnits>

        <span className='custom-select__label'>Units</span>
      </button>

      {isOpen && (
        <ul
          id='units-menu'
          className='custom-select__dropdown custom-select__dropdown--units'
          onKeyDown={handleMenuKeyDown}
        >
          <li>
            <button
              type='button'
              className='btn btn-toggle custom-select__toggle'
              onClick={() => dispatch(toggleAllUnits())}
            >
              Switch to {`${isMetric ? 'Imperial' : 'Metric'}`}
            </button>
          </li>

          <UnitCategory title='Temperature'>
            <UnitOption
              category='temperature'
              value='celsius'
              label='Celsius (°C)'
            ></UnitOption>

            <UnitOption
              category='temperature'
              value='fahrenheit'
              label='Fahrenheit (°F)'
            ></UnitOption>
          </UnitCategory>

          <UnitCategory title='Wind Speed'>
            <UnitOption
              category='windSpeed'
              value='kmh'
              label='km/h'
            ></UnitOption>

            <UnitOption
              category='windSpeed'
              value='mph'
              label='mph'
            ></UnitOption>
          </UnitCategory>

          <UnitCategory title='Precipitation'>
            <UnitOption
              category='precipitation'
              value='mm'
              label='Millimeters (mm)'
            ></UnitOption>

            <UnitOption
              category='precipitation'
              value='inch'
              label='Inches (in)'
            ></UnitOption>
          </UnitCategory>
        </ul>
      )}
    </div>
  )
}
export default UnitsToggle
