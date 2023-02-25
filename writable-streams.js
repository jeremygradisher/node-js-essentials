const readline = require('readline');
const fs = require('fs');

/**
 * 
 * 
 * */

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});

/**
 * We want to write to a file named shoppingResults.txt. 
 * Create a variable fileStream and assign as its value the writable stream.
 * 
 * */

const fileStream = fs.createWriteStream('shoppingResults.txt');

/**
 * Let’s create a listener callback function to use in the next step. 
 * Name this function transformData. transformData should expect to 
 * receive some data (we named our parameter line) and it should write() 
 * to the writable stream (fileStream) in the format They were out of: 
 * [line]\n, where [line] is the argument passed into the function.
 * 
 * */

let transformData = (line) => {
 fileStream.write(`They were out of: ${line}\n`); 
}

/**
 * Let’s assign our transformData function to execute whenever a 'line' 
 * event is emitted on the myInterface stream.
 * 
 * */

myInterface.on('line', transformData);


/**
 * Type node app.js in the terminal and press enter. If everything worked, 
 * you should be able to open the shoppingResults.txt file and see that it has the correct contents.
 * 
 * */