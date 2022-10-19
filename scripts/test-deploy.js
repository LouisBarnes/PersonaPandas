const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const [deployer, addr1, addr2] = await ethers.getSigners();
  const Ppnft = await hre.ethers.getContractFactory("PersonaPanda");
  const ppnft = await Ppnft.deploy();

  await ppnft.deployed();

  console.log("NFT Deployed to:", ppnft.address);

    async function printBalances() {
        console.log("Developer NFT balance: ", (await ppnft.balanceOf(deployer.address)).toString());
        console.log("Addr1 NFT balance: ", (await ppnft.balanceOf(addr1.address)).toString());
        console.log("Addr2 NFT balance: ", (await ppnft.balanceOf(addr2.address)).toString());
    }

  await ppnft.safeMint(deployer.address);
  await ppnft.safeMint(addr1.address);
  await ppnft.safeMint(addr1.address);
  
  await printBalances();

  console.log("Sending NFT from Addr1 to Addr2");

  await ppnft.connect(addr1).transferFrom(addr1.address, addr2.address, 2);

  await printBalances();

  console.log (await ppnft.tokenURI(0));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});