/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    // create variables
    let first = m - 1;
    let second = n - 1;
    let i = n + m - 1;
    
    while(second >= 0) {
        // values to compare
        let firstVal = nums1[first];
        let secondVal = nums2[second];
        
        // find bigger value between first and second, decrement i and first
        if(firstVal > secondVal) {
            nums1[i] = firstVal;
            i--;
            first--;
        // decrement i and second
        } else {
            nums1[i] = secondVal;
            i--;
            second--;
        }
    }
};