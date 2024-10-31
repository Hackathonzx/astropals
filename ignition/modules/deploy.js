const hre = require("hardhat");

async function main() {
    // Get the ContractFactory and Signers here.
    const AstroPet = await hre.ethers.getContractFactory("AstroPet");
    const astroPet = await AstroPet.deploy(); // Deploy the contract

    // Wait for the contract to be deployed
  await astroPet.waitForDeployment(); // Updated for ethers v6
  console.log("AstroPet deployed to:", await astroPet.getAddress());
}

// Call the main function and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
