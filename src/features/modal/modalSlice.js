import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalState: 'closed',
  modalContent: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.modalState = 'opened'
      state.modalContent = action.payload
    },
    closeModal: state => {
      state.modalState = 'is-closing'
    },
    disableModal: state => {
      state.modalState = 'closed'
      state.modalContent = null
    }
  }
})

export const { showModal, closeModal, disableModal } = modalSlice.actions

export default modalSlice.reducer
