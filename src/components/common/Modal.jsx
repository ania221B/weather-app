import { useDispatch, useSelector } from 'react-redux'
import { IconClose } from '../icons'
import { closeModal, disableModal } from '../../features/modal/modalSlice'
import { useEffect, useRef } from 'react'
import { useClickOutside } from '../../hooks'
import { getAnimationTiming } from '../../utils'

function Modal ({ modal, children }) {
  const dispatch = useDispatch()
  const { modalState } = useSelector(store => store.modal)
  const modalContentRef = useRef()

  function closeDialog () {
    dispatch(closeModal())
  }

  function handleKeyDown (e) {
    e.preventDefault()
    if (e.key === 'Escape') {
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
      modalElement.addEventListener('animationend', e => handleAnimationEnd(e))

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
      className='modal'
      data-state={modalState}
      onKeyDown={handleKeyDown}
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
