import { useDispatch } from 'react-redux'
import { IconClose } from '../icons'
import { closeFavourites } from '../../features/favourites/favouritesSlice'

function Modal ({ modal, children }) {
  const dispatch = useDispatch()

  return (
    <dialog ref={modal} className='modal'>
      <button
        type='button'
        className='btn'
        onClick={() => dispatch(closeFavourites())}
      >
        <IconClose></IconClose>
      </button>
      {children}
    </dialog>
  )
}
export default Modal
