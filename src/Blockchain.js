/**
 * 
 */

const Block = require('../src/Block')

class Blockchain {
    constructor() {
        this.difficulty = 3
        this.blockchain = [this.giveMeTheGenesisDevice()]
    }

    giveMeTheGenesisDevice() {
        let genesisBlock = new Block(0, '01/01/1968', 'Genesis Block', '0000')
        genesisBlock.mineMe(this.difficulty)
        return genesisBlock
    }


    getLastBlock() {
        return this.blockchain[this.blockchain.length - 1]
    }


    addBlock(newBlock) {
        // Set pbHash to be the last block on the chain
        newBlock.pbHash = this.getLastBlock().hash

        // Block has been changed so recalculate it's hash value
        // Refactoring to add mining
        // newBlock.hash = newBlock.hashMe()
        newBlock.mineMe(this.difficulty)

        // Add new block to chain
        this.blockchain.push(newBlock)
    }

    isChainValid(){
        for (let i = 1; i < this.blockchain.length; i++  ) {
            const currentBlock = this.blockchain[i]
            const previousBlock = this.blockchain[i - 1]

            // Is the hash of the current block still valid?
            if (currentBlock.hash !== currentBlock.hashMe()) {
                return false
            }

            // Is the current block's pbHash value equal to the hash of the
            // previous block?
            if (currentBlock.pbHash !== previousBlock.hash) {
                return false
            }

            return true
        }
    }
}

module.exports = Blockchain
