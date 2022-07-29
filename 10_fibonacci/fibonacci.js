const fibonacci = (number) => {
    let term = +number;
    if(term < 0) return "OOPS";
    let numbers = [];
    numbers.push(1); //First item in the array.
    numbers.push(1); //Second item in the array.
    if(term > 0 && term <= 2) return 1;
    for(let i = 0; i + 1 < term; i++){
        numbers.push(numbers[i] + numbers[i+1]);
    }
    return numbers[numbers.length -2];
};

// Do not edit below this line
module.exports = fibonacci;
