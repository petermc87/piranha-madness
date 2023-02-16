// ---------------------------------//
// -------- GLOBAL VARIABLES -------//
// ---------------------------------//

let move = null
let fishEaten = 0
let currentLevel = 0
let newPlayerFish = null

// audio
const intro = new Audio('sounds/intro.mp3')
intro.volume = 0.3
const select = new Audio('sounds/select.mp3')
select.load()
const ouch = new Audio('sounds/ouch.mp3')
ouch.load()
const die = new Audio('sounds/die.mp3')
die.volume = 0.8
const ending = new Audio('sounds/ending.mp3')
const inGame = new Audio('sounds/ingame.mp3')
inGame.loop = true
const eat = new Audio('sounds/eat.mp3')
eat.load()
const complete = new Audio('sounds/complete.mp3')
complete.load()

// ---------------------------------//
// -----------CACHED DOMS-----------//
// ---------------------------------//

// all eating fish sprites
const allEatingFish = document.querySelector('.all-sprites')

// player sprite
const playerSprite = document.querySelector('.player-sprite')
const imageContainer = document.querySelector('.image-container')

// piranha
const piranhaEl = document.querySelector('.piranha-sprite')
const piranhaOne = document.getElementById('first-piranha')
const pirahnhaContact = document.querySelector('.piranha-contact')
const piranhaTwo = document.getElementById('second-piranha')
const piranhaOneContact = document.getElementById('pir-one-contact')
const piranhaTwoContact = document.getElementById('pir-two-contact')

// title screen
const titleScreen = document.querySelector('.title')

// background images
const bottomImage = document.querySelector('.bottom-image')

// starting modals
const gameStartButton = document.querySelector('#openModal')
const modal = document.querySelector('#modal')
const continueBtn = document.querySelector('#continue')
const allButtons = document.querySelector('.modal-buttons')

// next level & dying modal
const nextLevelModal = document.querySelector('.next-level')
const levelCompleteText = document.getElementById('level-text')
const levelCompleteModalBox = document.getElementById('next-level-text')
const restartText = document.getElementById('restart')

// stats
const hullUpdate = document.getElementById('hull')
const eaten = document.getElementById('eaten')
const thisLevel = document.getElementById('level')
const thisFish = document.getElementById('name')
const statContainer = document.querySelector('.stat-container')
const messageBar = document.querySelector('.message-panel')
const liveMessage = document.querySelector('.live-message')
const playerSelection = document.getElementById('selection')

// fish selection containers
const salmonSelection = document.getElementById('silly-salmon')
const dogfishSelection = document.getElementById('dogfish-darcy')
const troutSelection = document.getElementById('trout-magic')
// stat boxes
const dogfishStats = document.getElementById('dogfish-stats')
const salmonStats = document.getElementById('salmon-stats')
const troutStats = document.getElementById('trout-stats')
// stat spans for each fish
const dogfishHealth = document.getElementById('dogfish-health')
const dogfishSpeed = document.getElementById('dogfish-speed')
const salmonHealth = document.getElementById('salmon-health')
const salmonSpeed = document.getElementById('salmon-speed')
const troutHealth = document.getElementById('trout-health')
const troutSpeed = document.getElementById('trout-speed')
// play game button
const playGameBtn = document.getElementById('play')

// back button
const backBtn = document.getElementById('back')

// on screen buttons
const onScreenButtons = document.querySelector('.game-button-wrapper')

// ---------------------------------//
// -------------CLASSES-------------//
// ---------------------------------//

class Piranha {
  constructor (name, hitpoints, speed) {
    this.name = name
    this.hitpoints = hitpoints
    this.speed = speed
  }

  generatePiranha () {

  }
}

class playerFish {
  constructor (name, hull, speed) {
    this.name = name
    this.hull = hull
    this.speed = speed
  }

  hullDamage () {
    return this.hull - newPiranha.hitpoints
  }
}

// ---------------------------------//
// -------------OBJECTS-------------//
// ---------------------------------//
const piranhaKillers = [
  new Piranha('Slick Rick', 2, 7),
  new Piranha('Billy Bully', 4, 8)
  // new Piranha('Stabby Gabby', 1.5, 4)
]

