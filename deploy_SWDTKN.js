const hre = require("hardhat")

async function main() {
	const Contract = await hre.ethers.getContractFactory("SWDTKN")
	const contract = Contract.deploy()

	await contract.deployed()

	console.log("Contract deployed to:", contract.address)
}

main()
	.then(() => process.exist(0))
	.catch((error) => {
		console.error(error)
		process.exit(1)
	})