function getFullTime (dateToFormat) {
  const date = new Date(dateToFormat)
  let hours = date.getHours()
  let minutes = date.getMinutes()
  const suffix = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  if (hours === 0) hours = 12
  if (minutes < 10) minutes = `0${minutes}`
  return `${hours}:${minutes} ${suffix}`
}

export default getFullTime
