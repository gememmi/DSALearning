//O(n2)
//Brute force attempt
//return the indexes of the two numbers that add up to the target.
let nums = [2,7,11,15]
let target = 9

// function twoSumOne(nums, target){
//     for(i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i, j];
        
//             }
//         }
//     }
// }



// console.log(twoSumOne(nums, target));

//one-pass hash map
//looping through the original array, creating a complement, checking if that complement and current index add up to the target, if not then adding the complement to the hash map to check later!
function oneSumTwo(nums, target) {
 let map = new Map();
 
 for(i = 0; i < nums.length; i++){
    const complement = target - nums[i]
    if( map.has(complement)){
        return[i, map.get(complement)]
    }
    map.set(nums[i], i)
 }
};

console.log(oneSumTwo(nums, target));
//CONFUSION: The reason that .get returns the index is because of how we added the integers and their indexes to the map - we did it in reverse order so that we could return the index of that number in the first array,later

