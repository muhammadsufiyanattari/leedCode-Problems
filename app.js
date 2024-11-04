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

// let arr=['islamabad','karachi','lahore']
// console.log('before' ,arr);

// mujhe arr ko update kana he wo aese lahore ko 0 index par lana he but kusch condition hen
//

// 1)new variable nahi banana
// 2)array ke methad use nahi karne
// 3)or arr ke reference ko change nahi karna

// arr[0]=[arr[1],arr[1]=arr[0]][0],

// console.log(

// 'after',arr);

// arr[0]=arr[1]
// arr[1]=arr[0]
// arr[2]='faislabad'

// console.log('after',arr);

// continue karon ga

// 2621. Sleep
// Solved
// Easy
// Companies
// Hint
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Example 1:

// let millis = 100
// // Output: 100
// // Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// // Example 2:

// // let millis = 200
// // Output: 200
// // Explanation: It should return a promise that resolves after 200ms.

// // Constraints:

// 1 <= millis <= 1000

// // Is me ye khe raha he eik function banao jo ap ko kuch der bad return kare

// // /**
// //  * @param {number} millis
// //  * @return {Promise}
// //  */
// async function sleep(millis) {
//     //   return new Promise(resolve => setTimeout(resolve, millis));/

//     //   hum ne eik promise return kya he jis me value reslove kardi he phir function me set time
//     // out banaya he ye kuch der bad chale ga
//     // setTimeout do value leta he 1:value or
//     //  2:time ye time millisecand me leta he
//     return new Promise (resolve=>setTimeout(resolve,millis))
//     }

//     /**
//      * let t = Date.now()
//      * sleep(100).then(() => console.log(Date.now() - t)) // 100
//      */

// 2620. Counter
// Solved
// Easy
// Companies
// Hint
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Example 1:

//  let n = 10
// ["call","call","call"]
// Output: [10,11,12]
// Explanation:
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input:
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

// /**
//  * @param {number} n
//  * @return {Function} counter
//  */
// var createCounter = function(n) {

//     return function() {

//     return n++

//     };
// };

//   const counter = createCounter(10)
//   counter()
// console.log(createCounter(n));

// let s="aa";
// console.log(num);

// function longestSubstringBetweenEqualCharacters(s) {
//     let maxLen = -1;

//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             if (s[i] === s[j]) {
//                 let currentLen = j - i - 1;
//                 console.log( 'currentLen', j - i - 1);

//                 if (currentLen > maxLen) {
//                     maxLen = currentLen;
//                 }
//             }
//         }
//     }

//     return maxLen;
// }

// Example Usage:
// console.log(longestSubstringBetweenEqualCharacters("aa")); // Output: 0
// console.log(longestSubstringBetweenEqualCharacters("abca")); // Output: 2
// console.log(longestSubstringBetweenEqualCharacters("cbzxy")); // Output: -1
// console.log(longestSubstringBetweenEqualCharacters("vndw")); // Output: -1

// 1624.

//    Largest Substring Between Two Equal Characters
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: s = "aa"
// Output: 0
// Explanation: The optimal substring here is an empty substring between the two 'a's.
// Example 2:

// Input: s = "abca"
// Output: 2
// Explanation: The optimal substring here is "bc".
// Example 3:

// Input: s = "cbzxy"
// Output: -1
// Explanation: There are no characters that appear twice in s.

// Constraints:

// 1 <= s.length <= 300
// s contains only lowercase English letters.

// let s = "aa";
// function subStringLenght(s) {
//   let maxLen = -1;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j < s.length; j++) {
//       if (s[i] === s[j]) {
//         let currentLen = j - i - 1;
//         if (currentLen > maxLen) {
//           maxLen = currentLen;
//         }
//       }
//     }
//   }
//   return maxLen;
// }

// console.log(subStringLenght(s));
