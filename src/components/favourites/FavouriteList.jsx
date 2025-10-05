import { useDispatch } from 'react-redux'
import IconDelete from '../icons/IconDelete'
import {
  clearFavourites,
  removeFromFavourites
} from '../../features/favourites/favouritesSlice'
import {
  setLocation,
  unsetAsFavourited
} from '../../features/location/locationSlice'
import IconDispalyWeather from '../icons/IconDispalyWeather'

function FavouriteList ({ favourites }) {
  const dispatch = useDispatch()
  if (favourites.length === 0) {
    return (
      <div className='favourites favourites--empty'>
        <h2>Your favourite locations</h2>
        <p>
          You don't have any favourite locations yet. Hit the ❤️ button to add
          some.
        </p>
      </div>
    )
  }
  return (
    <div className='favourites'>
      <h2>Your favourite locations</h2>
      <ul className='favourites__list' role='list'>
        {favourites.map(favourite => {
          const { id, name, country, coordinates } = favourite
          return (
            <li key={id} className='favourites__list__item'>
              <dl>
                <dt>Name:</dt>
                <dd>{name}</dd>

                <dt>Country:</dt>
                <dd>{country}</dd>
              </dl>
              <button
                type='button'
                className='btn'
                onClick={() =>
                  dispatch(setLocation({ id, name, country, coordinates }))
                }
                data-variant='scale-up'
              >
                <IconDispalyWeather></IconDispalyWeather>

                <span className='sr-only'>See Weather</span>
              </button>
              <button
                type='button'
                className='btn'
                onClick={() => {
                  dispatch(removeFromFavourites({ id }))
                  dispatch(unsetAsFavourited())
                }}
                data-variant='scale-up'
              >
                <IconDelete></IconDelete>

                <span className='sr-only'>Remove</span>
              </button>
            </li>
          )
        })}
      </ul>
      <button
        type='button'
        className='btn'
        onClick={() => dispatch(clearFavourites())}
        data-type='clear'
        data-variant='ripple'
      >
        <span>Clear List</span>

        <IconDelete></IconDelete>
      </button>
    </div>
  )
}
export default FavouriteList
