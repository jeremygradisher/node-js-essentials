# Node.js Essentials

Just a little place to build and run through some exercises.

Cheatsheet: https://www.codecademy.com/learn/learn-nodejs-fundamentals/modules/node-js-fundamentals-essentials/cheatsheet

## and now we build!

The events Module - Node.js has an EventEmitter class which can be accessed by importing the events core module 
by using the require() statement.

User Input/Output - Input is data that is given to the computer, while output is any data or feedback that 
a computer provides. In Node, we can get input from a user using the stdin.on() method on the process 
object. We are able to use this because .on() is an instance of EventEmitter.

The Error Module - The asynchronous operations involving the Node.js APIs assume that the 
provided callback functions should have an error passed as the first parameter.

The Buffer Module - In Node.js, the Buffer module is used to handle binary data.

The fs Module - The filesystem controls how data on a computer is stored and retrieved. 
Node.js provides the fs core module, which allows interaction with the filesystem.

Readable/Writable Streams - 
In most cases, data isn’t processed all at once but rather piece by piece. 
This is what we call streams. Streaming data is preferred as it doesn’t require 
tons of RAM and doesn’t need to have all the data on hand to begin processing it.

The Timers Module - 
There are times when we want some of our code to be executed at a specified point in time. 
This is what the timers module is used for. Like the Buffer module, it is not necessary 
to use the require() import statement as the methods of the timer module are global.


Blocking code runs synchronously and non-blocking code, such as timer functions, runs asynchronously.

Core modules are provided to developers to perform common tasks efficiently. 
Core modules are used by passing a string with the module’s name into the require() statement.

We can make our own instances of the EventEmitter class, and we can 
subscribe to listen for named events with the .on() method and emit events with the .emit() method.

Node allows for both output, data/feedback to a user-provided by a computer, 
and input data/feedback to the computer provided by the user. To handle errors 
during asynchronous operations, provided callback functions are expected to have an error as their first parameter.

The buffer module provides global Buffer objects used to represent a fixed 
amount of memory that can’t be resized.

The timer module provides functions that allow developers to execute callbacks at a specified point of time in the future.

The Node fs core module is an API for interacting with the file system.

Streams allow us to read or write data piece by piece instead of all at once.

