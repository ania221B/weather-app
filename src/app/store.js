import { configureStore } from '@reduxjs/toolkit'
import unitsReducer from '../features/units/unitsSlice'
import locationReducer from '../features/location/locationSlice'
import resultsErrorReducer from '../features/error/errorSlice'

export const store = configureStore({
  reducer: {
    units: unitsReducer,
    location: locationReducer,
    resultsError: resultsErrorReducer
  }
})
