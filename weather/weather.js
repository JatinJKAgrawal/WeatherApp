const request = require('request');

const getWeather = () => {
  request({
    url: 'https://api.darksky.net/forecast/992395ac5bf8d3f3de78d4f67c51030c/37.8267,-122.4233',
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200){
      console.log(`Temperature: ${body.currently.temperature}`);
    }else {
      console.log('Unable to fetch weather..');
    }
  });

}

module.exports.getWeather = getWeather;
