/**
 *
 * @param {Date} date Current date
 * @returns {String} String with formatted date
 */
function getWeekday (dateToFormat, isLongWeek = false) {
  const date = new Date(dateToFormat)

  const daysInAWeek = [
    { longName: 'Sunday', shortName: 'Sun' },
    { longName: 'Monday', shortName: 'Mon' },
    { longName: 'Tuesday', shortName: 'Tue' },
    { longName: 'Wednesday', shortName: 'Wed' },
    { longName: 'Thursday', shortName: 'Thu' },
    { longName: 'Friday', shortName: 'Fri' },
    { longName: 'Saturday', shortName: 'Sat' }
  ]
  const weekday = isLongWeek
    ? daysInAWeek[date.getDay()].longName
    : daysInAWeek[date.getDay()].shortName
  return `${weekday}`
}

export default getWeekday
