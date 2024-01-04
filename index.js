const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');
const {collectData} = require('./lib/interface');

async function generateLogo() {
  try {
    // Wait for the data
    const userData = await collectData();
    console.log(userData);

    // Determine the shape from the user input
    let shape;

    if (userData.shape === 'Circle') {
      shape = new Circle();
    } else if (userData.shape === 'Triangle') {
      shape = new Triangle();
    } else if (userData.shape === 'Square') {
      shape = new Square();
    } else {
      console.log('Missing shape selection');
    }

    // Create a new logo with the userData
    const newLogo = shape.render(userData.text, userData.textColor, userData.shapeColor);

    // Save the new logo to an SVG file
    fs.writeFile('./examples/my-logo.svg', newLogo, (err) => {
      if (err) throw err;
      console.log('Your new logo has been generated!');
    });
    
  } catch (error) {
    console.error(error);
  }
}

generateLogo();