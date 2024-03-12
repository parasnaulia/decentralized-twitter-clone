require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const { Network, Alchemy } = require("alchemy-sdk");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: {
    version: "0.8.19", // Use the version that matches your contracts
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    Sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_SEPOLIA_URL}`,
      accounts: [`${process.env.ACCOUNT_PRIVATE_KEY}`],
    },
  },
  // ... other configurations
};
