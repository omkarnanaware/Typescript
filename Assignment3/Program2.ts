/*

Auther : Omkar Rajendra Nanaware

Language : Typescript

Data and Time : jau 9 15.30

Problem Statement : 2. Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class!data members) as Radius, PI.
Create one parametrised constructor which accept one Value and assign it to Radius. Value of

PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of Circle.

After designing the class create two objects.of that class by providing some hardcoded value.
Call the method Area by using both the objects.


*/


class Circle 
{
    private Radius:number;

    private PI:number;


    constructor(iradius:number)
    {
        this.Radius = iradius;
        this.PI = 3.14;
    }

    public Area():number
    {
        var iArea = this.PI * this.Radius * this.Radius;
        return iArea;
    }

}



function main():void
{
    var iRet:number = 0;
    var objARadius:number = 2;
    var objBRadius:number = 4;



    var objA = new Circle(objARadius);
    iRet=objA.Area()
    console.log("Area of circle for Radius "+objARadius+" is : "+iRet);

    var objB = new Circle(objBRadius);
    iRet = objB.Area();
    console.log("Area of circle for Radius "+objBRadius+" is : "+iRet);

}

main();