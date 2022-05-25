
//Function defination
function fun()
{
    console.log("Inside fun");


}

//function call 
fun();

function gun(no:number)
{
    console.log("Inside gun:",+no);
}

gun(11);

function sun(no:number):number
{
    var i:number = no;  //Local Variable
    i++;
    return i;
}

var ret:number = 0;
var a:number = 10;
ret = sun(a);
console.log("Return value is : "+ret);


// tsc FunctionDemo.ts      //Step 1(Transpile .ts to .js)
// node FunctionDemo.js     //Step 2(Exicute.js)