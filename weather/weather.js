const request = require('request');

const getWeather = (latLng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/992395ac5bf8d3f3de78d4f67c51030c/${latLng[0]},${latLng[1]}`,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200){
      callback(undefined, {
        Location: latLng,
        TimeZone: body.timezone,
        Summary: body.currently.summary,
        Temperature: body.currently.temperature
      });
    }else {
      callback('Unable to fetch weather..');
    }
  });

}

module.exports.getWeather = getWeather;
