require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
    gasReporter: {
      enabled: true,
      outputFile: 'gas-rpt.txt',
      currency: 'USD',
      coinmarketcap: '6496bd44-13ca-4c8d-991e-ccbd1056f381',
      noColors: true,
  }
};