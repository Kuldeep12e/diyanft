
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DNFT is ERC721, ERC721URIStorage, Ownable {
   string[] private tokenURIs = [
        "ipfs://bafkreift6cf66wkq3dokazosminaz6y3kjhrkp746gak7aqty6k24vx75a",
        "ipfs://bafkreihtuzcxykge3ouqi57qe4rxtpcl6mnnvbsf6rjo7ib2vfddyrva4a",
        "ipfs://bafkreihdu4vunbkzdxvyqnkab7xwwxbeasrdiuorzl6hc3oslmutgsyyli",
        "ipfs://bafkreibc336jpw2bg43nu226mqwnqtpec5xeopk6bmqchsyaqxjcoof4a4",
        "ipfs://bafkreigjihp7wlqyzz6iculjjgjkttlncsbpk7lryr3ojcgrrxhciph7ne"
    ];

    constructor() ERC721("DNFT", "DNF") {}

    function mintDNft(address to, uint256 tokenId, string memory uri)
        public
        onlyOwner
    {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        tokenURIs.push(uri);
    }

    function getTokenURI(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        return tokenURIs[tokenId];
    }

    function getPromptDescription() public pure returns (string memory) {
        return "This function returns the prompt description.";
    }

    

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
