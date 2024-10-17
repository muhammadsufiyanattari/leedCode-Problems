//  * @param {number[]} nums
//  * @return {number[]}

                // 1
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
// // console.log(getConcatenation([2,4]));

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


// palaindrom

// let s='civic'
// var isPalindrome = function(s) {

//     // Step 1: Sab letters ko lowercase mein convert karo aur non-alphanumeric characters hatao
//     let cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
//     // Step 2: Check karo agar cleaned string ulta aur seedha ek jaisi hai ya nahi
//     let reversedString = cleanedString.split('').reverse().join('');
    
//     return cleanedString === reversedString?true:false





// };
// isPalindrome()