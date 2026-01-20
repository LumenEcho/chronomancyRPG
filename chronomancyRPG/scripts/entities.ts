import { Weapon } from "./weapon";
import { Armor } from "./armor";
import playerCharactersJSON from "../assets/data/playerCharacters.json";
import enemiesJSONData from "../assets/data/enemies.json";

//The class for every player character, enemy, and boss
export class Entity {
    //Constructs a new, non-player entity
    constructor(name: string, health: number, energy: number, breakPoints: number, physicalDefense: number, fireDefense: number, coldDefense: number, energyDefense: number, 
        psychicDefense: number, oureanDefense: number, blockChance: number, dodgeChance: number
    ) {
        this.name = name;
        this.maxHealth = health;
        this.currentHealth = health;
        this.maxEnergy = energy;
        this.currentEnergy = energy;
        this.maxBreakGauge = breakPoints;
        this.currentBreakGauge = breakPoints;
        this.physicalDefense = physicalDefense;
        this.fireDefense = fireDefense;
        this.coldDefensse = coldDefense;
        this.energyDefense = energyDefense;
        this.psychicDefense = psychicDefense;
        this.oureanDefense = oureanDefense;
        this.blockChance = blockChance;
        this.dodgeChance = dodgeChance;
    }

    name: string;
    maxHealth: number;
    currentHealth: number;
    maxEnergy: number;
    currentEnergy: number;
    maxBreakGauge: number;
    currentBreakGauge: number;

    physicalDefense: number;
    fireDefense: number;
    coldDefensse: number;
    energyDefense: number;
    psychicDefense: number;
    oureanDefense: number;

    blockChance: number;
    dodgeChance: number;

    skills: string[];


}

export class playerCharacter extends Entity {
        constructor(name: string, health: number, energy: number, breakPoints: number, physicalDefense: number,  fireDefense: number, coldDefense: number, energyDefense: number, 
        psychicDefense: number, oureanDefense: number, blockChance: number, dodgeChance: number, species: string
    ) {
        super(name, health, energy, physicalDefense, breakPoints, fireDefense, coldDefense, energyDefense, psychicDefense, oureanDefense, blockChance, dodgeChance);
        this.species = species;
    }
    species: string;
    armor: Armor = new Armor("Traveler's Garb");
    weapon: Weapon = new Weapon("Iron Sword");
}

interface entityInterface {
    name: string;
    maxHealth: number;
    currentHealth: number;
    maxEnergy: number;
    currentEnergy: number;
    maxBreakGauge: number;
    currentBreakGauge: number;

    physicalDefense: number;
    fireDefense: number;
    coldDefensse: number;
    energyDefense: number;
    psychicDefense: number;
    oureanDefense: number;

    blockChance: number;
    dodgeChance: number;

    skills: string[];
}

interface playerCharacterInterface extends entityInterface {
    species: string;
    armor: string;
    weapon: string
}