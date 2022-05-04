const fs = require('fs');
const abiFile = JSON.parse(fs.readFileSync('./abi/Counter.json'))
const Web3 = require("web3");
// 创建web3对象
const web3 = new Web3();
// 连接到以太坊节点
web3.setProvider(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

const abi = abiFile
// 合约地址
const address = "0xb2cdd356e58280906ce53e1665697b50f88aac56";
// 通过ABI和地址获取已部署的合约对象
const counter = web3.eth.contract(abi).at(address);
const balance = counter.getBalance;
console.log(" balance: ", balance);