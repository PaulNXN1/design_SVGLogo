// Imports
const {Shape, Circle, Triangle, Square} = require('./shapes');

// Test portion of code to confirm the function "render"

describe('circle', function () {
    it('will test render circle method' , () => {

        const circle = new Circle('red', 'white', 'dog');
        expect(circle.render()).toBe('<circle cx="150" cy="100" r="65" stroke="red" fill="red" stroke-width="5"/>')
    })
    
})

describe('triangle', function () {
    it('will test render triangle method' , () => {

        const triangle = new Triangle('red', 'white', 'dog');
        expect(triangle.render()).toBe('<polygon points="150, 20 260, 180 35, 180" class="triangle" fill="red"/>')
    })
    
})

describe('square', function () {
    it('will test render square method' , () => {

        const square = new Square('red', 'white', 'dog');
        expect(square.render()).toBe('<rect x="50" y="10" width="200" height="200" stroke="black" fill="red"/>')
    })
    
})
