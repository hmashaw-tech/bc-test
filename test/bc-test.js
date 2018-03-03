/**
 * 
 */

const assert = require('assert')

const Block = require('../src/Block')
const Blockchain = require('../src/Blockchain')

describe('The Blockchain Tester ...', () => {
    it('-- can create a new blockchain', (done) => {
        let demoBlockchain = new Blockchain()
        assert(demoBlockchain.blockchain.length === 1)
        assert(demoBlockchain.blockchain[0].data === 'Genesis Block')
        done()
    })


    it('-- can add a new block to existing blockchain', (done) => {
        let demoBlockchain = new Blockchain()
        demoBlockchain.addBlock(new Block(1, '1/1/1970', { amount: 100 }))
        assert(demoBlockchain.blockchain.length === 2)
        assert(demoBlockchain.blockchain[1].data.amount === 100)
        done()
    })


    it('-- can detect a blockchain amount modification', (done) => {
        let demoBlockchain = new Blockchain()
        demoBlockchain.addBlock(new Block(1, '1/1/1970', { amount: 100 }))
        demoBlockchain.blockchain[1].data = { amount: 200 }
        assert(demoBlockchain.isChainValid() === false)
        done()
    })


    it('-- can detect a blockchain amount+hash modification', (done) => {
        let demoBlockchain = new Blockchain()
        demoBlockchain.addBlock(new Block(1, '1/1/1970', { amount: 100 }))
        demoBlockchain.addBlock(new Block(2, '1/1/1971', { amount: 200 }))
        demoBlockchain.blockchain[1].data = { amount: 200 }
        demoBlockchain.blockchain[1].hashMe()
        assert(demoBlockchain.isChainValid() === false)
        done()
    })


    it('-- utilizes Proof of Work - blocks have 0*difficulty prefix', (done) => {
        let demoBlockchain = new Blockchain()
        demoBlockchain.addBlock(new Block(1, '1/1/1970', { amount: 100 }))
        assert(demoBlockchain.blockchain[1].hash.indexOf('000') !== -1)
        done()
    }).timeout(4000)
})

