let greeting = "Hello Buya,\nThis is Chapter 2 of Eloquent Javascript";
//  let & var -- > Do they work the same ?, here they do.
/*  let --> [UPDATE] disconnects them from their current value
    and have them point to a new one. */
    console.log(greeting + "\n");

greeting = "Hi Buya";
console.log(greeting + "\n");

var topics = Array("Expressions","Bindings","Math-lowkey","Loops-lowkey","Switch");
console.log("The Topics at hand are:");
for(i=0; i<topics.length; i++){
    //1st --> Begin with i at 0, to get first element
    //2nd --> i is less than total length of topics array
    //3rd --> Keep the count going on till.
    
    console.log("\t"+(i)+". "+topics[i]);
    /*if (i=2){
        console.log("Like below");
    }*/
    
}

console.log(Math.max(2, 4));
// Returns The Greatest.
console.log(Math.min(2, 4) + 100);
// Returns The Least & adds it to 100.


let DOB = 1997;
//let DOB = Number(prompt("Which Year Were you Born"));
// Browser log ; up
console.log("Your must be this old " +
             (2022 - DOB));

/*
let DOB = Number(prompt("Which Year Were you Born"));
if (!Number.isNaN(DOB)){ console.log("Your must be this old " +
             (2022 - DOB));}
*/

if (1+1==2) console.log("Namaste");
/*
let DOK = Number(prompt("Which Year Were you Born"));
if (!Number.isNaN(DOK)){ console.log("Your must be this old " +
             (2022 - DOK));} else{
                console.log("Get a collector Code");
             }*/



             /*let vaultKey = Number(prompt("Enter a Collector Code:")); // Enter Code
             if(!Number.isNaN(vaultKey)){ // Only if its numbers format,
                 console.log("Welcome Collector: " +( 2022 * vaultKey));
             } else {
                 console.log("Get a Collector Code");
             }*/



let number = 0;
while (number <= 12) {
   console.log(number);
   number = number + 2;
 }

// A program that calculates and shows the value of 210 (2 to the 10th power).
let result = 1
let counter = 0
while (counter < 10){ /* The power */
    result = result * 2; /* The number e.g 2 to power 10 */
    counter = counter + 1; /* The count */
}
console.log(result);
// -> 1024



/*
let yourName;
    do {
        yourName = prompt("What is Your Name")
    } while (!yourName); // Keep doing if nothing is filled in
    console.log(yourName);
*/


for (let number = 0; number <= 12; number = number + 2) {
        console.log("\n"+number);
      }


let Result = 1;
// result was used earlier.
for (let power = 0; power <10; power=power + 1) {
    Result = Result * 2;
}
console.log("2 to the power 10 is: "+Result)
/*
switch (prompt("Whats the code")){
    case "Morris","morris":
        console.log("Brace for code impact...");
        break;
    case "Higenyi","higenyi":
        console.log("Architecture Page Loading..."); 
    case "Wabuya","wabuya":
        console.log("Artist Page loading...");
        break;
    default:
        console.log("Unknown Collector Code!");
        break; 
}
*/







//Exercies
/* Write a program that uses console.log to print all the numbers from 1 to 100,
 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
  and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/
for (i=1;i<=100;i++){
    if (i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    } else if (i%3 == 0){
        console.log("Fizz");
        continue
    } else if (i%5 == 0){
        console.log("Buzz");
    }else {
        console.log(i);
    }
}
/*
When you have that working,
Modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
(This is actually an interview question
 that has been claimed to weed out a significant percentage of programmer candidates.
  So if you solved it, your labor market value just went up.)*/

