**Chapter 4**

**Client-Side Programming with JavaScript**

## **1\.**    **Introduction**

JavaScript is a high-level, interpreted programming language that adds **interactivity, logic, and behavior** to web pages. While **HTML** structures content and **CSS** styles it, **JavaScript** brings pages to life, handling events, validating forms, manipulating the DOM, and connecting to APIs.

Originally created in 1995 by **Brendan Eich,** JavaScript has grown into the language of the web. Today, it runs everywhere, from browsers to servers and mobile devices.

### How JavaScript Works in the Browser

·         The **browser’s JavaScript engine** (e.g., V8 in Chrome, SpiderMonkey in Firefox) executes JS code line by line.

·         It interacts with the **Document Object Model (DOM)** to modify HTML and CSS dynamically.

·         JavaScript runs **on the client side** by default (inside the user’s browser).

**Execution Flow:**

### Embedding JavaScript in a Web Page

There are three main ways to include JavaScript in an HTML document:

·         **Inline Script**

\<button onclick="alert('Hello, World\!')"\>Click Me\</button\>

·         **Internal Script** (inside `<script>` tags)

\<script\>

  alert('Welcome to JavaScript\!');

\</script\>

·         **External Script File** (recommended)

\<script src="script.js"\>\</script\>

External files improve **reusability** and **separation of concerns**.

### JavaScript Syntax and Structure

·         **Case sensitive:** `MyVar` ≠ `myvar`

·         **Statements:** End with a semicolon (`;`)

·         **Comments:**

// Single-line comment

/\* Multi-line

comment \*/

·         **Blocks:** Use `{ }` to group statements.

### Basic Input and Output (I/O)

| Method | Description | Example |
| ----- | ----- | ----- |
| `alert()` | Displays a message box | `alert('Welcome!');` |
| `prompt()` | Asks the user for input | `let name = prompt('Enter your name:');` |
| `confirm()` | Asks for confirmation (OK/Cancel) | `confirm('Are you sure?');` |
| `console.log()` | Prints output to browser console | `console.log('Debug info');` |

### Writing and Running JavaScript

**Step 1:** Create an HTML file:

\<\!DOCTYPE html\>

\<html\>

\<head\>

  \<title\>My First JavaScript\</title\>

\</head\>

\<body\>

  \<h1\>Hello JavaScript\</h1\>

  \<script\>

	alert("JavaScript is working\!");

  \</script\>

\</body\>

\</html\>

**Step 2:** Open the file in a browser. You should see an alert box appear before the page loads completely.

**Step 3:** Open **Developer Tools \=\> Console** to view logs, test small scripts, and debug.

### Key Concepts Introduced

| Concept | Explanation |
| :---- | :---- |
| **Script Tag** | Used to include JavaScript inside HTML. |
| **Statement** | A single instruction executed by the browser. |
| **Comment** | Notes ignored by the interpreter, used for clarity. |
| **Output** | Displaying messages using `alert()` or `console.log()`. |
| **User Input** | Gathe2ring data via `prompt()` or `confirm()`. |

**Exercise**

1\.   	Create a page that:

o   Greets the user by name using `prompt()`.

o   Displays a confirmation asking whether they like JavaScript.

o   Logs both responses in the console.

2\.   	Experiment by moving the `<script>` tag to the `<head>` and `<body>,` observe the difference in execution timing.

## **2\.**    **Variables, Data Types, and Operators**

Variables and data types are the **building blocks of every JavaScript program.** They allow you to **store, manipulate, and process data**, the foundation of logic, interactivity, and user-driven web behavior.

A variable acts like a **container** that holds a value, while data types define **what kind of data** that value represents (number, text, boolean, etc.). Operators are used to **perform actions** on these values, like addition, comparison, or logical testing.

### Declaring Variables

JavaScript uses three keywords to declare variables:

| Keyword | Scope | Reassignment | Description |
| ----- | ----- | ----- | ----- |
| `var` | Function-scoped | Yes | The old way to declare variables (avoid in modern JS). |
| `let` | Block-scoped | Yes | Recommended for variables that can change. |
| `const` | Block-scoped | No | Used for constants whose values never change. |

**Example:**

let name \= "Dawit";

const pi \= 3.14;

var age \= 25;

### Variable Naming Rules

·         Must begin with a **letter**, `_`, or `$`.

·         Cannot start with a number.

·         Cannot use reserved keywords (`if`, `for`, `class`, etc.).

·         Case-sensitive: `myName` ≠ `myname`.

·         Use **camelCase** for readability: `userName`, `studentScore`.

### JavaScript Data Types

| Type | Example | Description |
| :---- | :---- | :---- |
| **String** | `"Hello"`, `'World'` | Text data enclosed in quotes. |
| **Number** | `100`, `3.14` | Integers and floating-point values. |
| **Boolean** | `true`, `false` | Logical values (on/off, yes/no). |
| **Undefined** | `let x;` | A variable declared but not assigned a value. |
| **Null** | `let y = null;` | Represents “no value” intentionally. |
| **Object** | `{name: "Alex", age: 30}` | Collection of key–value pairs. |
| **Array** | `[1, 2, 3, 4]` | Ordered list of values. |

### Dynamic Typing

JavaScript is **dynamically typed,** meaning you don’t specify a variable’s type explicitly.  
 A variable can hold different data types at different times.

**Example:**

let data \= 5;

data \= "Now I'm a string\!";

### Type Conversion

You can manually or automatically convert values between types.

·         **Explicit Conversion**

let num \= Number("42");  	// "42" \=\> 42

let text \= String(123);  	// 123 \=\> "123"

let truth \= Boolean(1);  	// 1 \=\> true

·         **Implicit Conversion (Type Coercion)**

console.log("5" \+ 2); // "52" (number \=\> string)

console.log("5" \- 2); // 3   (string \=\> number)

### JavaScript Operators

·         **Arithmetic Operators**

| Operator | Example | Result |
| :---: | :---: | :---: |
| `+` | `5 + 3` | 8 |
| `-` | `5 - 3` | 2 |
| `*` | `5 * 3` | 15 |
| `/` | `6 / 3` | 2 |
| `%` | `10 % 3` | 1 |
| `**` | `2 ** 3` | 8 (exponentiation) |

·         **Assignment Operators**

| Operator | Example | Equivalent To |
| :---: | :---: | :---: |
| `=` | `x = 5` | Assign 5 to x |
| `+=` | `x += 2` | `x = x + 2` |
| `-=` | `x -= 2` | `x = x - 2` |
| `*=` | `x *= 2` | `x = x * 2` |

·         Comparison Operators

| Operator | Example | Result |
| :---: | :---: | :---: |
| `==` | `5 == '5'` | true (checks value only) |
| `===` | `5 === '5'` | false (checks value & type) |
| `!=` | `5 != 4` | true |
| `>`  | `7 > 3` | true |
| `<`  | `2 < 5` | true |

·         **Logical Operators**

