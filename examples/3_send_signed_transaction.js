const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.infura.io/v3/91cfa7ea066146ffbf977b0b531840ad`);

const account1 = "0x9F48DE3fDB07b01b9F89c1241D493fcA1f5Fd464"
const account2 = "0x5e74e6c8E6DBd753D20884ae16A2A99cF54d971F"

const privateKey = "" //sender private key
const wallet = new ethers.Wallet(privateKey1, provider)

const main = async() => {
    //Show account 1 balance before transfer
    const senderBalanceBefore = await provider.getBalance(account1)
    //Show account 2 balance before transfer
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`Reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    // send ether
    const tx = await wallet.sendTransaction({to: account2, value: ethers.utils.parseEther("0.025")})

      // wait for transaction to be mined
      await tx.wait()
      console.log(tx)
  
      //Show account 1 balance after transfer
      const senderBalanceAfter = await provider.getBalance(account1)
      //Show account 2 balance after transfer
      const recieverBalanceAfter = await provider.getBalance(account2)
  
      console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
      console.log(`Reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()