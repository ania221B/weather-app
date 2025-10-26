import { useDispatch, useSelector } from 'react-redux'
import {
  addToComparison,
  checkIsCompared
} from '../../features/comparison/comparisonSlice'
import { IconCompare } from '../icons'

function CompareButton ({ data }) {
  console.log('CompareButton data:', data)
  const dispatch = useDispatch()
  const isCompared = useSelector(store =>
    checkIsCompared(store, data.location.id)
  )

  return (
    <button
      type='button'
      className={isCompared ? 'btn filled' : 'btn '}
      onClick={() => {
        dispatch(addToComparison(data))
      }}
      data-type='icon'
      data-variant='scale-up'
    >
      <span className='sr-only'>Add to comparison</span>
      <IconCompare></IconCompare>
    </button>
  )
}
export default CompareButton
