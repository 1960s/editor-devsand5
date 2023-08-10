
let elementsJS = {
//Built-ins
"Value properties":[
"globalThis",
"Infinity",
"NaN",
"undefined",
],
"Function properties":[
"eval()",
"isFinite()",
"isNaN()",
"parseFloat()",
"parseInt()",
"decodeURI()",
"decodeURIComponent()",
"encodeURI()",
"encodeURIComponent()",
],
"Fundamental objects":[
"Object",
"Function",
"Boolean",
"Symbol",
],
"Error objects":[
"Error",
"EvalError",
"RangeError",
"ReferenceError",
"SyntaxError",
"TypeError",
"URIError",
"AggregateError",
],
"Numbers & dates":[
"Number",
"BigInt",
"Math",
"Date",
],
"Text processing":[
"String",
"RegExp",
],
"Indexed Collections":[
"Array",
"Int8Array",
"Uint8Array",
"Uint8ClampedArray",
"Int16Array",
"Uint16Array",
"Int32Array",
"Uint32Array",
"BigInt64Array",
"BigUint64Array",
"Float32Array",
"Float64Array",
],
"Keyed collections":[
"Map",
"Set",
"WeakMap",
"WeakSet",
],
"Structured data":[
"ArrayBuffer",
"SharedArrayBuffer",
"DataView",
"Atomics",
"JSON",
],
"Memory management":[
"WeakRef",
"FinalizationRegistry",
],
"Control abstraction":[
"Promise",
"GeneratorFunction",
"AsyncGeneratorFunction",
"Generator",
"AsyncGenerator",
"AsyncFunction",
],
"Reflection":[
"Reflect",
"Proxy",
],
"Internationalization":[
"Intl",
"Intl.Collator",
"Intl.DateTimeFormat",
"Intl.DisplayNames",
"Intl.ListFormat",
"Intl.Locale",
"Intl.NumberFormat",
"Intl.PluralRules",
"Intl.RelativeTimeFormat",
"Intl.Segmenter",
],
"WebAssembly":[
"WebAssembly",
"WebAssembly.Module",
"WebAssembly.Instance",
"WebAssembly.Memory",
"WebAssembly.Table",
"WebAssembly.CompileError",
"WebAssembly.LinkError",
"WebAssembly.RuntimeError",
],

//Statements
"Control flow":[
"Block",
"Empty statement",
"break",
"continue",
"if...else",
"switch",
"throw",
"try...catch",
],
"Declarations":[
"var",
"let",
"const",
],
"Functions and classes":[
"function",
"function*",
"async function",
"async function*",
"return",
"class",
],
"Iterations":[
"do...while",
"for",
"for...in",
"for...of",
"for await...of",
"while",
],
"Other":[
"debugger",
"export",
"import",
"label",
"with",
],


// "Expressions and operators"

"Primary expressions":[
"this",
"function",
"class",
"function*",
"yield",
"yield*",
"async function",
"async function*",
"await",
"[]",
"{}",
"/ab+c/i",
"( )",
"null",
],
"Left-hand-side expressions":[
"Property accessors",
"?. (Optional chaining)",
"new",
"new.target",
"import.meta",
"super",
"...obj",
],
"Increment & decrement":[
"A++",
"A--",
"++A",
"--A",
],
"Unary operators":[
"delete",
"void",
"typeof",
"+",
"-",
"~",
"!",
],
"Arithmetic operators":[
"+",
"-",
"/",
"*",
"%",
"**",
],
"Relational operators":[
"in",
"instanceof",
"<",
">",
"<=",
">=",
],
"Equality operators":[
"==",
"!=",
"===",
"!==",
],
"Bitwise shift operators":[
"<<",
">>",
">>>",
],
"Binary bitwise operators":[
"&",
"|",
"^",
],
"Binary logical operators":[
"&&",
"||",
"??",
],
"Conditional (ternary) operator":[
"(condition ? ifTrue : ifFalse)",
],
"Assignment operators":[
"=",
"*=",
"**=",
"/=",
"%=",
"+=",
"-=",
"<<=",
">>=",
">>>=",
"&=",
"^=",
"|=",
"&&=",
"||=",
"??=",
"[a, b] = arr",
"{ a, b } = obj",
],
"Comma operators":[
",",
],


// "Functions"
"Functions":[
"Arrow Functions",
"Default parameters",
"Rest parameters",
"arguments",
"Method definitions",
"getter",
"setter",
],


// "Classes"
"Classes":[
    "class"
],
}



/*
Built-ins
JavaScript standard built-in objects, along with their methods and properties.


Value properties
globalThis
Infinity
NaN
undefined

Function properties
eval()
isFinite()
isNaN()
parseFloat()
parseInt()
decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()

Fundamental objects
Object
Function
Boolean
Symbol

Error objects
Error
EvalError
RangeError
ReferenceError
SyntaxError
TypeError
URIError
AggregateError
Numbers & dates
Number
BigInt
Math
Date

Text processing
String
RegExp

Indexed Collections
Array
Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
BigInt64Array
BigUint64Array
Float32Array
Float64Array

Keyed collections
Map
Set
WeakMap
WeakSet

Structured data
ArrayBuffer
SharedArrayBuffer
DataView
Atomics
JSON

Memory management
WeakRef
FinalizationRegistry

Control abstraction
Promise
GeneratorFunction
AsyncGeneratorFunction
Generator
AsyncGenerator
AsyncFunction

Reflection
Reflect
Proxy

Internationalization
Intl
Intl.Collator
Intl.DateTimeFormat
Intl.DisplayNames
Intl.ListFormat
Intl.Locale
Intl.NumberFormat
Intl.PluralRules
Intl.RelativeTimeFormat
Intl.Segmenter

WebAssembly
WebAssembly
WebAssembly.Module
WebAssembly.Instance
WebAssembly.Memory
WebAssembly.Table
WebAssembly.CompileError
WebAssembly.LinkError
WebAssembly.RuntimeError


Statements
JavaScript statements and declarations

Control flow
Block
Empty statement
break
continue
if...else
switch
throw
try...catch

Declarations
var
let
const

Functions and classes
function
function*
async function
async function*
return
class

Iterations
do...while
for
for...in
for...of
for await...of
while

Other
debugger
export
import
label
with


Expressions and operators
JavaScript expressions and operators.

Primary expressions
this
function
class
function*
yield
yield*
async function
async function*
await
[]
{}
/ab+c/i
( )
null

Left-hand-side expressions
Property accessors
?. (Optional chaining)
new
new.target
import.meta
super
...obj

Increment & decrement
A++
A--
++A
--A

Unary operators
delete
void
typeof
+
-
~
!

Arithmetic operators
+
-
/
*
%
**

Relational operators
in
instanceof
<
>
<=
>=

Equality operators
==
!=
===
!==

Bitwise shift operators
<<
>>
>>>

Binary bitwise operators
&
|
^

Binary logical operators
&&
||
??

Conditional (ternary) operator
(condition ? ifTrue : ifFalse)

Assignment operators
=
*=
**=
/=
%=
+=
-=
<<=
>>=
>>>=
&=
^=
|=
&&=
||=
??=
[a, b] = arr
{ a, b } = obj

Comma operators
,


Functions
JavaScript functions.

Arrow Functions
Default parameters
Rest parameters
arguments
Method definitions
getter
setter


Classes
JavaScript classes.
*/