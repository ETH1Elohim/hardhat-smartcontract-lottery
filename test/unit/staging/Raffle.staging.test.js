// const { assert, expect } = require("chai")
// const { getNamedAccounts, deployments, ethers, network } = require("hardhat")
// const { developmentChains, networkConfig } = require("../../../helper-hardhat-config")


// //  yarn hardhat test --network goerli
// // https://goerli.etherscan.io/address/0x838A4871AF8554B384F2Dd8775ff2569119A394e
// // currently exceeding timeout of 500000ms - looks like a common problem
// developmentChains.includes(network.name)
//     ? describe.skip
//     : describe("Raffle Unit Tests", function () {
//           let raffle, raffleEntranceFee, deployer

//           beforeEach(async function () {
//               deployer = (await getNamedAccounts()).deployer
//               raffle = await ethers.getContract("Raffle", deployer)
//               raffleEntranceFee = await raffle.getEntranceFee()
//           })

//           describe("fulfillRandomWords", function () {
//               it("works with live Chainlink Keepers and Chainllink VRF, we get a random winner", async function () {
//                   // enter the raffle
//                   const startingTimeStamp = await raffle.getLatestTimeStamp()
//                   const accounts = await ethers.getSigners()

//                   await new Promise(async (resolve, reject) => {
//                       raffle.once("WinnerPicked", async function () {
//                           console.log("WinnerPicked event fired!")
//                           try {
//                               // add our asserts here
//                               const recentWinner = await raffle.getRecentWinner()
//                               const raffleState = await raffle.getRaffleState()
//                               const winnerBalance = await accounts[0].getBalance()
//                               const endingTimeStamp = await raffle.getLatestTimeStamp()

//                               await expect(raffle.getPlayer(0)).to.be.reverted
//                               assert.equal(recentWinner.toString(), accounts[0].address)
//                               assert.equal(raffleState, 0)
//                               assert.equal(
//                                   winnerEndingBalance.toString(),
//                                   winnerStartingBalance.add(raffleEntranceFee).toString()
//                               )
//                               assert(endingTimeStamp > startingTimeStamp)
//                               resolve()
//                           } catch (error) {
//                               console.log(error)
//                               reject(e)
//                           }
//                       })
//                       // then entering the raffle
//                       await raffle.enterRaffle({ value: raffleEntranceFee })
//                       const winnerStartingBalance = await accounts[0].getBalance()
//                       // and this code WONT complete until our listener has finished listening!
//                   })

//                   // set up listener before we enter the raffle
//                   // just in case blockchain moves REALLY fast
//                   // await raffle.enterRaffle({ value: raffleEntranceFee })
//               })
//           })
//       })
