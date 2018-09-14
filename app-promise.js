var yargs = require('yargs');
var axios = require('axios');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address we need the weather information for.',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=bVtMG1JExT6A2A5ibZzA4RArrsHU0Pfy&location=${encodedAddress}`;

axios.get(geocodeUrl)
.then( response => {
  if(response.data.results[0].locations.length === 0){
    throw new Error('Error: Address not found!');
  }
  var lat = response.data.results[0].locations[0].latLng.lat;
  var lng = response.data.results[0].locations[0].latLng.lng;
  var weatherUrl = `https://api.darksky.net/forecast/992395ac5bf8d3f3de78d4f67c51030c/${lat},${lng}`;
  return axios(weatherUrl);
})
.then( response => {
  var weather = {
    timeZone: response.data.timezone,
    temp: response.data.currently.temperature,
    status: response.data.currently.icon
  };
  console.log(JSON.stringify(weather, null, 2));
})
.catch((e) => {
  if(e.code === 'ENOTFOUND'){
    console.log('Error: Unable to connect to API servers!');
  }else {
    console.log(e.message);
  }
});
