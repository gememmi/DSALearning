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
console.log("Expect to be false", isPalindrome("Abc"))
