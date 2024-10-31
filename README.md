# Project Name: IDSafe
# Overview
IDSafe is a blockchain-based identity verification system designed for refugees. It uses decentralized identifiers (DIDs) and Chainlink's Cross-Chain Interoperability Protocol (CCIP) to manage identity verification across different blockchains. The system ensures that refugees can access essential services like healthcare, education, and financial assistance through verified digital credentials.

# Features
- Decentralized Identity Management: Each refugee is assigned a unique Decentralized Identifier (DID) to manage their identity securely.
- Cross-Chain Interoperability: Integration with Chainlink CCIP allows for seamless identity verification across multiple blockchain networks.
- Credential Issuance and Verification: Refugees receive verifiable credentials as NFTs or tokens, which can be used to prove their identity.
- Event Emission: The system emits events for credential issuance and cross-chain verification, ensuring transparency and traceability.

# How Chainlink is Used in the Project:
In this project, Chainlink's Cross-Chain Interoperability Protocol (CCIP) is used to enable cross-chain identity verification. Specifically, Chainlink CCIP ensures that identity verification can occur across different blockchains, making the credential verification system interoperable. This is done by:
- Emitting a cross-chain verification event that signals the credential needs to be verified on a specific chain (e.g., Avalanche).
- Utilizing Chainlink's oracles to send verification requests and process responses between multiple blockchains securely.

# Architecture
# Smart Contracts:
- DIDRegistry.sol: Manages the registration and retrieval of DIDs.
- VerificationOracle.sol: Handles cross-chain verification requests using Chainlink CCIP.
- CredentialNFT.sol: Issues and manages credentials as ERC721 NFTs.

# Deployment
Network: IntersectTestnet, Intersect network on Avalanche.

# Contract Addresses:
- DIDRegistry: [0x41CD3d7753eeAD4c2d384a6C0074eA4c27dE36F1]
- VerificationOracle: [0xf1979Ac32D086D1f3f3773fe0828d37729ed545f]
- CredentialNFT: [0x1d8c981FD95060A45b3Cea346DbF7b5b48f5CD36]

# Setup and Installation
Clone the Repository:  git clone https://github.com/yourusername/idsafe.git
cd <project-repo-directory>

# Dependencies and Installation
# Dependencies:
Solidity Version: ^0.8.0
OpenZeppelin Contracts:
@openzeppelin/contracts/token/ERC721/ERC721.sol
@openzeppelin/contracts/access/Ownable.sol
@openzeppelin/contracts/utils/Counters.sol
Hardhat: For local development and testing
npm install --save-dev hardhat
Chai: Assertion library for testing
npm install chai
Ethers.js: For interacting with Ethereum
npm install ethers
Chainlink:
npm install @chainlink/contracts: For utilizing Chainlink CCIP for cross-chain interoperability.
Chainlink CCIP (Cross-Chain Interoperability Protocol) for cross-chain data transmission.
npm install @chainlink/ccip

# Installation:
- Install the dependencies: npm install
- Compile the smart contracts: npx hardhat compile
- Run tests: npx hardhat test
- Deploy the contract: npx hardhat run ignition/modules/deploy.js --network <network-name>

# Usage
- Issuing Credentials:
Call issueCredentialWithMetadata(to: address, metadata: string) on the CredentialNFT contract.

- Verifying Credentials:
Use getCredentialMetadata(tokenId: uint256) to retrieve metadata.

- Cross-Chain Verification:
Call emitCrossChainVerificationEvent(tokenId: uint256, chain: string) to emit verification events.

# Testing
- Test Framework: Hardhat
- Tests: [Test files]
- test/CredentialNFT.test.js: Tests for the CredentialNFT contract.
- test/DIDRegistry.test.js: Tests for the DIDRegistry contract.
- test/VerificationOracle.test.js: Tests for the VerificationOracle contract.

# Contributing
- Fork the Repository:
- Create a New Branch:
git checkout -b feature/your-feature
- Make Changes and Commit:
git add .
git commit -m "Add feature"
Push Changes:
git push origin feature/your-feature

# License
[MIT License]

# Acknowledgments
futhmah456@gmail.com
nathfavour02@gmail.com