| Operator | Description | Example | Result |
| :---- | :---- | :---- | :---- |
| `&&` (AND) | Returns **true** only if **both** conditions are true | `true && false` | `false` |
| \` |  | \` (OR) | Returns **true** if **at least one** condition is true |
| `!` (NOT) | Inverts a boolean value | `!true` | `false` |
| `??` (Nullish Coalescing) | Returns right-hand value **only if** left-hand value is `null` or `undefined` | `null ?? "backup"` | `"backup"` |
| `?:` (Ternary) | Conditional operator that returns one of two values | `5 > 3 ? "Yes" : "No"` | `"Yes"` |

 

### Operator Precedence

Order in which operations are executed:

1\.       Parentheses `()`

2\.       Exponents `**`

3\.       Multiplication/Division/Modulus `* / %`

4\.       Addition/Subtraction `+ -`

5\.       Comparisons `>, <, >=, <=`

6\.       Logical operators `&&, ||`

**Example 1: Simple Calculator**

let num1 \= Number(prompt("Enter first number:"));

let num2 \= Number(prompt("Enter second number:"));

let sum \= num1 \+ num2;

alert("The sum is: " \+ sum);

**Example 2: Type Conversion**

let x \= "10";

let y \= 2;

console.log(x \* y); // Output: 20

console.log(x \+ y); // Output: 102 (string concatenation)

### Common Mistakes

·         Using `var` instead of `let` or `const` (can cause unexpected behavior).

·         Forgetting `=` in assignment statements.

·         Comparing values with `==` instead of `===`.

·         Misunderstanding type coercion (`"5" + 2` results in `"52"`).

### Exercise

1\.   	Write a script that:

o  Asks for two numbers using `prompt()`.

o  Calculates and displays the **sum, difference, product,** and **quotient**.

o  Logs results to the console.

2\.   	Try the same with `const` and `let`, and test reassigning values.

3\.   	Explore what happens when you add a number and a string together.

## **3\.**    **Control Structures**

Control structures define the **flow of execution** in a JavaScript program. They determine which statements run, how often they repeat, and under what conditions. Without control structures, programs would simply execute line by line from top to bottom. By using conditionals and loops, we introduce **decision-making** and **repetition**, enabling programs to react dynamically to different inputs or situations.

### Conditional Statements

Conditional statements allow the program to make choices. The most common structure is the **if statement**, which checks whether a condition is true.

let age \= 18;

 

if (age \>= 18\) {

  console.log("You are an adult.");

}

An **if...else** statement provides two possible paths:

let temperature \= 25;

 

if (temperature \> 30\) {

  console.log("It’s a hot day.");

} else {

  console.log("It’s a pleasant day.");

}

For more complex decisions, **else if** can chain multiple conditions:

let score \= 75;

 

if (score \>= 90\) {

  console.log("Grade: A");

} else if (score \>= 75\) {

  console.log("Grade: B");

} else {

  console.log("Grade: C");

}

### The Switch Statement

When many conditions depend on the same variable, the **switch** statement provides a cleaner alternative.

let day \= 3;

let dayName;

 

switch (day) {

  case 1:

	dayName \= "Monday";

	break;

  case 2:

	dayName \= "Tuesday";

	break;

  case 3:

	dayName \= "Wednesday";

	break;

  default:

	dayName \= "Invalid day";

}

 

console.log(dayName);

Each `case` compares the variable’s value, and `break` stops further execution once a match is found.

### The Ternary Operator

For short conditional expressions, the **ternary operator** provides a compact form.

let result \= (score \>= 50\) ? "Pass" : "Fail";

console.log(result);

It can be read as: “If the condition before the question mark is true, use the first value; otherwise, use the second.”

### Loops and Iteration

Loops execute a block of code repeatedly while a condition remains true. They are useful for tasks like counting, iterating through data, or automating repetitive actions.

·         **For Loop**

for (let i \= 1; i \<= 5; i++) {

  console.log("Count:", i);

}

·         **While Loop**

let i \= 1;

while (i \<= 5\) {

console.log("Count:", i);

i++;

}

·         **Do...While Loop**

let i \= 1;

do {

  console.log("Count:", i);

  i++;

} while (i \<= 5);

The key difference is that the **do...while** loop always runs at least once, even if the condition is false initially.

### Loop Control Statements

Two special keywords help control the flow of loops:

·         `break` immediately stops the loop.

·         `continue` skips the current iteration and proceeds to the next one.

Example:

for (let i \= 1; i \<= 5; i++) {

  if (i \=== 3\) continue;

  console.log(i);

}

This code prints 1, 2, 4, and 5, skipping the number 3\.

### Nested Loops

Loops can exist inside other loops, known as **nested loops**. They are often used for working with multi-dimensional data or generating tabular results.

for (let row \= 1; row \<= 3; row++) {

  for (let col \= 1; col \<= 3; col++) {

	document.write(row \+ "," \+ col \+ " ");

  }

  document.write("\<br\>");

}

The example above prints a simple grid of coordinates.

 

**Example  (Simple Grading Program)**

let marks \= Number(prompt("Enter your score:"));

 

if (marks \>= 90\) {

  alert("Excellent\!");

} else if (marks \>= 75\) {

  alert("Very good\!");

} else if (marks \>= 50\) {

  alert("Good effort\!");

} else {

  alert("Needs improvement.");

}

This program uses conditional logic to display different feedback depending on the user’s input.

### Exercise

1\.   	Write a script that prints the multiplication table of a number entered by the user.

2\.   	Modify it to stop when the result exceeds 50\.

3\.   	Rewrite the same logic using a `while` loop.

4\.   	Create a small “Day of the Week” program using the `switch` statement.

## **4\.**    **Functions and Scope**

A function groups a set of statements that perform a specific task and can be executed whenever needed.  
 This prevents repetition, makes code easier to read, and allows large programs to be broken into smaller, manageable parts. Every JavaScript program, even a simple one, benefits from using functions, whether to calculate values, manipulate the DOM, or respond to user events.

### Defining and Calling Functions

A function is defined using the `function` keyword, followed by a name, parentheses (which may contain parameters), and curly braces containing the code block.

function greet() {

  console.log("Hello, welcome to JavaScript\!");

}

To execute a function, simply call it by name followed by parentheses:

    	greet();

### Parameters and Return Values

Functions often take inputs called **parameters** and can return an output using the `return` keyword.

function add(a, b) {

  return a \+ b;

}

 

let sum \= add(5, 3);

console.log("The result is:", sum);

If a function doesn’t have a `return` statement, it implicitly returns `undefined`. A single function can return any data type, number, string, object, or even another function.

### Function Expressions and Anonymous Functions

Functions can also be stored in variables. This is called a **function expression**.

const multiply \= function(x, y) {

  return x \* y;

};

Here, the function has no name, it is **anonymous**, but can still be called through the variable:

    	console.log(multiply(4, 5));

This pattern is common when passing functions as arguments to other functions, such as in event handling or array methods.

### Arrow Functions (ES6)

Modern JavaScript introduced a more concise syntax known as **arrow functions**.  
 They use the `=>` symbol and often make code cleaner.

const square \= (n) \=\> n \* n;

console.log(square(6));

If the function body has only one expression, the braces and `return` keyword can be omitted.  
 However, when multiple statements are needed, they must be wrapped in `{}`:

const greetUser \= (name) \=\> {

  console.log("Hello, " \+ name \+ "\!");

};

Arrow functions also behave differently in terms of scope, which is discussed next.

### Understanding Scope

**Scope** determines where variables can be accessed within a program. JavaScript has three main types of scope:

·         **Global Scope:** Variables declared outside any function are accessible everywhere.

·         **Function Scope:** Variables declared inside a function are only visible within that function.

·         **Block Scope:** Variables declared with `let` or `const` inside `{}` are limited to that block.

Example:

let globalVar \= "Global";

 

function example() {

  let localVar \= "Local";

  console.log(globalVar); // Accessible

  console.log(localVar);  // Accessible

}

 

example();

console.log(globalVar); // Accessible

console.log(localVar);  // Error: not defined

In this case, `localVar` only exists inside the function.

**Nested Functions and Scope Chain**

Functions can be defined inside other functions. An inner function can access variables from its parent (outer) function, forming a **scope chain**.

function outer() {

  let message \= "Outer scope";

  function inner() {

	console.log(message); // Accessible due to scope chain

  }

 

  inner();

}

 

outer();

However, the reverse isn’t true, the outer function cannot access variables from the inner one.

 

### Default Parameters

Parameters can have **default values** that are used if no argument is passed.

function greet(name \= "Guest") {

  console.log("Hello, " \+ name);

}

 

greet();      	// Output: Hello, Guest

greet("Alex");	// Output: Hello, Alex

This helps make functions more flexible and avoids unnecessary errors when arguments are missing.

### Return vs. Console Output

`return` sends a value back to the caller for further use, while `console.log()` only displays information. For example, this function returns a value but doesn’t display it:

function double(num) {

  return num \* 2;

}

To see the result, you must log it separately:

    	console.log(double(10));

 

### Example (Temperature Converter)

function toCelsius(fahrenheit) {

  return (fahrenheit \- 32\) \* 5 / 9;

}

 

let tempF \= Number(prompt("Enter temperature in Fahrenheit:"));

let tempC \= toCelsius(tempF);

alert("Temperature in Celsius: " \+ tempC.toFixed(2));

This small program demonstrates parameter passing, returning values, and user interaction.

### Exercise

1\.       Create a function that calculates the area of a rectangle given width and height.

2\.       Write another function that determines whether a number is even or odd.

3\.       Convert both into arrow functions.

4\.       Observe how variables behave when declared inside or outside these functions.

## **5\.**    **Arrays and Their Methods**

Arrays in JavaScript are ordered collections of values. They allow you to store multiple items under a single variable name, making it easier to manage lists, sequences, and structured information. An array can contain numbers, strings, objects, or even other arrays. Most interactive web applications make heavy use of arrays, especially when working with forms, tables, APIs, and user-generated data.

### Creating and Accessing Arrays

An array can be created using square brackets. Each value inside the brackets is called an element, and each element has an index starting from zero.

let fruits \= \["Apple", "Banana", "Mango"\];

console.log(fruits\[0\]); 

console.log(fruits\[2\]);

Indices help you retrieve, update, or replace values.

### Modifying Array Elements

Array elements can be changed simply by assigning new values to a specific index.

fruits\[1\] \= "Orange";

console.log(fruits);

If the assigned index doesn’t exist, JavaScript creates new empty positions automatically, though this is usually avoided because it leads to sparse arrays.

### Array Length and Basic Operations

The `length` property reveals how many items are in the array.

    	console.log(fruits.length);

Adding and removing values is frequently done using built-in methods.  
 `push()` adds an item at the end, while `pop()` removes the last item.

fruits.push("Papaya");

fruits.pop();

`unshift()` adds an item at the beginning, and `shift()` removes the first item.

fruits.unshift("Grape");

fruits.shift();

These operations make arrays flexible for dynamic data.

### Iterating Through Arrays

Looping allows you to process each element in sequence. The traditional `for` loop is commonly used.

for (let i \= 0; i \< fruits.length; i++) {

  console.log(fruits\[i\]);

}

JavaScript also provides the `for...of` loop for cleaner iteration:

for (let fruit of fruits) {

  console.log(fruit);

}

Iteration is essential for searching, filtering, and transforming collections.

### Array Methods for Searching and Checking

JavaScript includes several helpful methods for finding and checking values.

`indexOf()` returns the position of an element or `-1` if not found.

`fruits.`indexOf`(`"Mango"`);`

`includes()` checks whether the array contains a value and returns `true` or `false`.

`fruits.`includes`(`"Apple"`);`

These methods make it easier to validate and confirm user input.

### Array Methods for Transforming Data

Modern JavaScript provides powerful methods for working with array data.

`map()` creates a new array by applying a function to each element.

let `numbers = [`1`,` 2`,` 3`];`

let `doubled = numbers.`map`(`n `=> n *` 2`);`

`filter()` creates a new array containing only the elements that meet a condition.

let `evens = numbers.`filter`(`n `=> n %` 2 `===` 0`);`

`reduce()` combines all elements into a single value, such as a sum.

let `total = numbers.`reduce`(`(acc, n`) => acc + n,` 0`);`

These are essential tools for processing data in modern web applications.

### Sorting and Reversing Arrays

`sort()` arranges elements alphabetically or numerically, although numerical sorting requires a compare function.

`numbers.`sort`(`(a, b`) => a - b);`

`reverse()` simply reverses the order of elements in an array.

`numbers.`reverse`();`

These methods directly modify the original array.

### Joining, Slicing, and Combining Arrays

`join()` turns an array into a string separated by a chosen character.

let `result = fruits.`join`(`", "`);`

`slice()` copies a part of an array without altering the original.

let `someFruits = fruits.`slice`(`1`,` 3`);`

`concat()` combines two or more arrays into a new one.

let `all = fruits.`concat`(numbers);`

These operations help reorganize and restructure data.

### Multidimensional Arrays

Arrays can contain other arrays, forming matrices or grids.

let `matrix = [`

  `[`1`,` 2`,` 3`],`

  `[`4`,` 5`,` 6`]`

`];`

console`.`log`(matrix[`1`][`2`]);`

This capability is especially useful in games, tables, and computations involving rows and columns.

### Example (Student Score Processing)

let scores \= \[70, 85, 90, 60, 50\];

 

let passed \= scores.filter(score \=\> score \>= 60);

let average \= scores.reduce((sum, s) \=\> sum \+ s, 0\) / scores.length;

 

console.log("Passed students:", passed);

console.log("Average score:", average.toFixed(2));

This example demonstrates filtering and reduction on real-world-style data.

## **6\.**    **Objects and JSON**

Objects in JavaScript represent structured data using key–value pairs. They are the backbone of modern programming in the language and serve as the foundation for representing real-world entities such as users, products, settings, and application states. JSON, a related text format, provides a way to store and transfer these object structures across networks, making it central to web APIs and backend communication.

### Creating Objects

An object is defined using curly braces. Each property inside the object has a name and a corresponding value.

let user \= {

  name: "Sara",

  age: 22,

  isActive: true

};

Properties can contain any data type: numbers, strings, booleans, arrays, or even other objects.

### Accessing and Modifying Properties

Properties can be accessed using dot notation or bracket notation. Dot notation is cleaner and used most often.

console.log(user.name);

console.log(user.age);

 

user.age \= 23;

user.isActive \= false;

Bracket notation is helpful when the property name contains spaces or is stored in a variable.

    	user\["favorite color"\] \= "Blue";

 

### Adding and Removing Properties

New properties can be added at any time by assigning a value to a new key.

    	user.country \= "Ethiopia";

Properties can be deleted using the `delete` keyword.

    	delete user.isActive;

JavaScript objects are dynamic, allowing flexible structure adjustments as needed.

### Nested Objects and Complex Structures

Objects can store other objects, creating deeper, more detailed structures.

let employee \= {

  id: 101,

  profile: {

	firstName: "Liya",

	lastName: "Kebede"

  },

  department: "IT"

};

 

console.log(employee.profile.firstName);

Nested objects are important when dealing with configuration files, API responses, or hierarchical data.

### Methods: Functions Inside Objects

A method is a function stored as a property inside an object.

let car \= {

  brand: "Toyota",

  model: "Corolla",

  start: function () {

	console.log("Engine started");

  }

};

 

car.start();

Modern JavaScript allows a shorter syntax.

let person \= {

  greet() {

	console.log("Hello");

  }

};

Methods help objects act like real-world entities with behaviors.

### The **`this`** Keyword

Inside a method, `this` refers to the object where the method belongs.

let product \= {

  name: "Laptop",

  price: 2000,

  info() {

	console.log(this.name \+ " costs " \+ this.price);

  }

};

 

product.info();

Understanding `this` is essential when following object-oriented patterns in JavaScript.

### Looping Through Object Properties

To examine every property in an object, the `for...in` loop is commonly used.

for (let key in user) {

  console.log(key \+ ": " \+ user\[key\]);

}

This is especially helpful when rendering data dynamically on a web page.

### Introduction to JSON

JSON (JavaScript Object Notation) is a lightweight format for storing and sending structured data. Though inspired by JavaScript object syntax, JSON is purely a text format and is understood by almost all modern programming languages.

A JSON structure resembles an object, but property names **must** be in double quotes, and functions are not allowed.

{

  "name": "Sara",

  "age": 23,

  "country": "Ethiopia"

}

JSON is widely used in APIs that connect the browser with servers or cloud services.

### Converting Between Objects and JSON

JavaScript provides two essential functions for converting data.

`JSON.stringify()` converts an object into JSON text.

let `jsonText =` JSON`.`stringify`(user);`

console`.`log`(jsonText);`

`JSON.parse()` turns JSON text back into a JavaScript object.

let `newUser =` JSON`.`parse`(jsonText);`

These conversions allow data to be stored in localStorage, sent to servers, or loaded from external files.

### Handling API-Style Data Structures

In real-world applications, JSON often comes in arrays of objects.

let products \= \[

  { id: 1, name: "Phone", price: 1200 },

  { id: 2, name: "Router", price: 900 }

\];

 

console.log(products\[1\].name);

This structure appears frequently in dashboards, reports, and listings inside web systems such as ERP modules.

### Example (Inventory Item Representation)

The following example models an inventory item similar to what might appear in stock management systems.

let item \= {

  id: "STX-001",

  name: "Office Chair",

  quantity: 12,

  price: 1500,

  supplier: {

	name: "Tech Supply Ltd",

	phone: "+251912345678"

  }

};

 

let data \= JSON.stringify(item);

console.log("Data ready for API:", data);

This format mirrors how real inventory data is transmitted in a backend-connected application.

## **7\.**    **DOM Manipulation Basics**

The Document Object Model (DOM) is the interface that allows JavaScript to interact with the content and structure of a webpage. Everything the user sees in the browser, from text and images to buttons and forms, is represented as a hierarchy of nodes. JavaScript can select these nodes, read their values, update their properties, and respond to user actions. DOM manipulation transforms static pages into dynamic, interactive interfaces.

### Understanding the DOM Structure

When a browser loads a webpage, it converts the HTML into a tree-like model. Each tag becomes a node, and nested tags form parent–child relationships. JavaScript can traverse this structure to reach any element.

\<div id="profile"\>

  \<h2\>Member\</h2\>

  \<p\>Status: Active\</p\>

\</div\>

In this example, the `div` is the parent element, while the heading and paragraph are its children. JavaScript interacts with them through the global `document` object.

### Selecting Elements

JavaScript provides several methods for accessing elements inside a page. The most flexible approach uses CSS selectors.

let title \= document.querySelector("h2");

let profile \= document.querySelector("\#profile");

let paragraphs \= document.querySelectorAll("p");

`querySelector` returns the first match, while `querySelectorAll` returns a collection that can be iterated over. Earlier methods such as `getElementById` and `getElementsByClassName` are still useful but less versatile.

### Reading and Changing Content

Once an element is selected, its content can be read or modified. The `textContent` property controls the text inside an element.

    	title.textContent \= "Member Profile";

To replace HTML inside an element, `innerHTML` is used.

    	profile.innerHTML \= "\<h2\>Updated\</h2\>\<p\>Status: Inactive\</p\>";

These operations allow the page to refresh its display without reloading.

### Changing Attributes and CSS Styles

Elements often carry attributes such as `src`, `href`, or `value`. JavaScript can modify them with `setAttribute` or directly through properties.

let img \= document.querySelector("img");

img.src \= "avatar.png";

Styling can be controlled through the `style` object.

title.style.color \= "blue";

title.style.fontSize \= "24px";

These adjustments allow dynamic formatting that reacts to user interaction or program logic.

### Creating and Inserting Elements

New elements can be generated entirely through JavaScript. This is crucial for applications that load data dynamically.

let note \= document.createElement("p");

note.textContent \= "New notification";

document.body.appendChild(note);

Other insertion methods include `prepend`, `before`, and `after`, allowing flexible positioning within the DOM.

### Removing and Replacing Elements

Elements can be removed from the page when no longer needed.

    	note.remove();

To replace an existing element:

let newTitle \= document.createElement("h1");

newTitle.textContent \= "Dashboard";

title.replaceWith(newTitle);

These operations help maintain clean and updated page structures.

### Working with Classes and CSS Manipulation

Classes are widely used for styling, animations, and interactive states. JavaScript can add, remove, or toggle classes using `classList`.

profile.classList.add("highlight");

profile.classList.remove("highlight");

profile.classList.toggle("active");

This enables responsive interfaces where elements change appearance based on user actions.

### Handling Events

Events represent actions such as clicks, key presses, or form submissions. Event listeners allow JavaScript to respond to those actions.

let button \= document.querySelector("button");

 

button.addEventListener("click", function () {

  console.log("Button clicked");

});

The event system supports a wide range of interactions, enabling features such as dropdown menus, sliders, and validation.

### Event Object and Event Properties

Each event listener receives an event object containing information about the action. For example:

button.addEventListener("click", function (e) {

  console.log(e.target);

});

The event object can capture coordinates of mouse actions, pressed keys, and the element that triggered the event. This is essential for advanced interaction patterns.

### Delegated Events

In dynamic interfaces, new elements may be added after initial page load. Delegated events allow a parent element to handle events from its children.

document.body.addEventListener("click", function (e) {

  if (e.target.tagName \=== "BUTTON") {

	console.log("A button was clicked");

  }

});

This technique improves performance and ensures consistent behavior across dynamic content.

### Forms and User Input Through the DOM

Forms often require reading and updating user input. JavaScript can extract values directly from input fields.

    	let username \= document.querySelector("\#name").value;

Form submission can be intercepted to run validation or processing before sending data.

form.addEventListener("submit", function (e) {

  e.preventDefault();

  console.log("Form captured");

});

This creates smoother and more reliable user experiences.

### Example (Live Search Filtering)

The following example performs real-time filtering of a list as the user types.

let input \= document.querySelector("\#search");

let items \= document.querySelectorAll(".item");

 

input.addEventListener("input", function () {

  let term \= input.value.toLowerCase();

 

  items.forEach(function (item) {

	let text \= item.textContent.toLowerCase();

	item.style.display \= text.includes(term) ? "block" : "none";

  });

});

This pattern is common in dashboards, menus, reports, and table filtering modules.

### Example (Notification Banner)

let banner \= document.createElement("div");

banner.textContent \= "Update available";

banner.classList.add("alert");

 

document.body.prepend(banner);

 

setTimeout(function () {

  banner.remove();

}, 3000);

This example demonstrates creating, styling, inserting, and removing elements dynamically.

## **8\.**    **Events and Event Handling**

Events allow JavaScript to react to what happens in a webpage. Every action—whether the user clicks a button, types into a field, changes a selection, or submits a form—triggers an event. Event handling is the process of listening for these actions and responding through programmed behavior. It is one of the core capabilities that transforms static pages into responsive, interactive applications.

### Understanding Event Types

The browser generates many different kinds of events. Mouse events occur when the user clicks, double-clicks, or moves the cursor. Keyboard events capture when a key is pressed or released. Form events fire when input elements change their value or when a form is submitted. A few examples illustrate how frequently these interactions occur:

button.addEventListener("click", handler);

input.addEventListener("keyup", handler);

select.addEventListener("change", handler);

Each event carries information about what triggered it, allowing JavaScript to respond intelligently.

### Using addEventListener()

The `addEventListener()` method is the standard way to attach an event to an element. It takes the event type and a function that should run when the event occurs.

let btn \= document.querySelector("\#save");

 

btn.addEventListener("click", function () {

  console.log("Button clicked");

});

This approach separates structure (HTML) from behavior (JavaScript) and makes the code easier to maintain. Multiple listeners can also be added to the same element without overwriting each other.

### The Event Object

When an event occurs, the browser sends an event object to the handler. This object contains details such as the target element, mouse position, key pressed, and more.

input.addEventListener("keyup", function (e) {

  console.log("Key pressed:", e.key);

});

The event object allows developers to capture user actions with precision and build richer interactions.

### Event Bubbling

Events in the browser flow through the DOM in phases. The most commonly observed phase is bubbling, where an event first occurs on the target element and then moves upward through its ancestors.

For example, clicking a button inside a `div` will fire a click event on the button, then on the `div`, and finally on the `body`. Understanding this flow prevents unintended behavior and allows advanced patterns such as delegated events.

### Event Delegation

Event delegation takes advantage of bubbling by placing a single event listener on a parent element instead of attaching listeners to every child. This is particularly useful when dealing with dynamic content that is added or removed after the page loads.

document.querySelector("\#list").addEventListener("click", function (e) {

  if (e.target.tagName \=== "LI") {

	console.log("List item clicked:", e.target.textContent);

  }

});

Delegation reduces memory usage and ensures consistent behavior even when new items are introduced.

### Preventing Default Behavior

Some events trigger built-in browser actions. Links navigate away from the page, forms submit and reload the page, and certain keys have special behavior. JavaScript can interrupt these actions when customization is required.

form.addEventListener("submit", function (e) {

  e.preventDefault();

  console.log("Form submission captured");

});

Preventing default behavior ensures smoother experiences for validation, AJAX requests, and custom workflows.

### Hands-On Activity: Interactive Form Validation

The following example illustrates how event handling can improve user experience by validating input as the user types.

\<input id="email" type="text" placeholder="Enter email"\>

\<p id="message"\>\</p\>

let emailField \= document.querySelector("\#email");

let message \= document.querySelector("\#message");

 

emailField.addEventListener("keyup", function () {

  let value \= emailField.value;

 

  if (value.includes("@") && value.includes(".")) {

	message.textContent \= "Valid email";

	message.style.color \= "green";

  } else {

	message.textContent \= "Invalid email format";

	message.style.color \= "red";

  }

});

With this setup, feedback appears instantly, guiding the user and reducing errors before submission.

 

## **9\.**   **Project: Interactive Form Validation**

This session brings together variables, functions, DOM manipulation, and event handling into a practical, real-world project. Form validation is a core task in front-end development, ensuring that user-submitted data is correct, complete, and secure before it's sent to a server. We will create a client-side validation system that provides immediate, user-friendly feedback.

**Project Overview**

We will build a user registration form that validates fields in real-time as the user types or when they leave a field. Upon submission, we will check all fields and provide a summary of any errors.

**HTML Structure: The Form**  
 First, we set up the basic HTML structure for our form.

html

\<\!DOCTYPE html\>

\<html lang="en"\>

\<head\>

	\<meta charset="UTF-8"\>

	\<meta name="viewport" content="width=device-width, initial-scale=1.0"\>

	\<title\>Interactive Form Validation\</title\>

	\<style\>

    	body { font-family: Arial, sans-serif; max-width: 500px; margin: 50px auto; }

    	.form-group { margin-bottom: 15px; }

    	label { display: block; margin-bottom: 5px; }

    	input { width: 100%; padding: 8px; box-sizing: border-box; }

    	.error { color: red; font-size: 0.9em; margin-top: 5px; }

    	.success { color: green; }

    	input.invalid { border: 1px solid red; }

    	input.valid { border: 1px solid green; }

	\</style\>

\</head\>

\<body\>

	\<h1\>Register\</h1\>

	\<form id="registrationForm"\>

    	*\<\!-- Full Name \--\>*

    	\<div class="form-group"\>

        	\<label for="fullName"\>Full Name:\</label\>

        	\<input type="text" id="fullName" name="fullName"\>

        	\<div class="error" id="nameError"\>\</div\>

    	\</div\>

 

    	*\<\!-- Email \--\>*

    	\<div class="form-group"\>

        	\<label for="email"\>Email:\</label\>

        	\<input type="email" id="email" name="email"\>

        	\<div class="error" id="emailError"\>\</div\>

    	\</div\>

 

    	*\<\!-- Password \--\>*

    	\<div class="form-group"\>

        	\<label for="password"\>Password:\</label\>

        	\<input type="password" id="password" name="password"\>

        	\<div class="error" id="passwordError"\>\</div\>

    	\</div\>

 

    	*\<\!-- Confirm Password \--\>*

    	\<div class="form-group"\>

        	\<label for="confirmPassword"\>Confirm Password:\</label\>

        	\<input type="password" id="confirmPassword" name="confirmPassword"\>

        	\<div class="error" id="confirmPasswordError"\>\</div\>

    	\</div\>

 

    	*\<\!-- Submit Button \--\>*

    	\<button type="submit"\>Register\</button\>

	\</form\>

 

	\<div id="formMessage"\>\</div\>

 

	\<script src="script.js"\>\</script\>

\</body\>

\</html\>

**JavaScript Logic: Validation Functions**

Now, we write the JavaScript (`script.js`) to bring the form to life. We'll break it down into smaller functions.

**Step 1: Selecting DOM Elements**  
 We start by getting references to all the elements we need to interact with.

javascript

*// Select the form and the message display area*

const form \= document.getElementById('registrationForm');

const formMessage \= document.getElementById('formMessage');

 

*// Select all input fields and their corresponding error divs*

const fullName \= document.getElementById('fullName');

const email \= document.getElementById('email');

const password \= document.getElementById('password');

const confirmPassword \= document.getElementById('confirmPassword');

 

const nameError \= document.getElementById('nameError');

const emailError \= document.getElementById('emailError');

const passwordError \= document.getElementById('passwordError');

const confirmPasswordError \= document.getElementById('confirmPasswordError');

 

**Step 2: Writing Individual Validation Functions**

Each function will check one specific field and return a helpful error message if the validation fails. If the field is valid, it returns an empty string.

javascript

*/\*\**

*\* Validates the full name.*

*\* @returns {string} Error message, or empty string if valid.*

*\*/*

function validateName() {

	const name \= fullName.value.trim();

	if (name \=== '') {

    	return 'Name is required.';

	}

	if (name.length \< 2\) {

    	return 'Name must be at least 2 characters long.';

	}

	return ''; *// No error*

}

 

*/\*\**

*\* Validates the email format using a simple regex.*

*\* @returns {string} Error message, or empty string if valid.*

*\*/*

function validateEmail() {

	const emailValue \= email.value.trim();

	const emailRegex \= /^\[^\\s@\]+@\[^\\s@\]+\\.\[^\\s@\]+$/; *// Basic email pattern*

 

	if (emailValue \=== '') {

    	return 'Email is required.';

	}

	if (\!emailRegex.test(emailValue)) {

    	return 'Please enter a valid email address.';

	}

	return '';

}

 

*/\*\**

*\* Validates the password strength.*

*\* @returns {string} Error message, or empty string if valid.*

*\*/*

function validatePassword() {

	const passwordValue \= password.value;

	if (passwordValue \=== '') {

    	return 'Password is required.';

	}

	if (passwordValue.length \< 8\) {

    	return 'Password must be at least 8 characters long.';

	}

	*// Check for at least one number and one letter*

	if (\!/(?=.\*\\d)(?=.\*\[a-zA-Z\])/.test(passwordValue)) {

    	return 'Password must contain at least one letter and one number.';

	}

	return '';

}

 

*/\*\**

*\* Checks if the confirm password matches the original password.*

*\* @returns {string} Error message, or empty string if valid.*

*\*/*

function validateConfirmPassword() {

	const confirmPasswordValue \= confirmPassword.value;

	const passwordValue \= password.value;

 

	if (confirmPasswordValue \=== '') {

    	return 'Please confirm your password.';

	}

	if (confirmPasswordValue \!== passwordValue) {

    	return 'Passwords do not match.';

	}

	return '';

}

**Step 3: Displaying Live Feedback with** `showError` **and** `showSuccess`  
 These helper functions update the DOM to show the user whether a field is valid or invalid.

javascript

*/\*\**

*\* Displays an error message and styles the input field.*

*\* @param {HTMLElement} inputField \- The input element.*

*\* @param {HTMLElement} errorElement \- The div for the error message.*

*\* @param {string} message \- The error message to display.*

*\*/*

function showError(inputField, errorElement, message) {

	errorElement.textContent \= message;

	inputField.classList.add('invalid');

	inputField.classList.remove('valid');

}

 

*/\*\**

*\* Clears the error message and applies success styling.*

*\* @param {HTMLElement} inputField \- The input element.*

*\* @param {HTMLElement} errorElement \- The div for the error message.*

*\*/*

function showSuccess(inputField, errorElement) {

	errorElement.textContent \= '';

	inputField.classList.add('valid');

	inputField.classList.remove('invalid');

}

**Step 4: Setting Up Event Listeners for Real-Time Validation**  
 We use the `input` and `blur` events to validate fields as the user interacts with them.

javascript

*// Real-time validation for Full Name*

fullName.addEventListener('input', () \=\> {

	const errorMsg \= validateName();

	if (errorMsg) {

    	showError(fullName, nameError, errorMsg);

	} else {

    	showSuccess(fullName, nameError);

	}

});

 

*// Real-time validation for Email*

email.addEventListener('input', () \=\> {

	const errorMsg \= validateEmail();

	if (errorMsg) {

    	showError(email, emailError, errorMsg);

	} else {

    	showSuccess(email, emailError);

	}

});

 

*// Real-time validation for Password*

password.addEventListener('input', () \=\> {

	const errorMsg \= validatePassword();

	*// When password changes, re-validate confirm password*

	const confirmErrorMsg \= validateConfirmPassword();

 

	if (errorMsg) {

    	showError(password, passwordError, errorMsg);

	} else {

    	showSuccess(password, passwordError);

	}

 

	if (confirmPassword.value) { *// Only show confirm error if it's not empty*

    	if (confirmErrorMsg) {

        	showError(confirmPassword, confirmPasswordError, confirmErrorMsg);

    	} else {

        	showSuccess(confirmPassword, confirmPasswordError);

    	}

	}

});

 

*// Real-time validation for Confirm Password*

confirmPassword.addEventListener('input', () \=\> {

	const errorMsg \= validateConfirmPassword();

	if (errorMsg) {

    	showError(confirmPassword, confirmPasswordError, errorMsg);

	} else {

    	showSuccess(confirmPassword, confirmPasswordError);

	}

});

**Step 5: Adding Submission Logic**  
 Finally, we handle the form's `submit` event to perform a final validation before "sending" the data.

javascript

form.addEventListener('submit', function(event) {

	*// Prevent the form from actually submitting (which reloads the page)*

	event.preventDefault();

 

	*// Run all validations*

	const nameErrorMsg \= validateName();

	const emailErrorMsg \= validateEmail();

	const passwordErrorMsg \= validatePassword();

	const confirmPasswordErrorMsg \= validateConfirmPassword();

 

	*// Show errors/success for all fields on submit*

	if (nameErrorMsg) showError(fullName, nameError, nameErrorMsg);

	else showSuccess(fullName, nameError);

 

	if (emailErrorMsg) showError(email, emailError, emailErrorMsg);

	else showSuccess(email, emailError);

 

	if (passwordErrorMsg) showError(password, passwordError, passwordErrorMsg);

	else showSuccess(password, passwordError);

 

	if (confirmPasswordErrorMsg) showError(confirmPassword, confirmPasswordError, confirmPasswordErrorMsg);

	else showSuccess(confirmPassword, confirmPasswordError);

 

	*// Check if the form is completely valid*

	const isFormValid \= \!nameErrorMsg && \!emailErrorMsg && \!passwordErrorMsg && \!confirmPasswordErrorMsg;

 

	if (isFormValid) {

    	formMessage.textContent \= 'Registration successful\!';

    	formMessage.className \= 'success';

    	*// In a real application, you would send the data to a server here.*

    	*// Example: fetch('/api/register', { method: 'POST', body: new FormData(form) })*

    	console.log('Form Data:', {

        	name: fullName.value,

        	email: email.value,

        	password: password.value

    	});

    	*// form.reset(); // Optionally reset the form*

	} else {

    	formMessage.textContent \= 'Please fix the errors above.';

    	formMessage.className \= 'error';

	}

});

**Exercise & Further Challenge**

1\.	**Implement it:** Type out the code and get the form working.

2\.	**Add a Field:** Add a "Phone Number" field with its own validation logic (e.g., must be 10 digits).

3\.	**Debouncing:** For performance, modify the email validation to only run 500 milliseconds after the user stops typing. (Hint: Use `setTimeout` and `clearTimeout`).

 

## **10\.**                **Strings and Regular Expressions**

While we have already used strings, this session explores the full toolkit JavaScript provides for working with text. We will cover essential string methods, modern template literals, and introduce the powerful pattern-matching syntax of Regular Expressions (RegEx), which is crucial for robust validation and data processing.

**String Methods in Depth**

Strings are primitive values, but JavaScript provides a set of methods that allow you to manipulate them. Here are some of the most commonly used ones.

| Method | Description | Example | Result |
| ----- | ----- | ----- | ----- |
| Length | Returns the number of characters. | "Hello".length | 5 |
| toLowerCase() / toUpperCase() | Converts the string to lower/upper case. | "Hello".toUpperCase() | "HELLO" |
| trim() | Removes whitespace from both ends. | " text ".trim() | "text" |
| includes(substring) | Checks if a string contains another string. | "JavaScript".includes("Script") | true |
| startsWith(substring) / endsWith(substring) | Checks how a string starts or ends. | "file.txt".endsWith(".txt") | true |
| indexOf(substring) | Returns the first index of a substring, or \-1. | "apple".indexOf("p") | 1 |
| slice(start, end) | Extracts a section of a string. | "Hello".slice(1, 4\) | "ell" |
| substring(start, end) | Similar to `slice` (but cannot accept negative indices). | "Hello".substring(1, 4\) | "ell" |
| split(separator) | Splits a string into an array based on a separator. | "a,b,c".split(",") | \["a", "b", "c"\] |
| replace(search, replacement) | Replaces the first occurrence of a pattern. | "Hello".replace("l", "x") | "Hexlo" |
| replaceAll(search, replacement) | Replaces all occurrences of a pattern. | "Hello".replaceAll("l", "x") | "Hexxo" |

**Example (Processing User Input)**

let userInput \= "  My Email is EXAMPLE@Domain.COM  ";

let processedInput \= userInput.trim().toLowerCase();

console.log(processedInput); *// "my email is example@domain.com"*

 

let filename \= "report\_2024\_final.pdf";

if (filename.endsWith(".pdf")) {

	console.log("It's a PDF file.");

}

 

let tags \= "js,web,development";

let tagsArray \= tags.split(","); *// Creates: \["js", "web", "development"\]*

**Template Literals (ES6)**

Template literals are a modern syntax for creating strings, offering a more powerful and readable alternative to string concatenation.

**Syntax:** Use backticks (`` ` ``) instead of single or double quotes.

