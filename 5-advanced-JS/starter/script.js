/*
OBJECT ORIENTED PROGRAMMING :
CLASSES
INHERITANCE
*/

// *****************************************************************
//    ES5 WAY OF OOP
// *****************************************************************

// Basic Object
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function Constructor Class
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
// Function That All instances of Person will have access too
Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
};

// To add property to Prototype
Person.prototype.lastName = 'Smith';

// Creating New Instances using the Constructor Function
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);