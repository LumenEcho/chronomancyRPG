import weaponsJSON from "../assets/data/weapons.json";

export class Weapon {
    constructor(weaponName: string) {
        let weaponData: Record<string, weaponInterface> = weaponsJSON;
        let currentWeapon = weaponData[weaponName];

        this.name = currentWeapon.name;
        this.melee = currentWeapon.melee;
        this.damageType = currentWeapon.damageType;
        this.baseDamage = currentWeapon.baseDamage;
        this.range = currentWeapon.range;
        this.break = currentWeapon.break;
        this.critChance = currentWeapon.critChance;
        this.critDamage = currentWeapon.critDamage;
        this.price = currentWeapon.price;
    }

    name: string;
    melee: boolean;
    damageType: string;
    baseDamage: number;
    range: number;
    break: number;
    critChance: number;
    critDamage: number;
    price: number;
}

interface weaponInterface {
    name: string;
    melee: boolean;
    damageType: string;
    baseDamage: number;
    range: number;
    break: number;
    critChance: number;
    critDamage: number
    //0 if unpurchasable
    price: number;
}