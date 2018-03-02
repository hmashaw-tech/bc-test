/**
 * 
 */

const Block = require('./src/Block')
const Blockchain = require('./src/Blockchain')

let demoBlockchain = new Blockchain()

demoBlockchain.addBlock(new Block(1, '1/1/1970', { amount: 100 }))
demoBlockchain.addBlock(new Block(2, '1/1/1971', { amount: 500 }))

console.log(`Is the current blockchain valid? ${demoBlockchain.isChainValid()}`)

console.log(JSON.stringify(demoBlockchain, null, 4))

