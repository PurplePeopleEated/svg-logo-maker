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
