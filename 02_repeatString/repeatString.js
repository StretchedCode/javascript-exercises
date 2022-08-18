const repeatString = function(string, repeat) {

let newString = '';

    for (let i = 0; i < repeat; i++){
        newString += string;
    }
    return newString;
};

console.log(repeatString('amogus', 3));

// Do not edit below this line
module.exports = repeatString;
