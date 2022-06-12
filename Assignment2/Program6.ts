/*
Auther : Omkar Rajendra Nanaware.
Date and time: jun 8 13:08

Program Statement: write a typescript program which contains one function 
names as SortedArray .That function accept array and return sorted array.

Input: 5 4 3 2 1
output : 1 2 3 4 5

*/

function SortedArray(Arr:number[]):number[]
{
    var iSecmax:number = 0;
    var iRound:number = 2;


    for(var i:number = 1; i <= Arr.length-1; i++)
    {
        for(var j:number = 0; j <= (Arr.length - i -1); j++)
        {
            
            if(Arr[j]>Arr[j+1])
            {
                var temp:number = Arr[j];
                Arr[j] = Arr[j+1];
                Arr[j+1] = temp;

            }

        }


    }



    return Arr;
}





function main():void
{   
    var iRet:number[];
    var Arr:number[] = [5,4,3,2,1];

    iRet = SortedArray(Arr);

    console.log(iRet);

}


main();