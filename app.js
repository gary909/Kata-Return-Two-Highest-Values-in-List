// function twoHighest(arr) {
//   let highestNum = [0];
//   let secHighNum = [0];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > highestNum[0]){
//         highestNum.push(arr[i]);
//         highestNum.shift();
//     }

//     if(arr[i] > secHighNum[0] && arr[i] < highestNum[0]){
//         secHighNum.push(arr[i]);
//         secHighNum.shift();
//     }

//     if(secHighNum[0] > 0){
//         highestNum.push(secHighNum[0])
//     }
// }
//     if(highestNum[0] == 0){
//         highestNum.shift();
//     }
//     // highestNum.push(secHighNum)
//     // return typeof(highestNum[0]); // number
//     return highestNum;

// }

function twoHighest(arr) {
    return arr
    .filter((v, i, a) => a.indexOf(v) === i)  // Unique array
    .sort((a, b) => b - a)  // Sort by DESC
    .slice(0, 2);  // Get first 2 element of sorted array
}

console.log(twoHighest([])); //  []
console.log(twoHighest([15])); //  [15]
console.log(twoHighest([15, 20, 20, 17])); //  [20, 17]
console.log(twoHighest([53103,92274,76085,87861,57004,21343,87357,31666,490,49324,39600,83103,27346,34687,33779,40311,64038,77404])); 
//  [92274, 87861]