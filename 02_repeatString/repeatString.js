const repeatString = function(string, repeat) {

if (repeat < 0){
    return 'ERROR';
}

let newString = '';

    for (let i = 0; i < repeat; i++){
        
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
