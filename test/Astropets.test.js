const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AstroPet", function () {
    let AstroPet;
    let astroPet;
    let owner;
    let addr1;

    beforeEach(async function () {
        AstroPet = await ethers.getContractFactory("AstroPet");
        [owner, addr1] = await ethers.getSigners();
        astroPet = await AstroPet.deploy();
        await astroPet.waitForDeployment();
    });

    describe("Deployment", function () {
        it("Should set the right owner", async function () {
            expect(await astroPet.owner()).to.equal(owner.address);
        });
    });

    describe("Minting", function () {
        it("Should mint an AstroPet NFT", async function () {
            const tokenURI = "https://example.com/metadata/1";
            const originChain = "Ethereum";
            await astroPet.mintAstroPet(owner.address, tokenURI, originChain);
            expect(await astroPet.ownerOf(1)).to.equal(owner.address);
        });

        it("Should not allow minting more than the limit", async function () {
            const tokenURI = "https://example.com/metadata/1";
            const originChain = "Ethereum";
            await astroPet.mintAstroPet(owner.address, tokenURI, originChain);
            await astroPet.mintAstroPet(owner.address, tokenURI, originChain);
            await astroPet.mintAstroPet(owner.address, tokenURI, originChain);
            await astroPet.mintAstroPet(owner.address, tokenURI, originChain);
            await astroPet.mintAstroPet(owner.address, tokenURI, originChain);

            await expect(
                astroPet.mintAstroPet(owner.address, tokenURI, originChain)
            ).to.be.revertedWith("Mint limit reached for this address");
        });
    });

    describe("Updating Token URI", function () {
        it("Should allow the owner to update the token URI", async function () {
            const tokenURI = "https://example.com/metadata/1";
            const originChain = "Ethereum";
            await astroPet.mintAstroPet(owner.address, tokenURI, originChain);

            const newTokenURI = "https://example.com/metadata/2";
            await astroPet.updateTokenURI(1, newTokenURI);
            expect(await astroPet.tokenURI(1)).to.equal(newTokenURI);
        });
    });

    describe("Burning Tokens", function () {
        it("Should allow the owner to burn the token", async function () {
            const tokenURI = "https://example.com/metadata/1";
            const originChain = "Ethereum";
            
            // Mint a token
            await astroPet.mintAstroPet(owner.address, tokenURI, originChain);
            
            // Ensure the token exists and check the owner before burning
            expect(await astroPet.ownerOf(1)).to.equal(owner.address);
    
            // Now burn the token
            await astroPet.burn(1);
    
            // Check if the token does not exist anymore
            await expect(astroPet.ownerOf(1)).to.be.revertedWith("ERC721: owner query for nonexistent token");
        });
    });  
    
    describe("Transferring Tokens", function () {
        it("Should allow the owner to transfer the token", async function () {
            const tokenURI = "https://example.com/metadata/1";
            const originChain = "Ethereum";
    
            await astroPet.mintAstroPet(owner.address, tokenURI, originChain);
            await astroPet.safeTransferFromWithChain(owner.address, addr1.address, 1, "Ethereum");
    
            expect(await astroPet.ownerOf(1)).to.equal(addr1.address);
        });
    });

    describe("Updating Token URI", function () {
        it("Should allow the owner to update the token URI", async function () {
            const tokenURI = "https://example.com/metadata/1";
            const newTokenURI = "https://example.com/metadata/1-updated";
            const originChain = "Ethereum";
    
            await astroPet.mintAstroPet(owner.address, tokenURI, originChain);
            await astroPet.updateTokenURI(1, newTokenURI);
    
            expect(await astroPet.tokenURI(1)).to.equal(newTokenURI);
        });
    
        it("Should not allow non-owners to update the token URI", async function () {
            const tokenURI = "https://example.com/metadata/1";
            const originChain = "Ethereum";
    
            await astroPet.mintAstroPet(owner.address, tokenURI, originChain);
            await expect(astroPet.connect(addr1).updateTokenURI(1, "newTokenURI")).to.be.revertedWith("Not authorized");
        });
    });    
});
