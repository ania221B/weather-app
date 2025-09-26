import { createSlice } from '@reduxjs/toolkit'

const metricUnits = {
  temperature: 'celsius',
  windSpeed: 'kmh',
  precipitation: 'mm'
}
const imperialUnits = {
  temperature: 'fahrenheit',
  windSpeed: 'mph',
  precipitation: 'inch'
}

const unitsSlice = createSlice({
  name: 'units',
  initialState: metricUnits,
  reducers: {
    toggleAllUnits: state => {
      const isMetric =
        state.temperature === 'celsius' &&
        state.windSpeed === 'kmh' &&
        state.precipitation === 'mm'

      return isMetric
        ? { ...state, ...imperialUnits }
        : { ...state, ...metricUnits }
    },
    toggleUnit: (state, action) => {
      const { category, value } = action.payload

      state[category] = value
    }
  }
})

export const { toggleAllUnits, toggleUnit } = unitsSlice.actions

export function checkIsMenuMetric (state) {
  return (
    state.units.temperature === 'celsius' &&
    state.units.windSpeed === 'kmh' &&
    state.units.precipitation === 'mm'
  )
}

export default unitsSlice.reducer
