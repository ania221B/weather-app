import { IconError, IconRetry } from '../icons'

function ApiError ({ onRetry }) {
  return (
    <header className='api-error'>
      <div className='api-error__icon'>
        <IconError></IconError>
      </div>
      <h1 className='text-preset-2'>Something went wrong</h1>
      <p className='fs-500'>
        We couldn’t connect to the server (API error). Please try again in a few
        moments.
      </p>
      <button
        type='button'
        className='btn'
        onClick={onRetry}
        data-type='error'
        data-variant='ripple'
      >
        <IconRetry></IconRetry>
        <span>Retry</span>
      </button>
    </header>
  )
}
export default ApiError
