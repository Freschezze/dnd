export interface AbilityScore {
  value: number;
  prof: boolean;
}

export interface AbilityScores {
  int: AbilityScore; 
  cha: AbilityScore; 
  wis: AbilityScore; 
  dex: AbilityScore; 
  str: AbilityScore;
  con: AbilityScore;
}
