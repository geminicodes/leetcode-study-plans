/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    // create left and right pointers at start and end
    let left = 0;
    let right = s.length - 1;
    
    // iterate over the characters
    while(left < right) {
        // create temp to not displace a character
        let temp = s[left];
        
        // swap the characters
        s[left] = s[right];
        s[right] = temp;
        // move left forward and right backward
        left++;
        right--;
    };
};