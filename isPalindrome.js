//SOLUTION #1

function reverse(word){
  // turn the string into an array
const wordArray = word.split('');
// reverse the elements of the array
const reversedWordArray = wordArray.reverse();
//join the elements of the array back to a string
const reversedWord = reversedWordArray.join('');
// return the new reversed string
return reversedWord
}

function isPalindrome(word){
  // call the reverse function on our word argument
const reversedWord = reverse(word);
//compare the original word and the reversed word
return word === reversedWord

}



console.log("Expect to be true", isPalindrome("mom"))
console.log("Expect to be false", isPalindrome("mama"))

//SOLUTION #2
//you can iterate over a string in JS!!
function isPalindromeTwo (word){
//iterate from beginning to the middle of word
//also here is where I learned that for loops need to have semi colons between conditions
for ( let i = 0; i < word.length / 2; i++){
const j = word.length - 1 - i;
// index j will be the length of the word, divided by 2, minus index i. doing this will place us right at the corresponding index of i
if (word[i] !== word[j]) return false;
//this just stops the iteration in its tracks if it is immediately not mathcing
}
return true;
}
console.log("Expect to be true", isPalindromeTwo("mom"))
console.log("Expect to be false", isPalindromeTwo("mama"))
