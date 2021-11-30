const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    const bombay = breedDetails('Bombay');
    console.log(bombay);
  });
  it ('returns an empty string if there is no description for a breed', () => {
    console.log(breedDetails('Tabby'));
  });
});
