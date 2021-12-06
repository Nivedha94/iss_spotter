/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 *
 *
 */

const request = require('request');

const fetchMyIP = function(callback) {
  // use request to fetch IP address from JSON API
  request('https://api.freegeoip.app/json/?apikey=ec89a5f0-406d-11ec-b238-557fbc51ee25', function(error, response, body) {
    
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body);
    callback(null, ip);


    
  });

};

const fetchCoordsByIP = function(ip, callback) {
  request('https://freegeoip.app/json/invalidIPHere'), function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const { latitude, longitude } = JSON.parse(body);
    callback(null, {latitude, longitude});
    
  };
};
module.exports = { fetchCoordsByIP };