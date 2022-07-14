import { ChangeDetectorRef } from "@angular/core";

export interface ContactDetails {
    readonly type: 'Email' | 'Mobile' | 'Fax'
    readonly value: string
}

export interface Student {
    readonly uid: string;
    readonly name: string;
    readonly age: number;
    readonly contactDetails: ContactDetails[]
}



export interface LearningClass {
    readonly students: Student[];
    readonly todaysPresenter: string | null;
}

let s1 : Student = {
    uid: 'xyz', 
    name: 'John Smith', 
    age: 42, 
    contactDetails: [
        {type: 'Email', value: 'john.smith@gmail.com'}, 
        {type: 'Mobile', value: '444-3232'}
    ]
}

// "modify" an object in immutable types
let s2 = {
    ...s1, 
    age: s1.age + 1
}

// add a new contact detail
let s3: Student = {
    ...s2, 
    contactDetails: [
        ...s2.contactDetails, 
        {
            type: 'Fax', 
            value: '444-3344'
        }
    ]
}

let s4: Student = {
    ...s3, 
    contactDetails: replace(s3.contactDetails, 1, item => ({
        ...item, 
        value: '444-5555'
    }))
}

let s5: Student = {
    ...s4, 
    contactDetails: s4.contactDetails.splice(0, 1)
}
    

export function replace<T>(array: T[], index: number, changer: (item: T) => T): T[] {
    return array.map((item, i) => i === index ? changer(item) : item);
}






// how to change an object
// how to add a new tem to array
// how to change items in array
// how to remove items from array