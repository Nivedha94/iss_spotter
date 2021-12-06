// const { callbackify } = require('util');
// const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP('171.76.35.65', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! returned coordinates:' , coordinates);
});