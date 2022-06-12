/*
Program : write a typescript program which contains one function named ChkPrme.
        the function should accept one number and it should return true if the given
        number is prime and otherwise return fals.

*/
var ChkPrime = function (iNo) {
    var flag = false;
    for (var iCnt = 2; iCnt <= iNo / 2; iCnt++) {
        if (iNo % iCnt == 0) {
            flag = true;
        }
    }
    return flag;
};
function main() {
    var iRet = false;
    var iValue = 50;
    iRet = ChkPrime(iValue);
    if (iRet == true) {
        console.log(iValue + " is prime");
    }
    else {
        console.log(iValue + " is not prime");
    }
    return;
}
main();
