//Required arguments
//Number of required arguments are 3
function Demo(no1, no2, no3) {
    if (no2 === void 0) { no2 = 10; }
    if (no3 === void 0) { no3 = 20; }
    console.log("Inside Demo");
}
Demo(10);
Demo(10, 11);
Demo(10, 20, 30);
