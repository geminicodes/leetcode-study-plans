/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    // turn string into array
    let words = s.split(" ");
    
    // loop through words - split the items, reverse and join them back
    for (let i = 0; i < words.length; i++) {
        let items = words[i].split("");
        items.reverse();
        words[i] = items.join("");
    };
    
    // join words together with whitespace
    return words.join(" ");
};