const hre = require("hardhat");


async function main() {
  const lock = await hre.ethers.deployContract("DNFT");

  await lock.waitForDeployment();

  const targetAddress = lock.target;
  console.log(`Deployed to ${targetAddress}`);

  
 
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});