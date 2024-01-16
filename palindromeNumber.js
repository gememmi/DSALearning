//INPUT: integer
//OUTPUT: boolean
//Given any number, determine if it is the same backwards and return either true or false
//PSEUDOCODE:

//function isPalindrome(num){
// turn num into string
//iterate over over the HALF the length of the string with i starting from the beginning
//iterate over the end half of the string with j which will be the length - 1 - i
// if i does not equal j then return false

// function truePalidrome(num){
//     stringNum = num.toString();

//     for(i =0; i < stringNum.length / 2; i++){
//         const j = stringNum.length - 1 - i;
//         if(stringNum[i] !== stringNum[j]){
//             return false;
//         }
// }
// }

// console.log(truePalidrome(121));

//THE EASIEST SOLUTION WHEN YOU ARE ALLOWED TO USE STRINGS

function isPalindrome(x){
    return x.toString().split('').reverse().join('') == x
};

//WHEN NOT USING A STRING AND JUST USING MATH
function isNoString(x){
    //immediately gets rid of any negative numbers
    if (x < 0){
        return false;
    }
    let reversed = 0
    let current = x;
    //this while loop is responsible for reversing the digits and it will continue until 'current' is equal to 0.
    while (current !== 0){
        //this is hard but helps to write it by hand
        reversed = reversed * 10 + current % 10;
        current = Math.floor(current/10);
    }
    return x === reversed;
}

// console.log(isPalindrome(1001));
// console.log(isPalindrome(754893));
// console.log(isPalindrome(340043));
// console.log(isPalindrome(1313));

console.log(isNoString(121))

