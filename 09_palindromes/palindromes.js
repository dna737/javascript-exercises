const palindromes = (string) => {
    let newString = string.toLowerCase();
    //reversing the string:
    let reverse = "";
    for(let i = newString.length - 1; i >= 0; i--){
        if(isAlphabet(newString.charAt(i))){
            reverse += newString.charAt(i);
        }else{
            //remove that punctuation/whitespace(?):
            newString = newString.replace(newString.charAt(i), "");
        }
    }

    return newString === reverse;

    //removing the punctuations from the og string:
};

const isAlphabet = (character) => {
    return (character.length === 1 && character >= 'a' && character <= 'z');
}

// Do not edit below this line
module.exports = palindromes;
