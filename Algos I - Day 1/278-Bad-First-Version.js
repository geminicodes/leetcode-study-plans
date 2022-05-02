/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // create pointers, left at the start and right at the finish 
        let left = 1;
        let right = n;
        
        //start searching
        while (left < right) {
            //find the mid point and round it using Math.floor
            let mid = left + Math.floor((right - left) / 2);
            
            if (!isBadVersion(mid)) {
                left = mid + 1; 
            } else {
                right = mid; // target is found
            }
        }
        // both the left and the right pointers are on the same integer
        return left;
    };
};