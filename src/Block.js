/**
 * 
 */

const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(index,          // Optional - Where the block sits on the chain
                timestamp,      // When the block was created
                data,           // Well, data
                pbHash=''){     // Hash of block before this block
        
        if (timestamp === 'X') {
            let dt = new Date()
            let utcDate = dt.toUTCString()
            timestamp = utcDate
        }

        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.pbHash = pbHash
        this.hash = this.hashMe()
        this.nonce = 0          // Just a value used to aid hash creation when mining
    }

    hashMe(){
        return SHA256(this.index + this.timestamp + this.pbHash + this.nonce + JSON.stringify(this.data)).toString()
    }

    mineMe(difficulty){
        // We need a string of 0s that is length = difficulty
        const difficultyString = Array(difficulty + 1).join('0')

        // While the block's hash does not start with the difficulty string ...
        while(this.hash.substr(0, difficulty) !== difficultyString) {
            this.nonce++
            this.hash = this.hashMe()
        }
        // console.log(`Block mined: ${this.hash} -- Nonce: ${this.nonce}`)
    }
}

module.exports = Block
