// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and using only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let found = false;
  let el = nums[0];
  while (!found) {
    if (nums[el] === el) {
      found = true;
    } else {
      [nums[el], el] = [el, nums[el]];
    }
  }
  return el;
};
