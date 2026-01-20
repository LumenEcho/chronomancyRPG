import armorsDataJSON from "../assets/data/armors.json";


export class Armor {
    constructor(armorName: string) {
        let armorData: Record<string, armorInterface> = armorsDataJSON;
        let currentArmor = armorData[armorName]
        this.name = currentArmor.name;
        this.physicalDefense = currentArmor.physicalDefense;
        this.fireDefense = currentArmor.fireDefense;
        this.coldDefense = currentArmor.coldDefense;
        this.energyDefense = currentArmor.coldDefense;
        this.psychicDefense = currentArmor.psychicDefense;
        this.oureanDefense = currentArmor.oureanDefense;
        this.price = currentArmor.price;
    }

    name: string;
    physicalDefense: number;
    fireDefense: number;
    coldDefense: number;
    energyDefense: number;
    psychicDefense: number;
    oureanDefense: number;
    price: number;
}


interface armorInterface {
    name: string;
    physicalDefense: number;
    fireDefense: number;
    coldDefense: number;
    energyDefense: number;
    psychicDefense: number;
    oureanDefense: number;
    //0 denotes that it cannot be purchased
    price: number;
}