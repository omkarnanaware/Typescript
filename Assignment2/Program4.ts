/*
Auther : Omkar Rajendra Nanaware.
Date and time: jun 8 14:29

Program Statement: write a typescript program which contains one function 
names as ChkArmstrong .That function accept the number and checks weather no is amstrong or not
Input: 153
output :it is Amstrong

*/

var ChkArmstrong=(iNo:number):boolean =>
{
    var flag:boolean = false;
    var iChkVal = iNo;
    var iDigit:number = 0;
    var iSum:number = 0;
    var iCube:number = 0;
    while(iNo > 0)
    {   
        iDigit = Math.floor(iNo % 10);
        iCube = iDigit * iDigit * iDigit;

        iSum = iSum + iCube;

        iNo = iNo / 10;
    }

    

    if(iSum == iChkVal)
    {
        flag = true;
    }
    else
    {
        flag = false;
    }

    return flag;
}




function main():void
{
    var iRet:boolean = false;
    var iValue:number = 153;

    iRet = ChkArmstrong(iValue);

    if(iRet == true)
    {
        console.log(iValue+" is Amstrong");
    }

    else
    {
        console.log(iValue+" is not Amstrong");
    }

    return;
}

main();