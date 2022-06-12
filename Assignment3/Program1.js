/*

problem Statement: . Create one typescript application which contains one class named as Arithmetic.
Arithmetic class contains three characteristics (Class data members) as Number1, Number2.
Create one parametrised constructor which accept two values and assign it to Number1 and
Number2.

In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction ,
Multiplication and Division.

Addition method will add Number , Number2 & return result.

Subtraction method will subtract Number1 , Number2 & return result.

Multiplication method will multiply Number1 , Number2 & return result.

Division method will divide Number1 , Number2 & return result.

After designing the class create two objects‘of that class by providing some hardcoded value.
Call all the methods by using both the objects.


*/
var Arithmatic = /** @class */ (function () {
    function Arithmatic(iNo1, iNo2) {
        this.Number1 = iNo1;
        this.Number2 = iNo2;
    }
    Arithmatic.prototype.Addition = function () {
        var iOpt = this.Number1 + this.Number2;
        return iOpt;
    };
    Arithmatic.prototype.Substraction = function () {
        var iOpt = this.Number1 - this.Number2;
        return iOpt;
    };
    Arithmatic.prototype.Multiplication = function () {
        var iOpt = this.Number1 * this.Number2;
        return iOpt;
    };
    Arithmatic.prototype.Division = function () {
        var iOpt = this.Number1 / this.Number2;
        return iOpt;
    };
    return Arithmatic;
}());
function main() {
    var iValue1 = 10;
    var iValue2 = 20;
    var iRet = 0;
    var objA = new Arithmatic(iValue1, iValue2);
    iRet = objA.Addition();
    console.log("Additon:" + iRet);
    iRet = objA.Substraction();
    console.log("Substraction:" + iRet);
    iRet = objA.Multiplication();
    console.log("Multiplication:" + iRet);
    iRet = objA.Division();
    console.log("Division:" + iRet);
    var objB = new Arithmatic(50, 60);
    iRet = objB.Addition();
    console.log("Additon:" + iRet);
    iRet = objB.Substraction();
    console.log("Substraction:" + iRet);
    iRet = objB.Multiplication();
    console.log("Multiplication:" + iRet);
    iRet = objB.Division();
    console.log("Division:" + iRet);
}
main();
