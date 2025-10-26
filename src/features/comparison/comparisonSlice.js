import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comparisonList: []
}

const comparisonSlice = createSlice({
  name: 'comparison',
  initialState,
  reducers: {
    addToComparison: (state, action) => {
      const newLocation = action.payload
      console.log('Adding to comparison:', newLocation)
      const existingLocation = state.comparisonList.some(
        item => item.location.id === newLocation.location.id
      )

      if (existingLocation) return

      state.comparisonList = [...state.comparisonList, newLocation]
    },
    removeFromComparison: (state, action) => {
      const locationId = action.payload.id
      state.comparisonList = state.comparisonList.filter(
        item => item.location.id !== locationId
      )
    },
    clearComparison: state => {
      state.comparisonList = []
    }
  }
})

export const { addToComparison, removeFromComparison, clearComparison } =
  comparisonSlice.actions

export function checkIsCompared (state, locationId) {
  return state.comparison.comparisonList.some(
    item => item.location.id === locationId
  )
}

export default comparisonSlice.reducer
