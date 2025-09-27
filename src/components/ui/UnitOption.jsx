import { useDispatch } from 'react-redux'
import { IconCheckmark } from '../../icons'
import { toggleUnit } from '../../features/units/unitsSlice'

function UnitOption ({ category, value, label, isSelected }) {
  const dispatch = useDispatch()
  return (
    <button
      type='button'
      role='menuitem'
      className='btn btn-toggle custom-select__toggle'
      onClick={() => dispatch(toggleUnit({ category, value }))}
    >
      <span>{label}</span>
      {isSelected && (
        <span>
          <IconCheckmark></IconCheckmark>
        </span>
      )}
    </button>
  )
}
export default UnitOption
