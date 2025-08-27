/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const len= nums.length;
    let index = -1;
    for(let i=len-2; i>=0;i--){
        if(nums[i] < nums[i+1]){ index = i;break;}
    }
    if(index === -1){
        return nums.reverse();
    }
    for(let i=len-1; i>index;i--){
        if(nums[i] > nums[index]){
            const temp = nums[i];
            nums[i] = nums[index];
            nums[index] = temp;
            break;
        }
    }
    let start = index+1;
    let end = len-1;
    while(start< end){
        const temp = nums[start];
            nums[start++] = nums[end];
            nums[end--] = temp;
    }
};

// nextPermutation([1,2,3])
// nextPermutation([3,2,1])
// nextPermutation([1,1,5])