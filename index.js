const inquirer = require('inquirer')



inquirer
.prompt([
    {
      type: 'input',
      name: 'logo',
      message: 'Enter up to 3 characters',  
    },
    {
        type: 'input',
        name: ' text color',
        message: 'What color would you like your text to be?',
    },
    {
        type: 'list',
        name: 'shapes',
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: 'input',
        name: 'shape color',
        message: 'Whate color would you like the shape to be?',
    },
// ]).then((response) =>
// const TODO: MAKE THIS MAKE THE LOGO )