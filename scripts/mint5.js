const hre = require("hardhat");
require('dotenv').config();

async function main() {

    const [owner] = await ethers.getSigners();
    const Ppnft = await hre.ethers.getContractFactory("PersonaPanda");
    const ppnft = await Ppnft.attach(process.env.GOERLI_NFT);

    await ppnft.deployed();

    console.log("NFT Deployed to:", ppnft.address);

    //Mint token
    for (i=0; i < 5; i++) {
    var nextTokenId = await ppnft.totalSupply();
    var tx = await ppnft.safeMint(owner.address);
  }

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
