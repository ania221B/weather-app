import { useDispatch, useSelector } from 'react-redux'
import { IconCheckmark } from '../icons'
import { toggleUnit } from '../../features/units/unitsSlice'

function UnitOption ({ category, value, label }) {
  const dispatch = useDispatch()
  const units = useSelector(store => store.units)
  const isSelected = units[category] === value
  return (
    <button
      type='button'
      aria-pressed={isSelected}
      className='btn btn-toggle custom-select__toggle'
      onClick={() => dispatch(toggleUnit({ category, value }))}
    >
      <span>{label}</span>
      {isSelected && <IconCheckmark></IconCheckmark>}
    </button>
  )
}
export default UnitOption
