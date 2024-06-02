const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Toss", (m) => {
  const toss = m.contract("Toss");

  return { toss };
});
