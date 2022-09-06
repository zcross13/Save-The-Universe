// Defining all our global variables pointing to the different DIVs we need to reference to

const bottomRow = document.getElementById('bottomRow');
const stats = document.querySelectorAll('.stats'); 
const playerStats = document.getElementById('playerStats');
var playerHP = document.getElementById('playerHP');
var alienHP = document.getElementById('alienHP'); 
var playerMoves = document.getElementById('playerMoves'); 

//Define USS Schwarzenegger 
const  playerShip= {
    name:'USS Schwarzenegger', 
    hull:20, 
    firepower:5,
    accuracy: 
}

//Define Alien Ship 
const alienShip = {
    name:'Alien', 
    hull: Math.floor(Math.random() * 4) + 3,
    firepower: Math.floor(Math.random() * 3) + 2,
    accuracy: Math.floor(Math.random() * 3) + 6) / 10,
}

//Define health variables 
var playerHP = 100; 
var alienHP = 100; 

// function beginBattle (){
//     for (let x=0; x<stats.length; x++){
//         stats[x].style.visibility = 'visbile'
//     }
// }

function alienMoves(){
    if(alienShip.accuracy <= 1){
        let hitChance = Math.floor(Math.random()*3)+ 2;
        if(hitChance <= 7){
            let damage = Math.floor(Math.random()*3) + 2;
            playerHP -= damage; 
            if(playerHP < 0) {
                playerHP=0; 
            }
            bottomRow.innerHTML +='Alien hit you with a basic blast ' + damage + 'damage. Your ship now has ' + playerHP + 'health.' 
        } else {
            bottomRow.innerHTM +='Alien missed you'
        }
        if (playerHP === 0){
            bottomRow.innerHTML += 'Earth is destroyed'
            playerMoves.style.visibility='hidden'
        } 
    }
    }
function blast (){
    let hitChance = Math.round(Math.random()*10);
    if(hitChance <= 7){
        let damage = 20;
        alienHP -= damage; 
        if(alienHP < 0) {
            alienHP=0; 
        }
        bottomRow.innerHTML +='You hit the alien with your blast ' + damage + 'damage. Alien ship now has ' + alienHP + 'health.' 
    } else {
        bottomRow.innerHTML +='You missed '
    }
    if (alienHP === 0){
        bottomRow.innerHTML += 'You save the earth'
        playerMoves.style.visibility='hidden'
    } else {
        alienMoves()
    }
}

// function retreat (){

// }

