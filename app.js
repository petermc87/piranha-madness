// ---------------------------------//
// -------- GLOBAL VARIABLES -------//
// ---------------------------------//

// ---------------------------------//
// -----------CACHED DOMS-----------//
// ---------------------------------//

const allEatingFish = document.querySelector('.all-fish')
const playerSprite = document.querySelector('.player-sprite')

// ---------------------------------//
// -------------CLASSES-------------//
// ---------------------------------//

// ---------------------------------//
// -------------OBJECTS-------------//aa
// ---------------------------------//

// ---------------------------------//
// ------------FUCNCTIONS ----------//
// ---------------------------------//


// ---------------------------------//
// -------- EVENT LISTENERS --------//
// ---------------------------------//

//Key up, down, left and right for moving the sprite


window.addEventListener('keydown', checkKeyPress, false);


function checkKeyPress(key){
    if (key.keyCode == '65'){
        // alert('the left arrow was pressed')
        playerSprite.style = 'transform: rotate(180deg);'
        playerSprite.style = 'transform: rotateY(180deg);'
    }

    else if (key.keyCode == '68'){
        //right using d
        playerSprite.style = `transform: rotate(0deg);`
        // playerSprite.style = 'animation: sprite-animation 1s infinite;'
    }

    else if (key.keyCode == '87'){
        // move up with w
        playerSprite.style = 'transform: rotate(-90deg);'
        // playerSprite.style = 'animation: sprite-animation 1s infinite;'

    }
    
    else if (key.keyCode == '83'){
        // down using s
        playerSprite.style = 'transform: rotate(90deg);'

    }   
    

    else if (key.keyCode == '69'){
        //up and right using e
        playerSprite.style = 'transform: rotate(-30deg);'
      
    }   

    else if (key.keyCode == '88'){
        //down and right with x
        playerSprite.style = 'transform: rotate(30deg);'

    }   
    else if (key.keyCode == '81'){
        //down and right with x
        // playerSprite.style = 'transform: rotateY(180deg);'
        playerSprite.style = 'transform: rotate(-150deg);'
        // playerSprite.style = 'transform: rotateY(180deg);'

    }   


}



