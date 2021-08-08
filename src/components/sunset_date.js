export var sunsetDate = (sunsetUnix, timezoneUnix) => {
  var sunset = (sunsetUnix + timezoneUnix) * 1000
  var date_sunset = new Date()
  date_sunset.setTime(sunset)
  var sunsetDate =
    (date_sunset.getUTCHours() < 10 ? "0" : "") +
    date_sunset.getUTCHours() +
    ":" +
    (date_sunset.getMinutes() < 10 ? "0" : "") +
    date_sunset.getMinutes()

  return sunsetDate
}
