require("@nomicslabs/hardhat-waffle");

require("@nomicslabs/hardhat-etherscan");

const {
  PRIVATE_KEY,
  POLYGON_API_KEY
} = require("./secrets.json")

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  etherscan: {
    apiKey: {
      polygon: POLYGON_API_KEY
    },
  },
  defaultNetwork: "polygon",
  networks: {
    
    polygon: {
      url: 'https://polygon-rpc.com/',
      chainId: 137,
      accounts: [PRIVATE_KEY],
      gasPrice: 100000000000
    }
   
  },
};

