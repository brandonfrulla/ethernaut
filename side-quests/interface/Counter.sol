pragma solidity ^0.6.8;

// SPDX-License-Identifier: MIT

contract Counter {
    uint public count;
    address payable owner;

    /* I added this constructor because it gave me the chance
     * to add the owner var, that my onlyOwner modifier 
     * would rely on.
     */
    
    constructor() public {
        owner = 0xD07EcDa4B183824eF9aead99CA6B35c4c87715bb;
    }
    
    function increment() external {
        count += 1;
    }

    /* This one was the real 'test'.
     */
    function clearCount() public onlyOwner {
        count = 0;
    }

    modifier onlyOwner {
        require(msg.sender == owner); 

        _;
    }
}