// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans

// UNDERSTANDING:Given an array of integers, create a new array double the length. Each element of the first array should have a corresponding index in the second array. The second half of the the output array should repeat the integers in the same order. So basically we want to create a copy of the first array and append it to the first to create a new array. 
// DATA: input should be array of integers, output should be array of integers, most likely stays the same data structure in function.
//CASES:
//I expect passing [1,2,3,4,5] will result in 
//PSEUDOCODE:
//function conArray(arr){
//     newArr = initialize empty array using spread operatory
//     iterate over the arr starting at the first index
//         use += to append each index to the empty array
    
//     initialize resultArr = arr.push(newArr)
//     return resultArr
// }

function conArr(arr){
    let newArr = [];
    for (i = 0; i <= arr.length; i++){
        newArr.push(arr[i]);
    }
    return resultArr;

}

function getConcatenation(nums){
    let ans = [...nums];
    //the spread operator will create a copy of the array
    nums.forEach((number) => ans.push(number));
    //forEach will map over the ary and for each element, it will push that element to the end of the ans array
    return ans
}

//NOTE: We could have used .map instead of .forEach since .forEach operates on that original array and .map creates a copy

console.log("INPUT:  [1,2,3,4");
console.log("EXPECTING: [1,2,3,4,1,2,3,4")
console.log("````")
console.log(getConcatenation([1,2,3,4]))