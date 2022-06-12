/*
Problem Statement: Write a programm to find the area of circle through the a function and it should accept
                    value from user and return the area as per radius accepted by the function
input : 5
output : Area of circle : 78.5

*/
function Area(red) {
    var Area = 0;
    Area = 3.14 * red * red;
    return Area;
}
function Areamain() {
    var Value = 5;
    var iRet = Area(Value);
    console.log("Area of circle :" + iRet);
}
Areamain();
