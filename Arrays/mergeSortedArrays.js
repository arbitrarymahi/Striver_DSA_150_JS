// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let front = m - 1;
  let back = n - 1;
  let i = nums1.length - 1;

  while (front >= 0 && back >= 0) {
    if (nums1[front] > nums2[back]) {
      nums1[i--] = nums1[front--];
    } else {
      nums1[i--] = nums2[back--];
    }
  }
  if (front < 0) {
    while (back >= 0) {
      nums1[i--] = nums2[back--];
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([0], 0, [1], 1));
console.log(merge([2, 0], 1, [1], 1));
