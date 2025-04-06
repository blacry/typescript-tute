
let sales: number = 12_34_56_789;
let c: string = 'ts'
let isPublished = true
let lvl;
lvl = 1
lvl = '1'

function render(doc: any) {
    console.log(doc);

    // arreys
    let numbers: number[] = []
    numbers.forEach(e => {
        e.toPrecision
    });

    // tuples /** not same as python more like a pair of key value and thats it**/

    let tuples: [number, string] = [1, 'one']
    tuples.push(50) // this works for some reason but it shouldn't
    // we can make dictionary of this tuple
    let dict: object[] = [tuples]
    dict = [[1, 'one'], [2, 'two']]
    console.log(dict);


}

// now enum here, we use related constants and define them together
const enum Size { s, m, l }
console.log(Size.s, Size.m, Size.l);
enum Sizes { s = 5, m, l }
console.log(Sizes.s, Sizes.m, Sizes.l);

// fuctions me bhi ham type define kar sakte hai both for parameter and fxn itself and we can define the type for what the fxn will return too and also how many parameter can be passed while calling the fxn

// now bout object or dictionary

// here u can see mene name intialise kiya hai lekin object me hai ni still it works as i have added that ? mark after name which makes it and optional requirment
// / readonly makes us that we cant change the value but only able to call it and print it and use it but cant modify it

let employee: {
    readonly id: number, name?: string, retire: (date: Date) => void
}
employee = {
    id: 1, retire: (date: Date) => {
        console.log(date);
    }
}
employee.name = 'Mosh'

//type alias

type Employee = {
    readonly id: number, name?: string, retire: (date: Date) => void
}
// now we can do 
let employees: Employee

// union types

function kgtolbs(weight: number | string): number {
    if (typeof weight === 'number') {
        return weight * 2.2
    }
    else {
        return parseInt(weight) * 2.2
    }
}

// intersection types

type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}
type UIwidgit = Draggable & Resizable

let textbox: UIwidgit = {
    drag: () => { },
    resize: () => { }
}

// litral type
let distance: Distance 
type Distance = 'cm' | "m" | 'km'
distance = 'cm'

//Nullable type

function greet(name:string |null |undefined) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('fuck you');    
}
greet(null)
greet(undefined)
greet('shjad')

// optional chaining

type Customer = {
    bday: Date
};

function getCustomer(id:number):Customer | null  {
    return id === 0 ? null : {bday : new Date()};
}
let costomer1 = getCustomer(0)
let costomer2 = getCustomer(5)
console.log(costomer1?.bday, costomer2?.bday.getFullYear());

//optional element access operator
let log: any = null
log?.('a')