pragma solidity ^0.6.8;

// SPDX-License-Identifier: MIT

contract Counter {
    uint public count;
    address payable owner;

    /* I added this constructor, the b
     *
     * 
     */
    
    constructor() public {
        owner = 0xD07EcDa4B183824eF9aead99CA6B35c4c87715bb;
    }
    
    function increment() external {
        count += 1;
    }

    function clearCount() public onlyOwner {
        count = 0;
    }

    modifier onlyOwner {
        require(msg.sender == owner); 

        _;
    }
}