// Basic types 
let id: number = 5
let company: string = 'Google'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number

// Arrays
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'David', true]

/// Tuple array
let employee: [number, string][]
employee = [
    [1, 'Mark'],
    [2, 'John'],
    [3, 'Pete']
]

// Union
let pid: string | number = 22
pid = 'Hello'

// Enum
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right ='RIGHT'
}

// Objects
const user: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}
// Simplified
type User = {
    id: number,
    name: string
}
const user2: User = {
    id: 2,
    name: 'Mike'
}

// Type Assertion
let cid: any = 1

let customerId1 = <number>cid
// OR
let customerId2 = cid as number

// Functions
function addNum(x: number, y: number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}

// Interfaces
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

// Example of using a type instead of interface
type Point = number | string
const p1: Point = 1
// Can't use interfaces with primitives or unions
//        interface Point1 = number | string
//        const p2: Point = 1

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface {
    /*private*/ id: number // private, protected, public(default)
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`
    }
}

const mike = new Person(1, 'Mike Tobey')

// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// Generics(T)
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['A', 'B', 'C'])

// numArray.push('hello')  // This throws an error when using Generics
