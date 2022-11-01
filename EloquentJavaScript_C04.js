function Greet(name, chapter){
    let greeting = "Hello "+ name +",\nThis is chapter "+chapter+" of Eloquent Javascript";
    console.log(greeting + "\n");

    /*var topics = Array("","Data-Structures: Objects & Arrays");*/
    let topics = ["","Data-Structures: Objects & Arrays"];
    console.log("The Topics of the chapter are:");
    for(i=1; i<topics.length; i++)
            console.log("\t"+(i)+"."+topics[i].toUpperCase());      
}

Greet ("Morris Higenyi",4)
console.log("");
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// There is no right way, there is a only a way!.(for now anyway!)


function speak(word){
    console.log(word);
}
speak("Hey")

speak(3,8)

console.log(" 256 783 909 668 ".trim());

let phonenumber = "+256 783 909 668";
let numbersofphone = phonenumber.split("+"&&" ");
console.log(numbersofphone);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(numbersofphone.join(""));
// → Secretarybirds. specialize. in. stomping




let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]



let collectBook = {
    collector1 : "Kabura Harriet",
    collector2 : "Elizabeth Nabagerekka",
    collector3 : "Dan Batekerezza",
    collector4 : "Lillian Buchura",
    collector5 : "Aaron Tokwaro",
}

console.log(Object.keys(collectBook))


let collectBook_2 = [
    {//Year-1
        collectors2022: [
            {

            }
        ], NFT: False
    },
    {//Year-2
        collectors2023: [
            {

            }
        ], NFT: False
    },
    {//Year-2
        collectors2024: [
            {

            }
        ], NFT: False
    },
]


const score = {visitors: 0, home: 0}; // This is okay
score.visitors = 1;
// This isn't allowed
 score = {visitors: 1, home: 1};

 //***Refer To_Collectorlist.js--[Incomplete btw]--*/
