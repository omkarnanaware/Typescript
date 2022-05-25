//Object Oriented Programming (OOP)
//Class Defination
var Arithmatic = /** @class */ (function () {
    function Arithmatic(No1, No2) {
        this.No1 = No1;
        this.No2 = No2;
        console.log("Inside constructor");
    }
    Arithmatic.prototype.Addition = function (p) {
        if (p === void 0) { p = 0; }
        var Ans = 0; //Local Variable
        Ans = this.No1 + this.No2;
        console.log("Printing P:", +p);
        return Ans;
    };
    Arithmatic.prototype.Substraction = function () {
        var Ans = 0; //Local Variable
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithmatic;
}());
var Ret = 0;
var obj1 = new Arithmatic(50, 60);
Ret = obj1.Addition(10);
console.log("Addition of obj1:", +Ret);
Ret = obj1.Substraction();
console.log("Substraction of obj1:", +Ret);
var obj1 = new Arithmatic(70, 40);
Ret = obj1.Addition();
console.log("Addition of obj2:", +Ret);
Ret = obj1.Substraction();
console.log("Substraction of obj2:", +Ret);
