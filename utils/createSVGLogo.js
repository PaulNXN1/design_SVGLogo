const Triangle = require('../JavaScript Folder/shapes');
const Circle = require('../JavaScript Folder/shapes');
const Square = require('../JavaScript Folder/shapes');


function createSVGLogo(data) {

    const {shape_color, text_color, text_fill, shape} = data;

    if (shape === 'Triangle') {

        const triangle = new Triangle(shape_color, text_color, text_fill, shape);
        return triangle.render();
    }
    else if (shape === 'Circle'){ 
        const circle = new Triangle(shape_color, text_color, text_fill, shape);
        return circle.render();

    } else {
        const square = new Triangle(shape_color, text_color, text_fill, shape);
        return square.render();


    }


};

module.exports = { createSVGLogo};