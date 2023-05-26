// Packages and module exports 
const inquirer = require('inquirer');

const fs = require('fs');

const createSVGLogo = require('../utils/createSVGLogo');

// Questions that will be prompted to the user at the start of the program. 
const questions = [
   
    {
      type: 'list',
      message: 'What is the shape of your choice?',
      choices: ['Circle', 'Square' , 'Triangle'],
      name: 'shape'
    },

    {
      type: 'input',
      message: 'Please select a color for your shape!',
      name: 'color',
    },

    {
      type: 'input',
      message: 'What color should your text be?',
      name: 'text_color',
    },

    {
        type: 'input',
        message: 'What color should your shape be?',
        name: 'shape_color',
      },

      {
        type: 'input',
        message: 'What three letter text would you like in your logo?',
        name: 'text_fill',
      },


   ]

  

   // function to initialize the prompts for user input to create SVG logo
   function init() {

    inquirer.prompt(questions)

    .then(function(answers) {

      console.log(createSVGLogo);
        let logoMaker = createSVGLogo(answers);

        console.log(answers);

        fs.writeFileSync('exampleSVG.svg' , logoMaker);
    })

    }

init();