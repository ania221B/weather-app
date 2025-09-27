import WeatherDailyList from '../../lists/WeatherDailyList'

function WeatherDaily ({ dailyWeather }) {
  return (
    <section className='weather-daily flow'>
      <h2 className='text-preset-5'>Daily forecast</h2>
      <WeatherDailyList list={dailyWeather}></WeatherDailyList>
    </section>
  )
}
export default WeatherDaily
