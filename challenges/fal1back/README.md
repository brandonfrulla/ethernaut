This contract is scarier looking but honestly, it's even easier to hack than the other fallback challenge. 

The ONLY part of the smart contract that matters is right here: 

/* constructor */
function Fal1out() public payable {
    owner = msg.sender;
    allocations[owner] = msg.value;
  }

This code SAYS that it is a contructor, but it in fact, is not. This is a normal function that anyone can call (you know this because it sayd 'public payable').

All we have to do is call this function once, and bam, we own the contract. That easy. 

BONUS: If they wanted their constructor to be secure, it would've looked like this:

constructor() {
    owner = msg.sender;
    allocations[owner] = msg.value;
  }