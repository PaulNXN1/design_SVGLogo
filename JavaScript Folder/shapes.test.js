const {Shape, Circle, Triangle, Square} = require('./shapes');

describe('circle', function () {
    it('will test render circle method' , () => {

        const circle = new Circle('red', 'white', 'dog');
        expect(circle.render()).toBe('<circle cx="25" cy="75" r="20" stroke="red" fill="red" stroke-width="5"/>')
    })
    
})

describe('triangle', function () {
    it('will test render triangle method' , () => {

        const triangle = new Triangle('red', 'white', 'dog');
        expect(triangle.render()).toBe('<polygon points="250,60 100,400 400,400" class="triangle" fill="red"/>')
    })
    
})

describe('square', function () {
    it('will test render square method' , () => {

        const square = new Square('red', 'white', 'dog');
        expect(square.render()).toBe('<rect x="10" y="10" width="30" height="30" stroke="black" fill="red" stroke-width="5"/>')
    })
    
})