const fishPlayers = [
  new playerFish('Dogfish Darcy', 20, 17),
  new playerFish('Silly Salmon', 15, 24),
  new playerFish('Trouty Magic', 25, 12)
]

const levelParameter = [
  ['krill', 'gold', 'red'],
  [10, 15, 20],
  [10, 8, 3, 6, 12, 4, 5, 7, 9, 13, 14]
]

// instantiating two new piranhas
const newPiranhaFishOne = piranhaKillers[0]
const newPiranhaFishTwo = piranhaKillers[1]

// ---------------------------------//
// ------------FUNCTIONS ----------//
// ---------------------------------//

// generate random height for the fish to spawn
const fishRandomHeight = () => {
  return Math.random() * 80
}

// resetting the game
const gameReset = () => {
  playerSprite.innerHTML = '<div class="mouth-contact"></div>'
  playerSprite.style.display = 'none'
  piranhaEl.style.display = 'none'
  statContainer.style.display = 'none'
  messageBar.style.display = 'none'
  titleScreen.style.display = 'block'
  gameStartButton.style.display = 'block'
  bottomImage.style.display = 'none'
  allEatingFish.innerHTML = ''
  piranhaTwo.style.display = 'none'
  fishPlayers[0].hull = '20'
  fishPlayers[1].hull = '15'
  fishPlayers[2].hull = '25'
  fishEaten = 0
  currentLevel = 0
  ending.pause()
}

// updating the floor image
const bottomImageUpdate = (image) => {
  bottomImage.innerHTML = `<img src="images/${image}" class ='back-images' alt="river-bed-image">`
}

// player fish seletion at the selection modal
const playerFishSelection = (fishSelection) => {
  newPlayerFish = (fishPlayers[fishSelection])
  playerSelection.style.display = 'none'
  onScreenButtons.style.display = 'block'
  move = newPlayerFish.speed
  console.log(newPlayerFish.hull)
}

// selecting a player
const selectPlayer = () => {
  playerSelection.style.display = 'none'
  playerSprite.style.display = 'block'
  piranhaOne.style.display = 'block'
  hullUpdate.innerHTML = newPlayerFish.hull
  thisFish.innerHTML = newPlayerFish.name
  thisLevel.innerHTML = '1'
  eaten.innerHTML = '0'
  statContainer.style.display = 'block'
  messageBar.style.display = 'block'
  messageUpdate('THE RIVER OF DESTINY...')
  bottomImageUpdate('riverbed.png')
  fishSpawn(currentLevel)
}

// renders the piranhas spped
const piranhaRender = () => {
  if (currentLevel == 0) {
    piranhaOne.style = `
        animation: piranha-one ${newPiranhaFishOne.speed}s ease-in-out infinite;
        display: block`
  } else if (currentLevel == 1) {
    piranhaOne.style.display = 'none'
    piranhaTwo.style = `
        animation: piranha-two ${newPiranhaFishTwo.speed}s ease-in-out infinite;
        display: block`
  } else if (currentLevel == 2) {
    piranhaOne.style.display = 'block'
  }
}

// message bar update
const messageUpdate = (thisMessage) => {
  liveMessage.innerHTML = `<h3>${thisMessage}</h3>`
}

// fish spawning
const fishSpawn = (currentLevel) => {
  for (i = 0; i < levelParameter[1][currentLevel]; i++) {
    // random select fish
    const randomFish = randomSelector(0, levelParameter[0])
    // select random time
    const randomTime = randomSelector(2, levelParameter[2])
    fishMoveRender(randomFish, randomTime)
  }
}

// opening the main modal window
const openModal = () => {
  modal.style.display = 'flex'
}

// next window
const nextWindow = () => {
  modal.style.display = 'none'
  allButtons.style.display = 'none'
  titleScreen.style.display = 'none'
  playerSelection.style.display = 'block'
}

// back button pressed
const goBack = () => {
  console.log('go back')
  playerSelection.style.display = 'none'
  openModal()
}

