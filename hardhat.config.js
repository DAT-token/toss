/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-ignition-ethers");
module.exports = {
 defaultNetwork: "debank",
  networks: {
    hardhat: {
    },
    debank: {
      url: "https://sepolia-rpc.testnet.debank.com",
      chaindId: "20240324",
      accounts: [vars.get("DBK_PRIV_KEY")]
    }
  },
  solidity: "0.8.24",
};
