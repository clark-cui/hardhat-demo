const {
  ethers,
  network
} = require("hardhat");
const Addr = require("../abi/Counter.json");
async function main() {
  const [deployer] = await ethers.getSigners();
  let counter = await ethers.getContractAt("Counter", Addr.address, deployer);
  let newValue = await counter.counter();
  console.log("value is:", newValue);
}