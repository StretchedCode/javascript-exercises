const reverseString = function(string) {

let reverse = '';

for (let i = string.length - 1; i >= 0; i--){
    reverse += string.charAt(i);
}

return reverse;
};

console.log(reverseString('hello world'))

// Do not edit below this line
module.exports = reverseString;
