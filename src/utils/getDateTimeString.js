/**
 * Converts date to a hyphenated string for the use in `dateTime` parameter
 * @param {Date} date Current date
 * @returns {String} Hyphenated string with date
 */
function getDateTimeString (sourceDate) {
  const date = new Date(sourceDate)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate()
  return `${year}-${month}-${day}`
}

export default getDateTimeString
