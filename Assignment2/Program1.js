//fat arrow function Demo
var Max = function (Arr) {
    var iMax = Arr[0];
    for (var iCnt = 0; iCnt < Arr.length; iCnt++) {
        if (iMax < Arr[iCnt]) {
            iMax = Arr[iCnt];
        }
    }
    return iMax;
};
function main() {
    var iRet = 0;
    var Arr;
    Arr = [20, 90, 800, 10, 5, 60];
    console.log("Printing Array " + Arr);
    iRet = Max(Arr);
    console.log("Max number " + iRet);
}
main();
