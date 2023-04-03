/********* PROBLMEM - TwoSum ***********/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


let array = [3,2,4]; // test sample array target: 6

var twoSum = function(nums, target) {
    let newArr = [];    // new array for return 

    for (let i = 0; i < nums.length; i++) {  // interates through first index of array
        let sum = 0;    // counts sum or integers 

        for (let j = i + 1; j < nums.length; j++) {      // interates through second indext of array
           sum = nums[i] + nums[j];
           if (sum == target) {
               newArr.push(i);
               newArr.push(j);
               return newArr;
               break;
           }
        }
    }
};



console.log(twoSum(array, 6));



