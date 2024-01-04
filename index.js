const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');
const {collectData} = require('./lib/interface');

async function generateLogo() {
  try {
    // Wait for the data
    const userData = await collectData();
    console.log(userData);

    //return result
  } catch (error) {
    console.error(error);
  }
}

generateLogo();