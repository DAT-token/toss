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
      gasPrice: 1000000,
      ignition: {
	// maxFeePerGasLimit: 80_000n, // 0.5 gwei
        maxPriorityFeePerGas: 20_000_000n, // 0.2 gwei
      }
    }
  },
  solidity: "0.8.24",
};
