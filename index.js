
const readline = require('readline')
const bin2dec = require('./src/bin2dec.js')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Please input a binary number: ', (binary) => {
    const decimal = bin2dec.parse(binary)
    console.log(`Converted to decimal: ${decimal}`)
    rl.close();
});

