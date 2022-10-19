const hre = require("hardhat");
require('dotenv').config();

async function main() {
  const Ppnft = await hre.ethers.getContractFactory("PersonaPanda");
  const ppnft = await Ppnft.deploy();

  await ppnft.deployed();

  console.log("NFT Deployed to:", ppnft.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
