//challenge: Print the numbers 1 to 10 recursively:
// function recursion(num){
// if(num <= 0){
//     return num;
// }
// else{
//     recursion(num -1);
// }
// return num;
// }

// console.log(recursion(10));

// def countdown(i):
// 	print i
// 	if i <=0
// 		return
// 	else:
// 		countdown(i-1)

function recursion(start, end){
    if (start <= end) {
        console.log(start);
        recursion(start +1 , end);
    }
};

console.log('first function' + recursion(1, 10));

function countUp(n){
    if (n < 1){
        return [];
    }
    else {
        const countArray = countUp(n -1);
        countArray.push(n);
        return countArray;
    }
}

console.log(countUp(5))
