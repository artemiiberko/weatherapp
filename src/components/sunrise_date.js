export var sunriseDate = (sunriseUnix, timezoneUnix) => {
  var sunrise = (sunriseUnix + timezoneUnix) * 1000
  var date_sunrise = new Date()
  date_sunrise.setTime(sunrise)
  var sunriseDate =
    (date_sunrise.getUTCHours() < 10 ? "0" : "") +
    date_sunrise.getUTCHours() +
    ":" +
    (date_sunrise.getMinutes() < 10 ? "0" : "") +
    date_sunrise.getMinutes()

  return sunriseDate
}
