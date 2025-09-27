import LoadingCurrent from './LoadingCurrent'
import LoadingDaily from './LoadingDaily'
import LoadingHourly from './LoadingHourly'

function Loading () {
  return (
    <article className='weather weather--loading section'>
      {/* CURRENT WEATHER */}
      <LoadingCurrent></LoadingCurrent>
      {/* END OF CURRENT WEATHER */}

      {/* DAILY WEATHER */}
      <LoadingDaily></LoadingDaily>
      {/* END OF DAILY WEATHER */}

      {/* HOURLY WEATHER */}
      <LoadingHourly></LoadingHourly>

      {/* END OF HOURLY WEATHER */}
    </article>
  )
}
export default Loading
