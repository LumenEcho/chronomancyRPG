//This page is a generic page to load a town
import townJSONData from "../assets/data/towns.json"
import * as entities from "./entities";
import * as functions from "./functions";

//Variables
let playerLocation: string = functions.getStorageString("Location");
console.log(playerLocation);
let playerGold: number = functions.getStorageNum("Gold");
let currentHour: number = functions.getStorageNum("Hour");
let townData: Record<string, town> = townJSONData;
let currentTown: town = townData[playerLocation];
let playerParty: entities.playerCharacter[] = [];

//DOM elements
let townBannerElement: HTMLElement = document.getElementById("townNameBanner");
let townBody: HTMLElement = document.querySelector("body");
let exploreBox: HTMLElement = document.getElementById("exploreBox");
let tavernBox: HTMLElement = document.getElementById("tavernBox");
let shopBox: HTMLElement = document.getElementById("shopBox");
let restBox: HTMLElement = document.getElementById("restBox");
let syncBox: HTMLElement = document.getElementById("syncBox");
let infoBox: HTMLElement = document.getElementById("infoBox");
let mapBox: HTMLElement = document.getElementById("mapBox");

//Button event listeners
exploreBox.addEventListener("click", (e) => {
    explore();
})

tavernBox.addEventListener("click", (e) => {
    tavern();
})

shopBox.addEventListener("click", (e) => {
    shop();
})

//Restores the party's health and energy. Costs 10 gold and takes 3 hours
restBox.addEventListener("click", (e) => {
    if (playerGold >= 10) {
        playerGold = functions.updateStorageNum("Gold", playerGold - 10);
        currentHour = functions.updateStorageNum("Hour", currentHour + 3);
        for (let i = 0; i < playerParty.length; i++) {
            playerParty[i].currentHealth = playerParty[i].maxHealth;
            playerParty[i].currentEnergy = playerParty[i].maxEnergy;
        }
        alert("Your party's health and energy have been restored");
    }
    else {
        alert("You do not have enough gold to rest. You need at least 10 gold");
    }

})

syncBox.addEventListener("click", (e) => {

})

infoBox.addEventListener("click", (e) => {

})

mapBox.addEventListener("click", (e) => {

})


//Defines the town interface for retrieving the JSON data
interface town {
    name: string,
    description: string,
    faction: string,
    primaryColor: string,
    hoverColor: string
}



//Does setup for the current town
setTown(currentTown);







//Sets everything up for whatever specific town the user is in
function setTown(currentTown: town): void {
    let townBannerPath: string = "";
    let townBackdropPath: string = "";
    console.log(currentTown);

    //Change UI colors
    document.documentElement.style.setProperty("--primary-town-color", currentTown.primaryColor);
    document.documentElement.style.setProperty("--hover-town-color", currentTown.hoverColor);
    /*switch (playerLocation) {
        case "Matlocke":

    }*/
}

//TODO functions
function explore() { };

function tavern() { };

function shop() { };