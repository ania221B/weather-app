import { useDispatch, useSelector } from 'react-redux'
import {
  addTofavourites,
  checkIsFavourited
} from '../../features/favourites/favouritesSlice'
import IconFavourites from '../icons/IconFavourites'

function FavouriteButton ({ location }) {
  const dispatch = useDispatch()
  const isFavourited = useSelector(store =>
    checkIsFavourited(store, location.id)
  )

  return (
    <button
      type='button'
      className={isFavourited ? 'btn filled' : 'btn '}
      onClick={() => {
        dispatch(addTofavourites(location))
      }}
      data-type='icon'
      data-variant='scale-up'
    >
      <span className='sr-only'>Add to favourites</span>
      <IconFavourites></IconFavourites>
    </button>
  )
}
export default FavouriteButton
