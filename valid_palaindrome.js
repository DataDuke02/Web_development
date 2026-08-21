/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const reversed = s.split("").reverse().join("");
    return s === reversed;
};
