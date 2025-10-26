import { useDispatch, useSelector } from 'react-redux'
import { IconClose } from '../icons'
import { closeModal, disableModal } from '../../features/modal/modalSlice'
import { useEffect, useRef } from 'react'
import { useClickOutside } from '../../hooks'
import { getAnimationTiming } from '../../utils'

function Modal ({ modal, children }) {
  const dispatch = useDispatch()
  const { modalState, isListEmpty } = useSelector(store => store.modal)
  const modalContentRef = useRef()

  function closeDialog () {
    dispatch(closeModal())
  }

  function handleKeyDown (e) {
    if (e.key === 'Escape') {
      e.preventDefault()
      dispatch(closeModal())
    }
  }

  useEffect(() => {
    if (!modal?.current) return
    const modalElement = modal.current

    function handleAnimationEnd (e) {
      if (e.animationName === 'hideDialog') {
        dispatch(disableModal())
        modalElement.close()
      }
    }

    if (modalState === 'opened' && !modalElement.open) {
      modal.current.showModal()
    }

    if (modalState === 'is-closing') {
      modalElement.addEventListener('animationend', handleAnimationEnd)

      const { duration, delay } = getAnimationTiming(modalElement)
      const totalTime = duration + delay + 200

      const fallback = setTimeout(() => {
        dispatch(disableModal())
        modalElement.close()
      }, totalTime)

      return () => {
        clearTimeout(fallback)
        modalElement.removeEventListener('animationend', handleAnimationEnd)
      }
    }
  }, [modal, modalState])

  useClickOutside(modalContentRef, closeDialog)

  return (
    <dialog
      ref={modal}
      className='modal container'
      data-state={modalState}
      onKeyDown={handleKeyDown}
      data-container={isListEmpty ? 'x-small' : 'small'}
    >
      <div className='modal__content' ref={modalContentRef}>
        <button type='button' className='btn' onClick={closeDialog}>
          <IconClose></IconClose>
        </button>
        {children}
      </div>
    </dialog>
  )
}
export default Modal
