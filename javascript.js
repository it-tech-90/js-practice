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


/* CREATE A LENGTH CONVERTER FUNCTION 
////////////////////////////////////////////////
// Create a function that takes in kilometers and 
//  returns the converted answer in miles
//////////////////////////////////////////////// 
*/

//1 kilometer = 0.621371 miles
//Create the function
const calcKilometer = (kilometer) => kilometer * 0.621371;

console.log(calcKilometer(5));

console.log("Math: " + 1 + 3);

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
    
    get age() {
        if(!this._birthYear) {
            throw new Error("No birth year set for user.");
        } else {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1;

            let age = currentYear - this._birthYear;

            if(currentMonth < this._birthMonth) {
                age -= 1;
            }
            return age;
        }
    }

    set birthYear(year) {
        if (!year) {
            throw new Error("Invalid parameter");
        } else {
            this._birthYear = year;
        }
    }

    set birthMonth(month) {
        if(!month) {
            throw new Error("Invalid parameter");
        } else {
            const lowerMonth = month.toLowerCase();
            const validMonths = ['january','february','march','april','may','june','july','august','september','october','november','december'];

            if (validMonths.includes(lowerMonth)) {
                this._birthMonth = month.charAt(0).toUpperCase() + monthLower.slice(1);
            } else {
                throw new Error("Invalid birth month provided");
            }
        }
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
    console.log(Spence.name + " does not work here.");
} else {
    console.log(Spence.name + " does, in fact, work here.");
    Spence.birthYear = 1990;
    console.log(Spence._birthYear)
    console.log(Spence.age);
}


///////////////////////////////////////////////////////////////
//CONVERT MINUTES INTO SECONDS
//
// Copied and modified from https://edabit.com/challenge/8q54MKnRrm89pSLmW
// Instructions:
//  Simple - create a function that takes in minutes and returns
//  the answer in seconds
/////////////////////////////////////////////////////////////////

const minuteConverter = function(minutes) {
    return minutes * 60;
}

console.log(minuteConverter(5));

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
    //array value to the result from the previous step
}

console.log(numberAdd(600));


//////////////////////////////////////////////////////////////////
// Doing stuff with buttons and elements on the page
//////////////////////////////////////////////////////////////////

function doSomething() {
    document.getElementById('shadow').style.boxShadow="rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset";
}

function doSomething2() {
    document.getElementById('shadow').style.boxShadow="rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px";
}

function rainbowBox() {
    document.getElementById('shadow').style.boxShadow="blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 10px -10px 0px -3px, rgb(31, 193, 27) 10px -10px, rgb(255, 255, 255) 20px -20px 0px -3px, rgb(255, 217, 19) 20px -20px, rgb(255, 255, 255) 30px -30px 0px -3px, rgb(255, 156, 85) 30px -30px, rgb(255, 255, 255) 40px -40px 0px -3px, rgb(255, 85, 85) 40px -40px";
}

function rainbowBox2() {
    document.getElementById('shadow').style.boxShadow="rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px";
}

function roundShadow() {
    document.getElementById('shadow').style.boxShadow="rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px";
}

function revertBox() {
    document.getElementById('shadow').style.boxShadow="0 4px 8px rgba(0, 0, 0, 0.5)";
}
