/*
Problem Statement: Write a program to find factor of a number and return it
input : 5
output : 120

*/
function Factor(iNo) {
    var iFact = 1;
    for (var i = 1; i <= iNo; i++) {
        iFact = iFact * i;
    }
    return iFact;
}
function mainfact() {
    var iRet = 0;
    var iValue = 5;
    iRet = Factor(iValue);
    console.log("Factor of " + iValue + ":" + iRet);
}
mainfact();
