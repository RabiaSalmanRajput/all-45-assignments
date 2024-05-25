"use strict";
console.log("hello world");
//task 2
//Personal Message: Store a person’s name in a variable, 
//and print a message to that person. Your message should be simple,
// such as, “Hello Eric, would you like to learn some Python today?”
let PersonName = "eric";
console.log(`hello,${PersonName},would you like to learn some python today?`);
//task 3
//Name Cases: Store a person’s name in a variable, and then print 
//that person’s name in lowercase, uppercase, and titlecase.
let personName = "zulqarnain";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
let firstletter = personName.charAt(0).toUpperCase();
let restletter = personName.slice(1).toLowerCase();
let titlecase = firstletter + restletter;
console.log(titlecase);
//task 4
//Famous Quote: Find a quote from a famous person you admire.
// Print the quote and the name of its author. 
//Your output should look something like the following, 
//including the quotation marks:
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
let famquote = `Albert Einstien once said, "A person who never made a mistake never tried anything new."`;
console.log(famquote);
//task 5
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, “A person who never made a mistake never tried anything new."`;
console.log(message);
//task 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let person_Name = "\t \n rabia salman \t \n";
console.log("Name With White Space:", person_Name);
let strippedName = person_Name.trim();
console.log("stripped Name:", strippedName);
//task 7
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
let addition = 4 + 4;
console.log("addition result:", addition);
let subtraction = 10 - 2;
console.log("subtraction result:", subtraction);
let multiplication = 2 * 4;
console.log("multiplication result:", multiplication);
let devision = 16 / 2;
console.log("devision result:", devision);
//task 8
//You should create four lines that look like this:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//task 9
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favnumber = 21;
let Message = `my favourite number is ${favnumber}`;
console.log(Message);
//task 10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//this program adds two numbers and prints the result
//define two numbers
let num1 = 30;
let num2 = 15;
//add two numbers
let result = num1 + num2;
//print result
console.log(result);
