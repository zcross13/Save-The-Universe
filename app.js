console.log('You got this')

// Variables 
const body= document.querySelector('body'); 
const topRow =document.getElementById('topRow'); 
const playerStat = document.getElementById('playerStats');
const player = document.getElementById('USS_Schwarzenegger'); 
const aliens = document.getElementById('alien_ships')
const bottomRow = document.getElementById('bottomRow')
const stats = document.getElementsByClassName('stats'); 
const alienHP = document.getElementById('alienHP');
const playerMoves = document.getElementById('playerMoves');
const playerHP = document.getElementById('playerHP'); 
const playerImage = document.querySelector("#USS_Schwarzenegger img"); 
const alienImage = document.querySelector("#alien_ships img"); 
const blastBtn = document.getElementById("blast");
const nextAlienBtn = document.getElementById("next");

//Make the USS_Schwarzenegger object.

const USS_Schwarzenegger = {
    hull: 20, 
    firepower: 5, 
} 



class Ship {
    constructor(hull,firepower,accuracy){
    this.hull =  hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    } 
}

const alienShips = []

const randomHull = () => {
    sum = Math.floor(Math.random() * 4) + 3
    return sum
}

const randomFirepower = () => {
    sum = Math.floor(Math.random() * 3)+2
    return sum
}
const randomAccuracy = () => {
    sum = (Math.floor(Math.random() * 3) + 6) / 10; 
    return sum 
}


for (let i=0; alienShips.length<6; i++){
    alienShips.push(new Ship(randomHull(),randomFirepower(), randomAccuracy()))
}

let currentAlien = alienShips[0]


// Functions
function beginBattle (){
    bottomRow.innerHTML = 'Ready to save the world?';
    for (let i=0; i<stats.length; i++){
        stats[i].style.visibility='visible';
    }
}


function blast () {
    let hitAttack = (Math.floor(Math.random() * 10)/ 10); 
    if(hitAttack <= 0.7){
        currentAlien.hull -= USS_Schwarzenegger.firepower; 
        if(currentAlien.hull < 0){
            currentAlien.hull = 0 
        }
        bottomRow.innerHTML = "You damage the alien ship. Alien ship health is now " + currentAlien.hull ; 
        let alienHPBar = (currentAlien.hull/100)*300; 
        alienHP.style.width = alienHPBar + 'px';
    }else {
        bottomRow.innerHTML ="You missed HAHA"
    }
    if(currentAlien.hull == 0){
        bottomRow.innerHTML ="You destroy this alien + </br>Retreat </br>or </br>finish this!" 
        alienImage.style.visibility="hidden";
        blastBtn.style.visibility="hidden";
        deleteShip();
        noShips()
    }else{
        alienAttack()
    }
}


function retreat () {
    bottomRow.innerHTML="Earth is Destroy";
    playerMoves.style.visibility="hidden";
    nextAlienBtn.style.visibility="hidden";
}

function deleteShip (){
    alienShips.shift()
}

function nextShip (){
        alienImage.style.visibility="visible"; 
        alienHP.style.width = "300px";
        blastBtn.style.visibility="visible";
        bottomRow.innerHTML="LETS GET IT!!";
}

function noShips (){
    if(alienShips.length === 0){
        bottomRow.innerHTML = "You save us!"; 
        playerMoves.style.visibility="hidden"; 
        nextAlienBtn.style.visibility="hidden";
    }
}

function alienAttack () {
    if(currentAlien.hull > 0){
        let attack = currentAlien.accuracy; 
        if (attack <0.8 && attack>0.6){
            USS_Schwarzenegger.hull -= currentAlien.firepower;
            bottomRow.innerHTML = "You took damage" + currentAlien.firepower + "Your health is now " + USS_Schwarzenegger.hull
            let playerHPBar = (USS_Schwarzenegger.hull/100)*300; 
            playerHP.style.width = playerHPBar + 'px';
        }else {
            bottomRow.innerHTML="The Alien missed you"
        }
        if(USS_Schwarzenegger.hull == 0){
            bottomRow.innerHTML="Earth is Destroy. Thanks alot"; 
            playerImage.style.visibility='hidden';
            playerMoves.style.visibility="hidden";
        }
    }
}