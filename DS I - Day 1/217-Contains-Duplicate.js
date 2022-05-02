/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let numbers = new Set();
    
    // let's loop through each num in array
    for (let num of nums) {
        // if no same num found in the Set, add current num
        if(!numbers.has(num)) {
            numbers.add(num);
        } else {
            // if current num is already in the set
            return true
        }
    }
    // every num in the Set is unique
    return false;
};