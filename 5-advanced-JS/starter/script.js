/*
OBJECT ORIENTED PROGRAMMING :
CLASSES
INHERITANCE
*/

// *****************************************************************
//    ES5 WAY OF OOP
// *****************************************************************
let ex1 = true;
if (ex1) {
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
//    Primative vs Object
// *****************************************************************

// Lecture: Primitives vs objects
if (ex1) {
    // Primitives
    // var a = 23;
    // var b = a;

    // a = 46;

    // // Variables assigned a Primitives hold a copy of data and can change it without affecting original
    // console.log(a); // 46
    // console.log(b); // 23

    // // Objects
    // var obj1 = {
    //     name: 'John',
    //     age: 26
    // };
    // var obj2 = obj1;

    // obj1.age = 30;

    // // New variables of Objects point to the same object and a change will affect the original
    // console.log(obj1.age); //30
    // console.log(obj2.age); //30

    // // Functions
    // var age = 27;
    // var obj = {
    //     name: 'Jonas',
    //     city: 'Lisbon'
    // };

    // // Primative
    // function change(a, b) {
    //     a = 30;
    //     b.city = 'San Francisco';
    // }

    // change(age, obj);

    // console.log(age);
    // console.log(obj.city);

    /////////////////////////////
}

// *****************************************************************
//    Passing Functions As Arguments
// *****************************************************************
if (ex1) {

    // // Lecture: Passing functions as arguments

    // var years = [1990, 1995, 2000, 2005, 2010];

    // // Pass an array and a callback function into this function
    // function arrayCalc(arr, callBack) {

    //     // Empty array created
    //     var arrRes = [];

    //     // Loop through the array that was passed in 
    //     // And manipulate each element with whatever callback function is passed in 
    //     for (var i = 0; i < arr.length; i++) {
    //         arrRes.push(callBack(arr[i]));
    //     }

    //     return arrRes;
    // }

    // function calculateAge(argument) {
    //     return 2019 - argument;
    // }

    // function isAdult(argument) {
    //     return argument >= 18;
    // }

    // function maxHeartRate(argument) {
    //     if (argument >= 18 && argument <= 81) {
    //         return Math.round(206.9 - (0.67 * argument));
    //     } else {
    //         return -1;
    //     }
    // }

    // // Call function with same array but different functions
    // var ages = arrayCalc(years, calculateAge);
    // var fullAges = arrayCalc(ages, isAdult);
    // var rates = arrayCalc(ages, maxHeartRate);

    // console.log(`Ages: ${ages}`);
    // console.log(`Rates: ${rates}`);

}

// *****************************************************************
//    Lecture: Functions returning functions
// *****************************************************************
if (ex1) {

    // function interviewQuestion(job) {
    //     if (job === 'designer') {
    //         return function (name) {
    //             console.log(name + ', can you please explain what UX design is?');
    //         }
    //     } else if (job === 'teacher') {
    //         return function (name) {
    //             console.log('What subject do you teach, ' + name + '?');
    //         }
    //     } else {
    //         return function (name) {
    //             console.log('Hello ' + name + ', what do you do?');
    //         }
    //     }
    // }

    // // var will equal the function that is returned from the function in the right
    // var teacherQuestion = interviewQuestion('teacher');
    // var designerQuestion = interviewQuestion('designer');

    // // The Parameter here will be passed to the function that was returned above
    // teacherQuestion('John');
    // designerQuestion('John');
    // designerQuestion('jane');
    // designerQuestion('Mark');
    // designerQuestion('Mike');
    // console.log(`================================================`)
    // console.log(`WITHOUT CLOSURES`);
    // interviewQuestion('teacher')('Mark');

}

// *****************************************************************
//    Lecture: IIFE (Imediatley Invoked Function Expression)
// *****************************************************************

if (ex1) {

    // TODO : What is this for?  

    // function game() {
    //     var score = Math.random() * 10;
    //     console.log(score >= 5);
    // }
    // game();


    // (function () {
    //     var score = Math.random() * 10;
    //     console.log(score >= 5);
    // })();

    // (function (goodLuck) {
    //     var score = Math.random() * 10;
    //     console.log(score >= 5 - goodLuck);
    // })(5);

}


// *****************************************************************
//    Lecture: Closures
// *****************************************************************
if (ex1) {

    function retirement(retirementAge) {
        var a = ' years left until retirement.';
        return function (yearOfBirth) {
            var age = 2016 - yearOfBirth;
            console.log((retirementAge - age) + a);
        }
    }

    // TODO : Ask ABout this explanation , Scope chain always stays intact
    // Although function object is the returned function from 'retirement'
    // The returned function will still have access to the variables and parameters of its outer function 
    // Ex: / Still having access to var age = 2016 - yearOfBirth;
    var retirementUS = retirement(66);
    var retirementGermany = retirement(65);
    var retirementIceland = retirement(67);

    retirementGermany(1990);
    retirementUS(1990);
    retirementIceland(1990);

    // Can pass arguments in order
    //retirement(66)(1990);


    console.log(`------------------------------------------------`);
    console.log(`Interview Questions Section `);

    const interviewQuestion = (job) => {

        // Function That will be returned for use, but still always have access to job parameter outter function
        return function (name) {

            if (job === 'designer') {
                console.log(name + ', can you please explain what UX design is?');
            }
            else if (job === 'teacher') {

                console.log('What subject do you teach, ' + name + '?');
            }
            else {

                console.log('Hello ' + name + ', what do you do?');

            }

        }

    }

    interviewQuestion('nk')('Alex');
    //  Same Function without closures

    // function interviewQuestion(job) {
    //     if (job === 'designer') {
    //         return function (name) {
    //             console.log(name + ', can you please explain what UX design is?');
    //         }
    //     } else if (job === 'teacher') {
    //         return function (name) {
    //             console.log('What subject do you teach, ' + name + '?');
    //         }
    //     } else {
    //         return function (name) {
    //             console.log('Hello ' + name + ', what do you do?');
    //         }
    //     }
    // 

}

// *****************************************************************
//    Lecture: Bind Call Apply
// *****************************************************************

if (ex1) {
    // // An object with its own function 'presentation'
    // var john = {
    //     name: 'John',
    //     age: 26,
    //     job: 'teacher',
    //     presentation: function (style, timeOfDay) {
    //         if (style === 'formal') {
    //             console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
    //         } else if (style === 'friendly') {
    //             console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
    //         }
    //     }
    // };

    // // Another object that does not have the presenttation method
    // var emily = {
    //     name: 'Emily',
    //     age: 35,
    //     job: 'designer'
    // };

    // // John can call the method normally
    // john.presentation('formal', 'morning');

    // // Using Call, then passing in emily [So that 'this' in the method will now point to emily] 
    // // emily can use the method
    // john.presentation.call(emily, 'friendly', 'afternoon');

    // // Apply is same as call , but arguments are an array 
    // //john.presentation.apply(emily, ['friendly', 'afternoon']);

    // // Bind : Returns a function with preset arguments, first argument is the 'this' variable
    // var johnFriendly = john.presentation.bind(john, 'friendly');

    // // Now the function returned with bind will only need one argument since Bind preset 
    // // has the first argument set already
    // johnFriendly('morning');
    // johnFriendly('night');

    // var emilyFormal = john.presentation.bind(emily, 'formal');
    // emilyFormal('afternoon');


    // // Another cool example
    // var years = [1990, 1965, 1937, 2005, 1998];

    // function arrayCalc(arr, fn) {

    //     var arrRes = [];
    //     for (var i = 0; i < arr.length; i++) {

    //         // fn will always only accept 1 argument
    //         arrRes.push(fn(arr[i]));

    //     }

    //     return arrRes;

    // }

    // function calculateAge(el) {
    //     return 2016 - el;
    // }

    // // this function requires 2 arguments so we can't pass it in without bind
    // function isFullAge(limit, el) {
    //     return el >= limit;
    // }

    // // Calculate age only needs one Argument so it can be passed in normally
    // var ages = arrayCalc(years, calculateAge);

    // // using bind, isFullAge will have its first argument preset whenever its called, 
    // // and full age will only need one argument
    // // The preset argument is the first argument '20'
    // var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

    // // Returns ages from the array that had birth years
    // console.log(ages);

    // // Returns if person is full age in Japan Law
    // console.log(fullJapan);
}

/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

