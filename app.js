// ---------------------------------//
// -------- GLOBAL VARIABLES -------//
// ---------------------------------//

let move = 15;
let fishEaten = 0;

// console.log(randomNumber)
// ---------------------------------//
// -----------CACHED DOMS-----------//
// ---------------------------------//

const allEatingFish = document.querySelector('.all-fish')
//spawns
const krillSprite = document.getElementById('krill-fish')
const redSnapper = document.getElementById('red-fish')
const goldFish = document.getElementById('gold-fish')
const fishSpawning = document.querySelector('.spawned-fish')
//player
const playerSprite = document.querySelector('.player-sprite')
const playerBody = document.querySelector('.player-sprite > img')
const playerMouth = document.querySelector('.mouth-contact')
//piranha
const piranhaEl = document.querySelector('.piranha-sprite')
const pirahnhaContact = document.querySelector('.piranha-contact')
// console.log(pirahnhaContact)

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
    new Piranha('Slick Rick', 2, 7),
    new Piranha('Billy Bully', 4, 8),
    new Piranha('Stabby Gabby', 1.5, 4)
]

const fishPlayers = [
    new playerFish('Dogfish Darcy', 20),
    new playerFish('Silly Salmon', 15),
    new playerFish('Carp Magic', 25),
]

const levelParameter = [
    ['krill', 'gold', 'red'],
    [10, 15, 20],
    [7, 8, 3, 6, 2, 4]
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
const fishCollisionCheck = (food, player) => {
    let foodRect = food.getBoundingClientRect();
    let playerRect = player.getBoundingClientRect(); 

    // return a reaction between 2 divs from all directions
    return (foodRect.right >= playerRect.left && foodRect.left <= playerRect.right) && 
    (foodRect.bottom >= playerRect.top && foodRect.top <= playerRect.bottom);
  }


//render fish move animation, spawn in random y pos
const fishMoveRender = (fish, moveTime) => {
    // let fishId =fish.getAttribute('id')

    // console.log(moveTime)
  
 console.log(fish)
    
    let currentEl = fishSpawning.innerHTML = `<div class="fish" id="${fish}-fish">
    <div class="fin" id="${fish}-fin"></div>
    <div class="mouth"></div>
    <div class="eye">
        <div class="m"></div>
    </div>
    <div class="g" id="${fish}-gill"></div>
    <div class="t1" id="${fish}-tail"></div>
    <div class="t2" id="${fish}-tail"></div>
</div>`

    currentEl.style = `top: ${Math.floor(Math.random()*70) + 1}vh;
    animation: fishmove ${moveTime}s linear infinite;`
    }
   


//checks if level is complete
const fishEatenCheck = (currentFish) => {
    currentFish.style = `display: none;`
    fishEaten += 1;
    if (fishEaten == 3){
        currentFish.style = `display: none;`
        window.alert('LEVEL ONE COMPLETE')
    }
}

//checks if player is dead
const playerHealth = () => {
    if (newPlayerFish.hull <= 0){
        window.alert('YOU DIED. HIT RESTART')
    }
}

//random selector
const randomSelector = (array, iterator) => {
    return levelParameter[array][Math.floor(Math.random() * iterator.length)]
}


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
    
    playerBody.style = `animation: sprite-hit 1s ease-in-out `
    
    if (fishCollisionCheck(krillSprite, playerMouth)) {
        // krillSprite.style = `display: none;`
        // fishEaten += 1;
        fishEatenCheck(krillSprite)
    }
    else if (fishCollisionCheck(redSnapper, playerMouth)) {
        // redSnapper.style = `display: none;`
        // fishEaten += 1;
        fishEatenCheck(redSnapper)

    }
    else if (fishCollisionCheck(goldFish, playerMouth)) {
        // goldFish.style = `display: none;`
        // fishEaten += 1;
        fishEatenCheck(goldFish)
    }
    else if (fishCollisionCheck(playerBody, pirahnhaContact)){
        playerBody.style = `animation: sprite-hit 1s linear;`
        newPlayerFish.hull = newPlayerFish.hull - newPiranha.hitpoints;
        console.log(newPlayerFish.hull)
        playerHealth()
    }

});



//level one random fish spawns
for (i = 0; i < levelParameter[1][0]; i++){


    //random select fish
    let randomFish = randomSelector(0, levelParameter[0]);
    //select random time
    let randomTime = randomSelector(2, levelParameter[2]);

    fishMoveRender(randomFish, randomTime)

}
   

// fishMoveRender(krillSprite, 10)

// fishMoveRender(redSnapper, 8)

// fishMoveRender(goldFish, 7)



piranhaMoveRender()

// console.log(fishEaten)
// console.log(newPlayerFish.hull)














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



