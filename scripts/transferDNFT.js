const hre = require("hardhat");
const dnftContractJSON = require("../artifacts/contracts/DNFT.sol/DNFT.json"); 
const fxRootContractABI = require("../fxRootContractABI.json"); 

const contractAddress = "0x5F6D3b3c08408677DD4F17CE4677B81277d52DC4"; 
const dnftABI = dnftContractJSON.abi;
const fxERC21RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; 
const walletAddress = "0xB48c24e5d5697550593b862C666Ae59e5B5671Be"; 

async function main() {
    const dnftContract = await hre.ethers.getContractAt(dnftABI, contractAddress);

    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC21RootAddress);

    const approveTx = await dnftContract.setApprovalForAll(fxERC21RootAddress, true);
    await approveTx.wait();

    console.log("Approval confirmed");

    for (let i = 1; i < 6; i++) {
        try {
            const depositTx = await fxContract.deposit(contractAddress, walletAddress, i, '0x6566');
            await depositTx.wait();
            console.log(`Token ${i} deposited`);
        } catch (error) {
            console.error(`Error depositing token ${i}:`, error.message);
        }
    }

    console.log("Deposite Successfull");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
