/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // create a hash
    const hash = {};
    
    for(let i = 0; i < nums.length; i++) {
        let val = nums[i];
        // set value to the index (key)
        hash[val] = i;
    }
    
    for(let i = 0; i < nums.length; i++) {
        // create potentialKey
        let potentialKey = target - nums[i];
        // get potentialKey and check if it's not i (not itself)
        if(hash[potentialKey] && hash[potentialKey] !== i) {
            return [i, hash[potentialKey]];
        }
    }
        
};