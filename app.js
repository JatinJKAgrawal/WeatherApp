const request = require('request');
const yargs = require('yargs');
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

const address = argv.a;


request({
  url: `http://www.mapquestapi.com/geocoding/v1/address?key=bVtMG1JExT6A2A5ibZzA4RArrsHU0Pfy&location=${encodeURIComponent(address)}`,
  json: true
}, (error, response, body) => {
  if(error){
    console.log('unable to connect to api servers..');
  }else if(!body.results[0].locations[0]){
    console.log('unable to retrieve address..\n\nTry entering valid address!\n');
  }else{
      console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}\nLongitude: ${body.results[0].locations[0].latLng.lng}`);
  }
});
