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
        return `<circle cx="150" cy="100" r="65" stroke="red" fill="${this.shape_color}" stroke-width="5"/>`
    }
    
}

class Square extends Shape {
    constructor(shape_color, text_color, text_fill){
        super(shape_color, text_color, text_fill);

    }
    render(){
        return `<rect x="50" y="10" width="200" height="200" stroke="black" fill="${this.shape_color}"/>`
    }
    
}

class Triangle extends Shape {
    constructor(shape_color, text_color, text_fill){
        super(shape_color, text_color, text_fill);

    }
    render(){
        return `<polygon points="150, 20 260, 180 35, 180" class="triangle" fill="${this.shape_color}"/>`
    }
    
    
}



module.exports = {Shape, Circle, Triangle, Square};
