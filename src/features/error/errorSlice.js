import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  resultsError: ''
}

const errorSlice = createSlice({
  name: 'resultsError',
  initialState,
  reducers: {
    setResultsError: (state, action) => {
      state.resultsError = action.payload
    }
  }
})

export const { setResultsError } = errorSlice.actions

export default errorSlice.reducer
