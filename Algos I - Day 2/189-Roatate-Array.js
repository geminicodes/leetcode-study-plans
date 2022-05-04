/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    // get remainder to find out number of times to reverse
    // cos if k is greater than nums length, the rotation loops
    k = k % nums.length;
    
    // reverse all the nums
    reverse(nums, 0, nums.length - 1);
    // reverse first k nums
    reverse(nums, 0, k - 1);
    // reverse remaning nums
    reverse(nums, k, nums.length - 1);
};

// reverse function
var reverse = function(nums, start, end) {
    while(start < end) {
        // hold first num
        let temp = nums[start];
        // replace first num with last num
        nums[start] = nums[end];
        // reverse first and last nums in temp
        nums[end] = temp
        // 
        start++;
        end--;
    }
};