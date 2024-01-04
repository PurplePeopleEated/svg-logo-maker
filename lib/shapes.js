class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

class Circle extends Shape {
  render(text, textColor, shapeColor){
    return `<svg version="1.1" 
    width="300" height="200" 
    xmlns="http://www.w3.org/2000/svg">
    
    <circle cx="150" cy="100" r="100" fill="${shapeColor}"/>
    <text x="145" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>`
  }
}

class Triangle extends Shape {
  render(text, textColor, shapeColor){
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    <polygon points="150, 18, 310, 250, 10, 250" fill="${shapeColor}"/>
    <text x="150" y="160" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    
    </svg>`
  }
}

class Square extends Shape {
  render(text, textColor, shapeColor){
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    <rect x="45" y="10" width="200" height="200" fill="${shapeColor}"/>
    <text x="145" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    
    </svg>`
  }
}

module.exports = {Circle, Triangle, Square};