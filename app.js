const yargs = require('yargs');
const geocode = require('./geocode/latLng.js');
const weather = require('./weather/weather.js');
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

geocode.getLatLng(argv.a, (errorMessage, latLng)=>{
   if(errorMessage){
     console.log(errorMessage);
   }else {
     weather.getWeather(latLng, (errorMessage, results) => {
       if(errorMessage){
         console.log(errorMessage);
       }else {
         console.log(results);
       }
     });
   }
});//returns [Latitude, Longitude] & handles errors

// weather.getWeather();
