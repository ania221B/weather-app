function getTime (dateToFormat) {
  const date = new Date(dateToFormat)
  let hours = date.getHours()
  const suffix = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  if (hours === 0) hours = 12
  return `${hours} ${suffix}`
}

export default getTime
