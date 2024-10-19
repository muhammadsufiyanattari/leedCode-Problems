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



// 258. Add Digits
// Easy
// Topics
// Companies
// Hint
// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

// Example 1:

// let num = 38;
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.
// Example 2:

// Input: num = 0
// Output: 0
 

// Constraints:

// 0 <= num <= 231 - 1
 

// Follow up: Could you do it without any loop/recursion in O(1) runtime?
// let arr=[];


// var addDigits = function(num) {
    
   
//     if(num==0){return 0
    
//     }
//     else{
//         return num % 9=== 0? 9: num % 9;
//     }
        
    
    
    
//     };


// Q 2942

// let words = ["leet","code"], x = "e";
// var findWordsContaining = function(words, x) {
//     let result = [];
//      for (let i = 0; i < words.length; i++) {
//          if (words[i].includes(x)) {
//              result.push(i);
//          }
//      }
//      return result;
 

//      }
//      findWordsContaining(words,x)