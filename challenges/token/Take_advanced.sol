// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface TokenContract {
    function balanceOf(address _owner) external view returns (uint balance);
    function transfer(address _to, uint _value) external returns (bool);
}

contract Take {

    constructor(address _tgt, uint _amt) {
        TokenContract(_tgt).transfer(msg.sender, _amt);
    }
}