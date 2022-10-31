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
    console.log(typeof arr + " " + arr);
    //Recognizes arrays as an object
    //Checking if the type is object (assuming a string) & converting to int
    if (typeof arr === 'object') {
        numbers = arr.toString().split(',').map(numb => parseInt(numb, 10));
    };
    //Had to start logging things like this when I was getting 'undefined' or something entirely different
    //Still an object :D
    console.log(`Numbers are: ${typeof numbers} - ${numbers}`);
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