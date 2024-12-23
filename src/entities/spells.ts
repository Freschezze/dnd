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
    1: Spells[];
    2: Spells[];
    3: Spells[];
    4: Spells[];
    5: Spells[];
}