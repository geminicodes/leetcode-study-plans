/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    // store resulting squares of nums in new array
    const result = new Array(nums.length).fill(0);
    // create left and right pointers at start and end
    let left = 0;
    let right = nums.length - 1;
    // keep track of visited nums
    let resultIndex = nums.length - 1;
    
    // until pointer collision
    while(left <= right) {
        // square the nums using Math.pow
        let leftVal = Math.pow(nums[left], 2);
        let rightVal = Math.pow(nums[right], 2);
        
        // if right pointer num is greater, set result at resultIndex, move backward right pointer
        if(leftVal < rightVal) {
            result[resultIndex] = rightVal;
            right--;
        // if left pointer num is greater, set result at resultIndex, move forward left pointer
        } else {
            result[resultIndex] = leftVal;
            left++
        }
        // decrease resultIndex
        resultIndex--;
    }
    
    return result;
};