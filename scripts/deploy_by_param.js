const {ethers,network,artifacts} = require("hardhat");
const {writeAbiAddr}=require("./artifact_saver.js");

const params=process.argv;
const value=params[2];
console.log("Counter deploy with value:",value);
async function main() {
  //await hre.run('compile');
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy(value);

  await counter.deployed();
  console.log("Counter deployed to:", counter.address);

  // let Artifact =await artifacts.readArtifact("Counter");

}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

