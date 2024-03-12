// // // We require the Hardhat Runtime Environment explicitly here. This is optional
// // // but useful for running the script in a standalone fashion through `node <script>`.
// // //
// // // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // // global scope, and execute the script.
// // const hre = require("hardhat");

// // async function main() {
// //   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
// //   const unlockTime = currentTimestampInSeconds + 60;

// //   const lockedAmount = hre.ethers.parseEther("0.001");

// //   const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
// //     value: lockedAmount,
// //   });

// //   await lock.waitForDeployment();

// //   console.log(
// //     `Lock with ${ethers.formatEther(
// //       lockedAmount
// //     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
// //   );
// // }

// // // We recommend this pattern to be able to use async/await everywhere
// // // and properly handle errors.
// // main().catch((error) => {
// //   console.error(error);
// //   process.exitCode = 1;
// // });

// // const main = async () => {
// //   const contractFactory = await ethers.getContractFactory("TwitterContract");
// //   const contract = await contractFactory.deploy();
// //   await contract.deployed();

// //   console.log("Contract deployed to: ", contract.address);
// // };

// // const runMain = async () => {
// //   try {
// //     await main();
// //     process.exit(0);
// //   } catch (error) {
// //     console.log(error);
// //     process.exit(1);
// //   }
// // };

// // runMain();

// const main = async () => {
//   const contractFactory = await ethers.getContractFactory("TwitterContract");
//   const contract = await contractFactory.deploy();
//   await contract.deployed();

//   console.log("Contract deployed to: ", contract.address);
// };

// const runMain = async () => {
//   try {
//     await main();
//     process.exit(0);
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// runMain();
// const main = async () => {
//   const contractFactory = await ethers.getContractFactory("TwitterContract");
//   const contractInstance = await contractFactory.deploy();

//   // No need to use deployed() function, use the contract instance directly
//   console.log("Contract deployed to: ", contractInstance.address);
// };

// const runMain = async () => {
//   try {
//     await main();
//     process.exit(0);
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// runMain();
const main = async () => {
  try {
    const contractFactory = await ethers.getContractFactory("TwitterContract");
    console.log("Deploying contract...");

    // Deploy the contract
    const contractInstance = await contractFactory.deploy();
    console.log("Contract deployed to address:", contractInstance.target);
  } catch (error) {
    console.error("Error during deployment:", error);
    process.exit(1);
  }
};

main();
