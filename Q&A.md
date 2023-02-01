## 1. What are the possible ways to create objects in JavaScript

- Object constructor:

```js
var object = new Object();
```

Note: Cách này không được recommend

- Object's create method

```js
var object = Object.create(null);
```

- Object literal syntax

```js
var object = {
  name: "Sudheer",
  age: 34,
};

// Object literal property values can be of any data type, including array, function, and nested object.
```

- Function contructor

```js
function Person(name) {
  this.name = name;
  this.age = 21;
}
var object = new Person("Sudheer");
```

- Function constructor with prototype

```js
function Person() {}
Person.prototype.name = "Sudheer";
var object = new Person();
```

This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

```js
function func() {}

new func(x, y, z);
```

**(OR)**

```js
// Create a new instance using function prototype.
var newInstance = Object.create(func.prototype)

// Call the function
var result = func.call(newInstance, x, y, z),

// If the result is a non-null object then use it otherwise just use the new instance.
console.log(result && typeof result === 'object' ? result : newInstance);
```

- ES6 Class syntax

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

var object = new Person("Sudheer");
```

- Singleton pattern

```js
var object = new (function () {
  this.name = "Sudheer";
})();
```

## 2. What is a prototype chain

**Prototype chaining** is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

The prototype on object instance is available through **Object.getPrototypeOf(object)** or \***\*proto\*\*** property whereas prototype on constructors function is available through **Object.prototype**.

![](https://i.imgur.com/8J6dD03.png)

## 3. What is the difference between Call, Apply and Bind?

**Call:** The call() method invokes a function with a given `this` value and arguments provided one by one

```js
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
```

**Apply:** Invokes the function with a given `this` value and allows you to pass in arguments as an array

```js
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
```

**bind:** returns a new function, allowing you to pass any number of arguments

```js
var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
```

## 4. What is JSON and its common operations

**JSON** is a text-based data format following JavaScript object syntax, which was popularized by `Douglas Crockford`. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json

**Parsing:** Converting a string to a native object

```js
JSON.parse(text);
```

**Stringification:** converting a native object to a string so it can be transmitted across the network

```js
JSON.stringify(object);
```

## 5. What is the purpose of the array slice method?

The **slice()** method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

```js
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
```

## 6 What is the purpose of the array splice method

The **splice()** method is used either adds/removes items to/from an array, and then returns the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

```js
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]
```

## 7. What is the difference between slice and splice?

![](https://i.imgur.com/L0kJ9oZ.png)

## 8. What is the difference between == and === operators

JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators take type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,

1.  Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
2.  Two numbers are strictly equal when they are numerically equal. i.e, Having the same number value. There are two special cases in this,
    1.  NaN is not equal to anything, including NaN.
    2.  Positive and negative zeros are equal to one another.
3.  Two Boolean operands are strictly equal if both are true or both are false.
4.  Two objects are strictly equal if they refer to the same Object.
5.  Null and Undefined types are not equal with ===, but equal with ==. i.e, null ===undefined --> false but null==undefined --> true

```js
0 == false   // true
0 === false  // false
1 == "1"     // true
1 === "1"    // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
[]==[] or []===[] //false, refer different objects in memory
{}=={} or {}==={} //false, refer different objects in memory
```

## 9. What are lambda or arrow functions?

An arrow function is a shorter syntax for a function expression and does not have its own **this, arguments, super, or new.target**. These functions are best suited for non-method functions, and they cannot be used as constructors.

## 10. What is a first class function?

In Javascript, functions are first class objects. First-class functions means when functions in that language are treated like any other variable.

For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable. For example, in the below example, handler functions assigned to a listener

```js
const handler = () => console.log("This is a click handler function");
document.addEventListener("click", handler);
```

## 11. What is a first order function?

First-order function is a function that doesn’t accept another function as an argument and doesn’t return a function as its return value.

```js
const firstOrder = () => console.log("I am a first order function!");
```

## 12. What is a higher order function?

Higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

```js
const firstOrderFunc = () => console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);
```

## 13. What is the difference between let and var?

![](https://i.imgur.com/AQdTxQc.png)

```js
function userDetails(username) {
  if (username) {
    console.log(salary); // undefined due to hoisting
    console.log(age); // ReferenceError: Cannot access 'age' before initialization
    let age = 30;
    var salary = 10000;
  }
  console.log(salary); //10000 (accessible to due function scope)
  console.log(age); //error: age is not defined(due to block scope)
}
userDetails("John");
```

## 14. What is the Temporal Dead Zone?

The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a `let` or `const` variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.

```js
function somemethod() {
  console.log(counter1); // undefined
  console.log(counter2); // ReferenceError
  var counter1 = 1;
  let counter2 = 2;
}
```

## 15. What is IIFE(Immediately Invoked Function Expression)?

IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

```js
(function () {
  // logic here
})();
```

The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

```js
(function () {
  var message = "IIFE";
  console.log(message);
})();
console.log(message); //Error: message is not defined
```

## 16. How do you decode or encode a URL in JavaScript?

`encodeURI()` function is used to encode an URL. This function requires a URL string as a parameter and return that encoded string. `decodeURI()` function is used to decode an URL. This function requires an encoded URL string as parameter and return that decoded string.

**Note:** If you want to encode characters such as `/ ? : @ & = + $ #` then you need to use `encodeURIComponent()`.

