const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("Counter", function () {
  it("counter should be 0 when init and be added 1 after count be called", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counterInstance = await Counter.deploy();
    await counterInstance.deployed();
    expect(await counterInstance.counter()).to.equal(0);

    const setCountTx = await counterInstance.count();

    // wait until the transaction is mined
    await setCountTx.wait();

    expect(await counterInstance.counter()).to.equal(1);

  });
});