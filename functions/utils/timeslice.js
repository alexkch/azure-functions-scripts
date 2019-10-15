const tz = require('moment-timezone')().tz(process.env.APP_TIME_ZONE) // EST Time GMT-4

module.exports = timesliceId => {
  let result = { error: 'invalid timeslice' }
  let currentDate = tz.format(process.env.APP_TIME_FORMAT)

  if (typeof timesliceId !== 'string') return result

  switch (timesliceId.toUpperCase()) {
    case 'A':
      result = {
        startDate: currentDate,
        endDate: currentDate
      }
      break

    case 'B':
      result = {
        startDate: tz.startOf('week').format(process.env.APP_TIME_FORMAT),
        endDate: currentDate
      }
      break

    case 'C':
      result = {
        startDate: tz.weekday(-7).format(process.env.APP_TIME_FORMAT),
        endDate: tz.day(6).format(process.env.APP_TIME_FORMAT)
      }
      break

    case 'D':
      result = {
        startDate: tz.startOf('month').format(process.env.APP_TIME_FORMAT),
        endDate: tz.endOf('month').format(process.env.APP_TIME_FORMAT)
      }
      break

    case 'E':
      result = {
        startDate: tz.startOf('quarter').format(process.env.APP_TIME_FORMAT),
        endDate: tz.endOf('quarter').format(process.env.APP_TIME_FORMAT)
      }
      break

    case 'MANUAL':
      result = {}
      break

    default:
      break
  }

  return result
}
