//Solution to Question 2

let Fizz = [];
let Buzz = [];
let FizzBuzz = [];
let Other = [];

for (let i = 1; i <= 200; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        FizzBuzz.push(i);
    } else if (i % 3 === 0) {
        Fizz.push(i);
    } else if (i % 5 === 0) {
        Buzz.push(i);
    } else {
        Other.push(i);
    }
 }

 console.log("Total Number of Fizz ="     + Fizz.length);
 console.log("Total Numner of Buzz ="     + Buzz.length);
 console.log("Total Number of FizzBuzz =" + FizzBuzz.length);
 console.log("Total Number of Other ="    + Other.length);


 //Solution to Question 3
  
 let EvenGroup = [];
 let OddGroup = [];
 function UserID(numLoop) {
     for (let i = 1; i <= numLoop; i++) {
         if (i % 2 ===0) {
             EvenGroup.push(i);
         } else {
             OddGroup.push(i)
         }
     }
     console.log ("Total Number of EvenGroup UserID ="  + EvenGroup.length);
     console.log ("Total Number of OddGroup UserID ="  + OddGroup.length);
 }
 UserID (100)
