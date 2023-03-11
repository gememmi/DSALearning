//UNDERSTANDING: Create a function that front loads all the unique values of the array and returns the quantity of unique values.
//You should not create a new array.
//TEST CASES:
//[1,2,2,3,3,3,3,5,6,6,6] => 5, [1,2,3,5,6,2,3,3,3,6,6]
//PSEUDOCODE:
//check if the array has any elements by checking its length
//Create two reference points to compare in the array, pointer1 and pointer2
//initialize pointer1 at 0
//iterate through the array using a for loop. The started index should initialize pointer2 at 1, the second place in the array.
//Then we need to compare the values of the index pointer1 is at and pointer2 is at. If they do not match, we know that the first value is unique. We can advance pointer1 (pointer2 will advance bc it is being used in the for loop.) Then replace the value of the index of pointer1 with the index of pointer2. We do this to collect all the unique values at the front of the array. Next we need to return pointer1 + 1. This will give us the lenght of the unique values. 
 var removeDuplicates = function(nums) {
    if( nums.length === 0){
        return 0;
    }
    let pointer1 = 0;
    for(let pointer2 = 1; pointer2 < nums.length; pointer2++){
        if(nums[pointer1] !== nums[pointer2]){
            pointer1++;
            nums[pointer1] = nums[pointer2];
        }
    }
    return pointer1 + 1;
   
 }


 //This was my first time using two reference points that are similar to head and tails in data structures. 
 //REMINDER: nums[pointer1] refers to the value at that index. pointer1 refers to the index within the array.
 