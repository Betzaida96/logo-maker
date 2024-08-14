const inquirer = require('inquirer');
const fs = require('fs');
const {circle, triangle, square} = require('./lib/shapes');


inquirer
.prompt([
    {
      type: 'input',
      name: 'logoText',
      message: 'Enter up to 3 characters',
      validate: input => input.length <= 3 || 'Text must be 3 characters or less.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your text to be?',
    },
    {
        type: 'list',
        name: 'shapeType',
        choices: ["Circle", "Triangle", "Square"],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Whate color would you like the shape to be?',
    },
]).then((response) => {
    const {logoText, textColor, shapeType, shapeColor} = response;
    
    let shape;
    if (shapeType === 'Circle') {
        shape = new circle();
    } else if (shapeType === 'Triangle') {
        shape = new triangle();
    } else if (shapeType === 'Square') {
        shape = new square();
    }

    shape.setColor(shapeColor);
    shape.textColor = textColor;
    shape.logoText = logoText;

    const svgContent = shape.render();

    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
});