/*Given a string s containing 0's and 1's. You have to return a smallest positive integer C,
* such that the binary string can be cut into C pieces
* and each piece should be of the power of 5  with no leading zeros.
*/


//global variables
var allPowersOf5 = [];
var count = 0;

function cuttingString(s) {
    //store all powers of 5
    storePowerOf5(s);
    allPowersOf5.reverse();
    split(s, 0, 0);
    console.log("count is ", count);
}

function storePowerOf5(s) {
    var binFormat;
    var p = 5;
    //convert in binary
    binFormat = p.toString(2);

    while (binFormat.length <= s.length) {
        console.log(p);
        allPowersOf5.push(binFormat);
        p = p * 5;
        binFormat = p.toString(2);
    }
}

function split(str, start, c) {
    if (start == str.length) {
        count = c;
        return;
    }
    allPowersOf5.forEach(function (el) {
        if (str.startsWith(el, start)) {
            split(str, start + el.length, c + 1);
        }
    })
}

cuttingString("101101101");
