const hre = require("hardhat");
const dnftContractJSON = require("../artifacts/contracts/DNFT.sol/DNFT.json"); // Replace with correct path
const walletAddress = "0xB48c24e5d5697550593b862C666Ae59e5B5671Be"; // Replace with your wallet address

const contractAddress = "0x5F6D3b3c08408677DD4F17CE4677B81277d52DC4"; // Replace with your contract address
const dnftABI = dnftContractJSON.abi;

async function main() {
    const dnftContract = await hre.ethers.getContractAt(dnftABI, contractAddress);

    let j = 0;

    for (let i = 1; i < 6; i++) {
        try {
            const tx = await dnftContract.mintDNft(walletAddress, i, "URI_OF_YOUR_CHOICE");
            await tx.wait();

            j++;
            
        } catch (error) {
            console.error("Error minting token:", error.message);
        }
    }

    console.log("Total token mint:", j);
    console.log("You  have: " + (await dnftContract.balanceOf(walletAddress)).toString() + " tokens");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
