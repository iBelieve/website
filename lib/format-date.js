const moment = require('moment')

module.exports = function format(value) {
  const date = moment(value)
  const now = moment()

  const days = now.diff(date, 'days')

  if (days === 1) {
    return 'Yesterday'
  } else if (date.year() !== now.year()) {
    return date.format('MMM Do, YYYY')
  } else if (days >= 7) {
    return date.format('MMM Do')
  } else {
    return date.fromNow()
  }
}