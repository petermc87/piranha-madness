// ---------------------------------//
// -------- GLOBAL VARIABLES -------//
// ---------------------------------//

let move = 20;
let fishEaten = 0;
let currentLevel = 0;

// ---------------------------------//
// -----------CACHED DOMS-----------//
// ---------------------------------//

const allEatingFish = document.querySelector('.all-sprites')
//player sprite
const playerSprite = document.querySelector('.player-sprite')
// const playerBody = document.querySelector('.player-sprite > img')
// const playerMouth = document.querySelector('.mouth-contact')

// console.log(playerBody)
// console.log(playerMouth)
//piranha
const piranhaEl = document.querySelector('.piranha-sprite')
const piranhaOne = document.getElementById('pir-one')
const pirahnhaContact = document.querySelector('.piranha-contact')

//title screen
const titleScreen = document.querySelector('.title')

//modal
const gameStartButton = document.querySelector('#openModal');
const modal = document.querySelector('#modal');
const continueBtn = document.querySelector('#continue');
const allButtons = document.querySelector('.modal-buttons')

//stats
const hullUpdate = document.getElementById('hull');
const eaten = document.getElementById('eaten');
const thisLevel = document.getElementById('level');
const thisFish = document.getElementById('name');
const statContainer = document.querySelector('.stat-container');
const messageBar = document.querySelector('.message-panel');
const liveMessage = document.querySelector('.live-message');
const playerSelection = document.getElementById('selection');
// console.log(playerSelection)

//fish selection containers
const salmonSelection = document.getElementById('silly-salmon');
const dogfishSelection = document.getElementById('dogfish-darcy');
const troutSelection = document.getElementById('trout-magic');
//stat boxes
const dogfishStats = document.getElementById('dogfish-stats');
const salmonStats = document.getElementById('salmon-stats');
const troutStats = document.getElementById('trout-stats');
//stat spans for each fish
const dogfishHealth = document.getElementById('dogfish-health');
const dogfishSpeed = document.getElementById('dogfish-speed');
const salmonHealth = document.getElementById('salmon-health');
const salmonSpeed = document.getElementById('salmon-speed');
const troutHealth = document.getElementById('trout-health');
const troutSpeed = document.getElementById('trout-speed');
//play game button
const playGameBtn = document.getElementById('play')


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
    constructor(name, hull, speed){
        this.name = name;
        this.hull = hull;
        this.speed = speed;
    }
    hullDamage(){
        // hullUpdate.innerHTML = this.hull;
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
    new playerFish('Dogfish Darcy', 20, 17),
    new playerFish('Silly Salmon', 15, 24),
    new playerFish('Trouty Magic', 25, 12),
]

const levelParameter = [
    ['krill', 'gold', 'red'],
    [10, 15, 20],
    [10, 8, 3, 6, 12, 4, 5, 7, 9, 13, 14]
]


//instantiating the class with a random Piranha
const newPiranha = piranhaKillers[Math.floor(Math.random() * piranhaKillers.length)]
console.log(newPiranha.hitpoints)

//instantiationg the player fish class
const newPlayerFish = (fishPlayers[0])

// ---------------------------------//
// ------------FUNCTIONS ----------//
// ---------------------------------//

//message bar update
const messageUpdate = (thisMessage) => {
    liveMessage.innerHTML = thisMessage;
}

//selecting a player

const selectPlayer = () => {
    playerSelection.style.display = 'none';
    playerSprite.style.display = 'block';
    piranhaOne.style.display = 'block';
    hullUpdate.innerHTML = newPlayerFish.hull;
    thisFish.innerHTML = newPlayerFish.name;
    statContainer.style.display = 'block';
    messageBar.style.display = 'block';
    messageUpdate('THE RIVER OF DESTINY...');
    fishSpawn(currentLevel)
    piranhaMoveRender()
}
//fish spawning
const fishSpawn = (currentLevel) => {
    for (i = 0; i < levelParameter[1][currentLevel]; i++){
        //random select fish
        let randomFish = randomSelector(0, levelParameter[0]);
        //select random time
        let randomTime = randomSelector(2, levelParameter[2]);
        fishMoveRender(randomFish, randomTime)
    }
}

//renders the piranhas spped
const piranhaMoveRender = () =>{
    //if statement for each piranha (differnt move direction)
    piranhaEl.style = `
    animation: piranha-two ${newPiranha.speed}s ease-in-out infinite;`
}

//opening the main modal window
const openModal = () => {
    modal.style.display = 'flex';
}

//next window
const nextWindow = () => {
    modal.style.display = 'none';
    allButtons.style.display = 'none';
    titleScreen.style.display = 'none';
    playerSelection.style.display = 'block'
}



const nextLevel = () =>{
    if (currentLevel == 0 || currentLevel == 1){
        window.alert('LEVEL ' + (currentLevel + 1) + ' COMPLETE')
        currentLevel += 1
        fishEaten = 0
        eaten.innerHTML = fishEaten;
        thisLevel.innerHTML = (currentLevel + 1);
        fishSpawn(currentLevel)
        piranhaMoveRender()
        if (currentLevel == 1){
            messageUpdate('THE SEA OF SILENCE...')
        }
    }
    else{
        window.alert('LEVEL ' + (currentLevel + 1) + ' COMPLETE')
        fishEaten = 0
    }
}


