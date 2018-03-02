/**
 * 
 */

const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(index,          // Optional - Where the block sits on the chain
                timestamp,      // When the block was created
                data,           // Well, data
                pbHash=''){     // Hash of block before this block
        
        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.pbHash = pbHash
        this.hash = this.hashMe()
    }

    hashMe(){
        return SHA256(this.index + this.timestamp + this.pbHash + JSON.stringify(this.data)).toString()
    }
}

module.exports = Block
