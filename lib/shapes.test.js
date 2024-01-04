// Import Circle, Triangle, and Square classes
const {Circle, Triangle, Square} = require('./shapes.js');

// Circle class test
describe('Circle', () => {
  test('should return fill color when rendered', () => {
    const shape = new Circle();
    shape.shapeColor = 'purple';
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="purple"/>`);
  })
});

// Triangle class test
describe('Triangle', () => {
  test('should return fill color when rendered', () => {
    const shape = new Triangle();
    shape.shapeColor = "blue";
    expect(shape.render()).toEqual('<polygon points="150, 18, 310, 250, 10, 250" fill="blue"/>');
  })
});

// Square class test
describe('Square', () => {
  test('should return fill color when rendered', () => {
    const shape = new Square();
    shape.shapeColor = "green";
    expect(shape.render()).toEqual('<rect x="45" y="10" width="200" height="200" fill="green"/>');
  })
});