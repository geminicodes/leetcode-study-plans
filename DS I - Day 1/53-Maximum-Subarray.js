/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    // keeping track of subarrays
    let maxCurrent = nums[0];
    let maxGlobal = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        // greater num between current num or current num plus current streak
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        
        // compare if current value is greater than the global value
        if(maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }
    // sum
    return maxGlobal;
};