import { useDispatch } from 'react-redux'
import { IconCompare, IconFavouriteList, IconMoreInfo } from '../../icons'
import { showModal } from '../../../features/modal/modalSlice'

function ToolsMenu () {
  const dispatch = useDispatch()

  function openDialog (view) {
    dispatch(showModal(view))
  }
  return (
    <ul className='tools-menu' role='menu'>
      <li role='none'>
        <button
          type='button'
          role='menuitem'
          className='btn'
          onClick={() => openDialog('favourites')}
          data-type='tool'
          data-variant='ripple'
        >
          <span className='sr-only'>Show favourites</span>

          <IconFavouriteList></IconFavouriteList>
        </button>
      </li>
      <li>
        <button
          type='button'
          role='menuitem'
          className='btn'
          onClick={() => openDialog('comparison')}
          data-type='tool'
          data-variant='ripple'
        >
          <span className='sr-only'>Show comparison</span>

          <IconCompare></IconCompare>
        </button>
      </li>
    </ul>
  )
}
export default ToolsMenu
