import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: '',
  selected: {
    id: 1850147,
    name: 'Tokyo',
    country: 'Japan',
    coordinates: {
      latitude: 35.41,
      longitude: 139.46
    }
  }
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload
    },
    setLocation: (state, action) => {
      const { id, name, country, coordinates } = action.payload
      state.selected = {
        id,
        name,
        country,
        coordinates
      }
    }
  }
})

export const { setQuery, setLocation, setAsFavourited, unsetAsFavourited } =
  locationSlice.actions

export default locationSlice.reducer
