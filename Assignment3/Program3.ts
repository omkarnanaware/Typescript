/*
Name : Omkar Rajendra Nanaware.

Language : Typescript

Date and Time : jan 9 19:08

Problem Statement : 3. Create one typescript application which contains one class named as CircleX which sill
inherits above Circle class.

In Circlex class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.

After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.

*/

export class Circle1 
{
    Radius:number;

    PI:number;


    constructor(iradius:number)
    {
        this.Radius = iradius;
        this.PI = 3.14;
    }

    public Area():number
    {
        var iArea:number = this.PI * this.Radius * this.Radius;
        return iArea;
    }

}


class CircleX extends Circle1
{

    public Circumference():number
    {
        var Cirfer:number = 2 * this.PI * this.Radius;
        return Cirfer;
    }



}


function main():void
{
    var iRet:number = 0;
    var objARadius:number = 2;
    var objBRadius:number = 4;
    var objCRadius:number = 6;



    var objA = new CircleX(objARadius);
    iRet=objA.Area();
    console.log("Area of circle for Radius "+objARadius+" is : "+iRet);
    iRet=objA.Circumference();
    console.log("Circumference of circle for Radius "+objARadius+" is : "+iRet);

    var objB = new CircleX(objBRadius);
    iRet = objB.Area();
    console.log("Area of circle for Radius "+objBRadius+" is : "+iRet);
    iRet = objB.Circumference();
    console.log("Cirucmference of circle for Radius "+objBRadius+" is : "+iRet);

    var objC:CircleX = new CircleX(objCRadius);
    iRet=objC.Area();
    console.log("Area of circle for Radius "+objCRadius+" is : "+iRet);
    iRet=objC.Circumference();
    console.log("Circumference of circle for Radius "+objCRadius+" is : "+iRet);


}

main();