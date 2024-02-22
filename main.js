//  1. Function with 4 Parameters
// Function parameters are the names listed in the function definition.
// Function arguments are the real values passed to (and received by) the function.

function calculateRectangularPrismVolume(length, width, height, roundResult) {
    var volume = length * width * height;

    if (roundResult) {
        volume = Math.round(volume);
        // The Math.round() function is a built-in JavaScript method that takes a number as its argument and returns the nearest integer.
    }

    return volume;
}

var prismLength = 5;
var prismWidth = 3;
var prismHeight = 8;
var shouldRound = true;

var result = calculateRectangularPrismVolume(prismLength, prismWidth, prismHeight, shouldRound);
console.log("The volume of the rectangular prism is:", result);


// -------------------------------------------------------

// 2. Arrow Function
// Arrow functions are defined using the => syntax.

var add = (a, b) => a * b;

console.log(add(8, 4)); 

// different example

const isPrime = (num) => {
    if (num <= 1) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
};

const numberToCheck = 11;
const answer = isPrime(numberToCheck);

console.log(`${numberToCheck} is ${result ? 'prime' : 'not prime'}`);


// -------------------------------------------------------

// 3. Call back Functions
// Function that takes two numbers and a callback function to perform an operation
function performOperation(num1, num2, operationCallback) {
    var result = operationCallback(num1, num2);
    console.log("Result:", result);
}

// Callback function for addition
function add(x, y) {
    return x + y;
}

// Callback function for multiplication
function multiply(x, y) {
    return x * y;
}

// Using the performOperation function with different callback functions
performOperation(3, 5, add);       // Result: 8
performOperation(3, 5, multiply);  // Result: 15


// ------------------------------------------------------

// 4. Async - await

async function fetchData() {
    try {
        // Use 'await' to wait for the asynchronous operation to complete
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // Use 'await' again to get the result of 'response.json()' asynchronously
        const data = await response.json();

        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Invoke the function
fetchData();
 
// ------------------------------------------------------

// 5. Promises
// A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.

function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation (e.g., fetching data from an API)
        setTimeout(() => {
            const success = true; // Simulating a successful request, set to false for error simulation

            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data!");
            }
        }, 2000); // Simulating a 2-second delay
    });
}

// Using the promise
fetchData()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

// ------------------------------------------------------

// 6. Nested for Loops

function printSquarePattern(size) {
    for (let i = 0; i < size; i++) {
        let row = '';

        for (let j = 0; j < size; j++) {
            row += '* ';
        }

        console.log(row);
    }
}

// Invoke function and passes 4 as the argument for the size parameter
printSquarePattern(4);


// ------------------------------------------------------

// 7. Nested if Loops

function checkValues(value1, value2) {
    if (value1 > 0) {
        console.log("Value 1 is positive.");

        if (value2 > 0) {
            console.log("Value 2 is also positive.");
        } else if (value2 < 0) {
            console.log("Value 2 is negative.");
        } else {
            console.log("Value 2 is zero.");
        }
    } else if (value1 < 0) {
        console.log("Value 1 is negative.");
    } else {
        console.log("Value 1 is zero.");
    }
}

checkValues(5, 3);   
checkValues(-2, 8);  
checkValues(0, -4); 


