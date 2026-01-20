import { playerCharacter } from "./entities";
let party: playerCharacter[] = [];

localStorage.setItem("Location", "Matlocke")
localStorage.setItem("Gold", "100");
localStorage.setItem("Hour", "11");

//Creates player chracters and adds them to party
let playerFestus = new playerCharacter();
let playerJon = new playerCharacter();
let playerOhtar = new playerCharacter();
let playerVincenzo = new playerCharacter();

party.push(playerFestus);
party.push(playerJon);
party.push(playerOhtar);
party.push(playerVincenzo);