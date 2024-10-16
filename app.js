//  * @param {number[]} nums
//  * @return {number[]}

//                 1
// var getConcatenation = function(nums) {
//     let arr = []
//     for(let i=0; i < nums.length; i++) {
//         arr.push(nums[i])
//     }
//     for(let j=0; j < nums.length; j++) {
//         arr.push(nums[j])
//     }
//     return arr
// };
// // }
// console.log(getConcatenation([1,2,3,4]));

//                   2

// /**
//  * @param {string[]} operations
//  * @return {number}
//  */
// var finalValueAfterOperations = function (operations) {
//     valueX = 0;
//     for (var i = 0; i < operations.length; i++) {
//         if (operations[i].includes("-")) {
//             valueX--
//         } else {
//             valueX++
//         }
//     }
//     return valueX
// };

// let nums = [1, 2, 3, 1];

// var containsDuplicate = function(nums) {
//     nums.sort();
//     for(let i = 0; i <= nums.length-1; i++){
//         if(nums[i] === nums[i+1]){
//             return true
//         }
//     }
//     return false
// };


// console.log(
//   containsDuplicate(nums));
