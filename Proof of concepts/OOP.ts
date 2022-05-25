//Object Oriented Programming (OOP)

//Class Defination
class Arithmatic
{
    //Characteristic
    No1:number;
    No2:number;

    constructor( No1:number,No2:number)
    {
        this.No1 = No1;
        this.No2 = No2;
        console.log("Inside constructor");
    }
    
     Addition()     //Behaviour
    {
        var Ans:number = 0;         //Local Variable
        Ans = this.No1 + this.No2;
        return Ans;
    }

     Substraction()    //Behaviour
    {
        var Ans:number = 0;         //Local Variable
        Ans = this.No1 - this.No2;
        return Ans;

    }

}

var Ret:number = 0;

var obj1 = new Arithmatic(50,60);
Ret = obj1.Addition()
console.log("Addition of obj1:",+Ret);

Ret = obj1.Substraction()
console.log("Substraction of obj1:",+Ret);

var obj1 = new Arithmatic(70,40);
Ret = obj1.Addition()
console.log("Addition of obj2:",+Ret);

Ret = obj1.Substraction()
console.log("Substraction of obj2:",+Ret);







