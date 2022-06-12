"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Circle1 = void 0;
var Circle1 = /** @class */ (function () {
    function Circle1(iradius) {
        this.Radius = iradius;
        this.PI = 3.14;
    }
    Circle1.prototype.Area = function () {
        var iArea = this.PI * this.Radius * this.Radius;
        return iArea;
    };
    return Circle1;
}());
exports.Circle1 = Circle1;
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        var Cirfer = 2 * this.PI * this.Radius;
        return Cirfer;
    };
    return CircleX;
}(Circle1));
function main() {
    var iRet = 0;
    var objARadius = 2;
    var objBRadius = 4;
    var objCRadius = 6;
    var objA = new CircleX(objARadius);
    iRet = objA.Area();
    console.log("Area of circle for Radius " + objARadius + " is : " + iRet);
    iRet = objA.Circumference();
    console.log("Circumference of circle for Radius " + objARadius + " is : " + iRet);
    var objB = new CircleX(objBRadius);
    iRet = objB.Area();
    console.log("Area of circle for Radius " + objBRadius + " is : " + iRet);
    iRet = objB.Circumference();
    console.log("Cirucmference of circle for Radius " + objBRadius + " is : " + iRet);
    var objC = new CircleX(objCRadius);
    iRet = objC.Area();
    console.log("Area of circle for Radius " + objARadius + " is : " + iRet);
    iRet = objC.Circumference();
    console.log("Circumference of circle for Radius " + objARadius + " is : " + iRet);
}
main();
