/*
Program : write a program to print fibonacci series till that no

*/

//Proof of concept of the anonymous function
var PrintFibo=function(iFib:number):void
{
    var iNo1 = 0;
    var iNo2 = 1;
    var iNo3 = 0;
    console.log(iNo1);
    console.log(iNo2);

    while(iFib > iNo3)
    {
        
        iNo3 = iNo1 + iNo2;
        console.log(iNo3);
        iNo1 = iNo2;
        iNo2 = iNo3;
        
    }

}




function main():void
{

    var iValue:number = 21;

    PrintFibo(iValue);


}

main();