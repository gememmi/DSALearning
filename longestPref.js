//FIND THE LONGEST COMMON PREFIX
//INPUT: ARRAY OF STRINGS
//OUTPUT: STRING OR EMPTY STRING
//REWORD: 

//PSEUDOCODE: 
//let prefix = empty string
//Loop through the characters (char, index)
    //Loop through the strings
    //compare: if str[i] !== char
    //return empty string
//0therwise prefix == prefix + char
//return prefix

const strs = ["flower", "flow", "flight"]

function longestPrefix(){
    let prefix = '';
    if (strs.length === 0) return prefix;
    for (let i = 0; i < strs[0].length; i++){
        let char = strs[0][i];
        for( let j = 0; j < strs.length; j++){
            if(strs[j][i] !== char) return prefix;
        }
        prefix = prefix + char;
    }
    return prefix;
}

console.log(longestPrefix(strs))


//What I learned:
//If you are working with two data types that exist within one another, than you should be working with two for loops. 
//Remember that when using bracket notation to retreive an index DO NOT USE DOT NOTATION TOO. 
//You can add to a string based varaible simply by using the + operator to add another character.

