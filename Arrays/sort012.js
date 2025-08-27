// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let zeroPointer = 0;
  let twoPointer = nums.length - 1;
  let i = 0;
  while (i <= twoPointer) {
    if (nums[i] === 0) {
      nums[i] = nums[zeroPointer];
      nums[zeroPointer] = 0;
      i++;
      zeroPointer++;
    } else if (nums[i] === 2) {
      nums[i] = nums[twoPointer];
      nums[twoPointer] = 2;
      twoPointer--;
    } else {
      i++;
    }
  }
  return nums;
};

// console.log(sortColors([2,0,2,1,1,0]));
// console.log(sortColors([2, 0, 1]));
// console.log(sortColors([0,2,1]));
// console.log(sortColors([2,0]));
// console.log(sortColors([0,0,1,0,1,1]));
