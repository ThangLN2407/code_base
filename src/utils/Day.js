import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { FORMAT_DATE } from 'constants'

dayjs.extend(utc)
dayjs.extend(timezone)

const timeZoneDefault = 'Asia/KST'

export const getTimeZoneLocal = () => {
  const timezoneSettings = localStorage.getItem('settings')

  try {
    if (timezoneSettings) {
      return JSON.parse(timezoneSettings).timezone
    }
  } catch (error) {
    return timeZoneDefault
  }
}

export const formatDateTime = (value, format = FORMAT_DATE) => {
  if (!value) return ''
  return dayjs(value)
    .tz(getTimeZoneLocal() || timeZoneDefault)
    .format(format)
}
