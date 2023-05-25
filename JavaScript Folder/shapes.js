class Shape {
    constructor(shape_color, text_color, text_fill){
        this.shape_color = shape_color;
        this.text_color = text_color;
        this.text_fill = text_fill;
        this.shape;
    }
    renderSVG(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        ${this.shape}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text_fill}</text>
      
      </svg>`
    }

    setShape (shape){
        this.shape = shape.render();
    }

}


class Circle extends Shape {
    constructor(shape_color, text_color, text_fill){
        super(shape_color, text_color, text_fill);
    }
    render() {
        return `<circle cx="25" cy="75" r="20" stroke="red" fill="${this.shape_color}" stroke-width="5"/>`
    }
    
}

class Square extends Shape {
    constructor(shape_color, text_color, text_fill){
        super(shape_color, text_color, text_fill);

    }
    render(){
        return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="${this.shape_color}" stroke-width="5"/>`
    }
    
}

class Triangle extends Shape {
    constructor(shape_color, text_color, text_fill){
        super(shape_color, text_color, text_fill);

    }
    render(){
        return `<polygon points="250,60 100,400 400,400" class="triangle" fill="${this.shape_color}"/>`
    }
    

}






module.exports = {Shape, Circle, Triangle, Square}
