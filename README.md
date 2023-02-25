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




