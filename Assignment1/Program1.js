/*
Problem Statement: Write a programm to find the largest no from no of parameters;
input : 23 86 9
output : 86

*/
function max(No1, No2, No3) {
    var iMax = 0;
    if (No1 > No2) {
        if (No1 > No3) {
            iMax = No1;
        }
        else {
            iMax = No3;
        }
    }
    else {
        iMax = No2;
    }
    return iMax;
}
function main() {
    var A = 23;
    var B = 86;
    var C = 9;
    var iRet = max(A, B, C);
    console.log("Maximum value is:", iRet);
}
main();
