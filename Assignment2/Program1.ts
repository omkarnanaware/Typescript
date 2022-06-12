/*

problem Statement: Print Max no from the array and return the max no through function.


*/

//fat arrow function Demo

var Max=(Arr:number[]):number =>
{
    var iMax:number = Arr[0];
    
    for(var iCnt:number = 0; iCnt< Arr.length; iCnt++)
    {
        if(iMax < Arr[iCnt])
        {
            iMax = Arr[iCnt];
        }

    }

    return iMax
}




function main():void
{
    var iRet:number = 0;
    var Arr:number[];

    Arr=[20,90,800,10,5,60];
    console.log("Printing Array "+Arr);

    iRet = Max(Arr);

    console.log("Max number "+iRet);
}


main();