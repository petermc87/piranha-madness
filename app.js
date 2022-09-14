// ---------------------------------//
// -------- GLOBAL VARIABLES -------//
// ---------------------------------//

let move = 15;


// console.log(randomNumber)
// ---------------------------------//
// -----------CACHED DOMS-----------//
// ---------------------------------//

const allEatingFish = document.querySelector('.all-fish')
const playerSprite = document.querySelector('.player-sprite')
const krillSprite = document.getElementById('krill')
const redSnapper = document.getElementById('red-snapper')
const goldFish = document.getElementById('gold-fish')
const playerMouth = document.querySelector('.mouth-contact')
// const piranhaOne = document.getElementById('pir-one')
const piranhaEl = document.querySelector('.piranha-sprite')
// console.log(piranhaEl)

// ---------------------------------//
// -------------CLASSES-------------//
// ---------------------------------//

class Piranha {
    constructor(name, hitpoints, speed){
        this.name = name;
        this.hitpoints = hitpoints;
        this.speed = speed;
    }
}

class playerFish {
    constructor(name, hull){
        this.name = name;
        this.hull = hull;
    }
    hullDamage(){
        return this.hull - newPiranha.hitpoints;
    }
}




// ---------------------------------//
// -------------OBJECTS-------------//
// ---------------------------------//
const piranhaKillers = [
    new Piranha('Slick Rick', 10, 7),
    new Piranha('Billy Bully', 12, 8),
    new Piranha('Stabby Gabby', 9, 4)
]

const fishPlayers = [
    new playerFish('Dogfish Darcy', 37),
    new playerFish('Silly Salmon', 55),
    new playerFish('Carp Maguc', 42),
]

//instantiating the class with a random Piranha
const newPiranha = piranhaKillers[Math.floor(Math.random() * piranhaKillers.length)]
console.log(newPiranha.hitpoints)

//instantiationg the player fish class
const newPlayerFish = (fishPlayers[0])


// ---------------------------------//
// ------------FUNCTIONS ----------//
// ---------------------------------//

const piranhaMoveRender = () =>{
    //if statement for each piranha (differnt move direction)
    piranhaEl.style = `
    animation: piranha-one ${newPiranha.speed}s ease-in-out infinite;
}`
}


//chekcing if the players mouth hit a fish
const collisionCheck = (food, player) => {
    let foodRect = food.getBoundingClientRect();
    let playerRect = player.getBoundingClientRect(); 

    // return a reaction between 2 divs from all directions
    return (foodRect.right >= playerRect.left && foodRect.left <= playerRect.right) && 
    (foodRect.bottom >= playerRect.top && foodRect.top <= playerRect.bottom);
  }


//render fish move animation, spawn in random y pos
const fishMoveRender = (fish, moveTime) => {
    fish.style = `top: ${Math.floor(Math.random()*70) + 1}vh;
    animation: fishmove ${moveTime}s linear infinite;`
}




//creating the styling using render
// const piranhaRender = () => {
//     piranhaOne.style = `.piranha-sprite{
//         animation: piranha-two ${newPiranha.speed}s ease-in-out infinite;
//     }`
// }





// ---------------------------------//
// -------- EVENT LISTENERS --------//
// ---------------------------------//

//statrting position of the player
window.addEventListener('load', () => {
    playerSprite.style = `position: abolsute;
    left: 0;
    top: 100px;`
});


//when you hit an arrow
window.addEventListener('keydown', (evt) => {
    switch(evt.key){
        case 'ArrowLeft':
           
            // playerSprite.style = 'transform: rotate(180deg);'
            // playerSprite.style = 'transform: rotateY(180deg);'
            playerSprite.style.left = parseInt(playerSprite.style.left) - move + 'px';
            
            break;
        case 'ArrowRight':
             
            playerSprite.style.left = parseInt(playerSprite.style.left) + move + 'px';
            break;
        case 'ArrowUp':
              
            // playerSprite.style = 'transform: rotate(-90deg);'
            playerSprite.style.top = parseInt(playerSprite.style.top) - move + 'px';
            break;
        case 'ArrowDown':
              
            playerSprite.style.top = parseInt(playerSprite.style.top) + move + 'px';
            break;
    }

    if (collisionCheck(krillSprite, playerMouth)) {
        krillSprite.style = `display: none;`
    }
    else if (collisionCheck(redSnapper, playerMouth)) {
        redSnapper.style = `display: none;`
    }
    else if (collisionCheck(goldFish, playerMouth)) {
        goldFish.style = `display: none;`
    }
    
});




fishMoveRender(krillSprite, 10)

fishMoveRender(redSnapper, 8)

fishMoveRender(goldFish, 7)



piranhaMoveRender()

console.log(newPlayerFish.hullDamage())












// let modifier = 5;

// window.addEventListener('keydown', (evt) => {
//     const {style} = playerSprite;
//     switch (evt.key){
//         case 'ArrowUp': style.top = `${parseInt(style.top) - modifier}`; break;
//         case 'ArrowDown': style.top = `${parseInt(style.top) + modifier}`; break;
//     }
// })



// window.addEventListener('keydown', checkKeyPress, false);


// function checkKeyPress(key){
//     if (key.keyCode == '65'){
//         // alert('the left arrow was pressed')
//         playerSprite.style = 'transform: rotate(180deg);'
//         playerSprite.style = 'transform: rotateY(180deg);'
//     }

//     else if (key.keyCode == '68'){
//         //right using d
//         playerSprite.style = `transform: rotate(0deg);`
//         // playerSprite.style = 'animation: sprite-animation 1s infinite;'
//     }

//     else if (key.keyCode == '87'){
//         // move up with w
//         playerSprite.style = 'transform: rotate(-90deg);'
//         // playerSprite.style = 'animation: sprite-animation 1s infinite;'

//     }
    
//     else if (key.keyCode == '83'){
//         // down using s
//         playerSprite.style = 'transform: rotate(90deg);'

//     }   
    

//     else if (key.keyCode == '69'){
//         //up and right using e
//         playerSprite.style = 'transform: rotate(-30deg);'
      
//     }   

//     else if (key.keyCode == '88'){
//         //down and right with x
//         playerSprite.style = 'transform: rotate(30deg);'

//     }   
//     else if (key.keyCode == '81'){
//         //down and right with x
        
//         playerSprite.style = 'transform: rotate(-150deg);'
//         playerSprite.style = 'transform: rotateY(-180deg);'

//     }   


// }



