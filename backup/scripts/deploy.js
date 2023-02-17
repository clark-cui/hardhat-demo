const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account: ' + deployer.address);

  // Deploy Greeter
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");


  // Deploy Counter
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy(0);
  
  // console.log
	console.log("Greeter deployed to:", greeter.address);
  console.log("Counter deployed to:", counter.address);

}

main()
    .then(() => process.exit())
    .catch(error => {
        console.error(error);
        process.exit(1);
})