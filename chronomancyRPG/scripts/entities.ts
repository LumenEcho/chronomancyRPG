import { Weapon } from "./weapon";
import { Armor } from "./armor";
import playerCharactersJSON from "../assets/data/playerCharacters.json";
import enemiesJSONData from "../assets/data/enemies.json";

//The class for every player character, enemy, and boss
export class Entity {
    //Constructs a new, non-player entity. THe optional second argument should be false if creating a player-style entity
    constructor(enemyName: string, enemy: boolean = true) {
        if (enemy) {
            let entitiesData: Record<string, entityInterface> = enemiesJSONData;
            let currentEntity = entitiesData[enemyName];

            this.name = currentEntity.name;
            this.maxHealth = currentEntity.health;
            this.currentHealth = currentEntity.health;
            this.maxEnergy = currentEntity.energy;
            this.currentEnergy = currentEntity.energy;
            this.maxBreakGauge = currentEntity.breakpoints;
            this.currentBreakGauge = currentEntity.breakpoints;
            this.speed = currentEntity.speed;
            this.physicalDefense = currentEntity.physicalDefense;
            this.fireDefense = currentEntity.fireDefense;
            this.coldDefensse = currentEntity.coldDefense;
            this.energyDefense = currentEntity.energyDefense;
            this.psychicDefense = currentEntity.psychicDefense;
            this.oureanDefense =currentEntity. oureanDefense;
            this.blockChance = currentEntity.blockChance;
            this.dodgeChance = currentEntity.dodgeChance;
            this.skills = currentEntity.skills;
            console.log(this); //debugging
        }
    }

    name: string = "";
    maxHealth: number = 0;
    currentHealth: number = 0;
    maxEnergy: number = 0;
    currentEnergy: number = 0;
    maxBreakGauge: number = 0;
    currentBreakGauge: number = 0;
    speed: number = 0;

    physicalDefense: number = 0;
    fireDefense: number = 0;
    coldDefensse: number = 0;
    energyDefense: number = 0;
    psychicDefense: number = 0;
    oureanDefense: number = 0;

    blockChance: number = 0;
    dodgeChance: number = 0;

    skills: string[] = [];


}

export class playerCharacter extends Entity {
    constructor(entityName: string) {
        super(entityName, false);
        let playerCharactersData: Record<string, playerCharacterInterface> = playerCharactersJSON;
        let currentEntity = playerCharactersData[entityName];

        this.name = currentEntity.name;
        this.maxHealth = currentEntity.health;
        this.currentHealth = currentEntity.health;
        this.maxEnergy = currentEntity.energy;
        this.currentEnergy = currentEntity.energy;
        this.maxBreakGauge = currentEntity.breakpoints;
        this.currentBreakGauge = currentEntity.breakpoints;
        this.speed = currentEntity.speed;
        this.physicalDefense = currentEntity.physicalDefense;
        this.fireDefense = currentEntity.fireDefense;
        this.coldDefensse = currentEntity.coldDefense;
        this.energyDefense = currentEntity.energyDefense;
        this.psychicDefense = currentEntity.psychicDefense;
        this.oureanDefense =currentEntity. oureanDefense;
        this.blockChance = currentEntity.blockChance;
        this.dodgeChance = currentEntity.dodgeChance;
        this.skills = currentEntity.skills;
        this.species = currentEntity.species;
        this.armor = new Armor(currentEntity.armorName);
        this.weapon = new Weapon(currentEntity.weaponName);
        console.log(this); //debugging

    }
    species: string;
    armor: Armor;
    weapon: Weapon;
}

interface entityInterface {
    name: string;
    health: number;
    energy: number;
    breakpoints: number;
    speed: number;

    physicalDefense: number;
    fireDefense: number;
    coldDefense: number;
    energyDefense: number;
    psychicDefense: number;
    oureanDefense: number;

    blockChance: number;
    dodgeChance: number;

    skills: string[];
}

interface playerCharacterInterface extends entityInterface {
    species: string;
    armorName: string;
    weaponName: string;
}