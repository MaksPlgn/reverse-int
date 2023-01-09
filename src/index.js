module.exports = function reverse (n) {
    
    return +Math.abs(n)      //absolute value of a number, (+) - convert to Number
                .toString()  //convert to String
                .split('')   //convert to Array
                .reverse()   //reverses the order of the elements in an array
                .join('');   //convert to String from reverse array
}