**Interpolation:** Embed variables and expressions directly using `${}`.

*// Old way: Concatenation with \+*

let name \= "Dawit";

let age \= 25;

let message \= "Hello, my name is " \+ name \+ " and I am " \+ age \+ " years old.";

 

*// New way: Template Literals*

let messageNew \= \`Hello, my name is ${name} and I am ${age} years old.\`;

console.log(messageNew);

 

*// You can put any expression inside ${}*

let price \= 19.99;

let quantity \= 3;

let totalMessage \= \`The total cost is $${price \* quantity}.\`; *// "The total cost is $59.97."*

 

*// Template literals also respect line breaks, making them perfect for multi-line strings.*

let multiLine \= \`

  This is a

  multi-line

  string.

\`;

console.log(multiLine);

**Introduction to Regular Expressions**

A Regular Expression (RegEx) is a sequence of characters that defines a search pattern. It's like a super-powered "Find" function. They are used for:

·         **Validation** (emails, passwords, phone numbers).

·         **Searching and Replacing** text.

·         **Splitting** strings with complex delimiters.

**Creating a Regular Expression**  
 You can create a regex in two ways:

1\.       **Literal Notation** (most common): Pattern enclosed in slashes `/pattern/`.

2\.       **Constructor Function:** `new RegExp("pattern")`, useful for dynamic patterns.

let regex1 \= /hello/;

let regex2 \= new RegExp("hello");

**Testing RegEx with .test()**  
 The simplest method. It returns true or false.

let pattern \= /js/;

console.log(pattern.test("I love js")); *// true*

console.log(pattern.test("I love JS")); *// false (case-sensitive)*

 

 

 

 

 

 

**RegEx Flags**

Flags change how the search is performed. They are added after the closing slash.

| Flag | Description |
| :---: | :---- |
| `i` | Case-insensitive search. |
| `g` | Global search (find all matches, not just the first). |
| `m` | Multiline mode. |

let patternCaseInsensitive \= /js/i;

console.log(patternCaseInsensitive.test("I love JS")); *// true*

**Basic RegEx Patterns**

| Pattern | Matches | Example |
| :---: | :---- | :---- |
| Literal | The exact characters. | `/abc/` matches "abc" |
| `[abc]` | Any one character between the brackets. | `/[aeiou]/` matches any vowel |
| `[^abc]` | Any one character **not** between the brackets. | `/[^0-9]/` matches any non-digit |
| `[a-z]` | Any character in the range a to z. | `/[a-zA-Z]/` matches any letter |
| `\d` | Any digit (equivalent to `[0-9]`). | `/\d/` matches "1", "2", etc. |
| `\w` | Any word character (letter, digit, underscore). | `/\w/` matches "a", "5", "\_" |
| `\s` | Any whitespace character (space, tab, newline). |  |
| `.` | Any single character except a newline. |  |
| `^` | Start of a string. | `/^Hello/` matches "Hello" only at the start. |
| `$` | End of a string. | `/world$/` matches "world" only at the end. |
| `*` | 0 or more of the preceding item. | `/a*/` matches "", "a", "aa", ... |
| `+` | 1 or more of the preceding item. | `/a+/` matches "a", "aa", ... but not "" |
| `?` | 0 or 1 of the preceding item (makes it optional). | `/colou?r/` matches "color" and "colour" |
| `{n}` | Exactly `n` occurrences. | `/\d{3}/` matches three digits in a row. |
| `{n,}` | `n` or more occurrences. | `/\d{2,}/` matches "12", "123", "1234", ... |
| `{n,m}` | Between `n` and `m` occurrences. | `/\d{2,4}/` matches "12", "123", "1234" |

**Using RegEx with String Methods**

Regular expressions integrate powerfully with the string methods we learned earlier.

·         `.match(regex)`**:** Finds all matches and returns them in an array.

let str \= "The rain in Spain falls mainly in the plain.";

let vowelMatches \= str.match(/\[aeiou\]/gi); *// 'g' for all, 'i' for case-insensitive*

console.log(vowelMatches); *// \["e", "a", "i", "i", "a", "i", "a", "i", "a", "i", "e", "a", "i"\]*

·         `.replace(regex, newText)`**:** Replaces matches found by the regex.

let text \= "Hello, my name is Alice.";

let newText \= text.replace(/Alice/, "Bob");

console.log(newText); *// "Hello, my name is Bob."*

 

*// Using the 'g' flag to replace all occurrences*

let sillyText \= "she sells seashells";

let newSillyText \= sillyText.replace(/s/g, "5");

console.log(newSillyText); *// "5he 5ell5 5ea5hell5"*

·         `.split(regex)`**:** Splits a string using a regex as the separator.

let data \= "apple, banana; orange mango";

let fruits \= data.split(/\[,;\]\\s\*/); *// Split by comma or semicolon, followed by optional spaces.*

console.log(fruits); *// \["apple", "banana", "orange mango"\]*

 

 

### Hands-on: Username Validation using RegEx

Let's create a robust username validator. Common rules for a username:

·         3 to 15 characters long.

·         Can contain letters (a-z, A-Z), numbers (0-9), and underscores (\_).

·         Cannot start or end with an underscore.

·         Cannot have two underscores in a row.

We'll build this regex step-by-step.

**Step 1: Define the rules as a regex pattern.**

*// Explanation:*

*// ^.......$  \-\> Match the entire string from start to end.*

*// \[a-zA-Z0-9\] \-\> Must start with a letter or number.*

*// (?\!.\*\_{2,}) \-\> Negative lookahead: asserts no two consecutive underscores anywhere.*

*// \[a-zA-Z0-9\_\]{1,13} \-\> Middle characters: letters, numbers, underscore, 1 to 13 times.*

*// \[a-zA-Z0-9\]$ \-\> Must end with a letter or number (not an underscore).*

 

let usernamePattern \= /^\[a-zA-Z0-9\](?\!.\*\_{2,})\[a-zA-Z0-9\_\]{1,13}\[a-zA-Z0-9\]$/;

*A more beginner-friendly, but slightly less strict pattern could be:* `/^[a-z0-9_]{3,15}$/i` *which just checks length and allowed characters. We'll use the stricter one for the exercise.*

**Step 2: Create the HTML and JavaScript.**

\<\!DOCTYPE html\>

\<html lang="en"\>

\<head\>

	\<meta charset="UTF-8"\>

	\<title\>Username Validator\</title\>

	\<style\>

    	.valid { color: green; }

    	.invalid { color: red; }

	\</style\>

\</head\>

\<body\>

	\<label for="username"\>Enter a username:\</label\>

	\<input type="text" id="username"\>

	\<p id="message"\>\</p\>

 

	\<script\>

    	const usernameInput \= document.getElementById('username');

    	const message \= document.getElementById('message');

 

    	*// Our strict username pattern*

    	const usernameRegex \= /^\[a-zA-Z0-9\](?\!.\*\_{2,})\[a-zA-Z0-9\_\]{1,13}\[a-zA-Z0-9\]$/;

 

    	usernameInput.addEventListener('input', function() {

        	const username \= usernameInput.value;

 

        	if (username \=== '') {

            	message.textContent \= 'Username cannot be empty.';

            	message.className \= 'invalid';

            	return;

        	}

 

        	if (usernameRegex.test(username)) {

            	message.textContent \= 'Username is valid\!';

            	message.className \= 'valid';

        	} else {

            	message.textContent \= 'Username is invalid. Must be 3-15 chars, start/end with letter/number, and no consecutive \_\_.';

            	message.className \= 'invalid';

        	}

    	});

	\</script\>

\</body\>

\</html\>

**Key Concepts Introduced**

| Concept | Explanation |
| :---- | :---- |
| **String Methods** | Powerful tools for searching, slicing, and transforming text data. |
| **Template Literals** | A modern, clean way to create strings with embedded variables and expressions. |
| **Regular Expression** | A pattern-defining object used to match character combinations in strings. |
| **RegEx Flags** | Modifiers like `i` (case-insensitive) and `g` (global) that change how the regex behaves. |
| **RegEx Patterns** | A syntax using special characters to define what to search for (e.g., `\d` for digit, `^` for start). |
| **Integration** | Using regex with `.test()`, `.match()`, and `.replace()` for powerful string operations. |

 

## **11\.**                **Date, Time, and Math**

JavaScript provides built-in objects for working with **dates**, **times**, and **mathematical operations**. These features are essential when building timers, schedules, clocks, dashboards, random data generators, and many interactive web features.

**Working with Date Objects**

JavaScript’s `Date` object represents a single moment in time. It stores date and time down to milliseconds.

### Creating Dates

There are several ways to create a date:

let now \= new Date(); 

let specific \= new Date("2024-06-20"); 

let detailed \= new Date(2024, 5, 20, 14, 30, 0);  // (year, monthIndex, day, hour, minute, second)

**Note:** Month index starts from **0–11** (0 \= January, 11 \= December).

### Getting Date Components

| Method | Description | Example |
| ----- | ----- | ----- |
| `getFullYear()` | Year (4 digits) | 2025 |
| `getMonth()` | Month (0–11) | 0 \= January |
| `getDate()` | Day of month (1–31) | 17 |
| `getDay()` | Day of week (0–6) | 0 \= Sunday |
| `getHours()` | Hour (0–23) | 14 |
| `getMinutes()` | Minutes | 45 |
| `getSeconds()` | Seconds | 9 |
| `getMilliseconds()` | Milliseconds | 550 |

Example:

let now \= new Date();

console.log(now.getFullYear());

console.log(now.getMonth());

console.log(now.getHours());

### Setting Date Values

You can update parts of a date using setter methods:

let d \= new Date();

d.setFullYear(2030);

d.setMonth(11); 	// December

d.setDate(25);  	// Christmas\!

### Converting Dates to Strings

Useful for showing formatted text:

now.toDateString(); 	// "Mon Jun 24 2024"

now.toTimeString(); 	// "14:29:03 GMT+0300"

now.toLocaleString();   // local formatting

 

**Working with Time (Clocks & Timers)**

`setInterval()` and `setTimeout()` are essential for clocks.

Example: format hours/minutes/seconds:

function formatTime(n) {

  return n \< 10 ? "0" \+ n : n;

}

**Math Object and Randomization**

The `Math` object provides numeric utilities such as rounding, power, square root, and random number generation.

### Common Math Methods

| Method | Description | Example |
| ----- | ----- | ----- |
| `Math.round(x)` | Nearest integer | 3.6 → 4 |
| `Math.floor(x)` | Downward rounding | 3.9 → 3 |
| `Math.ceil(x)` | Upward rounding | 3.1 → 4 |
| `Math.abs(x)` | Absolute value | \-5 → 5 |
| `Math.pow(a, b)` | Exponent | 2³ → 8 |
| `Math.sqrt(x)` | Square root | 25 → 5 |
| `Math.max(a,b,...)` | Largest value | 1,5,3 → 5 |
| `Math.min(a,b,...)` | Smallest value | 1,5,3 → 1 |

### Random Numbers

`Math.random()` returns a number between **0 and 1** (not including 1).

To generate a number in a range:

let random0to9 \= Math.floor(Math.random() \* 10);   	// 0–9 

let random1to6 \= Math.floor(Math.random() \* 6\) \+ 1;	// 1–6 (dice)

Pick a random item from an array:

let quotes \= \["A", "B", "C"\];

let random \= quotes\[Math.floor(Math.random() \* quotes.length)\];

 

**Hands-On: Digital Clock \+ Random Quote Generator**

This mini-project combines **Date**, **Time**, and **Math.random()**.

### HTML

\<h2\>Digital Clock\</h2\>

\<div id="clock" style="font-size: 24px; margin-bottom: 20px;"\>\</div\>

 

\<h3\>Random Quote\</h3\>

\<button id="newQuote"\>Show Quote\</button\>

\<p id="quoteDisplay"\>\</p\>

### JavaScript

// \===== Digital Clock \=====

function updateClock() {

	let now \= new Date();

 

	let hours \= now.getHours();

	let minutes \= now.getMinutes();

	let seconds \= now.getSeconds();

 

	// Add leading zeros

	hours \= hours \< 10 ? "0" \+ hours : hours;

	minutes \= minutes \< 10 ? "0" \+ minutes : minutes;

	seconds \= seconds \< 10 ? "0" \+ seconds : seconds;

 

	document.getElementById("clock").textContent \=

    	\`${hours}:${minutes}:${seconds}\`;

}

 

setInterval(updateClock, 1000);

updateClock();  // run once immediately

 

// \===== Random Quote Generator \=====

const quotes \= \[

	"Stay curious.",

	"Code is like humor. When you have to explain it, it's bad.",

	"Learning never stops.",

	"Believe in iteration, not perfection."

\];

 

document.getElementById("newQuote").addEventListener("click", function() {

	let randomIndex \= Math.floor(Math.random() \* quotes.length);

	document.getElementById("quoteDisplay").textContent \= quotes\[randomIndex\];

});

 

 

## **12\.**                **Error Handling and Debugging**

Errors happen in all programs. JavaScript provides structured tools to **detect**, **catch**, and **safely handle** them so the application does not crash. Debugging tools help identify and fix issues efficiently.

**Common JavaScript Errors**

JavaScript errors generally fall into three categories:

### 1\. Syntax Errors

Mistakes in code structure—missing brackets, commas, or incorrect keywords.

Example:

if (x \> 5 {   // missing closing parenthesis

	console.log("Hi");

}

### 2\. Reference Errors

Occurs when using a variable that does not exist.

    	console.log(total);  // total is not defined

### 3\. Type Errors

Calling a method on the wrong type of value.

let x \= undefined;

x.toUpperCase(); // TypeError

### Other common errors

| Error Type | Meaning | Example |
| :---: | :---: | :---: |
| `RangeError` | Value outside allowed range | `new Array(-1)` |
| `URIError` | Invalid URL encoding | `decodeURI("%")` |
| `EvalError` | Rare now; related to `eval()` | Usually obsolete |

 

**The try...catch...finally Structure**

This structure handles errors gracefully to prevent program crashes.

### Basic Syntax

try {

	// Code that may throw an error

} catch (error) {

	// Code that runs if error happens

} finally {

	// Always runs (optional)

}

**Example**

try {

	let num \= Number("abc"); // NaN

	if (isNaN(num)) {

    	throw "Not a valid number";

	}

	console.log(num);

} catch (err) {

	console.log("Error:", err);

} finally {

	console.log("Operation completed.");

}

Output:

Error: Not a valid number

Operation completed.

**throw Statements**

The `throw` keyword allows you to create custom errors when input or logic is invalid.

function divide(a, b) {

	if (b \=== 0\) {

    	throw "Cannot divide by zero\!";

	}

	return a / b;

}

Use `throw` for:

·         validation failures

·         unexpected input

·         conditions that should not occur in normal usage

You can throw different types:

throw "Simple text error";

throw new Error("Proper error object");

throw { message: "Invalid age", code: 400 };

 

**Debugging Using Browser Tools**

Modern browsers include powerful debugging tools (Developer Tools).

### Open Developer Tools

·         Chrome: **F12** or **Ctrl+Shift+I**

·         Firefox: same shortcut

### Useful Panels

| Panel | Purpose |
| ----- | ----- |
| **Console** | View logs, errors, warnings, run JS |
| **Sources** | Set breakpoints, step through code |
| **Network** | Inspect API calls, failures |
| **Elements** | Inspect DOM |
| **Application** | View localStorage, cookies |

### Using Breakpoints

Breakpoints allow the code to pause at specific lines.

Steps:

1\.       Open **Sources** tab

2\.       Click on the line number

3\.       Refresh the page

4\.       Use:

·         **Step Over** (F10)

·         **Step Into** (F11)

·         **Step Out** (Shift+F11)

You can inspect:

·         variable values

·         call stack

·         execution flow

### Using console Methods

| Method | Purpose |
| ----- | ----- |
| `console.log()` | Normal logging |
| `console.error()` | Error messages in red |
| `console.warn()` | Warnings |
| `console.table()` | Display arrays/objects as a table |
| `console.time()` / `console.timeEnd()` | Measure performance |

Example:

    	console.table(\[{ name: "Alem", age: 22 }, { name: "Sara", age: 25 }\]);

**Hands-On Project: Safe Calculator with Error Handling**

This activity reinforces:

·         input validation

·         `try...catch`

·         custom `throw` messages

### HTML

\<h2\>Safe Calculator\</h2\>

 

\<input id="num1" type="text" placeholder="Enter first number"\>

\<input id="num2" type="text" placeholder="Enter second number"\>

 

\<select id="operation"\>

  \<option value="add"\>+\</option\>

  \<option value="sub"\>-\</option\>

  \<option value="mul"\>\*\</option\>

  \<option value="div"\>/\</option\>

\</select\>

 

\<button id="calc"\>Calculate\</button\>

 

\<p id="result"\>\</p\>

 

### JavaScript

document.getElementById("calc").addEventListener("click", function () {

	let a \= document.getElementById("num1").value;

	let b \= document.getElementById("num2").value;

	let op \= document.getElementById("operation").value;

	let resultArea \= document.getElementById("result");

 

	try {

    	let x \= Number(a);

    	let y \= Number(b);

 

    	// Validate input

    	if (a.trim() \=== "" || b.trim() \=== "") {

        	throw "Inputs cannot be empty.";

    	}

    	if (isNaN(x) || isNaN(y)) {

        	throw "Both values must be numbers.";

    	}

    	if (op \=== "div" && y \=== 0\) {

        	throw "Cannot divide by zero.";

    	}

 

    	// Perform calculation

    	let answer;

    	switch (op) {

        	case "add": answer \= x \+ y; break;

        	case "sub": answer \= x \- y; break;

        	case "mul": answer \= x \* y; break;

        	case "div": answer \= x / y; break;

        	default: throw "Unknown operation.";

    	}

 

    	resultArea.textContent \= "Result: " \+ answer;

    	resultArea.style.color \= "green";

 

	} catch (error) {

    	resultArea.textContent \= "Error: " \+ error;

    	resultArea.style.color \= "red";

	} finally {

    	console.log("Calculation attempted.");

	}

});

 

## **13\.**                **ES6+ Features**

Modern JavaScript (ES6 and beyond) introduced powerful features that make code more readable, shorter, and easier to maintain. These features are now standard in all browsers and form the foundation of modern JavaScript development.

## let, const, and Template Literals Recap

### let

Used for block-scoped variables (declared inside `{}`).

let count \= 5;

if (true) {

	let count \= 10; // different variable

}

### const

Used for values that should not be reassigned.

const PI \= 3.14;

// PI \= 4;  // Error

**Note:** `const` prevents reassignment, but **objects and arrays can still be modified.**

const student \= { name: "Abel" };

student.name \= "Sara";	// allowed

### Template Literals

Backtick strings allow embedding variables and multi-line strings:

let name \= "Liya";

let message \= \`Hello, ${name}\! Welcome back.\`;

Multi-line example:

let note \= \`

This is line 1

This is line 2

\`;

## Destructuring

Destructuring lets you extract values from arrays or objects easily.

### Array Destructuring

let numbers \= \[10, 20, 30\];

let \[a, b, c\] \= numbers;

 

console.log(a, b, c); // 10 20 30

Swapping values:

let x \= 1, y \= 2;

\[x, y\] \= \[y, x\];

### Object Destructuring

let user \= { name: "Mahi", age: 22 };

let { name, age } \= user;

 

console.log(name, age);

Renaming:

    	let { name: fullName } \= user;

## Spread and Rest Operators

Both use the same syntax: `...`

### Spread Operator

"Spreads" array or object elements.

#### **Copy an array:**

let a \= \[1, 2, 3\];

let b \= \[...a\];

#### **Combine arrays:**

let all \= \[...a, ...b\];

#### **Copy/extend objects:**

let p1 \= { name: "Sam" };

let p2 \= { ...p1, age: 30 };

### Rest Operator

Collects multiple values into an array.

function sum(...nums) {

	return nums.reduce((acc, n) \=\> acc \+ n, 0);

}

 

sum(1, 2, 3, 4); // 10

## Default Parameters

Avoids errors when a function is called without arguments.

function greet(name \= "Guest") {

	console.log("Hello, " \+ name);

}

 

greet();       	// Hello, Guest

greet("Liya"); 	// Hello, Liya

## for...of Loop

Used to loop through *iterable* objects such as arrays.

let fruits \= \["apple", "banana", "mango"\];

 

for (let f of fruits) {

	console.log(f);

}

**Note:** `for...of` works on arrays, strings, maps, sets \- but **not** on plain objects.

## map() Method

`map()` transforms each item in an array and returns a new array.

let nums \= \[1, 2, 3\];

 

let doubled \= nums.map(n \=\> n \* 2);

console.log(doubled);  // \[2, 4, 6\]

Useful for:

·         formatting data

·         transformation before display

·         cleaning up arrays

## Hands-On: Clean Up a Legacy Script Using ES6 Features

This exercise converts old-style ES5 code into clean ES6+ syntax.

### Legacy Code (Before ES6)

var students \= \["Abel", "Sara", "Mahi"\];

 

for (var i \= 0; i \< students.length; i++) {

	console.log("Welcome " \+ students\[i\]);

}

 

function add(a, b) {

	if (b \=== undefined) {

    	b \= 0;

	}

	return a \+ b;

}

 

var person \= {name: "Kebede", age: 30};

var personName \= person.name;

### Modern ES6 Version

// Use const or let

const students \= \["Abel", "Sara", "Mahi"\];

 

// Use for...of and template literals

for (let s of students) {

	console.log(\`Welcome ${s}\`);

}

 

// Use default parameters

const add \= (a, b \= 0\) \=\> a \+ b;

 

// Destructuring

const person \= { name: "Kebede", age: 30 };

const { name } \= person;

 

// Spread example

const newStudents \= \[...students, "Liya"\];

### Exercise Goal

Rewrite the following using ES6+ features:

var items \= \[1, 2, 3\];

 

function multiply(arr) {

	var result \= \[\];

	for (var i \= 0; i \< arr.length; i++) {

    	result.push(arr\[i\] \* 2);

	}

	return result;

}

 

var person \= {name: "Ana", country: "Ethiopia"};

var n \= person.name;

 

**Expected improvements:**

·         `const` / `let`

·         arrow functions

·         `map()`

·         destructuring

·         template literals (optional)

## **14\.**                **Asynchronous JavaScript**

JavaScript executes code line by line (single-threaded). However, real applications need to wait for things like API responses, timers, and user actions. Asynchronous JavaScript allows us to perform long tasks **without blocking the rest of the program**.

## Synchronous vs Asynchronous Behavior

### Synchronous Execution

·         Each instruction waits for the previous one.

·         Long operations block the page.

console.log("Start");

for (let i \= 0; i \< 1e9; i++) {}   // long task

console.log("End");

Output waits until the loop finishes.

### Asynchronous Execution

·         Time-based functions, API calls, and events run in the background.

·         JavaScript continues running while waiting.

console.log("Start");

 

setTimeout(() \=\> {

	console.log("Async work done");

}, 2000);

 

console.log("End");

Output:

Start

End

Async work done  // after 2 seconds

JavaScript doesn’t pause the entire script.

## Callbacks

A **callback** is a function passed into another function to run later.

function greet(name, callback) {

	console.log("Hello " \+ name);

	callback();

}

 

greet("Abel", () \=\> {

	console.log("Callback executed");

});

### Callback Hell (Nested callbacks)

setTimeout(() \=\> {

  setTimeout(() \=\> {

	setTimeout(() \=\> {

  	console.log("Done");

	}, 1000);

  }, 1000);

}, 1000);

 

→Hard to read and maintain → Promises solve this.

## Promises

A **Promise** represents a future value (success or failure).

### Creating a Promise

let work \= new Promise((resolve, reject) \=\> {

	let ok \= true;

 

	if (ok) resolve("Success\!");

	else reject("Error occurred");

});

### Consuming a Promise

`work`

  .then(result \=\> console.log(result))

  .catch(err \=\> console.log(err));

## async and await

`async/await` makes asynchronous code look simple and readable.

### Basic Example

async function load() {

	try {

    	let result \= await Promise.resolve("Completed\!");

    	console.log(result);

	} catch (e) {

    	console.log(e);

	}

}

 

load();

### Important Notes

·         `await` only works inside an `async` function.

·         It pauses the function until the Promise resolves/rejects.

·         Use `try...catch` to handle errors.

## Hands-On: Fetch Random Joke API

We will fetch a random joke from:  
 **https://official-joke-api.appspot.com/random\_joke**

Goal:

·         Use `fetch()`

·         Use `async/await`

·         Display setup and punchline

·         Handle errors

### HTML

\<h2\>Random Joke\</h2\>

\<button id="btn"\>Get Joke\</button\>

 

\<p id="setup" style="margin-top:20px; font-weight:bold;"\>\</p\>

\<p id="punchline"\>\</p\>

### JavaScript

async function getJoke() {

	try {

    	let response \= await fetch("https://official-joke-api.appspot.com/random\_joke");

 

    	if (\!response.ok) {

        	throw "Could not fetch joke.";

    	}

 

    	let data \= await response.json();

 

    	document.getElementById("setup").textContent \= data.setup;

    	document.getElementById("punchline").textContent \= data.punchline;

 

	} catch (err) {

    	document.getElementById("setup").textContent \= "Error loading joke.";

    	document.getElementById("punchline").textContent \= err;

	}

}

 

document`.`getElementById`(`"btn"`).`addEventListener`(`"click"`, getJoke);`

 

## **15\.**                **Working with APIs and Fetch**

APIs allow JavaScript applications to communicate with external services. This session focuses on using the **Fetch API** to request data from servers, handling JSON responses, and displaying the data dynamically on a webpage.

## fetch() Basics

`fetch()` is a built-in JavaScript function used to make HTTP requests.

### Basic Syntax

fetch(url)

	.then(response \=\> response.json())

	.then(data \=\> console.log(data))

	.catch(err \=\> console.log("Error:", err));

### How Fetch Works

1\.       Makes a request to a URL

2\.       Returns a **Promise**

3\.       Response must be converted (usually `.json()`)

4\.       Data becomes available in `.then()`

## Handling JSON Responses

Most APIs return data in **JSON format**.

Example JSON:

{

  "id": 1,

  "name": "Abel",

  "age": 22

}

### Converting JSON to JavaScript Object

fetch("data.json")

	.then(res \=\> res.json())

	.then(obj \=\> console.log(obj));

`.json()` is also asynchronous → returns a Promise.

 

## Displaying Fetched Data Dynamically

Fetched data can be used to update the DOM (HTML content).

### Example: Display user info

fetch("https://jsonplaceholder.typicode.com/users/1")

	.then(res \=\> res.json())

	.then(user \=\> {

    	document.getElementById("name").textContent \= user.name;

    	document.getElementById("email").textContent \= user.email;

	});

### HTML for the example

\<p\>Name: \<span id="name"\>\</span\>\</p\>

\<p\>Email: \<span id="email"\>\</span\>\</p\>

## Using fetch() with async/await

Cleaner and easier to read:

async function loadUser() {

	try {

    	let response \= await fetch("https://jsonplaceholder.typicode.com/users/1");

    	let data \= await response.json();

 

    	console.log(data);

	} catch (error) {

    	console.log("Error fetching data:", error);

	}

}

 

loadUser();

 

## **16\.**                **Modules and Local Storage**

JavaScript applications become easier to maintain when the code is split into clear, reusable pieces. Modern JavaScript supports **modules** for organizing code and **localStorage** for saving data in the browser so it persists even after the page reloads. In this session, we explore both concepts and build a persistent **To-Do App**.

# Modular JavaScript (import / export)

Modern JavaScript (ES6) introduced **modules**, allowing developers to split code into separate files and reuse functions, classes, or variables.

**What Are Modules?**

A module is simply a JavaScript file that exposes some of its content so it can be used by other files.

Modules help with:

·         Better organization

·         Avoiding duplicate code

·         Preventing naming conflicts

·         Maintaining large projects

To use modules, add the attribute:

\<script type="module" src="main.js"\>\</script\>

## Exporting Values

### 1\. Exporting a Single Value (default export)

// math.js

export default function add(a, b) {

	return a \+ b;

}

### 2\. Exporting Multiple Named Values

// utils.js

export function greet(name) {

	return \`Hello, ${name}\`;

}

 

export const PI \= 3.14;

## Importing Values

### Importing a default export

import add from './math.js';

 

console.log(add(5, 3));

### Importing named exports

import { greet, PI } from './utils.js';

 

console.log(greet("Abel"));

console.log(PI);

### Renaming Imports

import { greet as sayHello } from './utils.js';

 

**Why Use Modules?**

·         Cleaner structure

·         Reusable code

·         Important for large apps

·         Required in front-end frameworks like React, Angular, Vue

·         Works naturally with bundlers (Vite, Webpack)

# Local Storage and Session Storage

Browsers provide built-in storage so web apps can save data **without a database**.

JavaScript offers two kinds of storage:

| Feature | localStorage | sessionStorage |
| ----- | ----- | ----- |
| Lifespan | No expiration | Until tab closes |
| Capacity | \~5–10 MB | \~5 MB |
| Scope | All tabs from same domain | Only current tab |
| Use cases | To-do apps, settings, themes | Temporary form states |

**Basic Operations**

Both work like simple key–value storage.

### Save (set item)

localStorage.setItem("username", "Dawit");

### Get item

let user \= localStorage.getItem("username");

### Remove item

localStorage.removeItem("username");

### Clear everything

localStorage.clear();

 

**Storing Objects Using JSON**

localStorage can only store **strings**.

To store an object:

    	let user \= { name: "Sara", age: 22 };

 

    	localStorage.setItem("user", JSON.stringify(user));

Retrieve:

let data \= JSON.parse(localStorage.getItem("user"));

console.log(data.name);

 

## **17\.**                **Introduction to the Browser BOM**

While the DOM represents the structure of a webpage, the **Browser Object Model (BOM)** provides JavaScript with access to **browser-specific features** such as navigation history, screen information, and timers. Understanding the BOM allows developers to create more interactive, intelligent, and browser-aware applications.

This session introduces the key components of the BOM: **window**, **history**, and **navigator**, as well as the important timing functions **setTimeout** and **setInterval**.

# The Browser Object Model (BOM)

The Browser Object Model is a collection of objects that allow JavaScript to interact with the browser beyond just the webpage content.

The major BOM objects include:

·         **window**

·         **history**

·         **navigator**

·         **location**

·         **screen**

While the DOM models the webpage, the BOM models the **browser environment**.

# The window Object

The **window** object is the **global object** in browser-based JavaScript.

Every global variable, function, or object you create becomes part of **window**.

Example:

console.log(window);

### The window object represents:

·         The browser window or tab

·         Global functions like alert(), confirm(), prompt()

·         Timer functions (setTimeout, setInterval)

·         Access to DOM via `window.document`

·         Access to other BOM objects (navigator, history, location)

## Common window Methods

### 1\. alert(), confirm(), prompt()

window.alert("Hello\!");

let answer \= window.confirm("Are you sure?");

let name \= window.prompt("Enter your name:");

### 2\. Open and Close Windows

let newTab \= window.open("https://example.com");

newTab.close();

### 3\. Window Size and Position

console.log(window.innerWidth);

console.log(window.innerHeight);

# The history Object

The **history** object allows navigation through the user’s browser history.

Useful for:

·         Custom navigation buttons

·         Single Page Applications (SPA)

·         Browser control features

Access:

console.log(history);

## history.length

Number of pages in the user's session history.

console.log(history.length);

## history.back(), history.forward()

Works like the browser’s Back and Forward buttons.

history.back(); 	// Go back one page

history.forward();  // Go forward one page

## history.go()

Moves a specific number of steps forward or backward.

history.go(-1); // Back 1 page

history.go(1);  // Forward 1 page

history.go(0);  // Reload current page

# The navigator Object

The **navigator** object provides information about the browser, system, and device.

Useful for:

·         Detecting device type (mobile/desktop)

·         Checking if cookies are enabled

·         Browser detection

·         Language and online status

Access:

console.log(navigator);

## Key navigator Properties

### 1\. navigator.userAgent

Shows browser and operating system info.

    	console.log(navigator.userAgent);

Example output:

    	Mozilla/5.0 (Windows NT 10.0; Win64; x64)

### 2\. navigator.language

console.log(navigator.language); // e.g., "en-US"

### 3\. navigator.onLine

Indicates internet connectivity.

if (navigator.onLine) {

	console.log("You are online");

} else {

	console.log("You are offline");

}

### 4\. navigator.cookieEnabled

console.log(navigator.cookieEnabled);

### 5\. navigator.geolocation (Modern Feature)

Allows location access (with user permission).

navigator.geolocation.getCurrentPosition(

	pos \=\> console.log(pos.coords),

	err \=\> console.log("Location access denied")

);

# Timers: setTimeout() and setInterval()

JavaScript timers allow scheduling code execution after a delay or repeatedly at intervals.

Timers are part of the **window** object.

# setTimeout()

Runs a function **once** after a specified time (in milliseconds).

Syntax:

    	setTimeout(function, delay);

Example:

setTimeout(() \=\> {

	console.log("This runs after 2 seconds");

}, 2000);

### Stopping a timeout

let id \= setTimeout(() \=\> console.log("Hi"), 3000);

 

clearTimeout(id); // stops it

# setInterval()

Runs a function repeatedly at fixed time intervals.

Syntax:

    	setInterval(function, delay);

Example:

setInterval(() \=\> {

	console.log("Repeating every second");

}, 1000);

### Stopping an interval

let counter \= setInterval(() \=\> console.log("Tick"), 1000);

 

clearInterval(counter);

# Example: Auto-Updating Clock (setInterval)

\<h2 id="clock"\>\</h2\>

 

\<script\>

function updateClock() {

	let now \= new Date();

	document.getElementById("clock").textContent \= now.toLocaleTimeString();

}

 

setInterval(updateClock, 1000);

updateClock(); // Run once immediately

\</script\>

# Example: Temporary Notification (setTimeout)

\<p id="msg"\>\</p\>

 

\<script\>

document.getElementById("msg").textContent \= "Message will disappear";

 

setTimeout(() \=\> {

	document.getElementById("msg").textContent \= "";

}, 3000);

\</script\>

# Hands-On Mini Project: Auto Logout Warning

We will show a warning after 5 seconds and auto-logout after 10 seconds.

\<p id="status"\>\</p\>

 

\<script\>

let warning \= setTimeout(() \=\> {

	document.getElementById("status").textContent \=

        "You will be logged out soon\!";

}, 5000);

 

let logout \= setTimeout(() \=\> {

	document.getElementById("status").textContent \=

        "Logged out.";

}, 10000);

\</script\>

