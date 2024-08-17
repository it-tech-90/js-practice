'use strict'

/* PRINT ALL EVEN NUMBERS FROM AN ARRAY
///////////////////////////////////////////////////////////////////////////
// Copied & modified (instructions) from the list of challenges provided by
// https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/
// 
// INSTRUCTIONS:
// Try to make the solution to this problem as efficently as possible (LOL).
// Consider using loops that would allow you to type the fewest characters/commands.
// While you print the numbers, get creative and see how you could output them in a way that would work up to 10 or even 10,000 numbers
// BONUS: Create another function to add the sum of those even numbers.
///////////////////////////////////////////////////////////////////////////
*/

function printEvenNumbers(arr) {
    let evenNumbers = [];
    let numbers = [];
    //Grabbing the type of the array just for checksies :)
    //console.log(typeof arr + " " + arr);
    //Recognizes arrays as an object
    //Checking if the type is object (assuming a string) & converting to int
    if (typeof arr === 'object') {
        numbers = arr.toString().split(',').map(numb => parseInt(numb, 10));
    };
    //Had to start logging things like this when I was getting 'undefined' or something entirely different
    //Still an object :D
    //console.log(`Numbers are: ${typeof numbers} - ${numbers}`);

    //Iterating through each value and checking if the result is even
    //Then passing to a new array to return
    numbers.forEach(function(number) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    });
    //Only even numbers in here
    return evenNumbers;
}

function printSumEvenNumbers(evenNumbs) {
    let sum = 0;
    //Iterating through each number and adding them up
    evenNumbs.forEach(function(numb) {
        return sum += numb;
    });
    //Returns the sum of the even numbers
    return sum;
}

//Can assign the array to a vairable to make it cleaner to type in the function
//const evenNumbz = printEvenNumbers(["1, 5, 64, 30, 31, 89, 5, 15, 18, 54, 69"]);

console.log(`The even numbers are: ${printEvenNumbers(["1, 5, 64, 30, 31, 89, 5, 15, 18, 54, 69"])}`); //64, 30, 18, 54

//Can pass in a return value from another function as a parameter to the function
//SO COOL! :D
console.log(printSumEvenNumbers(printEvenNumbers(["1, 5, 64, 30, 31, 89, 5, 15, 18, 54, 69"]))); //166


/* CREATE A LENGTH CONVERTER FUNCTION 
////////////////////////////////////////////////
// Create a function that takes in kilometers and 
//  returns the converted answer in miles
//////////////////////////////////////////////// 
*/

//1 kilometer = 0.621371 miles
//Create the function to calculate kilometers to miles
const calcKilometer = (kilometer) => kilometer * 0.621371; //Shorthand function creation

console.log(`10 kilometers is: ${calcKilometer(10)} miles.`);

//Showcasing type coercion with string objects
console.log("Math: " + 1 + 3); //result: Math: 13

/////////////////////////////////////////////////
// FIRST TIME CREATING A CLASS
////////////////////////////////////////////////

//Initiate a class & define properties
class VETSworker {
    //Creating the constructor w/ args to receive in order to create the class
    constructor(fname, lname, worksHere) {
        this.firstName = fname;
        this.lastName = lname;
        this.works = worksHere;
    }

    //Getter to grab the first and last name
    get name() {
            return this.firstName + ' ' + this.lastName;
        }
        //Method call in the class
    isVETSemployee() {
        if (this.works === true) {
            console.log(`Yes, ${this.firstName} ${this.lastName} works here!`);
            return true;
        } else {
            console.log(`Nope, they don't work here.`);
            return false;
        }
    }
}

//Creating a new object from the newly created class
const Spence = new VETSworker('Spencer', 'Reed', true);

//Driving an IF statement based on the answer from the method call
if (!Spence.isVETSemployee()) {
    console.log("Awe damn!");
} else {
    console.log("Sweet!");
}

console.log(Spence.name);


///////////////////////////////////////////////////////////////
//CONVERT MINUTES INTO SECONDS
//
// Copied and modified from https://edabit.com/challenge/8q54MKnRrm89pSLmW
// Instructions:
//  Simple - create a function that takes in minutes and returns
//  the answer in seconds
/////////////////////////////////////////////////////////////////

//Converting minutes to seconds
const minuteConverter = function(minutes) {
    return minutes * 60;
}

console.log(minuteConverter(5) + ' seconds');

//////////////////////////////////////////////////////////////////
//ADD UP NUMBERS FROM A SINGLE NUMBER
//
// Copied from https://edabit.com/challenge/4gzDuDkompAqujpRi
// Instructions:
// Create a function that takes a number as an argument. Add up
//  all the numbers from 1 to the number passed to the function.
// EXAMPLE: If 4 is passed the function should return 10
//  because 1 + 2 + 3 + 4 = 10
//////////////////////////////////////////////////////////////////


const numberAdd = function(number) {
    let count = 0; //Counter to keep track of numbers
    let sum = []; //Our array that will give us the sum
    for (let i = 0; i < number; i++) { //Use this to loop the amount of the number given
        count = number - i; // Each iteration will subtract from the number
        sum.push(count); //Pushing each iteration result into the array
    }
    return sum.reduce((a, b) => a + b, 0); // The reduce() function will iterate through each number and add the current
    //array index value to the result from the previous step
}

console.log(numberAdd(4));