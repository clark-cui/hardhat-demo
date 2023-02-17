const hre = require("hardhat");
async function main() {
  //await hre.run('compile');
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy(0);

  await counter.deployed();
  console.log("Counter deployed to:", counter.address);
  saveFrontendFiles(counter);
}

function saveFrontendFiles(counter) {
  const fs = require("fs");
  const contractsDir = "./data";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({
      Counter: counter.address
    }, undefined, 2)
  );

  const CounterArtifact = artifacts.readArtifactSync("Counter");

  fs.writeFileSync(
    contractsDir + "/Counter.json",
    JSON.stringify(CounterArtifact, null, 2)
  );
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });