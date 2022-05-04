/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    // create left and right pointers at start and end
    let left = 0;
    let right = numbers.length - 1;
    let result = [];
    
    // iterate over every number
    while(left < right) {
        let leftNumber = numbers[left];
        let rightNumber = numbers[right];
        
        //check if numbers add up to target, move pointers to result
        if (leftNumber + rightNumber === target) {
            result.push(left + 1);
            result.push(right + 1);
            break;
        // if less than target, move pointer backward
        } else if (leftNumber + rightNumber > target) {
            right--;
        // if more than target, move pointer forward
        } else {
            left++;
        }
    }
    return result;
    
};