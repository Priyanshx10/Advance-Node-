/*
How node js is different from vanilla js ?
    1.)Node js runs on Server - not in browser
    2.)Runs in Terminal
    3.)It has global Object instead of window object
    4.) Common Core Modules that we will explore
    5.)Common Js Modules instead ES6 modules
*/

console.log("Hello Nodejs")

//Global Objects
console.log(global);

//File is a Commonjs module
const os = require('os')

//define OS type version and home directory
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

//Show the current dir and FileName
console.log(__dirname)
console.log(__filename)

const path = require("path")
console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))