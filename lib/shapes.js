class shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
}

class circle extends shape {
    render(){
        return `
        <svg width="100" height="100 xmlns="http://www.w3.org/2000/svg">
        <circle r="45" cx="50" cy="50" fill="${this.color}" />
        </svg>`
    }
}

class triangle extends shape {
    render(){
        return `
        <svg width="100" height="100"  xmlns="http://www.w3.org/2000/svg">
        <polygon points="60,15 110,85 10,85" fill="${this.color}" />
        </svg>`
    }
}

class square extends shape {
    render(){
        return `
        <svg width="100" height="100"  xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="150 x="10" y="10" fill="${this.color}" />
        </svg>`
    }
}

module.exports = {circle, triangle, square}