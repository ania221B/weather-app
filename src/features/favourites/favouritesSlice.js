import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favouriteList: []
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
    }
  }
})

export const { addTofavourites, removeFromFavourites, clearFavourites } =
  favouritesSlice.actions

export function checkIsFavourited (state, locationId) {
  return state.favourites.favouriteList.some(
    location => location.id === locationId
  )
}

export default favouritesSlice.reducer
