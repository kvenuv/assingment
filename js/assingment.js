


//commenting and factorial

// function addNumbers(num1, num2) {
//     // Adding the two numbers
//     const sum = num1 + num2;

//     // Returning the result
//     return sum;
// }

// // Example usage:
// const result = addNumbers(5, 10); // Calling the function with arguments 5 and 10
// console.log(result); 




// // Function to calculate the factorial of a number
// function factorial(n) {
//     // Check if the number is negative
//     if (n < 0) {
//         
//         return; // Factorial is not defined for negative numbers
//     }

//     // If the number is 0 or 1, factorial is 1
//     if (n === 0 || n === 1) {
//         // Return 1 since factorial of 0 and 1 is 1
//         return 1;
//     }

//     // Initialize the result variable to 1
//     let result = 1;

//     // Multiply result by each number starting from 1 up to the given number
//     for (let i = 2; i <= n; i++) {
//         result = result * i; // Multiply result by the current number
//     }

//     
//     return result; // Return the final factorial value
// }

// // Example usage:
// const num = 5;
// const factorialOfNum = factorial(num);
// console.log("Factorial of", num, "is", factorialOfNum); 



// Example using break statement

// console.log("--- break statement ---");
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         // When i equals 5, exit the loop
//         break; 
//     }
//     console.log(i);
// }
// console.log("Loop end.");

// console.log(); // Empty line for separation

// // Example using continue statement

// console.log("--- continue statement ---");
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         // When i equals 5, skip the current iteration and continue with the next iteration
//         continue; /
//     }
//     console.log(i);
// }
// console.log("Loop end.");

'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

// Function to open the modal
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Function to close the modal
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Add event listeners to open modal buttons
for (let i = 0; i < btnsOpenModel.length; i++) {
    btnsOpenModel[i].addEventListener('click', openModal);
}

// Add event listener to close modal button
btnCloseModal.addEventListener('click', closeModal);

// Add event listener to close modal when clicking on overlay
overlay.addEventListener('click', closeModal);

// Add event listener to close modal when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});