```js
let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);
```

## 17. What is memoization?

Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization

```js
const memoizAddition = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("Fetching from cache");
      return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
    } else {
      console.log("Calculating result");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};
// returned function from memoizAddition
const addition = memoizAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached
```

## 18. What is Hoisting?

Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting

```js
console.log(message); //output : undefined
var message = "The variable Has been hoisted";
```

The above code looks like as below to the interpreter,

```js
var message;
console.log(message);
message = "The variable Has been hoisted";
```

In the same fashion, function declarations are hoisted too

```js
message("Good morning"); //Good morning

function message(name) {
  console.log(name);
}
```

This hoisting makes functions to be safely used in code before they are declared.

## 19. What are classes in ES6?

In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance. For example, the prototype based inheritance written in function expression as below

```js
function Bike(model, color) {
  this.model = model;
  this.color = color;
}

Bike.prototype.getDetails = function () {
  return this.model + " bike has" + this.color + " color";
};
```

Whereas ES6 classes can be defined as an alternative

```js
class Bike {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  getDetails() {
    return this.model + " bike has" + this.color + " color";
  }
}
```

## 20. What are closures?

A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains

1.  Own scope where variables defined between its curly brackets
2.  Outer function’s variables
3.  Global variables

Let's take an example of closure concept,

```js
function Welcome(name) {
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}
var myFunction = Welcome("John");
myFunction("Welcome "); //Output: Welcome John
myFunction("Hello Mr."); //output: Hello Mr.John
```

As per the above code, the inner function(i.e, greetingInfo) has access to the variables in the outer function scope(i.e, Welcome) even after the outer function has returned.

## 21. What are modules?

Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns. Most of the JavaScript modules export an object literal, a function, or a constructor

## 22. Why do you need modules?

Below are the list of benefits using modules in javascript ecosystem

1.  Maintainability
2.  Reusability
3.  Namespacing

## 23. What is scope in javascript?

Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

## 24. What is web storage?

Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally within the user's browser, in a much more intuitive fashion than using cookies. The web storage provides two mechanisms for storing data on the client.

1.  **Local storage:** It stores data for current origin with no expiration date.
2.  **Session storage:** It stores data for one session and the data is lost when the browser tab is closed.

## 25. What is a Cookie?

A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are saved as key/value pairs. For example, you can create a cookie named username as below,

```js
document.cookie = "username=John";
```

## 26. Why do you need a Cookie?

Cookies are used to remember information about the user profile(such as username). It basically involves two steps,

1.  When a user visits a web page, the user profile can be stored in a cookie.
2.  Next time the user visits the page, the cookie remembers the user profile.

## 27. What are the differences between cookie, local storage and session storage?

