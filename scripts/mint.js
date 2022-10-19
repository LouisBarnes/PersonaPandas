const hre = require("hardhat");
require('dotenv').config();

async function main() {

    const [owner] = await ethers.getSigners();
    const Ppnft = await hre.ethers.getContractFactory("PersonaPanda");
    const ppnft = await Ppnft.attach(process.env.GOERLI_NFT);

    await ppnft.deployed();

    console.log("NFT Deployed to:", ppnft.address);

    //Mint token
    nextTokenId = await ppnft.totalSupply();
    tx = await ppnft.safeMint(owner.address);
  
    console.log("Next NFT Minted ID: ", nextTokenId.toString());
    console.log("Owner of NFT: ", owner.address);
    console.log("Hash location of Minted NFT: ", tx.hash);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
