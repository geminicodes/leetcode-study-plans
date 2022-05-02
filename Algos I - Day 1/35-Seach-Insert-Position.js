/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
     // create left and right pointers
    let left = 0;
    let right = nums.length - 1;
    
    // if target is less than left or more than right, edge cases
    if(nums[left] > target) return 0;
    if(nums[right] < target) return nums.length;
    
    // while left and right pointers move around until collision
    while (left <= right ) {
        //find the mid point and round it using Math.floor
        let mid = left + Math.floor((right - left) /2);
        
        if (nums[mid] === target) {
            return mid; // target is found
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid -1;
        }
    }
    // both the left and the right pointers are on the same integer
    return left;
};