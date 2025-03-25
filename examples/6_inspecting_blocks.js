const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/91cfa7ea066146ffbf977b0b531840ad`);

const main = async () => {
    const block = await provider.getBlockNumber()

    console.log(`\nLatest block nummber: ${block}\n`)

    const blockInfo = await provider.getBlock(block)

    console.log(blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block)

    console.log(`\nLogging first transaction in block:\n`)
    console.log(transactions[0])
}

main()