var request = require('request');

var getLatLng = (address, callback) => {
  request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=bVtMG1JExT6A2A5ibZzA4RArrsHU0Pfy&location=${encodeURIComponent(address)}`,
    json: true
  }, (error, response, body) => {
    if(error){
      callback('unable to connect to api servers..');
    }else if(!body.results[0].locations[0]){
      callback('unable to retrieve address..\n\nTry entering valid address!\n');
    }else {
      return  callback(undefined, [body.results[0].locations[0].latLng.lat, body.results[0].locations[0].latLng.lng]
      );
    }
  });
}

module.exports = {
  getLatLng
}
