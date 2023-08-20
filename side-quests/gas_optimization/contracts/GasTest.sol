// SPDX-License-Identifier: MIT
pragma solidity  >= 0.8.2 < 0.9.0;

contract GasTest {

    uint256 public counter;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    //GAS COST WHERE amount->10 = 56896
    function inc1(uint256 amount) external {
        for (uint256 i; i < amount; i++) {
            counter += 1;
        }
    }

    //GAS COST WHERE amount->10 = 34948
    function inc2(uint256 amount) external {
        uint256 _tempCount = counter;
<<<<<<< HEAD
        for (uint256 i; i < amount; i++) {
=======
        for (uint256 i; i < amount; ++i) //++ before the var is more gas-friendly in Solidity
        {
>>>>>>> 0354887 (fix 2)
            _tempCount += 1;
        }
        counter = _tempCount;
    }

}