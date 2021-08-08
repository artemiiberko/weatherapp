export var timezoneHours = (timezoneUnix) => {
  var timezone = timezoneUnix * 1000
  var date_timezone = new Date()
  date_timezone.setTime(timezone)
  var timezoneHours = date_timezone.getUTCHours()
  if (timezoneHours > 12) {
    timezoneHours = timezoneHours - 24
  }
  return timezoneHours
}
