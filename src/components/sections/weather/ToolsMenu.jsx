import { useDispatch } from 'react-redux'
import { showFavourites } from '../../../features/favourites/favouritesSlice'
import { IconFavouriteList } from '../../icons'

function ToolsMenu () {
  const dispatch = useDispatch()

  return (
    <ul className='tools-menu' role='menu'>
      <li role='none'>
        <button
          type='button'
          role='menuitem'
          className='btn'
          onClick={() => dispatch(showFavourites())}
        >
          <span className='sr-only'>Show favourites</span>

          <IconFavouriteList></IconFavouriteList>
        </button>
      </li>
    </ul>
  )
}
export default ToolsMenu
