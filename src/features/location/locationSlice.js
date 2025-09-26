import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  query: '',
  selected: {
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
      const { name, country, coordinates } = action.payload
      state.selected = {
        name,
        country,
        coordinates
      }
    }
  }
})

export const { setQuery, setLocation } = locationSlice.actions

export default locationSlice.reducer
