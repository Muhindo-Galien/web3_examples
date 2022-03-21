   
const Web3 = require('web3')
const rpcURL = '' // Your RCkP URL goes here 
// from infura
const web3 = new Web3(rpcURL)
const address = '' // Your account address goes here
// from etherscan
web3.eth.getBalance(address, (err, wei) => { balance = web3.utils.fromWei(wei, 'ether') })