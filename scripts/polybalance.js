const hre = require("hardhat");
const dnftContractJSON = require("../artifacts/contracts/DNFT.sol/DNFT.json"); // Replace with correct path

const contractAddress = "0xEdEDC9c566b544Af63D95D2d930E15CBbBc5fc96"; // Replace with your contract address
const dnftABI = dnftContractJSON.abi;
const walletAddress = "0xB48c24e5d5697550593b862C666Ae59e5B5671Be"; // Replace with your wallet address

async function main() {
    const dnftContract = await hre.ethers.getContractAt(dnftABI, contractAddress);

    const balance = await dnftContract.balanceOf(walletAddress);
    console.log("You now have: " + balance.toString() + " tokens");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
