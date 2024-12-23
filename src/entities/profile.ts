import { Equipment } from "./equipment";
import { Feat } from "./feats";
import { AbilityScores } from "./abilityScores";
import { BaseInfo } from "./baseInfo";
import { CombatInfo } from "./combatInfo";
import { VitalInfo } from "./vitalInfo";
import { SurvivalInfo } from "./survivalInfo";
import { DeathSaves } from "./deathSaves";
import { Privileges } from "./privileges";
import { SpellLevels } from "./spells";

export interface Profile {
    id: string;
    name: string;
    baseInfo: BaseInfo;
    vitalInfo: VitalInfo;
    combatInfo: CombatInfo;
    survivalInfo: SurvivalInfo;
    abilityScores: AbilityScores;
    feats: Feat[]; 
    deathSaves: DeathSaves;
    equipment: Equipment; 
    privileges: Privileges;
    spells: SpellLevels;
    [key: string]: any;
  }