const nextLevel = () => {
  // changing from level 1 to level 2
  if (currentLevel == 0) {
    // display level complete
    nextLevelModal.style.display = 'block'
    complete.play()
    levelCompleteText.innerHTML = `LEVEL ${currentLevel + 1} COMPLETE. YOU ARE ONE LUCKY FISH`
    restartText.innerHTML = 'CONTINUE'
    // reset numbers
    currentLevel += 1
    fishEaten = 0
    eaten.innerHTML = fishEaten
    thisLevel.innerHTML = currentLevel + 1
    bottomImageUpdate('Seabed.jpg')
    messageUpdate('THE SEA OF SILENCE...')
  } else if (currentLevel == 1) {
    // display level complete
    nextLevelModal.style.display = 'block'
    complete.play()
    levelCompleteText.innerHTML = `LEVEL ${currentLevel + 1} COMPLETE. OMG, YOU ARE REALLY GOOD AT THIS.`
    restartText.innerHTML = 'CONTINUE'
    // reset
    currentLevel += 1
    fishEaten = 0
    eaten.innerHTML = fishEaten
    thisLevel.innerHTML = currentLevel + 1
    // create new level
    bottomImageUpdate('oceanbed.png')
    messageUpdate('FREEDOM OCEAN...')
  } else {
    currentLevel += 1
    nextLevelModal.style.display = 'block'
    inGame.pause()
    ending.play()
    // nextLevelModal.style = `
    // background-color: white;
    // animation fade-to-white 5s linear;`
    levelCompleteText.innerHTML = `LEVEL ${currentLevel} COMPLETE. YOU ARE FREE!!!
        I COMMEND YOU ${newPlayerFish.name} ON YOUR EFFORTS. HURRHHAAH! BUT THERE ARE 
        MORE PIRANHA COMING, YOU NEED TO SWIM TO SAFETY NOW!`
    restartText.innerHTML = 'RESTART'
    fishEaten = 0
  }
}

// checking if the players mouth hit a fish
const fishCollisionCheck = (food, player) => {
  const foodRect = food.getBoundingClientRect()
  const playerRect = player.getBoundingClientRect()
  return (foodRect.right >= playerRect.left && foodRect.left <= playerRect.right) &&
    (foodRect.bottom >= playerRect.top && foodRect.top <= playerRect.bottom)
}

