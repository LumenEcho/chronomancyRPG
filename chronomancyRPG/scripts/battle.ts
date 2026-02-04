import * as functions from "./functions";
import { Armor } from "./armor";
import { Weapon } from "./weapon";
import * as entities from "./entities";

//Party variables
let party: entities.playerCharacter[] = functions.getJSONStorageString("Party");
let enemyParty: entities.Entity[] = [];
//For the turn order array, it takes the IDs of the players as normal
//And the IDs of the enemies are length of playerID + the actual id
//To get speed to work. IDs correlate to an entity
let turnOrderArray: number[] = [];
//Parallel array for holding speeds
let speedsArray: number[] = [];

//DOM
let battleScene: HTMLElement = document.getElementById("battleScene");
let partyBoxes = document.getElementsByClassName("battleBox") as HTMLCollectionOf<playerBattleBoxInterface>;
let enemyBoxes = document.getElementsByClassName("enemyBox") as HTMLCollectionOf<enemyBattleBoxInterface>;
let turnIdentifier: HTMLElement = document.getElementById("turnIdentifier");
let attackBox: HTMLElement = document.getElementById("attackBox");
let guardBox: HTMLElement = document.getElementById("guardBox");
let treancyBox: HTMLElement = document.getElementById("treancyBox");
let chronomancyBox: HTMLElement = document.getElementById("chronomancyBox");
let skillsBox: HTMLElement = document.getElementById("skillsBox");
let itemsBox: HTMLElement = document.getElementById("itemsBox");
let fleeBox: HTMLElement = document.getElementById("fleeBox");

//Event listeners
attackBox.addEventListener("click", (e) => {
    alert("You attack!");
})

guardBox.addEventListener("click", (e) => {
    alert("You guard the attack");
})

treancyBox.addEventListener("click", (e) => {

})

chronomancyBox.addEventListener("click", (e) => {

})

skillsBox.addEventListener("click", (e) => {

})

itemsBox.addEventListener("click", (e) => {

})

fleeBox.addEventListener("click", (e) => {
    alert("You have fled the battle. No rewards have been given");
    window.location.href = "../html/town.html";
})


//Interfaces to associate player and enemy objects with their respective battle boxes
interface playerBattleBoxInterface extends HTMLElement {
    player: entities.playerCharacter;
}

interface enemyBattleBoxInterface extends HTMLElement {
    enemy: entities.Entity;
}

//Sets battle background. Currently static
battleScene.style.backgroundImage = "url(../assets/backdrops/savannahBattle.png)";

//Assign player images to boxes
for (let i = 0; i < party.length; i++) {
    console.log(party[i]);
    partyBoxes[i].player = party[i];
    partyBoxes[i].style.backgroundImage = "url(../assets/sprites/" + party[i].name + "/battlePose.png)";
}

//Assign enemies to boxes. TODO: Maybe do these in inverse order
for (let i = 0; i < enemyParty.length; i++) {
    console.log(enemyParty[i]);
    enemyBoxes[i].enemy = enemyParty[i];
    enemyBoxes[i].style.backgroundImage = "url(../assets/sprites/" + enemyParty[i].name + "/battlePose.png)";
}

//Assigns Turn Orders
for (let i = 0; i < (party.length + enemyParty.length); i++) {
    //If current entity is in the party by index
    if (i < party.length) {
        //If there is no one in the speed arrays, push to the arrays
        if (turnOrderArray.length === 0) {
            turnOrderArray.splice(0, 0, i);
            speedsArray.splice(0, 0, party[i].speed)
        }
        //If this is not the first element, compare to each other element
        else {
            //Iterate through every speed already in the array and compare
            for (let j = 0; j < speedsArray.length; j++) {
                //If the current member's speed is higher than the currently accessed speed, splice it in
                if (party[i].speed >= speedsArray[j]) {
                    turnOrderArray.splice(j, 0, i);
                    speedsArray.splice(j, 0, party[i].speed);
                    break;
                }
            }
            //Compares i to the current length of speeds array to see if a value was added. If not, push to the end
            if (speedsArray.length === i) {
                turnOrderArray.push(i);
                speedsArray.push(party[i].speed);
            }
        }
    }
    //If current entity is in the enemy party by index
    //Does the same logic as above, but doesn't have or need the first element check
    else {
        for (let j = 0; j < speedsArray.length; j++) {
            if (enemyParty[i].speed >= speedsArray[i]) {
                turnOrderArray.splice(j, 0, i);
                speedsArray.splice(j, 0, enemyParty[i].speed);
            }
        }
        if (speedsArray.length === 1) {
            turnOrderArray.push(i);
            speedsArray.push(enemyParty[i].speed);
        }
    }
}
console.log(turnOrderArray);
