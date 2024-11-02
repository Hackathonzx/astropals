# AstroPet - NFT-Based Digital Collectibles

AstroPet is a decentralized NFT-based platform allowing users to create, mint, and trade unique digital pets. Built on the Arbitrum blockchain with ERC-721 tokens, AstroPet features cross-chain compatibility, metadata updates, and burnable tokens, making it versatile for game-like environments and future expansion.

# Project Overview

AstroPet leverages blockchain technology to provide users with unique NFT collectibles. Each NFT has customizable metadata that can be updated post-mint, ensuring adaptability for various use cases. With a mint limit per address, AstroPet fosters exclusivity and enhances collectible value, making it appealing for marketplaces and gaming applications.

# Features

**NFT Minting:** Users can mint unique AstroPets with specific metadata and origin tracking.

**Metadata Update Function:** NFT owners can update metadata, enhancing flexibility and utility.

**Mint Limit:** Limits the number of NFTs minted per address.

**Cross-Chain Compatibility:** Cross-chain tracking enables inter-chain asset transfer in future updates.

**Burn Function:** Users can burn NFTs, making tokens finite and reducing supply.

# Technical Approach

**Smart Contracts**

Developed in Solidity, the AstroPet smart contract adheres to the ERC-721 standard with extensions for metadata management, minting limits, and burn functions. OpenZeppelin’s security libraries reinforce contract reliability.

**Frontend**

The frontend, developed using React, connects with the smart contract through ethers.js, providing a user-friendly interface for minting, updating, and transferring NFTs. Tailwind CSS was used for responsive design, ensuring an accessible and aesthetic user experience.

**Backend**

A Node.js and Express backend facilitates additional application logic, such as transaction history tracking and origin verification. Vottun APIs integrate seamlessly into the backend for cross-chain functionality, enhancing AstroPet's interoperability.

# Why We Chose These Approaches

**Smart Contract Decisions**

- ERC-721 Standard: We chose ERC-721 for AstroPet because it supports unique tokens, ideal for digital collectibles. The burn function and minting limits ensure that the NFT supply remains exclusive.

- Minting Limit per Address: This limit encourages decentralized ownership and provides scarcity, fostering a healthy ecosystem of unique collectibles.

**Frontend and Backend Decisions**

- React with ethers.js: React was chosen for its efficiency and compatibility with web3 libraries like ethers.js, which provides smooth blockchain interactions.

- Vottun APIs for Cross-Chain Compatibility: Vottun APIs were selected to allow future interoperability, letting AstroPets exist across multiple chains without disrupting metadata.

# Experience with Vottun APIs

Working with Vottun APIs was crucial for developing AstroPet’s cross-chain compatibility. The APIs streamlined complex functionalities like chain interoperability and cross-chain verification, saving significant development time. Vottun’s documentation was detailed, helping our team navigate integration challenges. Our experience showed us the potential of cross-chain capabilities and how Vottun APIs can bridge different blockchain ecosystems, essential for any NFT platform that aims for widespread adoption.

# Smart Contract Details

The smart contract was developed with specific functions to manage NFTs effectively:

- Minting Function: Mints a new AstroPet NFT, assigns metadata, and logs the origin chain.

- Update Metadata Function: Allows owners to update NFT metadata post-mint, supporting enhanced adaptability.

- Burn Function: Enables owners to burn NFTs, reducing the circulating supply of AstroPets.

**Sample Code**

See the full contract in the contracts/AstroPet.sol file.

**Frontend and Backend Development**

The frontend is built in React, with ethers.js handling blockchain interactions, making it easy to integrate AstroPet’s smart contract. Tailwind CSS provides a responsive UI framework for seamless user experience across devices. The backend, built with Node.js and Express, uses Vottun APIs to manage cross-chain data.

**Key Frontend Components**

- Minting Page: Users can mint new AstroPets by providing metadata and chain of origin.
- NFT Dashboard: Users can view, update, transfer, or burn their AstroPets.

**Key Backend Components**

- Transaction Management: The backend tracks each NFT transaction, verifying ownership and mint counts.

- Cross-Chain Verification: Uses Vottun APIs for origin tracking and inter-chain compatibility.

# How to Run the Project

Clone the repository:

git clone https://github.com/Hackathonzx/astropals.git

cd astropals

**Install dependencies:**

- npm install

# Deployment

- Run npx hardhat compile to compile the contract.

- Run npx hardhat run ignition/modules/deploy.js --network arbitrumSepolia to deploy the contract.

Here is the deployed address:

AstroPet deployed to: 0x7516abedc7e8ca01143ad636a6963B9887FC7Cf6

# Testing

To run the test

npx hardhat test


  AstroPet

    Deployment

      ✔ Should set the right owner (38ms)

    Minting

      ✔ Should mint an AstroPet NFT

      ✔ Should not allow minting more than the limit (80ms)

    Updating Token URI

      ✔ Should allow the owner to update the token URI

    Burning Tokens

      ✔  Should allow the owner to burn the token

    Transferring Tokens

      ✔ Should allow the owner to transfer the token

    Updating Token URI

      ✔ Should allow the owner to update the token URI
      
      ✔ Should not allow non-owners to update the token URI


  8 passing (4s)


# License
AstroPet is licensed under the MIT License.