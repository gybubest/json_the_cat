const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      callback(error, null);
      return;
    } else if (!data[0]) {
      callback(Error('Breed not found.'), null);
      return;
    } else {
      callback(null, data[0]['description']);
    }
  });
};

module.exports = { fetchBreedDescription };