const {circle, triangle, square} = require('./shapes');

describe('Shape classes', () => {
    test('Circle render method', () => {
        const circleShape = new circle();
        circleShape.setColor('pink');
        circleShape.logoText = 'ABC';
        circleShape.textColor = 'red';
        const expectedSVG = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle r="80" cx="150" cy="100" fill="${circleShape.color}" />
        <text x="150" y="115" text-anchor="middle" dy=".3em" fill="${circleShape.textColor}" font-size="40">${circleShape.logoText}</text>
        </svg>`;
        expect(circleShape.render().trim()).toEqual(expectedSVG.trim());
    });


    test('Triangle render method', () => {
        const triangleShape = new triangle();
        triangleShape.setColor('green');
        triangleShape.logoText = 'DEF';
        triangleShape.textColor = 'purple';
        const expectedSVG = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 270,180 30,180" fill="${triangleShape.color}" />
        <text x="150" y="130" text-anchor="middle" dy=".3em" fill="${triangleShape.textColor}" font-size="40">${triangleShape.logoText}</text>
        </svg>`;
        expect(triangleShape.render().trim()).toEqual(expectedSVG.trim());
    });


    test('Square render method', () => {
        const squareShape = new square();
        squareShape.setColor('orange');
        squareShape.logoText = 'GHI';
        squareShape.textColor = 'yellow';
        const expectedSVG = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" x="75" y="25" fill="${squareShape.color}" />
        <text x="150" y="115" text-anchor="middle" dy=".3em" fill="${squareShape.textColor}" font-size="40">${squareShape.logoText}</text>
        </svg>`;
        expect(squareShape.render().trim()).toEqual(expectedSVG.trim());
    });
});
