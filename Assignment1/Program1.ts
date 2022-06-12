/*
Problem Statement: Write a programm to find the largest no from no of parameters;
input : 23 86 9
output : 86

*/

function max(No1:number,No2:number,No3:number):number
{
    var iMax:number = 0;

    if(No1 > No2)
    {
        if(No1>No3)
        {
            iMax = No1;
        }

        else
        {
            iMax = No3;
        }
    }
    else
    {
        iMax = No2;
    }

return iMax
}

function main()
{
    var A:number = 23;
    var B:number = 86;
    var C:number = 9;

    var iRet = max(A,B,C);

    console.log("Maximum value is:",iRet);

}


main();