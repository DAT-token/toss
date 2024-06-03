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
      accounts: [vars.get("DBK_PRIV_KEY")],
      ignition: {
	maxFeePerGasLimit: 50_000_000_000n, // 50 gwei
        maxPriorityFeePerGas: 2_000_000_000n, // 2 gwei
      }
    }
  },
  solidity: "0.8.24",
};
