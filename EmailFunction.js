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
 