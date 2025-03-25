const { ethers } = require("ethers");
const { isAddress } = require("ethers/lib/utils");

const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/91cfa7ea066146ffbf977b0b531840ad`);

const account1 = "0x9F48DE3fDB07b01b9F89c1241D493fcA1f5Fd464"
const account2 = "0x5e74e6c8E6DBd753D20884ae16A2A99cF54d971F"

const privateKey = "" //sender private key must be provided
const wallet = new ethers.Wallet(privateKey1, provider)

const ERC_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address, to, uint amount) returns bool()",
];

const address = "" // token address
const contract = new ethers.contract(address, ERC_ABI, provider)

const main = async() => {

    const balance = await contract.balanceOf(account1)

    console.log(`\nReading from ${address}`)
    console.log(`Balance of sender: ${balance}\n`)

    const contractWithWallet = contract.conect(wallet)
    
    const tx = await contractWithWallet.transfer(account2, balance)
    await tx.wait()

    console.log(tx)

    const balanceOfSender = await contract.balanceOf(account1)
    const balanceOfReciever = await contract.balanceOf(account2)

    console.log(`\nBalance sfo sender: ${balanceOf(balanceOfSender)}`)
    console.log(`Balance of reciever: ${balanceOf(balanceOfReciever)}\n`)
}

main()