// console.log(`Hello World From External Sheet`);

// ********************************************************************** 
// CODING CHALLENGE 1 

// Mark and John want to compare BMI, 
// BMI = mass / height^2 ( mass / hiehgt * height)

// 1. Save both bmi's to variable
// 2. Calaculate both their BMI's
// 3. Boolean deciding whether mak has higher bmi than john 
// 4. Print a string to the console containing the booolean from step 3

// **********************************************************************

let markMass = 70;
let markHeight = 1.2;
let markBMI = markMass / (markHeight * markHeight);


let johnMass = 40;
let johnHeight = 1;
let johnBMI = johnMass / (johnHeight * johnHeight);

// Boolean for determining Mark is heavier
let markBMIIsHeavier;

if (markBMI > johnBMI)
{
    markBMIIsHeavier = true;
}
else
{
    markBMIIsHeavier = false;
}

console.log(`Is Mark's BMI higher than John's? ${markBMIIsHeavier}`);