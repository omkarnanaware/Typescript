/*
Auther : Omkar Rajendra Nanaware.
Date and time: jun 8 13:08

Program Statement: write a typescript program which contains one function
names as ChkArmstrong .That function accept the number and checks weather no is amstrong or not
Input: 153
output :it is Amstrong

*/
var ChkArmstrong = function (iNo) {
    var flag = false;
    var iChkVal = iNo;
    var iDigit = 0;
    var iSum = 0;
    var iCube = 0;
    while (iNo > 0) {
        iDigit = Math.floor(iNo % 10);
        iCube = iDigit * iDigit * iDigit;
        iSum = iSum + iCube;
        iNo = iNo / 10;
    }
    console.log(iSum);
    if (iSum == iChkVal) {
        flag = true;
    }
    else {
        flag = false;
    }
    return flag;
};
function main() {
    var iRet = false;
    var iValue = 153;
    iRet = ChkArmstrong(iValue);
    if (iRet == true) {
        console.log(iValue + " is Amstrong");
    }
    else {
        console.log(iValue + " is not Amstrong");
    }
    return;
}
main();