// render fish move animation, spawn in random y pos
const fishMoveRender = (fish, moveTime) => {
  const randomHeight = fishRandomHeight()
  if (fish === 'gold') {
    currentFish = allEatingFish.innerHTML += ` <div class="fish" id="gold-fish" 
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
  } else {
    currentFish = allEatingFish.innerHTML += ` <div class="fish" id="${fish}-fish" 
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

// checks if level is complete
const fishEatenCheck = (currentFish) => {
  currentFish.style = 'display: none;'
  eat.play()
  fishEaten += 1
  eaten.innerHTML = fishEaten

  if (fishEaten == 7 && currentLevel == 0) {
    messageUpdate('LESS THAN 4 FISH lEFT!!')
  } else if (fishEaten == 10 && currentLevel == 0) {
    currentFish.style = 'display: none;'
    nextLevel()
  } else if (fishEaten == 12 && currentLevel == 1) {
    messageUpdate('LESS THAN 4 FISH lEFT!!')
  } else if (fishEaten == 15 && currentLevel == 1) {
    currentFish.style = 'display: none;'
    nextLevel()
  } else if (fishEaten == 17 && currentLevel == 2) {
    messageUpdate('LESS THAN 4 FISH lEFT!!')
  } else if (fishEaten == 20 && currentLevel == 2) {
    currentFish.style = 'display: none;'
    nextLevel()
  }
}

// makes changes based on players health
const playerHealth = () => {
  if (newPlayerFish.hull > 0 && newPlayerFish.hull < 10) {
    messageUpdate('LESS THAN 10 HEALTH POINTS LEFT!')
  }

  if (newPlayerFish.hull <= 0) {
    currentLevel = 0
    fishEaten = 0
    nextLevelModal.style.display = 'block'
    inGame.pause()
    die.play()
    messageUpdate('YOU LOSE! DEATH BY PIRANHA 💀')
    levelCompleteText.innerHTML = 'YOU LOSE! DEATH BY PIRANHA 💀'
    restartText.innerHTML = 'RESTART'
  }
}

// random selector
const randomSelector = (array, iterator) => {
  return levelParameter[array][Math.floor(Math.random() * iterator.length)]
}

// ---------------------------------//
// -------- EVENT LISTENERS --------//
// ---------------------------------//

// moving to the next level
levelCompleteModalBox.addEventListener('click', () => {
  nextLevelModal.style.display = 'none'
  if (currentLevel == 1 || currentLevel == 2) {
    fishSpawn(currentLevel)
    piranhaRender()
  } else if (currentLevel == 3) {
    // console.log('restting after final level')
    gameReset()
  }

  if (newPlayerFish.hull <= 0) {
    gameReset()
  }
})

// selecting player fish
salmonSelection.addEventListener('click', () => {
  playerSprite.innerHTML += '<img src="images/salomoneymaker-removebg-preview-modified.png" alt="">'
  playerFishSelection(1)
  selectPlayer()
  select.play()
  intro.pause()
  inGame.play()
})

troutSelection.addEventListener('click', () => {
  playerSprite.innerHTML += '<img src="images/trickytrout-removebg-preview.png" alt="">'
  playerSelection.style.display = 'none'
  playerFishSelection(2)
  selectPlayer()
  select.play()
  intro.pause()
  inGame.play()
})

dogfishSelection.addEventListener('click', () => {
  playerSprite.innerHTML += '<img src="images/dogfishbossone-modified-removebg-preview.png" alt="">'
  playerSelection.style.display = 'none'
  playerFishSelection(0)
  selectPlayer()
  select.play()
  intro.pause()
  inGame.play()
})

// the start game button
gameStartButton.addEventListener('click', () => {
  openModal()
  select.play()
  intro.play()
})

// moves into the next window for fish selection
continueBtn.addEventListener('click', () => {
  nextWindow()
  select.play()
})

// back button
backBtn.addEventListener('click', () => {
  console.log('cickled')
  goBack()
  select.play()
})

// statrting position of the player
window.addEventListener('load', () => {
  playerSprite.style = `position: absolute;
    left: 0;
    top: 100px;`
})

// when you hit an arrow key
window.addEventListener('keydown', (evt) => {
  switch (evt.key) {
    case 'ArrowLeft':
      playerSprite.style.left = parseInt(playerSprite.style.left) - move + 'px'
      break

    case 'ArrowRight':
      playerSprite.style.left = parseInt(playerSprite.style.left) + move + 'px'
      break

    case 'ArrowUp':
      playerSprite.style.top = parseInt(playerSprite.style.top) - move + 'px'
      break

    case 'ArrowDown':
      playerSprite.style.top = parseInt(playerSprite.style.top) + move + 'px'
      break
  }

  const playerBody = document.querySelector('.player-sprite > img')
  const playerMouth = document.querySelector('.mouth-contact')
  const allFishEls = document.querySelectorAll('.fish')

  // eating fish collision
  allFishEls.forEach((thisFish) => {
    if (fishCollisionCheck(thisFish, playerMouth)) {
      fishEatenCheck(thisFish)
    }
  })

  // piranha fish collision
  if (fishCollisionCheck(playerBody, piranhaOneContact)) {
    playerBody.style = 'animation: sprite-hit 1s linear;'
    ouch.play()
    if (currentLevel == 0 || currentLevel == 2) {
      // playerBody.style = `animation: sprite-hit 1s linear;`
      newPlayerFish.hull = newPlayerFish.hull - newPiranhaFishOne.hitpoints
      hullUpdate.innerHTML = newPlayerFish.hull
      console.log(newPlayerFish.hull)
      playerHealth()
    }
  } else if (fishCollisionCheck(playerBody, piranhaTwoContact)) {
    ouch.play()
    if (currentLevel == 1 || currentLevel == 2) {
      // playerBody.style = `animation: sprite-hit 1s linear;`
      newPlayerFish.hull = newPlayerFish.hull - newPiranhaFishTwo.hitpoints
      hullUpdate.innerHTML = newPlayerFish.hull
      console.log(newPlayerFish.hull)
      playerHealth()
    }
  }
})
