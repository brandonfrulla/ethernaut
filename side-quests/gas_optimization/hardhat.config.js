require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
    gasReporter: {
      enabled: true,
      outputFile: 'gas-rpt.txt',
      currency: 'USD',
      coinmarketcap: 'replace-w-CMC-api-key',
      noColors: true,
  }
};