import { useDispatch, useSelector } from 'react-redux'
import {
  addToComparison,
  checkIsCompared
} from '../../features/comparison/comparisonSlice'
import { IconCompare } from '../icons'
import { Tooltip } from '../ui'

function CompareButton ({ data }) {
  const dispatch = useDispatch()
  const isCompared = useSelector(store =>
    checkIsCompared(store, data.location.id)
  )

  return (
    <Tooltip text='Add to comparison'>
      <button
        type='button'
        className={isCompared ? 'btn filled' : 'btn'}
        onClick={() => {
          dispatch(addToComparison(data))
        }}
        data-type='icon'
        data-variant='scale-up'
      >
        <span className='sr-only'>Add to comparison</span>
        <IconCompare></IconCompare>
      </button>
    </Tooltip>
  )
}
export default CompareButton
