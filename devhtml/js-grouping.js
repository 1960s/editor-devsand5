
let grouping = {
"Built-ins": [
    "Value properties",
    "Function properties",
    "Fundamental objects",
    "Error objects",
    "Numbers & dates",
    "Text processing",
    "Indexed Collections",
    "Keyed collections",
    "Structured data",
    "Memory management",
    "Control abstraction",
    "Reflection",
    "Internationalization",
    "WebAssembly",
],
"Statements": [
    "Control flow",
    "Declarations",
    "Functions and classes",
    "Iterations",
    "Other",
],
"Expressions and operators": [
    "Primary expressions",
    "Left-hand-side expressions",
    "Increment & decrement",
    "Unary operators",
    "Arithmetic operators",
    "Relational operators",
    "Equality operators",
    "Bitwise shift operators",
    "Binary bitwise operators",
    "Binary logical operators",
    "Conditional (ternary) operator",
    "Assignment operators",
    "Comma operators",
],
"Functions": [
"Functions",
],
"Classes": [
"Classes",
],
}

    //tabs generator
    function openTab(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }  
/*
//This is for sifting through raw site copy/paste
const regexp = /<h2(?:.*)><a(?:.*)>(.*)<\/a><\/h2>/g;
let array = [...str.matchAll(regexp)];
let go = array.map(x => x[1])
test.value = go.join(":\n")

Built-ins
Statements
Expressions and operators
Functions
Additional reference pages
Functions
Classes



Value properties
Function properties
Fundamental objects
Error objects
Numbers & dates
Text processing
Indexed Collections
Keyed collections
Structured data
Memory management
Control abstraction
Reflection
Internationalization
WebAssembly

Control flow
Declarations
Functions and classes
Iterations
Other

Primary expressions
Left-hand-side expressions
Increment & decrement
Unary operators
Arithmetic operators
Relational operators
Equality operators
Bitwise shift operators
Binary bitwise operators
Binary logical operators
Conditional (ternary) operator
Assignment operators
Comma operators
*/