/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-ignition-ethers");
module.exports = {
 defaultNetwork: "debank",
  networks: {
    hardhat: {
    },
    debank: {
      url: "https://rpc.mainnet.dbkchain.io",
      chaindId: "20240603",
      accounts: [vars.get("DBK_PRIV_KEY")],
      gasPrice: 50000000000,
      ignition: {
	maxFeePerGasLimit: 50_000_000_000n, // 50 gwei
        maxPriorityFeePerGas: 2_000_000_000n, // 2 gwei
      }
    }
  },
  solidity: "0.8.24",
};
