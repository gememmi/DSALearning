// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

//1.PROBLEM: TAKE IN ANY ROMAN NUMERAL AND TURN IT INTO AN INTEGER
//2.PSUEDOCODE: We will iterate through the provided string and for each character we will check if it is worth more or less than the NEXT/FOLLOWING one.
//If it is worth less, that means we will subtract from the overall total. Otherwise its an addition.
// STEPS:
//1. create a js object of key/value pairs, numerals with corresponding integer values
//2.create a variable to hold the length of the string so that we can iterate through it, and create a variable to hold the total, starting at 0 becuase we will contiue to add to it with an increment operator. Create a for loop with conditions so that we can determiner whether to subtract or add from the total

var romanToInt = function(string) {
    const numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        D: 100,
        M: 1000,
    };
const strLen = string.length;
let total = 0;

for (let i = 0; i < strLen; i++) {
    if ( i < strLen - 1 && numerals[string[i + 1]] > numerals[string[i]]){
        total -= numerals[string[i]];
    }
    else {
        total += numerals[string[i]];
    }
    
}
return total;  
}

console.log(romanToInt('IV'))

// EXPLANATION: within our for loop, we need a conditional expression to access whether our current index is less than or greater than the following index's value. This will determine whether we should subtract or add to the total value. First, we determine that we are on an index within the string, not the end of the string so that we know there is a following index value to compare the current index against. Then we get the following index value, ask if that value is greater the our current and if so, then we subtract our current index value from the whole. If it is not, then we add the current index value to the whole. Finallyy we return the total. 
