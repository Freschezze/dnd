export interface Spells {
    castingTime: string;
    components: {
        material: string;
        somatic: boolean;
        verbal: boolean;
    };
    description: string;
    duration: string;
    name: string;
    note: string;
    range: string;
    ritual: boolean;
    school: string;
}

export interface SpellLevels {
    [level: string]: Spells[]; 
}
