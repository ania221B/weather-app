function LoadingDaily () {
  return (
    <section className='weather-daily weather-daily--loading flow'>
      <h2 className='text-preset-5'>Daily forecast</h2>
      <div className='grid-auto-fit'>
        <div className='weather-tile'></div>
        <div className='weather-tile'></div>
        <div className='weather-tile'></div>
        <div className='weather-tile'></div>
        <div className='weather-tile'></div>
        <div className='weather-tile'></div>
        <div className='weather-tile'></div>
      </div>
    </section>
  )
}
export default LoadingDaily
