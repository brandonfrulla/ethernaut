// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import './Token.sol';

contract Take {

  address public taker;
  Token public target;

  constructor(address _tgt, address _taker) public {
    target = Token(_tgt);
    taker = _taker;
  }

  function transfer(uint _value) public {
    target.transfer(taker, _value);
  }
}