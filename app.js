var request = require('request');
request({
  url: 'http://www.mapquestapi.com/geocoding/v1/address?key=bVtMG1JExT6A2A5ibZzA4RArrsHU0Pfy&location=A%2038%20sector%202%20Noida',
  json: true
}, (error, response, body) => {
  console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}\nLongitude: ${body.results[0].locations[0].latLng.lng}`);
});
