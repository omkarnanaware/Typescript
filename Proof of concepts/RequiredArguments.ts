//Required arguments

//Number of required arguments are 2
//Default arguments should be trainling

function Demo(no1:number,no2:number=10,no3:number=20)
{
    console.log("Inside Demo");
}

Demo(10);           //no1 = 10, no2 = 10,no3 = 20
Demo(10,11);        //no1 = 10, no2 = 11,no3 = 20
Demo(10,20,30);     //no1 = 10, no2 = 20,no3 = 30