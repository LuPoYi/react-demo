const main = async () => {
  const transactionFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transactionContract = await transactionFactory.deploy();

  await transactionContract.deployed();

  console.log("Transaction deployed to:", transactionContract.address);
  // Transaction deployed to: 0xb1a804d3b3d4Dae640983eB67a30AFE69bB587A3
};

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
