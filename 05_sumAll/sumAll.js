const sumAll = function(a, b) {

if ((!Number.isInteger(a) || !Number.isInteger(b)) || (a < 0 || b < 0)){
    return 'ERROR';
}

if (a > b){
    
    let temp = a;
    a = b;
    b = temp;

}
let newSum = 0;

for (let i = a; i <= b; i++){
    newSum += i;
}
return newSum;

};

// Do not edit below this line
module.exports = sumAll;
