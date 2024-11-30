export interface Weapon {
    valore: string; // Value in gold (e.g., "75 mo")
    danni: string; // Damage (e.g., "1d6 perforanti")
    peso: string; // Weight (e.g., "1,5kg")
    proprietà: string[]; // Properties (e.g., ["leggera", "ricarica"])
  }