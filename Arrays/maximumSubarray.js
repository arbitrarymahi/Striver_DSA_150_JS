// Kadane's algo
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

let max = nums[0];
let sumSoFar = nums[0];

for (let i=1; i<nums.length;i++){
    const curr = nums[i];

    const sum = sumSoFar+ nums[i];

    if(sum > 0){
        sumSoFar = Math.max(nums[i]+sumSoFar, nums[i]);
    }else {
        sumSoFar = nums[i];
    }
    max = Math.max(sumSoFar, max);
}

return max;
};

//maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
//maxSubArray([1])
//maxSubArray([5,4,-1,7,8])
