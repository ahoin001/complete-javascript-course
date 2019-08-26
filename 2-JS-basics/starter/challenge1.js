// console.log(`Hello World From External Sheet`);
/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

let markMass = 70;
let markHeight = 1.2;
let markBMI = markMass / (markHeight * markHeight);


let johnMass = 40;
let johnHeight = 1;
let johnBMI = johnMass / (johnHeight * johnHeight);

// Boolean for determining Mark is heavier
let markBMIIsHeavier;

if (markBMI > johnBMI) {
    markBMIIsHeavier = true;
}
else {
    markBMIIsHeavier = false;
}

console.log(`Is Mark's BMI higher than John's? ${markBMIIsHeavier}`);