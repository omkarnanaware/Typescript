/*
Problem Statement: Write a program to find factor of a number and return it
input : 5
output : 120

*/


function Factor(iNo:number)
{
    var iFact:number = 1;

    for(var i =1;i<=iNo;i++)
    {

        iFact = iFact * i;

    }


    return iFact;
}


function mainfact():void
{
    var iRet:number = 0;
    var iValue:number = 5;

    iRet=Factor(iValue);

    console.log("Factor of "+iValue+":"+iRet);
}


mainfact();