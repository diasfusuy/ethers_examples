const {ethers} = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/91cfa7ea066146ffbf977b0b531840ad`);

const address = "0xC09a9dAc2e92605EbEF623efeEb261433008aA4B"

const main = async() => {
    const balance = await provider.getBalance(address);
    console.log(`\nMATIC Balance of ${address} --> ${ethers.utils.formatEther(balance)}MATIC\n`);
}

main();