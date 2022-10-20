![9](https://user-images.githubusercontent.com/101646269/196880645-6d23de5b-59e0-4c65-b4e0-67b774fb52b7.png)

# Persona Panda NFT's

https://testnets.opensea.io/collection/personapanda

Aspiring to become a full stack developer within web3, I have decided to create a more diverse portfolio to share with you. I decided to create an NFT collection of pandas (my favourite animal and longest childhood teddy bear) This project really tested my skills with Hardhat, Solidity and Javascript. 


## To begin using my little project please follow the instructions below.

### Getting Started
Clone the repository and open the folder within Visual Studio Code

Create a .env file in the root folder with the following two lines of code:

URL_ENDPOINT='INSERT URL HERE'
PRIVATE_KEY=INSERT PRIVATE KEY HERE
Head over to Infura (register for an account if you have not done so already) https://infura.io/dashboard - Once you can see the dashboard. click CREATE NEW KEY located on the top right of your screen. Once you have a new project you will be presented with network endpoints, be sure to select Gorli under the Ethereum section. Copy the URL and past this within the .env file created earlier.

Open metamask and find the private key to your wallet, enter your private key into the .env file you created earlier.

### Publish contracts to the blockchain

We are going to publish the NFT contract to the Goerli testnet.

```
npx hardhat run --network goerli scripts/deploy.js
```
Once the contract has been deployed you will be provided with a unique contract address, copy this to your clipboard so we can use it in the next step. 

Open your .env file and add the following line of code
```
GOERLI_NFT=INSERT THE CONRACT ADDRESS YOU COPIED
```
