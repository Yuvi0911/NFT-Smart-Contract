const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  const name = "YUVI";
  const symbol = "UV";
  const royalityFee = 5; 
  const artist = deployer.address;

  const TimelessNFT = await hre.ethers.getContractFactory("TimelessNFT");
  const timelessNFT = await TimelessNFT.deploy(name, symbol, royalityFee, artist);

  await timelessNFT.waitForDeployment();

  console.log("Smart contract deployed to:", await timelessNFT.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error in deployment:", error);
    process.exit(1);
  });


// Sepolia =>
// Deploying contract with the account: 0xeaed630De47C96F2511c24A6CD00586C0663446d       
// Sepolia chain deployed address: 0xD66dEd0E6EE16246dA51987BB0789BaDfC9f93b8

// Localhost =>
// Deploying contract with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
// TimelessNFT deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3