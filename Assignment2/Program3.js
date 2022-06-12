/*
Auther : Omkar Rajendra Nanaware.
Date and time: jun 8 13:08

Program Statement: write a typescript program which contains one function
names as summation .That function accept array and return Second max element

Input: 5 4 3 2 1
output :4

*/
function SecondMax(Arr) {
    var iSecmax = 0;
    var iRound = 2;
    for (var i = 1; i <= Arr.length - 1; i++) {
        for (var j = 0; j <= (Arr.length - i - 1); j++) {
            if (Arr[j] > Arr[j + 1]) {
                var temp = Arr[j];
                Arr[j] = Arr[j + 1];
                Arr[j + 1] = temp;
            }
        }
    }
    return Arr[Arr.length - iRound];
}
function main() {
    var iRet;
    var Arr = [23, 86, 9, 6, 77, 23];
    iRet = SecondMax(Arr);
    console.log(iRet);
}
main();
