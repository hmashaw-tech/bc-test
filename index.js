/**
 * 
 */

const Block = require('./src/Block')
const Blockchain = require('./src/Blockchain')

let demoBlockchain = new Blockchain()

console.log('Mining block #1...')
demoBlockchain.addBlock(new Block(1, 'X', { amount: 100 }))

console.log('Mining block #2...')
demoBlockchain.addBlock(new Block(2, 'X', { amount: 500 }))

console.log(`Is the current blockchain valid? ${demoBlockchain.isChainValid()}`)

console.log(JSON.stringify(demoBlockchain, null, 4))

let dt = new Date()
let utcDate = dt.toUTCString()
console.log(utcDate)

