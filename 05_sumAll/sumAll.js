const sumAll = (start, finish) => {
    if(!Number.isInteger(start) || !Number.isInteger(finish)){
        return "ERROR";
    }

    if(start < 0 || finish < 0){
        return "ERROR";
    }
    //If start is greater than finish, we just have to swap the start and finish values since addition is commutative.
    if(start > finish){
        let temp = start;
        start = finish;
        finish = temp;
    }
    let sum = 0;
    for(let i = start; i <= finish; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
