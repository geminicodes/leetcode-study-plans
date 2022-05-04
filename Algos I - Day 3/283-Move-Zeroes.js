/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let lastNonZeroIndex = 0;
    
    // iterate over all nums
    for(let i = 0; i < nums.length; i++) {
        // check if a num is not 0
        if(nums[i] !== 0) {
            // set i to last index that isn't 0
            nums[lastNonZeroIndex] = nums[i];
            // increment index
            lastNonZeroIndex++;
        }
    }
    
    // fill with 0s
    for(let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};
