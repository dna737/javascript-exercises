const removeFromArray = (array, ...removeables) => {    
        for(let j = 0; j < removeables.length; j++){
            for(let i = 0; i < array.length; i++){
            if(array[i] === removeables[j]){
                array.splice(i, 1);
            }
        }
        }
        return array;
    }

// Do not edit below this line
module.exports = removeFromArray;
