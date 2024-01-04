class Shape {
  constructor(text, textColor, shapeColor) {
    this.textColor = textColor;
    this.text = text;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  render(){
    return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`
  }
}

class Triangle extends Shape {
  render(){
    return `<polygon points="150, 18, 310, 250, 10, 250" fill="${this.shapeColor}"/>`
  }
}

class Square extends Shape {
  render(){
    return `<rect x="45" y="10" width="200" height="200" fill="${this.shapeColor}"/>`
  }
}

module.exports = {Circle, Triangle, Square};