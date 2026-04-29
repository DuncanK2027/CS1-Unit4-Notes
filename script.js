//This is a single LINE COMMENT

/* This is a MULTI LINE COMMENT
The code below is an example STATEMENT (instruction/command) Statements end with a SEMICOLON */

console.log("Welcome to JS!");

/* A VARIABLE is a named storage container for data (information) */

// DECLARE a new variable (make space, give it a name/label)
let username; 

// ASSIGN a value (data) to the variable 
username  = "duncan";

// see the value stored in the variable
console.log(username);

// DECLARE + ASSIGN in one step
let luckyNum = 13;

// Create a variable that holds a NUMBER
luckyNum = 13; //numbers don't need quotes!
console.log(luckyNum);
// CHANGE the value stored in a variable (don't repeat LET)
luckyNum = 7;
console.log(luckyNum);

// MATH OPERATORS (+, -, *, /)
let age = 16;
console.log(age);
let ageInTen = age + 10;
console.log(ageInTen);
let ageDogYears = age / 7;
console.log(ageDogYears);
// Can also do math with just numbers:
let zeusHumanAge = 7 * 7;

// PEMDAS applies when you have multiple operators
let score = 0;
score = score + 20 - 2 / 3 * (6-5);
console.log(score);


//Combine 2 "literal" Strings (CONCATENATION)
console.log("hello" + "world");
// OR Concatenate a literal String with a VARIABLE!
console.log("My age is "  + "age");
console.log("My age in ten years is " + ageInTen);
console.log("My ageDogYears " + age);


// can also concatenate while making variables
let userName = "duncan"
let message = "Welcome " + userName + "! ";
console.log(message);

/* FUNCTIONS: 
    Reusable sets of code statements that perform a specific task/process
*/

// console.log() is a built-in FUNCTION we use a lot
//TASK: display data in the console (always works the same)
console.log("I just used a function!");
// if a function needs something in the parenthesis, we say it requires PARAMETERS (input)

// DEFINE (create) your own function
function skincare() {
    // STATEMENTS (actions) to execute in this routine
    console.log("1. Cleanse");
    console.log("2. Apply serums");
    console.log("3. Moisturize");
}
//CALL the function to use it! 
skincare();
skincare(); // can run the function again

//ANALOGY: Functions are like RECIPES
//Ex. of a function that needs parameters (input/"ingredients") and RETURNS a new value (output/"meal")

// if you need parameters, list some variables inside the parentheses after the function name
function makeSando(filling, sauce, bread) {
    let sando; //new variable to represent sandwich
    sando = filling + " and " + sauce + " on " + bread;
    return sando; // OUTPUT!
}

// must "pass in" actual arguments to use the function
let mySando = makeSando("peanutbutter", "jelly", "bread");
console.log(mySando);

// shortcut to see return values
console.log( makeSando("pb", "j", "wonderbread") );

/* Selection/branching (CONDITIONALS)
    A BOOLEAN EXPRESSION is like a QUESTION that has a boolean ANSWER (true/false)
*/

console.log(1 > 2); //false is the ANSWER
console.log("Is 10 less than 5?");
console.log(10 < 5);

// Check for EQUALITY using the == operator (or ===)
console.log(1 == 1); // true!
console.log(1 != 1); // false -> asking if NOT equal
console.log("yes" == "yes"); // works for Strings!
console.log("nick" != "duncan");

// Strings can be compared too
console.log("Arian" > "Carolyn");
console.log("Zebra" > "Dog"); // true Z comes later than D
console.log("Apple" < "Banana"); // true, A comes before B
console.log("pelican" > "PELICAN"); // case mattters!

// Can use comparison operators between VARIABLES & values too
let password = "abc123!";
console.log("hotdog" == password); 

//IF STATEMENTS use conditionals/boolean expressions
// to make DECISIONS about which code to execute (run)
let userAge = 17;

if (userAge >= 17) {
    //code in the curly brackets only runs if TRUE! 
    console.log("you are old enough for a NY license");
}

// ELSE IF BLOCKs let you test multiple options 
else if (userAge == 16) {
    console.log("you can get a learners permit!");
}

// ELSE BLOCK accounts for the "otherwise..." case
else {
    console.log("too young to drive");
}