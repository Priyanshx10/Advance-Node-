/*

How Node.js is different from vanilla JS?

1.) Node.js runs on the server - not in the browser.
    - Node.js is designed to execute JavaScript code outside a web browser. 
    - It is commonly used for backend development to create server-side applications.

2.) Runs in the terminal
    - Node.js applications are executed from the command line interface (CLI) or terminal, 
      rather than being rendered in a web browser.

3.) It has a global object instead of a window object
    - In Node.js, the global object is `global`, whereas in browser-based JavaScript, it is `window`.
    - The global object provides access to built-in modules and functions.

4.) Common Core Modules that we will explore
    - Node.js has several built-in core modules like `fs`, `http`, `path`, etc., 
      which provide essential functionalities for file system operations, handling HTTP requests, and more.

5.) CommonJS modules instead of ES6 modules
    - Node.js uses CommonJS module syntax (`require` and `module.exports`), whereas ES6 modules use `import` and `export`.
    - CommonJS is synchronous and is designed for server-side applications, 
      while ES6 modules can be both synchronous and asynchronous and are designed to work in the browser.

6.) Missing some APIs like the fetch API
    - Some browser-specific APIs, like the `fetch` API used for making HTTP requests, are not available in Node.js.
    - Instead, you can use Node.js modules like `http`, `https`, or third-party libraries like `axios` for HTTP requests.

*/

console.log("Hello Node.js")

// Global Objects
// The global object in Node.js is `global`. It provides access to various built-in functions and modules.
console.log(global);

// File is a CommonJS module
// Importing built-in modules using `require` and custom modules like `math` and `Boadmas`.
const os = require('os');  // Importing the built-in 'os' module
const path = require('path');  // Importing the built-in 'path' module
const math = require('./math');  // Importing custom 'math' module
const { divide } = require('./math');  // Destructuring to import the 'divide' function from 'math' module
const { bodmas } = require('./Boadmas');  // Destructuring to import the 'bodmas' function from 'Boadmas' module

// Using functions from the imported modules
console.log(math.add(2, 3));  // Calling the 'add' method from 'math' module
console.log(divide(3, 3));  // Calling the 'divide' function
console.log(bodmas(2, 3, 3));  // Calling the 'bodmas' function

// Define OS type, version, and home directory
// Using methods from the 'os' module to get system information
console.log(os.type());  // Returns the operating system name
console.log(os.version());  // Returns the operating system version
console.log(os.homedir());  // Returns the home directory of the current user

// Show the current directory and filename
// These are global variables available in Node.js
console.log(__dirname);  // Returns the directory name of the current module
console.log(__filename);  // Returns the filename of the current module

// Using methods from the 'path' module
console.log(path.basename(__filename));  // Returns the last portion of the path (filename)
console.log(path.dirname(__filename));  // Returns the directory name of the path
console.log(path.extname(__filename));  // Returns the extension of the path

// Parse method
// Using the `parse` method from the 'path' module to get an object with details about the path
console.log(path.parse(__filename));  // Returns an object with root, dir, base, ext, name properties
