var somePromise = new Promise((resolve, reject)=>{
  resolve('It went well!');
});

somePromise.then((message) => {
  console.log('Success: ' + message);
});
