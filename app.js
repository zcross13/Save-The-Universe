console.log('You got this')

const USS_Schwarzenegger = {
    hull:20,
    firepower:5, 
}

class Aliens {
    constructor(hull,firepower,accuracy){
    this.hull = Math.floor(Math.random() * 4) + 3; 
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
}