/*
Auther : Omkar Rajendra Nanaware.
Date and time:

Program Statement: write a typescript program which contains one function
names as summation .That function accept array and return summation of each number

Input: 1 2 3 4 5
output : 15

*/
//Demo of Fat Array/ Lambda function
var Summation = function (Arr) {
    var iSum = 0;
    var iCnt = 0;
    for (iCnt = 0; iCnt < Arr.length; iCnt++) {
        iSum = iSum + Arr[iCnt];
    }
    return iSum;
};
function main() {
    var iRet = 0;
    var Arr = [1, 2, 3, 4, 5];
    iRet = Summation(Arr);
    console.log(iRet);
}
main();
