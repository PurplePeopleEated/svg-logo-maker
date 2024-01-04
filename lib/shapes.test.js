// Import Circle, Triangle, and Square classes
const {Circle, Triangle, Square} = require('./shapes.js');

// Circle class test
describe('Circle', () => {
  test('should return undefined for each property when rendered', () => {
    const shape = new Circle();
    shape.shapeColor = 'undefined';
    shape.text = 'undefined';
    shape.textColor = 'undefined';
    expect(shape.render()).toEqual(`<svg version="1.1" 
    width="300" height="200" 
    xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="150" cy="100" r="100" fill="undefined"/>
    <text x="145" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text>

    </svg>`);
  })
});

// Triangle class test
describe('Triangle', () => {
  test('should return fill color when rendered', () => {
    const shape = new Triangle();
    shape.shapeColor = 'undefined';
    shape.text = 'undefined';
    shape.textColor = 'undefined';
    expect(shape.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    <polygon points="150, 18, 310, 250, 10, 250" fill="undefined"/>
    <text x="150" y="160" font-size="60" text-anchor="middle" fill="undefined">undefined</text>
    
    </svg>`);
  })
});

// Square class test
describe('Square', () => {
  test('should return fill color when rendered', () => {
    const shape = new Square();
    shape.shapeColor = 'undefined';
    shape.text = 'undefined';
    shape.textColor = 'undefined';
    expect(shape.render()).toEqual(`<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    <rect x="45" y="10" width="200" height="200" fill="undefined"/>
    <text x="145" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text>
    
    </svg>`);
  })
});