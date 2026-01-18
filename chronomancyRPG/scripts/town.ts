//This page is a generic page to load a town
import townJSONData from "../assets/data/towns.json"

//Variables
let playerLocation: string = localStorage.getItem("Location");
let townData: Record<string, town> = townJSONData;

//DOM elements
let townBannerElement = document.getElementById("townNameBanner");
let townBody = document.querySelector("body");

//Defines the town interface for retrieving the JSON data
interface town {
    name: string,
    description: string,
    faction: string,
    primaryColor: string,
    hoverColor: string
}

//Sets everything up for whatever specific town the user is in
function setTown(playerLocation: string): void {
    let currentTownObject: town = townData[playerLocation];
    console.log(currentTownObject);
}

setTown(playerLocation);