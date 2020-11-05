const request = require('request');

const myArgs = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${myArgs[0]}`;

const breedFetcher = function(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
    }
    
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log('Breed not found.');
    } else {
      console.log(data[0]['description']);
    }
  });
};

breedFetcher(url);