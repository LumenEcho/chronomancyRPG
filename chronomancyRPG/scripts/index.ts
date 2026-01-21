import { playerCharacter } from "./entities";
import * as functions from "./functions";
let party: playerCharacter[] = [];

localStorage.setItem("Location", "Matlocke")
localStorage.setItem("Gold", "100");
localStorage.setItem("Hour", "11");
localStorage.setItem("Sync", "Matlocke");

//Creates player chracters and adds them to party
let playerFestus = new playerCharacter("Festus");
let playerJon = new playerCharacter("Jon");
let playerOhtar = new playerCharacter("Ohtar");
let playerVincenzo = new playerCharacter("Vincenzo");

party.push(playerFestus);
party.push(playerJon);
party.push(playerOhtar);
party.push(playerVincenzo);

functions.updateJSONStorageString("Party", party);