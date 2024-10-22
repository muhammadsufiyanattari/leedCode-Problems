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



// Q : 242. Valid Anagram
// let s = "lab", t = "bal"

// Output: true

// var isAnagram = function(s, t) {
//  let result="";
//  s.toLocaleLowerCase()
//  t.toLocaleLowerCase()
//      let array = s.split("").sort().join();
//      let array1 = t.split("").sort().join();

//      return result=array==array1?true:false
   
// };
// console.log(isAnagram(s,t));





// 2621. Sleep
// Solved
// Easy
// Companies
// Hint
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

 

// Example 1:

// let= millis = 100;
// // Output: 100
// // Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// })



//   ye khe rahe hen hame eik aesa function bane ke do jo kuc de bad value return kare
// /**
// //  * @param {number} millis
// // //  * @return {Promise}
//  */
// async function sleep(millis) {
    // return  new Promise(resolve => setTimeout(resolve, millis));
    // return setTimeout(millis,millis)
// }
// pandding
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
// console.log(sleep(millis));




// self Problem

let arr=['islamabad','karachi','lahore']
console.log('before' ,arr);


// mujhe arr ko update kana he wo aese lahore ko 0 index par lana he but kusch condition hen
//

// 1)new variable nahi banana 
// 2)array ke methad use nahi karne
// 3)or arr ke reference ko change nahi karna

arr[0]=[arr[1],arr[1]=arr[0]][0],

console.log(
   

'after',arr);

