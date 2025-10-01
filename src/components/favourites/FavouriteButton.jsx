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
      className={
        isFavourited ? 'btn btn--favourite filled' : 'btn btn--favourite'
      }
      onClick={() => {
        dispatch(addTofavourites(location))
      }}
    >
      <IconFavourites></IconFavourites>
    </button>
  )
}
export default FavouriteButton
