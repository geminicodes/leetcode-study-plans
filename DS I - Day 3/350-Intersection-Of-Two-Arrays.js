/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    // create a hash
    let hash = {};
    let result = [];
    
    // iterate through array nums1 to get values
    for(let i of nums1) {
        if(!hash[i]) {
            hash[i] = 1;
        } else {
            hash[i]++;
        }
    }
    
    // iterate through array nums2 to find if the value is present
    for(let i of nums2) {
        if(hash[i] > 0) {
            result.push(i);
            hash[i]--;
        }
    }
    return result;
};