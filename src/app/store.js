import { configureStore } from '@reduxjs/toolkit'
import unitsReducer from '../features/units/unitsSlice'
import locationReducer from '../features/location/locationSlice'
import resultsErrorReducer from '../features/error/errorSlice'
import favouritesReducer from '../features/favourites/favouritesSlice'
import modalReducer from '../features/modal/modalSlice'
import comparisonReducer from '../features/comparison/comparisonSlice'

export const store = configureStore({
  reducer: {
    units: unitsReducer,
    location: locationReducer,
    resultsError: resultsErrorReducer,
    favourites: favouritesReducer,
    modal: modalReducer,
    comparison: comparisonReducer
  }
})
