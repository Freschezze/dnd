import { Equipment } from "./equipment";
import { Feats } from "./feats";
import { AbilityScores } from "./abilityScores";
import { BaseInfo } from "./baseInfo";
import { CombatInfo } from "./combatInfo";
import { VitalInfo } from "./vitalInfo";
import { SurvivalInfo } from "./survivalInfo";

export interface Profile {
    id: string;
    name: string;
    baseInfo: BaseInfo;
    vitalInfo: VitalInfo;
    combatInfo: CombatInfo;
    survivalInfo: SurvivalInfo;
    abilityScores: AbilityScores;
    feats: Feats; 
    equipment: Equipment; 
    [key: string]: any;
  }