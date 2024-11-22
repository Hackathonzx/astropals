require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();

const { LISK_URL, PRIVATE_KEY } = process.env


module.exports = {
  solidity: "0.8.1",
  networks: {
    LiskSepolia: {
      url: process.env.LISK_URL,
      chainId: 4202,
      accounts: [process.env.PRIVATE_KEY],
   },
  },

  sourcify: {
    enabled: false
  },

  etherscan: {
    apiKey: {
      "lisk-sepolia": "123"
    },
    customChains: [
      {
          network: "lisk-sepolia",
          chainId: 4202,
          urls: {
              apiURL: "https://sepolia-blockscout.lisk.com/api",
              browserURL: "https://sepolia-blockscout.lisk.com"
          }
      }
    ]
  },
}   