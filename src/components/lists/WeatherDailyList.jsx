import WeatherDailyListItem from './WeatherDailyListItem'

function WeatherDailyList ({ list }) {
  return (
    <ul className='grid-auto-fit' role='list'>
      {list.map(item => {
        return <WeatherDailyListItem item={item}></WeatherDailyListItem>
      })}
    </ul>
  )
}
export default WeatherDailyList
