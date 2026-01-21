import * as functions from "./functions";
import { Armor } from "./armor";
import { Weapon } from "./weapon";
import * as entities from "./entities";

let party: entities.playerCharacter[] = functions.getJSONStorageString("Party");
let enemyParty: entities.Entity[] = [];