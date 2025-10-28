import { useDispatch, useSelector } from 'react-redux'
import {
  addTofavourites,
  checkIsFavourited
} from '../../features/favourites/favouritesSlice'
import IconFavourites from '../icons/IconFavourites'
import { Tooltip } from '../ui'

function FavouriteButton ({ location }) {
  const dispatch = useDispatch()
  const isFavourited = useSelector(store =>
    checkIsFavourited(store, location.id)
  )

  return (
    <Tooltip text='Add to favourites'>
      <button
        type='button'
        className={isFavourited ? 'btn filled' : 'btn'}
        onClick={() => {
          dispatch(addTofavourites(location))
        }}
        data-type='icon'
        data-variant='scale-up'
      >
        <span className='sr-only'>Add to favourites</span>
        <IconFavourites></IconFavourites>
      </button>
    </Tooltip>
  )
}
export default FavouriteButton