![](https://i.imgur.com/5adeCGw.png)

## 28. How do you access web storage?

The Window object implements the `WindowLocalStorage` and `WindowSessionStorage` objects which has `localStorage`(window.localStorage) and `sessionStorage`(window.sessionStorage) properties respectively. These properties create an instance of the Storage object, through which data items can be set, retrieved and removed for a specific domain and storage type (session or local). For example, you can read and write on local storage objects as below

```js
localStorage.setItem("logo", document.getElementById("logo").value);
localStorage.getItem("logo");
```

## 29.What are the methods available on session storage?

```js
// Save data to sessionStorage
sessionStorage.setItem("key", "value");

// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
sessionStorage.clear();
```

## 30. What is a promise?

A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

The syntax of Promise creation looks like below,

```js
const promise = new Promise(function (resolve, reject) {
  // promise description
});
```

The usage of a promise would be as below,

```js
const promise = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I'm a Promise!");
    }, 5000);
  },
  (reject) => {}
);

promise.then((value) => console.log(value));
```

The action flow of a promise will be as below,

![](https://i.imgur.com/hWF0YfQ.png)

## 31. Why do you need a promise?

Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

## 32. What are the three states of promise?

Promises have three states:

1.  **Pending:** This is an initial state of the Promise before an operation begins
2.  **Fulfilled:** This state indicates that the specified operation was completed.
3.  **Rejected:** This state indicates that the operation did not complete. In this case an error value will be thrown.

## 33. What is a callback function?

A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. Let's take a simple example of how to use callback function

```js
function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

outerFunction(callbackFunction);
```

## 34. Why do we need callbacks?

The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events. Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message.

```js
function firstFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
  }, 1000);
}
function secondFunction() {
  console.log("Second function called");
}
firstFunction();
secondFunction();

Output;
// Second function called
// First function called
```

As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.

## 35. What is a callback hell?

Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

```js
async1(function(){
    async2(function(){
        async3(function(){
            async4(function(){
                ....
            });
        });
    });
});
```

## 36. What are the main rules of promise?

A promise must follow a specific set of rules,

1.  A promise is an object that supplies a standard-compliant `.then()` method
2.  A pending promise may transition into either fulfilled or rejected state
3.  A fulfilled or rejected promise is settled and it must not transition into any other state.
4.  Once a promise is settled, the value must not change.

## 37. What is promise chaining?

The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result

```js
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });
```

In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,

1.  The initial promise resolves in 1 second,
2.  After that `.then` handler is called by logging the result(1) and then return a promise with the value of result \* 2.
3.  After that the value passed to the next `.then` handler by logging the result(2) and return a promise with result \* 3.
4.  Finally the value passed to the last `.then` handler by logging the result(6) and return a promise with result \* 4.

### 38. What is promise.all?

Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved when all the promises get resolved or any one of them gets rejected. For example, the syntax of promise.all method is below,

```js
Promise.all([Promise1, Promise2, Promise3]) .then(result) => {   console.log(result) }) .catch(error => console.log(`Error in promises ${error}`))
```

**Note:** Remember that the order of the promises(output the result) is maintained as per input order.

## 39. What is a strict mode in javascript

Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This way it prevents certain actions from being taken and throws more exceptions. The literal expression `"use strict";` instructs the browser to use the javascript code in the Strict mode.

Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, it eliminates accidentally creating a global variable by throwing an error and also throws an error for assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object.

## 40. How do you declare strict mode?

The strict mode is declared by adding "use strict"; to the beginning of a script or a function. If declared at the beginning of a script, it has global scope.

```js
"use strict";
x = 3.14; // This will cause an error because x is not declared
```

and if you declare inside a function, it has local scope

```js
x = 3.14; // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14; // This will cause an error
}
```

## 41. What is the difference between null and undefined?

![](https://i.imgur.com/EMqTHG3.png)

## 42. What is the difference between window and document?

![](https://i.imgur.com/gaFljpX.png)

## 43. How do you access history in javascript?

The window.history object contains the browser's history. You can load previous and next URLs in the history using back() and next() methods.

```js
function goBack() {
  window.history.back();
}
function goForward() {
  window.history.forward();
}
```

**Note:** You can also access history without window prefix.

## 44. What are the pros and cons of promises over callbacks?

Below are the list of pros and cons of promises over callbacks,

**Pros:**

1.  It avoids callback hell which is unreadable
2.  Easy to write sequential asynchronous code with .then()
3.  Easy to write parallel asynchronous code with Promise.all()
4.  Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)

**Cons:**

1.  It makes little complex code
2.  You need to load a polyfill if ES6 is not supported

## 45. What is same-origin policy?

The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policy then it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM).

## 46. What is BOM?

The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. It consists of the objects navigator, history, screen, location and document which are children of the window. The Browser Object Model is not standardized and can change based on different browsers.

![](https://i.imgur.com/2Z9i8mQ.png)

## 47. What is the use of setTimeout?

The setTimeout() method is used to call a function or evaluate an expression after a specified number of milliseconds. For example, let's log a message after 2 seconds using setTimeout method

```js
setTimeout(function () {
  console.log("Good morning");
}, 2000);
```

## 48. What is the use of setInterval?

The setInterval() method is used to call a function or evaluate an expression at specified intervals (in milliseconds). For example, let's log a message after 2 seconds using setInterval method

```js
setInterval(function () {
  console.log("Good morning");
}, 2000);
```

## 49. What is an event delegation?

Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

For example, if you wanted to detect field changes in inside a specific form, you can use event delegation technique,

```js
var form = document.querySelector("#registration-form");

// Listen for changes to fields inside the form
form.addEventListener(
  "input",
  function (event) {
    // Log the field that was changed
    console.log(event.target);
  },
  false
);
```

## 50. What is JSON?

JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.

## 51. What are the syntax rules of JSON?

Below are the list of syntax rules of JSON

1.  The data is in name/value pairs
2.  The data is separated by commas
3.  Curly braces hold objects
4.  Square brackets hold arrays

## 52. What is the purpose JSON stringify?

When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.

```js
var userJSON = { name: "John", age: 31 };
var userString = JSON.stringify(userJSON);
console.log(userString); //"{"name":"John","age":31}"
```

## 53. How do you parse JSON string?

When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.

```js
var userString = '{"name":"John","age":31}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "John", age: 31}
```

## 54. Why do you need JSON?

When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

## 55. What are PWAs?

Progressive web applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.

## 56. What is the purpose of clearTimeout method?

The clearTimeout() function is used in javascript to clear the timeout which has been set by setTimeout()function before that. i.e, The return value of setTimeout() function is stored in a variable and it’s passed into the clearTimeout() function to clear the timer.

For example, the below setTimeout method is used to display the message after 3 seconds. This timeout can be cleared by the clearTimeout() method.

```js
<script>
var msg;
function greeting() {
   alert('Good morning');
}
function start() {
  msg =setTimeout(greeting, 3000);

}

function stop() {
    clearTimeout(msg);
}
</script>
```

## 57. What is the purpose of clearInterval method?

The clearInterval() function is used in javascript to clear the interval which has been set by setInterval() function. i.e, The return value returned by setInterval() function is stored in a variable and it’s passed into the clearInterval() function to clear the interval.

For example, the below setInterval method is used to display the message for every 3 seconds. This interval can be cleared by the clearInterval() method.

```js
<script>
var msg;
function greeting() {
   alert('Good morning');
}
function start() {
  msg = setInterval(greeting, 3000);

}

function stop() {
    clearInterval(msg);
}
</script>
```

## 58. How do you redirect new page in javascript?

In vanilla javascript, you can redirect to a new page using the `location` property of window object. The syntax would be as follows,

```js
function redirect() {
  window.location.href = "newPage.html";
}
```

## 59. How do you check whether a string contains a substring?

There are 3 possible ways to check whether a string contains a substring or not,

- **Using includes:** ES6 provided `String.prototype.includes` method to test a string contains a substring

```js
var mainString = "hello",
  subString = "hell";
mainString.includes(subString);
```

- **Using indexOf:** In an ES5 or older environment, you can use `String.prototype.indexOf` which returns the index of a substring. If the index value is not equal to -1 then it means the substring exists in the main string.

```js
var mainString = "hello",
  subString = "hell";
mainString.indexOf(subString) !== -1;
```

- **Using RegEx:** The advanced solution is using Regular expression's test method(`RegExp.test`), which allows for testing for against regular expressions

```js
var mainString = "hello",
  regex = /hell/;
regex.test(mainString);
```

## 60. How do you validate an email in javascript?

You can validate an email in javascript using regular expressions. It is recommended to do validations on the server side instead of the client side. Because the javascript can be disabled on the client side.

```js
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
```

## 61. What is a polyfill?

A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it. For example, Silverlight plugin polyfill can be used to mimic the functionality of an HTML Canvas element on Microsoft Internet Explorer 7.

## 62. What are break and continue statements?

The break statement is used to "jump out" of a loop. i.e, It breaks the loop and continues executing the code after the loop.

```js
for (i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  text += "Number: " + i + "<br>";
}
```

The continue statement is used to "jump over" one iteration in the loop. i.e, It breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

```js
for (i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  text += "Number: " + i + "<br>";
}
```

## 63. What is nodejs?

Node.js is a server-side platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. It is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.

## 64. What is an event loop?

The Event Loop is a queue of callback functions. When an async function executes, the callback function is pushed into the queue. The JavaScript engine doesn't start processing the event loop until the async function has finished executing the code. **Note:** It allows Node.js to perform non-blocking I/O operations even though JavaScript is single-threaded.

## 65. What is call stack?

Call Stack is a data structure for javascript interpreters to keep track of function calls(creates execution context) in the program. It has two major actions,

1.  Whenever you call a function for its execution, you are pushing it to the stack.
2.  Whenever the execution is completed, the function is popped out of the stack.

Let's take an example and it's state representation in a diagram format

```js
function hungry() {
  eatFruits();
}
function eatFruits() {
  return "I'm eating fruits";
}

// Invoke the `hungry` function
hungry();
```

The above code processed in a call stack as below,

1.  Add the `hungry()` function to the call stack list and execute the code.
2.  Add the `eatFruits()` function to the call stack list and execute the code.
3.  Delete the `eatFruits()` function from our call stack list.
4.  Delete the `hungry()` function from the call stack list since there are no items anymore.

![](https://i.imgur.com/AmoKq3c.png)

## 66. What is an event queue?

The event queue follows the queue data structure. It stores async callbacks to be added to the call stack. It is also known as the Callback Queue or Macrotask Queue.

Whenever the call stack receives an async function, it is moved into the Web API. Based on the function, Web API executes it and awaits the result. Once it is finished, it moves the callback into the event queue (the callback of the promise is moved into the microtask queue).

The event queue constantly checks whether or not the call stack is empty. Once the call stack is empty and there is a callback in the event queue, the event queue moves the callback into the call stack. If there is a callback in the microtask queue as well, it is moved first. The microtask queue has a higher priority than the event queue.

## 67. List down some of the features of ES6

Below are the list of some new features of ES6,

1.  Support for constants or immutable variables
2.  Block-scope support for variables, constants and functions
3.  Arrow functions
4.  Default parameters
5.  Rest and Spread Parameters
6.  Template Literals
7.  Multi-line Strings
8.  Destructuring Assignment
9.  Enhanced Object Literals
10. Promises
11. Classes
12. Modules

## 68. What is ES6?

ES6 is the sixth edition of the javascript language and it was released in June 2015. It was initially known as ECMAScript 6 (ES6) and later renamed to ECMAScript 2015. Almost all the modern browsers support ES6 but for the old browsers there are many transpilers, like Babel.js etc.

## 69. What are default parameters?

In E5, we need to depend on logical OR operators to handle default values of function parameters. Whereas in ES6, Default function parameters feature allows parameters to be initialized with default values if no value or undefined is passed. Let's compare the behavior with an examples,

```js
//ES5
var calculateArea = function (height, width) {
  height = height || 50;
  width = width || 60;

  return width * height;
};
console.log(calculateArea()); //300
```

The default parameters makes the initialization more simpler,

```js
//ES6
var calculateArea = function (height = 50, width = 60) {
  return width * height;
};

console.log(calculateArea()); //300
```

## 70. What are template literals?

Template literals or template strings are string literals allowing embedded expressions. These are enclosed by the back-tick, character instead of double or single quotes. In E6, this feature enables using dynamic expressions as below,

```js
var greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`;
```

In ES5, you need break string like below,

```js
var greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName.`
```

**Note:** You can use multi-line strings and string interpolation features with template literals.

## 71. What is destructuring assignment?

The destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables. Let's get the month values from an array using destructuring assignment

```js
var [one, two, three] = ["JAN", "FEB", "MARCH"];

console.log(one); // "JAN"
console.log(two); // "FEB"
console.log(three); // "MARCH"
```

and you can get user properties of an object using destructuring assignment,

```js
var { name, age } = { name: "John", age: 32 };

console.log(name); // John
console.log(age); // 32
```

## 72. What are default values in destructuring assignment?

A variable can be assigned a default value when the value unpacked from the array or object is undefined during destructuring assignment. It helps to avoid setting default values separately for each assignment. Let's take an example for both arrays and object use cases,

**Arrays destructuring:**

```js
var x, y, z;

[x = 2, y = 4, z = 6] = [10];
console.log(x); // 10
console.log(y); // 4
console.log(z); // 6
```

**Objects destructuring:**

```js
var { x = 2, y = 4, z = 6 } = { x: 10 };

console.log(x); // 10
console.log(y); // 4
console.log(z); // 6
```

## 73. What are enhanced object literals?

Object literals make it easy to quickly create objects with properties inside the curly braces. For example, it provides shorter syntax for common object property definition as below.

```js
//ES6
var x = 10,
  y = 20;
obj = { x, y };
console.log(obj); // {x: 10, y:20}
//ES5
var x = 10,
  y = 20;
obj = { x: x, y: y };
console.log(obj); // {x: 10, y:20}
```

## 74. What are dynamic imports?

The dynamic imports using `import()` function syntax allows us to load modules on demand by using promises or the async/await syntax. Currently this feature is in [stage4 proposal](https://github.com/tc39/proposal-dynamic-import). The main advantage of dynamic imports is reduction of our bundle's sizes, the size/payload response of our requests and overall improvements in the user experience. The syntax of dynamic imports would be as below,

```js
import("./Module").then((Module) => Module.method());
```

## 75. What are the use cases for dynamic imports?

Below are some of the use cases of using dynamic imports over static imports,

- Import a module on-demand or conditionally. For example, if you want to load a polyfill on legacy browser

```js
if (isLegacyBrowser()) {
    import(···)
    .then(···);
}
```

- Compute the module specifier at runtime. For example, you can use it for internationalization.

```js
import(`messages_${getLocale()}.js`).then(···);
```

Import a module from within a regular script instead a module.

## 76. What are the advantages of module loaders?

The module loaders provides the below features,

1.  Dynamic loading
2.  State isolation
3.  Global namespace isolation
4.  Compilation hooks
5.  Nested virtualization

## 77. What is destructuring aliases?

Sometimes you would like to have a destructured variable with a different name than the property name. In that case, you'll use a `: newName` to specify a name for the variable. This process is called destructuring aliases.

```js
const obj = { x: 1 };
// Grabs obj.x as as { otherName }
const { x: otherName } = obj;
```

## 78. What is AJAX?

AJAX stands for Asynchronous JavaScript and XML and it is a group of related technologies(HTML, CSS, JavaScript, XMLHttpRequest API etc) used to display data asynchronously. i.e. We can send data to the server and get data from the server without reloading the web page.

## 79. What are the different ways to deal with Asynchronous Code?

Below are the list of different ways to deal with Asynchronous code.

1.  Callbacks
2.  Promises
3.  Async/await
4.  Third-party libraries such as async.js,bluebird etc

## 80. What is microtask?

Microtask is the javascript code which needs to be executed immediately after the currently executing task/microtask is completed. They are kind of blocking in nature. i.e, The main thread will be blocked until the microtask queue is empty. The main sources of microtasks are Promise.resolve, Promise.reject, MutationObservers, IntersectionObservers etc

**Note:** All of these microtasks are processed in the same turn of the event loop.

## 81. What is a microTask queue?

Microtask Queue is the new queue where all the tasks initiated by promise objects get processed before the callback queue. The microtasks queue are processed before the next rendering and painting jobs. But if these microtasks are running for a long time then it leads to visual degradation.

## 82. What is heap?

Heap(Or memory heap) is the memory location where objects are stored when we define variables. i.e, This is the place where all the memory allocations and de-allocation take place. Both heap and call-stack are two containers of JS runtime. Whenever runtime comes across variables and function declarations in the code it stores them in the Heap.

## 83. What is babel?

Babel is a JavaScript transpiler to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Some of the main features are listed below,

1.  Transform syntax
2.  Polyfill features that are missing in your target environment (using @babel/polyfill)
3.  Source code transformations (or codemods)

## 84. Is Node.js completely single threaded?

Node is a single thread, but some of the functions included in the Node.js standard library(e.g, fs module functions) are not single threaded. i.e, Their logic runs outside of the Node.js single thread to improve the speed and performance of a program.

## 85. What is an async function?

An async function is a function declared with the `async` keyword which enables asynchronous, promise-based behavior to be written in a cleaner style by avoiding promise chains. These functions can contain zero or more `await` expressions.

Let's take a below async function example

```js
async function logger() {
  let data = await fetch("http://someapi.com/users"); // pause until fetch returns
  console.log(data);
}
logger();
```

It is basically syntax sugar over ES2015 promises and generators.

## 86. What is global execution context?

The global execution context is the default or first execution context that is created by the JavaScript engine before any code is executed(i.e, when the file first loads in the browser). All the global code that is not inside a function or object will be executed inside this global execution context. Since JS engine is single threaded there will be only one global environment and there will be only one global execution context.

For example, the below code other than code inside any function or object is executed inside the global execution context.

```js
var x = 10;

function A() {
  console.log("Start function A");

  function B() {
    console.log("In function B");
  }

  B();
}

A();

console.log("GlobalContext");
```

## 87. What is function execution context?

Whenever a function is invoked, the JavaScript engine creates a different type of Execution Context known as a Function Execution Context (FEC) within the Global Execution Context (GEC) to evaluate and execute the code within that function.

## 88. What is debouncing?

Debouncing is a programming pattern that allows delaying execution of some piece of code until a specified time to avoid unnecessary _CPU cycles, API calls and improve performance_. The debounce function make sure that your code is only triggered once per user input. The common usecases are Search box suggestions, text-field auto-saves, and eliminating double-button clicks.

Let's say you want to show suggestions for a search query, but only after a visitor has finished typing it. So here you write a debounce function where the user keeps writing the characters with in 500ms then previous timer cleared out using `clearTimeout` and reschedule API call/DB query for a new time—300 ms in the future.

```js
function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function fetchResults() {
  console.log("Fetching input suggestions");
}
const processChange = debounce(() => fetchResults());
```

The _debounce()_ function can be used on input, button and window events

**Input:**

```js
<input type="text" onkeyup="processChange()" />
```

**Button:**

```js
<button onclick="processChange()">Click me</button>
```

**Windows event:**

```js
window.addEventListener("scroll", processChange);
```

## 89. What is throttling?

Throttling is a technique used to limit the execution of an event handler function, even when this event triggers continuously due to user actions. The common use cases are browser resizing, window scrolling etc.

The below example creates a throttle function to reduce the number of events for each pixel change and trigger scroll event for each 100ms except for the first event.

```js
const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};
window.addEventListener("scroll", () => {
  throttle(handleScrollAnimation, 100);
});
```

## 90. What is optional chaining?

According to MDN official docs, the optional chaining operator (?.) permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid.

The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

```js
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
```
