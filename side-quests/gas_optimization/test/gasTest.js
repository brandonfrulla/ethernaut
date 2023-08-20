const { getContractFactory } = require("@nomicfoundation/hardhat-ethers/types");
const { expect } = require("chai");

describe("GasTest Contract", function () {
  
  it("Gathering gas numbers inc1", async function () {
    const [owner, acct1 ] = await ethers.getSigners();
    const factory = await ethers.getContractFactory("GasTest");
    const gasContract = await factory.deploy();

    let gas1 = await gasContract.inc1(10).gasPrice;
    let gas3 = await gasContract.inc1(2).gasPrice;
    let gas5 = await gasContract.inc1(200).gasPrice;
  });

  it("Gathering gas numbers inc2", async function () {
    const [owner, acct1 ] = await ethers.getSigners();
    const factory = await ethers.getContractFactory("GasTest");
    const gasContract = await factory.deploy();

    let gas2 = await gasContract.inc2(10).gasPrice;
    let gas4 = await gasContract.inc2(2).gasPrice;
    let gas6 = await gasContract.inc2(200).gasPrice;
  });

  
});