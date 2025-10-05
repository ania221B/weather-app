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
      data-type='favourite'
      data-variant='scale-up'
    >
      <IconFavourites></IconFavourites>
    </button>
  )
}
export default FavouriteButton
