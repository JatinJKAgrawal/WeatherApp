console.log('Starting App..');

setTimeout(() => {
  console.log('Inside the CallBack!');
},2000);

setTimeout(() => {
  console.log('Second timeout!');
},0);

console.log('Finishing up!');
