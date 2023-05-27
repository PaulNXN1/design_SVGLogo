const {Shape, Circle, Triangle, Square} = require('../JavaScript Folder/shapes');


function createSVGLogo(data) {

    const {shape_color, text_color, text_fill, shape} = data;

    if (shape === 'Triangle') {
        console.log(Triangle);
        const triangle = new Triangle(shape_color, text_color, text_fill, shape);
        triangle.setShape(triangle);
        return triangle.renderSVG();
    }
    else if (shape === 'Circle'){ 
        const circle = new Circle(shape_color, text_color, text_fill, shape);
        circle.setShape(circle);
        return circle.renderSVG();

    } else {
        console.log(Square.Square);
        const square = new Square(shape_color, text_color, text_fill, shape);
        square.setShape(square);
        return square.renderSVG();



    }


};

module.exports = createSVGLogo;