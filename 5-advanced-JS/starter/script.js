/*
OBJECT ORIENTED PROGRAMMING :
CLASSES
INHERITANCE
*/

// *****************************************************************
//    ES5 WAY OF OOP
// *****************************************************************
let ex1 = true;
if (ex1)
{
    // // Basic Object
// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// // Function Constructor Class ( ALL CONSTRUCTOR FUNCTIONS HAVE A PROTOTYPE PROPERTY WHERE WE CAN ADD FUNCTIONS TO CLASS)
// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
// // Function That All instances of Person will have access too
// Person.prototype.calculateAge = function () {
//     console.log(2016 - this.yearOfBirth);
// };

// // To add property to Prototype , UNLESS CHANGED ALL INSTANCES HAVE THIS LAST NAME
// Person.prototype.lastName = 'Smith';

// // Creating New Instances using the Constructor Function
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// console.log(Person);
}

// *****************************************************************
//    ES5 WAY OF OOP
// *****************************************************************

// Lecture: Primitives vs objects

// Primitives
var a = 23;
var b = a;

a = 46;

// Variables assigned a Primitives hold a copy of data and can change it without affecting original
console.log(a); // 46
console.log(b); // 23

// Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;

obj1.age = 30;

// New variables of Objects point to the same object and a change will affect the original
console.log(obj1.age); //30
console.log(obj2.age); //30

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

/////////////////////////////