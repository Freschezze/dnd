import { Weapon } from "./weapons";

export interface Weapons {
    [key: string]: Weapon; // Key-value pair for weapon names and their details
  }
export interface Equipment {
    armi: Weapons; // Weapons grouped under "armi" (e.g., daggers, crossbows)
  }