//checking if the players mouth hit a fish
const fishCollisionCheck = (food, player) => {
    let foodRect = food.getBoundingClientRect();
    let playerRect = player.getBoundingClientRect(); 
    return (foodRect.right >= playerRect.left && foodRect.left <= playerRect.right) && 
    (foodRect.bottom >= playerRect.top && foodRect.top <= playerRect.bottom);
  }


//render fish move animation, spawn in random y pos
const fishMoveRender = (fish, moveTime) => {
console.log(moveTime)

const randomHeight = -4

if (fish === 'gold'){
    currentFish = allEatingFish.innerHTML +=` <div class="fish" id="gold-fish" 
        style= "
        left: 110vw; top: ${randomHeight}vh;
        animation: fishmove ${moveTime}s linear infinite;
        ">
        <div class="fin"></div>
        <div class="mouth"></div>
        <div class="eye">
            <div class="m"></div>
        </div>
        <div class="g"id="gold-gill"></div>
        <div class="t1"id="gold-gill"></div>
        <div class="t2"id="gold-gill"></div>
        </div>`
    }

else {
    currentFish = allEatingFish.innerHTML +=` <div class="fish" id="${fish}-fish" 
        style= 
        "left: 60vw; top: ${randomHeight}vh;
        animation: fishmove ${moveTime}s linear infinite;">
        <div class="fin" id="${fish}-fin"></div>
        <div class="mouth"></div>
        <div class="eye">
            <div class="m"></div>
        </div>
        <div class="g" id="${fish}-gill"></div>
        <div class="t1" id="${fish}-tail"></div>
        <div class="t2" id="${fish}-tail"></div>
        </div>`
    }
}
   


//checks if level is complete
const fishEatenCheck = (currentFish) => {
    currentFish.style = `display: none;`
    fishEaten += 1;
    eaten.innerHTML = fishEaten;

    if (fishEaten == 7 && currentLevel == 0){
        // messageBar.innerHTML = `ONLY 3 FISH LEFT!`;
        messageUpdate('ONLY 3 FISH lEFT!!')
    }
    else if (fishEaten == 10 && currentLevel == 0){
        currentFish.style = `display: none;`
        nextLevel()
    }
    else if (fishEaten == 12 && currentLevel == 1){
        messageUpdate('ONLY 3 FISH lEFT!!')
    }
    else if (fishEaten == 15 && currentLevel == 1){
        currentFish.style = `display: none;`
        nextLevel()
    }
    else if (fishEaten == 17 && currentLevel == 2){
        messageUpdate('ONLY 3 FISH lEFT!!')
    }
    else if (fishEaten == 20 && currentLevel == 2){
        currentFish.style = `display: none;`
        nextLevel()
    }
}


const playerHealth = () => {
    if (newPlayerFish.hull <= 0){
        window.alert('YOU DIED. HIT RESTART');
        currentLevel = 0;
        fishEaten = 0;
        // allEatingFish.style = `display: none;`
        allEatingFish.innerHTML = `<div> YOU LOSE!</div>`
    }
}



//random selector
const randomSelector = (array, iterator) => {
    return levelParameter[array][Math.floor(Math.random() * iterator.length)]
}


// ---------------------------------//
// -------- EVENT LISTENERS --------//
// ---------------------------------//

salmonSelection.addEventListener('click', () => {
    playerSprite.innerHTML += `<img src="images/salomoneymaker-removebg-preview-modified.png" alt="">`;
    playerSelection.style.display = 'none';
    selectPlayer()
})

troutSelection.addEventListener('click', () => {
    playerSprite.innerHTML += `<img src="images/trickytrout-removebg-preview.png" alt="">`
    playerSelection.style.display = 'none';
    selectPlayer()

})

dogfishSelection.addEventListener('click', () => {
    playerSprite.innerHTML += `<img src="images/dogfishbossone-modified-removebg-preview.png" alt="">`
    playerSelection.style.display = 'none';
    selectPlayer()
})

//the start game button
gameStartButton.addEventListener('click', openModal)

//moves into the 
continueBtn.addEventListener('click', nextWindow)

//statrting position of the player
window.addEventListener('load', () => {
    playerSprite.style = `position: abolsute;
    left: 0;
    top: 100px;`
});


//when you hit an arrow key
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
    
    const playerBody = document.querySelector('.player-sprite > img')
    const playerMouth = document.querySelector('.mouth-contact')
    const allFishEls = document.querySelectorAll('.fish')
    
    allFishEls.forEach((thisFish)=>{
        if (fishCollisionCheck(thisFish, playerMouth)) {
            fishEatenCheck(thisFish)
        }
    })
    
   
    if (fishCollisionCheck(playerBody, pirahnhaContact)){
        playerBody.style = `animation: sprite-hit 1s linear;`
        newPlayerFish.hull = newPlayerFish.hull - newPiranha.hitpoints;
        hullUpdate.innerHTML = newPlayerFish.hull;
        console.log(newPlayerFish.hull)
        playerHealth()
    }

});






// fishSpawn(currentLevel)

// piranhaMoveRender()








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



