//For this task, you'll need to write a method that reverses a string. Your method will receive one argument, a string, and be expected to output that string with its letters in reverse order. Input is a string, ,output is a string. We will need to use iteration.



//Rewrite: I need to take a string and return the string reverse, but without using .reverse()!
// iterate over each letter of that string, remove it from the start and then push add it to the end of the string

//Test cases:
//I expect calling the reverse function with the string "emily" will return "ylime"
// console.log("Expecting ylime")
//console.log(reverse("emily"))
//I expect calling the reverse function with the string "connor" will return "ronnoc"
//console.log(Expecting ronnoc")
//console.log(reverse("connor"))

 //Pseudocode: 
//intialize emptry array for result []

//  function reverse(string) {
    //for (let i = 0; i < string.length; i++) {
//    use .shift() to remove the first letter, string[i].shift().push()
    //save the new string as a variable let newString = string[i].shift()
    //then use .push() to add this element to the end of the string. resul 

// }
//  }
// string = "emily"
// function reverse(string){
//     for( let i = 0; i < string.length; i++){
//         let newString = string[i].shift();
//         let newNewString = string[i].push();
//     }
//     return newNewSTring
// }
// console.log("Expecting ylime")
// console.log( "=>", reverse("emily"))
// string = "emily"
// function reverse(string){
//    let array = string.split('')
//     for( let i = 0; i < array.length; i++){
//         let newString = array[i].shift();
//         let newNewString = newString[i].push();
//     }
//     return newNewSTring
// }

//ok my method still did not work becuase you can't call .shift() on a string


function reverseString(str) {

    // empty string to store the result
    let newString = "";
//iterate over the string in reverse order
    for (let i = str.length - 1; i >= 0; i--) {
        //then using += we append the the new characters in reverse order
        newString += str[i];
    }
    return newString;
}

// take input from the user
console.log(reverseString("hello world"))