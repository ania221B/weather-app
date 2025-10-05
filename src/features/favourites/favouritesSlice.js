import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favouriteList: [],
  isModalOpen: false,
  modalState: 'closed'
}

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addTofavourites: (state, action) => {
      const newLocation = action.payload
      const existingLocation = state.favouriteList.some(
        location => location.id === newLocation.id
      )
      if (existingLocation) return
      state.favouriteList = [...state.favouriteList, newLocation]
    },
    removeFromFavourites: (state, action) => {
      const favouriteId = action.payload.id
      state.favouriteList = state.favouriteList.filter(
        favourite => favourite.id !== favouriteId
      )
    },
    clearFavourites: state => {
      state.favouriteList = []
    },
    showFavourites: state => {
      state.isModalOpen = true
      state.modalState = 'opened'
    },
    closeFavourites: state => {
      state.isModalOpen = false
      state.modalState = 'is-closing'
    },
    disableFavourites: state => {
      state.modalState = 'closed'
    }
  }
})

export const {
  addTofavourites,
  removeFromFavourites,
  clearFavourites,
  showFavourites,
  closeFavourites,
  disableFavourites
} = favouritesSlice.actions

export function checkIsFavourited (state, locationId) {
  return state.favourites.favouriteList.some(
    location => location.id === locationId
  )
}

export default favouritesSlice.reducer
