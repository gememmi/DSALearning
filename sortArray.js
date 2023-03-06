//Sort an Array of numbers using selection sort. The selection sort algorithm sorts an array by repeatedly finding the minimum element (lowest value) in the input Array, and then putting it at the correct location in the sorted Array.

//1.REWRITE THE PROBLEM:
//create a functiuon which takes in a array of numbers and outputs the same elements in a new array in which they are sorted lowest to highest. So we will be working with an input arrary of integers and an output array of integers. 
//2.TEST CASES:
//console.log("Expecting output to be => [1,2,3,4]");
//console.log("=>", sortArray([4,2,3,1]));
//````
//console.log("Expecting output to be [52,76, 103, 200]")
//console.log("=>", sortArray([200, 76, 52, 103]));
//3.PSEUDOCODE:
//function sortArray(arr){
//     initialize an empty array 
//     use a for loop to iterate through the array
//         use .min on the array and take that result and append it to the new array
//         return the new array
// }
//4.CODE:
// function sortedArray(arr){
//     let sorted = [];
//     for(let i = 0; i < arr.length; i++){
//         let min = Math.min(...arr).pop;
//         sorted += min;
//     }
//     return sorted;
// }

function sortedArray(arr){
  return  arr.sort();
    
}

console.log("Expecting [1,2,3,4]")
console.log("````")
console.log(sortedArray([3,4,2,1]))

//Ok, apparently I was also suppoed to create a function which calculates the runtime, but I am so braindead and that task is complicated.