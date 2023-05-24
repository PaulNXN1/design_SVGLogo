const inquirer = require('inquirer');

const fs = require('fs');

const markdownprompt = require('./markdownprompt');




const questions = [
   
    {
      type: 'list',
      message: 'What is the shape of your choice?',
      choices: ['circle', 'square' , 'triangle']
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


   ]



   function init() {

    inquirer.prompt(questions)

    .then(function(answers) {

      let markDown = markdownprompt(answers);
        console.log(answers);

        console.log(markdownprompt);

        fs.writeFileSync('svgfile.svg', markdownprompt);
    
    })
    
}

init();