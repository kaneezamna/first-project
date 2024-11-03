//q no 1//

// let a = 10;
// console.log("Results");
// console.log("the value of a is" , a);
// console.log("------------------");

// ++a;
// console.log("the value of ++a is", a);
// console.log("now the value of a is " , a);

// console.log("the value of a++ is " , a);
// a++; 
// console.log("now the value of a is" ,a);

// --a;
// console.log("the value of --a is " , a);
// console.log("now the value of a is " , a);
  
// console.log("the value of --a is " , a);
// a--;
// console.log("now the value of a is " , a);


// q no 2//
// Initial values
var a = 2, b = 1;

// Step-by-step breakdown
console.log("Initial values:");
console.log("a =", a);
console.log("b =", b);

// Step 1: --a
// Decrement 'a' by 1, so 'a' becomes 1
--a;
console.log("\nAfter --a:");
console.log("a =", a); // a = 1

// Step 2: --a - --b
// Decrement 'b' by 1, so 'b' becomes 0
// Then calculate the expression: --a - --b
var step2 = --a - --b;
console.log("\nAfter --a - --b:");
console.log("a =", a); // a = 1
console.log("b =", b); // b = 0
console.log("Result of --a - --b =", step2); // 1 - 0 = 1

// Step 3: --a - --b + ++b
// Increment 'b' by 1, so 'b' becomes 1
// Then add to the previous result: --a - --b + ++b
var step3 = step2 + ++b;
console.log("\nAfter --a - --b + ++b:");
console.log("a =", a); // a = 1
console.log("b =", b); // b = 1
console.log("Result of --a - --b + ++b =", step3); // 1 + 1 = 2

// Step 4: --a - --b + ++b + b--
// Use the current value of 'b' (1) and then decrement it
// Calculate final expression: --a - --b + ++b + b--
var result = step3 + b--;
console.log("\nAfter --a - --b + ++b + b--:");
console.log("a =", a); // a = 1
console.log("b =", b); // b = 0 (after decrement)
console.log("Final result =", result); // 2 + 1 = 3

// Final values
console.log("\nFinal values:");
console.log("a =", a); // a = 1
console.log("b =", b); // b = 0
console.log("result =", result); // result = 3


// q no 3 //

// let name1 = prompt("enter your name plz ");
// console.log("wellcome to our hotel mam " , name1);


//q no 4

// // Prompt the user to enter a number
// let number = prompt("Enter a number to display its multiplication table:", "5");

// // If the user doesn't enter a number, use 5 as default
// number = number ? parseInt(number) : 5;

// // Display the multiplication table in the console
// console.log("Multiplication Table of " + number);
// for (let i = 1; i <= 10; i++) {
//     console.log(number + " x " + i + " = " + (number * i));
// }

// q no 5 

// // Step a: Take three subject names from the user
// let subject1 = prompt("Enter the name of the first subject:");
// let subject2 = prompt("Enter the name of the second subject:");
// let subject3 = prompt("Enter the name of the third subject:");

// // Step b: Total marks for each subject
// const totalMarksPerSubject = 100;

// // Step c: Take obtained marks for each subject from the user
// let marks1 = parseFloat(prompt(`Enter obtained marks for ${subject1}:`));
// let marks2 = parseFloat(prompt(`Enter obtained marks for ${subject2}:`));
// let marks3 = parseFloat(prompt(`Enter obtained marks for ${subject3}:`));

// // Step e: Calculate total obtained marks and percentage
// let totalObtainedMarks = marks1 + marks2 + marks3;
// let totalMarks = totalMarksPerSubject * 3;
// let percentage = (totalObtainedMarks / totalMarks) * 100;

// // Display the result in a table format in the browser
// document.write("<h2>Result</h2>");
// document.write("<table border='1' cellpadding='10'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write(`<tr><td>${subject1}</td><td>${totalMarksPerSubject}</td><td>${marks1}</td></tr>`);
// document.write(`<tr><td>${subject2}</td><td>${totalMarksPerSubject}</td><td>${marks2}</td></tr>`);
// document.write(`<tr><td>${subject3}</td><td>${totalMarksPerSubject}</td><td>${marks3}</td></tr>`);
// document.write("<tr><th>Total</th><th>" + totalMarks + "</th><th>" + totalObtainedMarks + "</th></tr>");
// document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
// document.write("</table>");



