const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/hqRzEqFKv6IsjRxfVUWH')



// get latest block number

web3.eth.getBlockNumber().then(console.log);

// // get latest block
web3.eth.getBlock('latest').then(console.log)

// get latest 10 blocks
web3.eth.getBlockNumber().then((latest) => {
  for (let i = 0; i < 3; i++) {
    web3.eth.getBlock(latest - i).then((block)=>{
        console.log(block.hash)
    })
  }
})

// get transaction from specific block
const hash = '0xc44a1f202f940047d8097f8f8212483d7fe414c17510e12638d11687b34c6e83'
web3.eth.getTransactionFromBlock(hash, 2).then(console.log)