const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DAT", (m) => {
  const DAT = m.contract("DAT");

  return { DAT };
});
