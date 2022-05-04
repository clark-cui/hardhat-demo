const {
  ethers
} = require("hardhat")
const CounterArtifact = require("../data/Counter.json")
const contractAddress = require("../data/contract-address.json");

(async () => {
  // init
  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/');

  // Then, we initialize the contract using that provider and the token's
  // artifact. You can do this same thing with your contracts.
  const counter = new ethers.Contract(
    contractAddress.Counter,
    CounterArtifact.abi,
    provider.getSigner(0)
  );

  console.log("counter值是：",await counter.counter())

  await counter.count();
  console.log("counter值是：",await counter.counter())

})()