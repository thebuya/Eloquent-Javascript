/*
Author: Morris Higenyi Wabuya
Date: Sunday, 30th October, 2022.
Time: 2340HRS
Functions that create values are easier to combine
in new ways than functions that directly perform side effects.
*/
// Greeting Function
function Greet(name){
    let greeting = "Hello "+ name +",\nThis is Chapter 3 of Eloquent Javascript";
    console.log(greeting + "\n");

    var topics = Array("Functions","Scope","Recursion");
    console.log("The Topics of the chapter are:");
    for(i=0; i<topics.length; i++){
        console.log("\t"+(i)+". "+topics[i]);
    }
}

//SquareRoot Function
function square(x){
    return console.log("\nThe Square Root of "+(x)+" is: "+(x*x));
}

Greet("Buya");
square(4);

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
// A Return statement determines the value returns.

function subminus(a,b){
    if(b === undefined){
        return -a;
    } else {
        return a - b;
    }
}
console.log(subminus(10));





function zpower(base, exponent = 2) {
    // this version of power makes its second argument optional.
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  }
  console.log(zpower(4));
  // → 16
  console.log(zpower(2, 6));
  // → 64
 

  // RECUSRSION
  function depower(base, exponent) {
    if (exponent == 0) {
      return 1; //Makes sense
    } else {
      return base * depower(base, exponent - 1);//
    }
 }
  console.log(depower(2, 3));



  function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString; 
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens); while (chickenString.length < 3) {
    chickenString = "0" + chickenString; 
    }
    console.log(`${chickenString} Chickens`); 
    }
    printFarmInventory(7, 11);

    //Functions that create values are easier to combine in new ways than functions that directly perform side effects.


    //excercises
//Write a function countBs that takes a string as its only argument
// and returns a number
// that indicates how many uppercase “B” characters there are in the string.

function countBs(str){
    for (i=0;i<str.length;i++){
        counting = 0
        while (str[i] == "B"){
            counting++
            return counting;  
        } 
    }
}
console.log(countBs("BuBya"));