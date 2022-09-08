"use strict";
// Basic types 
let id = 5;
let company = 'Google';
let isPublished = true;
let x = 'Hello';
let age;
// Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'David', true];
/// Tuple array
let employee;
employee = [
    [1, 'Mark'],
    [2, 'John'],
    [3, 'Pete']
];
// Union
let pid = 22;
pid = 'Hello';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
// Objects
const user = {
    id: 1,
    name: 'John'
};
const user2 = {
    id: 2,
    name: 'Mike'
};
// Type Assertion
let cid = 1;
let customerId1 = cid;
// OR
let customerId2 = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const mike = new Person(1, 'Mike Tobey');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
// Generics(T)
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['A', 'B', 'C']);
// numArray.push('hello')  // This is an error
