const inquirer = require('inquirer');
const fs = require('fs');
const {circle, triangle, square} = require('./lib/shapes');


inquirer
.prompt([
    {
      type: 'input',
      name: 'logoText',
      message: 'Enter up to 3 characters',  
    },
    {
        type: 'input',
        name: ' textColor',
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

    const svgContent = `
    ${shape.render()}
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${textColor}" font-size="20">${logoText}</text>
    `;

    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg')
});