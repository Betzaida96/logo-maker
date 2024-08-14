class shape{
    constructor(){
        this.color='';
        this.textColor = '';
        this.logoText = '';
    }
    setColor(color){
        this.color=(color);
    }
}

class circle extends shape {
    render(){
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle r="80" cx="150" cy="100" fill="${this.color}" />
        <text x="150" y="115" text-anchor="middle" dy=".3em" fill="${this.textColor}" font-size="40">${this.logoText}</text>
        </svg>`;
    }
}

class triangle extends shape {
    render(){
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 270,180 30,180" fill="${this.color}" />
        <text x="150" y="130" text-anchor="middle" dy=".3em" fill="${this.textColor}" font-size="40">${this.logoText}</text>
        </svg>`;
    }
}

class square extends shape {
    render(){
        return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150" x="75" y="25" fill="${this.color}" />
        <text x="150" y="115" text-anchor="middle" dy=".3em" fill="${this.textColor}" font-size="40">${this.logoText}</text>
        </svg>`;
    }
}

module.exports = {circle, triangle, square}