export interface Step {
    readonly name: string;
    readonly size: number;
}

export const AllSteps: Step[] = [
    {name: 'small', size: 1 }, 
    {name: 'medium', size: 3 },
    {name: 'large', size: 5 } 
]