export interface VitalInfo {
    hp: number;
    maxHp: number;
    thp: number;
    deathSaves: {
        success: number;
        failures: number;
    };
}