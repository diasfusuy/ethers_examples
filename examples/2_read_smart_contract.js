const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/91cfa7ea066146ffbf977b0b531840ad`);

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]

const address = "0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b";

const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async() => {
    const name = await contract.name()
    const symbol = await contract.symbol()
    const totalSupply = await contract.totalSupply()
    console.log("name:", name)
    console.log("symbol:", symbol)
    console.log(`Total Supply: ${totalSupply}\n`)

    const balance = await contract.balanceOf("0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b")
    console.log(`Balance returned: ${balance}`)
    console.log(`Balance formatted: ${ethers.utils.formatEther(balance)}\n`)
};

main()