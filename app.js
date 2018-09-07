const yargs = require('yargs');
const geocode = require('./geocode/latLng.js');
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

var latLng = geocode.getLatLng(argv.a, (latLng)=>{
   console.log(`Latitude: ${latLng[0]}\nLongitude: ${latLng[1]}`);
});//returns [Latitude, Longitude] & handles errors
