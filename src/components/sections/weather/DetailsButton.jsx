import { IconLessInfo, IconMoreInfo } from '../../icons'

function DetailsButton ({ isDetailsDisplayed, setIsDetailsDisplayed }) {
  return (
    <button
      type='button'
      className='btn'
      onClick={() => setIsDetailsDisplayed(prev => !prev)}
      data-type='icon'
      data-variant='scale-up'
    >
      <span className='sr-only'>More details</span>

      {isDetailsDisplayed ? (
        <IconLessInfo></IconLessInfo>
      ) : (
        <IconMoreInfo></IconMoreInfo>
      )}
    </button>
  )
}

export default DetailsButton
