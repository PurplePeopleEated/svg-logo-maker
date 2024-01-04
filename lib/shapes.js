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
