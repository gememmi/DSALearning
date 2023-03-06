// TASK: Given an Array, find the first duplicate value that occurs. If there are no duplicates, return -1.
// ````
//1.REWRITE: Given an array input, check that all characters are unique. If true, return -1. If false, so if there are duplicates of any characters, return the first duplicate you find.
//Another way to phrase this would be that the function needs to navigate through the array and find the first occurance of a duplicated character and return the minimal index, which is to say return the first index of the duplicate 
// ````
//2.UNDERSTADNING: The input should be an array. If the function contains no duplicates, output should be integer -1. If there are any duplicates, the output should return that integer. 
//````
//3.TEST CASES: input: let arr1 = [1,2,3,4,5] output: -1
            //  input: let arr2 = [1, 2, 3, 3, 4, 5] output: 3
//console.log("Expecting -1")
//console.log("real answer", noDuplicates(arr1))
//console.log("Expecting number")
//console.log("real answer", noDuplicates(arr2))
//````
//4.PSEUDOCODE:
//initialize array
// function noDupulicates(array){
// iterate over the array
//compare current index to the element before it
//if the elements match, return the element
//if you iterate through the whole array with no matches, return -1
// ````
//5. CODE
// function noDuplicates(arr){
//  for( let i = 0; i < arr.length; i++){
//     if (i === (i - 1)){
//         return i
//     }
//     else( i !== (i -1) )
//         return -1
//  }
// }


//DSA hint: whenever we see a problem that deals with duplicates in arrays, we should know that we will need two things:
//1.a loop that iterates through the array
//2.a data structure that holds values for that loop to compare agaisnt.
//I found some examples using a JavaScript function I have never heard of called lastIndexOf()
//The lastIndexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.
//In other words, using dot notation, I can call anyArrayOrAnyString.lastIndexOf("string or integer") => the last occurrence of the specified substring. 

const firstDuplicate = arr => {
    for(let i = 0; i < arr.length; i++){
       if(arr.lastIndexOf(arr[i]) !== i){
          return arr[i];
       };
    };
    return -1;
 }

//  function noDupes(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr.lastIndexOf(arr[i]) !== i){
//             return i;
//         };
//     };
//     return -1;
//  }

console.log("Expecting -1")
console.log("=>", firstDuplicate([1,2,3,4,5]))
console.log("````")
console.log("Expecting arr[i]")
console.log("=>", firstDuplicate([1,2,3,3,4,5]))