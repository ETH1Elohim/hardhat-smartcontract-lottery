const { assert } = require("chai")
const { getNamedAccounts, deployments, ethers } = require("hardhat")
const {developmentChains} = require("../../helper-hardhat-config")

!developmentChains.includes(network.name) 
    ? describe.skip 
    : describe("Raffle Unit Tests", async function () {
        let raffle, VRFCoordinatorV2Mock

        beforeEach(async function (){
            const {deployer} = await getNamedAccounts()
            await deployments.fixture(["all"])
            raffle = await ethers.getContract("Raffle", deployer)
            VRFCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock", deployer)
        })

        describe("constructor", async function(){
            it("initializes the raffle correctly", async function(){
                // Ideally we make our test have just 1 assert per it()
                const raffleState = await raffle.getRaffleState()
                const interval = await interval.getInterval
                assert.equal(raffleState.toString(), "0")
            })
        })
    })