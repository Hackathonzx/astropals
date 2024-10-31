// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract AstroPet is ERC721URIStorage, Ownable, ReentrancyGuard {
    uint256 private _tokenIdCounter;
    mapping(uint256 => string) public petOrigins; // Track original chain or provenance if needed for inter-chain compatibility.
    mapping(address => uint256) public addressMintCount; // Track mint count per address
    uint256 public maxMintPerAddress = 5; // Set a maximum mint limit per address

    event AstroPetMinted(uint256 tokenId, address owner, string tokenURI, string originChain);
    event AstroPetTransferred(uint256 tokenId, address from, address to, string destinationChain);

    constructor() ERC721("AstroPet", "ASTP") {
        _tokenIdCounter = 1; // Start token IDs at 1
    }

    // /**
    //  * @dev Mints a new AstroPet NFT.
    //  * @param to The address that will own the minted NFT.
    //  * @param _tokenURI The metadata URI of the AstroPet.
    //  * @param _originChain Original chain data for cross-chain compatibility.
    //  */
    modifier canMint(address to) {
        require(addressMintCount[to] < maxMintPerAddress, "Mint limit reached for this address");
        _;
    }

    function mintAstroPet(address to, string memory _tokenURI, string memory _originChain) 
        external onlyOwner nonReentrant canMint(to) 
    {
        uint256 tokenId = _tokenIdCounter;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        petOrigins[tokenId] = _originChain;
        emit AstroPetMinted(tokenId, to, _tokenURI, _originChain);
        _tokenIdCounter++;
        addressMintCount[to]++;
    }

    /**
     * @dev Updates the token URI of a specific AstroPet NFT.
     * @param tokenId The ID of the token to update.
     * @param newTokenURI The new metadata URI for the AstroPet.
     */
    function updateTokenURI(uint256 tokenId, string memory newTokenURI) external {
        require(ownerOf(tokenId) == msg.sender || owner() == msg.sender, "Not authorized");
        _setTokenURI(tokenId, newTokenURI);
    }

    /**
     * @dev Burns a specific AstroPet token.
     * @param tokenId The ID of the token to be burned.
     */
    function burn(uint256 tokenId) external {
        require(ownerOf(tokenId) == msg.sender, "Only owner can burn token");
        _burn(tokenId);
        delete petOrigins[tokenId]; // Clear the origin data upon burning.
        addressMintCount[msg.sender]--; // Decrease mint count upon burning
    }

    /**
     * @dev Transfer AstroPet with additional cross-chain tracking details.
     * @param from The current owner of the token.
     * @param to The address to transfer the token to.
     * @param tokenId The ID of the token to be transferred.
     * @param destinationChain Chain identifier for the destination.
     */
    function safeTransferFromWithChain(address from, address to, uint256 tokenId, string memory destinationChain) public nonReentrant {
        safeTransferFrom(from, to, tokenId);
        emit AstroPetTransferred(tokenId, from, to, destinationChain);
    }

    /**
     * @dev Returns origin chain of the AstroPet.
     * @param tokenId The ID of the token to query.
     */
    function getOriginChain(uint256 tokenId) external view returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return petOrigins[tokenId];
    }
}
