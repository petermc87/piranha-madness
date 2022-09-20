# Piranha Madness 

## Overview 
* Fish game where you have to eat all the fish without getting eaten by a piranha. You start off in a river, then in the sea, then in the ocean where you will eventually be free! 
* There are gold fish, red-snappers and krill to be eaten 
* You move to the next location after all the fish are eaten and you don't die 
* The story will continues until you get to the sea. You will be free once you get there 

## Title page 
* The piranha madness title with an animation is displayed on load
* The start game button is also displayed on load
  
## Game Description Modal
* Once game start is clicked, 
* The start game button is also displayed on load

## Game page 
* A stat bar at the bottom of the page will show the current level, health, number of fish eaten, and the name of the chosen fish
* The will be a live message bar at the top showing giving update messages, so keep and eye out for them!
* Your fish will spawn at a location on the top left of the screen
* The fish to be eaten will spawn on the right hand side of the page moving right to left and will move passed the full width of the screen. If you have not eaten a fish, it will re-appear at its original spawn and move iin the same direction again
 
## Gameplay
* Move around the screen using the arrow keys on your keyboard
* You have to eat all the fish on the screen without getting killed by the piranha
* The piranha will move in a pre-defined direction with varying speeds based on the piranha sprite

### Attributes 
* Each Piranha fish has speed and damage points 
* Your player fish will have hull points and speed 

### Moving to next level 
* Eat up all the dish to progress to the next level
* Each following level has an extra number of fish to be eaten. Level one is 10, level 2 is 15, and level 3 is 20
* After you have finished the third level, a final modal will pop up with a brief message

## Animations  
Keyframes animations for: 
* The linear movements of the food fish
* The movements of the piranhas
* The movement of the title up and down
* Roatation animation of the when it gets hit by a piranha

## Fonts
The following fonts were used throughout for consistency:
* Fonts/back-to-1982.regular.ttf - 1982
* RFonts/AGENTORANGE.TTF - agentorange

## Audio
* Intro music, in game music and ending music
* Sound affects for when you progress to the next level, you get hit, you eat a fish and also when you die

## Technologies Used
* JavaScript, HTML and CSS

## JavaScript Functions
* For detecting a clash with fish food or a piranha, getBoundingClient was used. It was set to detect a clash for all directions
* A template literal was used to render all the spawned fish for each level. Each individual fish div is added into the inner HTML of the parent div for all fish.

## Wireframe Images
* Wireframe for title page

![alt text](https://github.com/petermc87/project_1_piranha_madness/blob/main/images/Piranha%20Madness%20Wireframe_1.jpg)

* Wireframe for game page styling
![alt text](https://github.com/petermc87/project_1_piranha_madness/blob/main/images/Piranha%20Madness%20Wireframe_2.jpg)


* Wireframe for boss fight

![alt text](https://github.com/petermc87/project_1_piranha_madness/blob/main/images/Piranha%20Madness%20Wireframe_3.jpg)

* Wireframe for what happens when moving to next level

![alt text](https://github.com/petermc87/project_1_piranha_madness/blob/main/images/Piranha%20Madness%20Wireframe_4.jpg)



