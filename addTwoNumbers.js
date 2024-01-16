let l1 =[2, 4, 3]
let l2 =[5, 6, 4]
//expected outcome [7, 0, 8]
//INPUT: 2 Linked Lists
//OUTPUT: 1 array
//REWORD: We are given two multiple digit numbers that have been reversed and then split and put into an array. We need to add up these numbers, and output that value as a reversed array.
//PSEUDOCODE:
//function (l1, l2) {
//     string 1 = join arrays
//     string 2 = join arrays
//     reversedString1 = string1.reverse
//     reversedString2 = string2.reverse
//     num1 = reversedString1.parseInt
//     num1 = reversedString2.parseInt
//     someNum = toString(num1 + num2)
//     someNum.reverse = someNumStringReverse
//     result = someNumStringReverse.join()
//     return result
    
// }

function addTwoNumbers(l1, l2){
    let result =[]
    let reversedArray1 = l1.reverse();
    let reversedArray2 = l2.reverse();
    let string1 = reversedArray1.toString();
    let joinedString = parseInt(string1)
    console.log(joinedString)
    console.log(string1)

};

console.log(addTwoNumbers(l1,l2));