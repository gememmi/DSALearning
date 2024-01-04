//O(n2)
//Brute force attempt
//return the indexes of the two numbers that add up to the target.
let nums = [2,7,11,15]
let target = 9

function twoSumOne(nums, target){
    for(i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
        
            }
        }
    }
}



console.log(twoSumOne(nums, target));

//two-pass hash map
//creating a copy of the array (as a hashmap) to use as comparison instead of looping
function twoSumTwo(nums, target){
const indices = new Map();


}