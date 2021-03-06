// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (error) {
      functionToRunWhenThingsAreDone(undefined);
    } else {
      functionToRunWhenThingsAreDone(data);
    }
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = function(breed) {
  console.log('Return value: ', breed);
};

// we try to get the return value.... UNDEFINED
// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
 // => will now print out details correctly

module.exports = breedDetailsFromFile;