const {
  ethers
} = require("hardhat")
const CounterArtifact = require("../data/Counter.json")
const contractAddress = require("../data/contract-address.json");

// init
const provider = new ethers.providers.Web3Provider(window.ethereum);

// Then, we initialize the contract using that provider and the token's
// artifact. You can do this same thing with your contracts.
const counter = new ethers.Contract(
  contractAddress.Counter,
  CounterArtifact.abi,
  provider.getSigner(0)
);

console.log("counter值是：", counter.counter())

await counter.count();
console.log("counter值是：", counter.counter())