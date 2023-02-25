// Allocate buffer of size 15 filled with 'b'
const bufferAlloc = Buffer.alloc(15, 'b');
console.log(bufferAlloc.toString());

// Create buffer1 with 'hello' and buffer2 with 'world'
const buffer1 = Buffer.from('hello');
const buffer2 = Buffer.from('world');

  
// Combine buffer1 and buffer2
const bufferArray = [buffer1, buffer2];
const bufferConcat = Buffer.concat(bufferArray);


// Translate buffer to string
const bufferString = bufferConcat.toString();
console.log(bufferString);

/**
 * Remember that you can run buffer.js by running the command: node buffer.js
 */

// Uncomment the appropriate `console.log()` to ouput to console
//console.log(bufferAlloc);
//console.log('Buffer 1:', buffer1, 'Buffer 2:', buffer2)
//console.log(bufferConcat);
//console.log(bufferString);