var request = require('request');

var geoCode = address => new Promise((resolve, reject) => {
  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=bVtMG1JExT6A2A5ibZzA4RArrsHU0Pfy&location=${encodeURIComponent(address)}`,
    json: true
  }, (error, response, body) => {
    if(error){
      reject('Error: Unable to connect to api servers..');
    }else if(!body.results[0].locations[0]){
      reject('unable to retrieve location..\n\nTry entering valid address!\n');
    }else {
      resolve([body.results[0].locations[0].latLng.lat, body.results[0].locations[0].latLng.lng]);
    }
  });
});

geoCode(332401).then((latLng) => {
  console.log(`Latitude: ${latLng[0]},\nLongitude: ${latLng[1]}`);
}, (errorMessage) => {
  console.log(errorMessage);
});
