/**
 * Formats date, so that it is displayed in the 3-character month name 1 or 2-digit day, 4-digit year format
 * @param {Date} date Current date
 * @returns {String} String with formatted date
 */
function getFormattedDate (
  dateToFormat,
  isLongWeek = true,
  isLongMonth = false
) {
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

  const monthsInAYear = [
    { longName: 'January', shortName: 'Jan' },
    { longName: 'February', shortName: 'Feb' },
    { longName: 'March', shortName: 'Mar' },
    { longName: 'April', shortName: 'Apr' },
    { longName: 'May', shortName: 'May' },
    { longName: 'June', shortName: 'Jun' },
    { longName: 'July', shortName: 'Jul' },
    { longName: 'August', shortName: 'Aug' },
    { longName: 'September', shortName: 'Sep' },
    { longName: 'October', shortName: 'Oct' },
    { longName: 'November', shortName: 'Nov' },
    { longName: 'December', shortName: 'Dec' }
  ]
  const year = date.getFullYear()
  const month = isLongMonth
    ? monthsInAYear[date.getMonth()].longName
    : monthsInAYear[date.getMonth()].shortName
  const day = date.getDate()
  const weekday = isLongWeek
    ? daysInAWeek[date.getDay()].longName
    : daysInAWeek[date.getDay()].shortName
  return `${weekday}, ${month} ${day}, ${year}`
}

export default getFormattedDate
