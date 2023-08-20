const { getContractFactory } = require("@nomicfoundation/hardhat-ethers/types");
const { expect } = require("chai");

describe("GasTest Contract", function () {
<<<<<<< HEAD
  it("Gathering gas numbers", async function () {
=======
  
  it("Gathering gas numbers inc1", async function () {
>>>>>>> 0354887 (fix 2)
    const [owner, acct1 ] = await ethers.getSigners();
    const factory = await ethers.getContractFactory("GasTest");
    const gasContract = await factory.deploy();

    let gas1 = await gasContract.inc1(10).gasPrice;
<<<<<<< HEAD
    let gas2 = await gasContract.inc2(10).gasPrice;
    let gas3 = await gasContract.inc1(2).gasPrice;
    let gas4 = await gasContract.inc2(2).gasPrice;
    let gas5 = await gasContract.inc1(200).gasPrice;
=======
    let gas3 = await gasContract.inc1(2).gasPrice;
    let gas5 = await gasContract.inc1(200).gasPrice;
  });

  it("Gathering gas numbers inc2", async function () {
    const [owner, acct1 ] = await ethers.getSigners();
    const factory = await ethers.getContractFactory("GasTest");
    const gasContract = await factory.deploy();

    let gas2 = await gasContract.inc2(10).gasPrice;
    let gas4 = await gasContract.inc2(2).gasPrice;
>>>>>>> 0354887 (fix 2)
    let gas6 = await gasContract.inc2(200).gasPrice;
  });

  
});