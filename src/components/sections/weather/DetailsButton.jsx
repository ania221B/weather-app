import { IconLessInfo, IconMoreInfo } from '../../icons'
import { Tooltip } from '../../ui'

function DetailsButton ({ isDetailsDisplayed, setIsDetailsDisplayed }) {
  return (
    <Tooltip text='Expand details'>
      <button
        type='button'
        className='btn'
        onClick={() => setIsDetailsDisplayed(prev => !prev)}
        data-type='icon'
        data-variant='scale-up'
      >
        <span className='sr-only'>Expand details</span>

        {isDetailsDisplayed ? (
          <IconLessInfo></IconLessInfo>
        ) : (
          <IconMoreInfo></IconMoreInfo>
        )}
      </button>
    </Tooltip>
  )
}

export default DetailsButton
