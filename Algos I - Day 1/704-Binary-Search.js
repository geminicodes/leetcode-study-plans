/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    // create 2 pointers
    // left begins at the start
    // right begins at the end
    let left = 0;
    let right = nums.length - 1;
    
    // while left and right pointers move around until collision
    while (left <= right) {
        
        // finding out our mid point in the array and round it using Math.floor
        let mid = left + Math.floor((right - left) / 2);
        
        if(nums[mid] === target) {
            return mid; // target is found
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // if nothing comes up in the array
    return -1;
    
};