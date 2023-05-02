// Suppose we want to create a function that calculates the sum of all numbers from 1 to n.
// REWRITE: Create a function which takes each number from 1 until the input number and adds them together.
// DATA: input an integer and output an integer
// PSEUDOCODE:

// function (n){
//     initialize variable of 0
//     for loop through n{
//         add the value of each index to 0
//     }
// return the total number
// }

function sumOfAll(n){
let total = 0;
for(let i = 0; i<=n ; i++){
    total += i;
}
return total;
}


//method for determining the speed of a function
//HOW THIS WORKS:
//First, save performance.now into a variable before running the code
//Second, run function using a very big number
//Third get the performance.now saved into a variable after running the big number
//Subtract the second variable from the first and divide that by 1000 to get the time in seconds
let t1 = performance.now();
console.log(sumOfAll(10000000))
let t2 = performance.now();
console.log(`Time elapsed: ${(t2-t1) / 1000} seconds`)
