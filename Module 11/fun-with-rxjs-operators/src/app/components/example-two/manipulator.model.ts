export interface Manipulator {
    readonly name: string;
    readonly action: (input: string) => string
}


export const AllManipulators: Manipulator[]  = [
    {name: 'uppercase', action: s => s.toUpperCase()}, 
    {name: 'lowercase', action: s => s.toLowerCase()}, 
    {name: 'reverse', action: s => s.split('').reverse().join('')}, 
    {name: 'add !', action: s => s + ' !'}
];

