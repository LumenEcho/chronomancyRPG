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
let playerParty: entities.playerCharacter[] = functions.getJSONStorageString("Party");
console.log(playerParty); //debugging
let partySyncLocation: string = functions.getStorageString("Sync");

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

let infoModal: HTMLDialogElement = document.getElementById("infoModal") as HTMLDialogElement;
let infoModalCloseButton: HTMLElement = document.getElementById("infoCloseButton");
let infoTownTitle: HTMLElement = document.getElementById("infoTownTitle");
let infoTownImage: HTMLImageElement = document.getElementById("infoTownImage") as HTMLImageElement;
let infoTownDescription: HTMLElement = document.getElementById("infoTownDescription");

let statusModal: HTMLDialogElement = document.getElementById("statusModal") as HTMLDialogElement;

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
        functions.updateJSONStorageString("Party", playerParty);
        alert("Your party's health and energy have been restored");
    }
    else {
        alert("You do not have enough gold to rest. You need at least 10 gold");
    }

})

//Syncs to the statue in the town
syncBox.addEventListener("click", (e) => {
    partySyncLocation = functions.updateStorageString("Sync", currentTown.name);
    alert(`You have synced to the statue at ${currentTown.name}. You will now start the next day here`);
})

//Opens the town info modal
infoBox.addEventListener("click", (e) => {
    infoTownTitle.textContent = currentTown.name;
    infoModal.style.backgroundImage = "url(" + getTownInfoIcon(currentTown.name) + ")";
    infoTownDescription.textContent = currentTown.description;

    infoModal.style.display = "flex";
    infoModal.showModal();
})

//Closes the info modal
infoModalCloseButton.addEventListener("click", (e) => {
    infoModal.style.display = "none";
    infoModal.close();
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

let newCritter = new entities.Entity("Bandit");





//Functions:

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

//Takes the name of a town and retrieves its info dialog icon
function getTownInfoIcon(townName: string): string {
    let relativePathStarter = "../assets/townIcons/";
    let finishPath = "";
    switch(townName) {
        case "Matlocke":
            finishPath = "matlockeIcon.png";
            break;
    }

    return (relativePathStarter + finishPath);
}

//TODO functions
function explore() { };

function tavern() { };

function shop() { };