// Main class "Shape" in which the program will extend from.
class Shape {
    constructor(shape_color, text_color, text_fill){
        this.shape_color = shape_color;
        this.text_color = text_color;
        this.text_fill = text_fill;
        this.shape;
    }
    renderSVG(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        ${this.shape}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text_fill}</text>
      
      </svg>`
    }

    setShape (shape){
        this.shape = shape.render();
    }

}

// Three classes below that extend from the parent class, Shape

class Circle extends Shape {
    constructor(shape_color, text_color, text_fill){
        super(shape_color, text_color, text_fill);
    }
    render() {
        return ` <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"> <circle cx="25" cy="75" r="20" stroke="red" fill="${this.shape_color}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text_fill}</text></svg>`
    }
    
}

class Square extends Shape {
    constructor(shape_color, text_color, text_fill){
        super(shape_color, text_color, text_fill);

    }
    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"> <rect x="10" y="10" width="300" height="200" stroke="black" fill="${this.shape_color}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text_fill}</text></svg>`
    }
    
}

class Triangle extends Shape {
    constructor(shape_color, text_color, text_fill){
        super(shape_color, text_color, text_fill);

    }
    render(){
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"><polygon points="250,60 100,400 400,400" class="triangle" fill="${this.shape_color}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text_fill}</text></svg>`
    }
    

}



module.exports = {Shape, Circle, Triangle, Square};
