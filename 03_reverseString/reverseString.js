const reverseString = (string) => {
    let reverseString = "";
    for(let i = 0; i < string.length; i++){
        reverseString += string.charAt(string.length-1-i);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
