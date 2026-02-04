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

//Assigns turn order
for (let i = 0; i < (party.length + enemyParty.length); i++) {
    //If checking a player party member
    if (i < party.length) {
        //First speed
        if (i === 0) {
            speedsArray.push(party[i].speed);
            turnOrderArray.push(i);
            console.log(turnOrderArray);
        }
        else {
            //If speed is higher than the first speed
            if (party[i].speed > speedsArray[0]) {
                //Move over all elements and insert new speed first
                for (let j = speedsArray.length + 1; j > 0; j--) {
                    speedsArray[j] = speedsArray[j - 1];
                    turnOrderArray[j] = turnOrderArray[j - 1];
                }
                //Assign new speed and index to the first index of the arrays
                speedsArray[0] = party[i].speed;
                turnOrderArray[0] = i;
            }
            //If speed is not greater than the first element
            else {
                //Check if the speed is higher then any speed in the array
                for (let j = 0; j < speedsArray.length; j++) {
                    //If speed is higher than another speed, move over all the following elements and insert the new speed and index
                    if (party[i].speed > speedsArray[j]) {
                        for (let m = speedsArray.length + 1; m > j; m--) {
                            speedsArray[m] = speedsArray[m - 1];
                            turnOrderArray[m] = turnOrderArray[m - 1];
                        }
                        speedsArray[j] = party[i].speed;
                        turnOrderArray[j] = i;
                    }
                    else {
                        //If the speed isn't higher than any speed, insert it at the end of the arrays
                        speedsArray.push(party[i].speed);
                        turnOrderArray.push(i);
                    }
                }
            }
        }
    }
    //Does the same thing for the enemies
    else {
        //If speed is higher than the first speed
        if (enemyParty[i - party.length].speed > speedsArray[0]) {
            //Move over all elements and insert new speed first
            for (let j = speedsArray.length + 1; j > 0; j--) {
                speedsArray[j] = speedsArray[j - 1];
                turnOrderArray[j] = turnOrderArray[j - 1];
            }
            //Assign new speed and index to the first index of the arrays
            speedsArray[0] = enemyParty[i - party.length].speed;
            turnOrderArray[0] = i;
        }
        //If speed is not greater than the first element
        else {
            //Check if the speed is higher then any speed in the array
            for (let j = 0; j < speedsArray.length; j++) {
                //If speed is higher than another speed, move over all the following elements and insert the new speed and index
                if (enemyParty[i - party.length].speed > speedsArray[j]) {
                    for (let m = speedsArray.length + 1; m > j; m--) {
                        speedsArray[m] = speedsArray[m - 1];
                        turnOrderArray[m] = turnOrderArray[m - 1];
                    }
                    speedsArray[j] = enemyParty[i - party.length].speed;
                    turnOrderArray[j] = i;
                }
                else {
                    //If the speed isn't higher than any speed, insert it at the end of the arrays
                    speedsArray.push(enemyParty[i - party.length].speed);
                    turnOrderArray.push(i);
                }
            }
        }
    }
}

console.log(turnOrderArray);
