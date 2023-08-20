notes on: [this video](https://www.youtube.com/watch?v=_tcyI_lNvo0)

Why do opcodes matter?

    It helps understand how and why Solidity is how it is
    Low-level code makes more sense

Phyiscal machines:
    0000 0100 - ADD
    0010 1100 - SUB

Virtual machines:
    0110 0000 - IADD (JVM)
    0000 0001 - ADD (EVM)

3 components of EVM:
 - stack
 - memory 
 - storage

Opcode Syntax Overview:
    4 chars of binary == 1 char of hex
    All opcodes are one 8-bit byte

    0000 0001 - ADD (EVM) - opcode syntax
  0x   0    1             - hex chars
         0x01             - opcode string

    The EVM is Stack-based.

    PUSH1 0x03      - pushes the '3' byte onto the stack
    PUSH2 0x0004    - pushes the next two bytes onto the stack, '4' (just 4 with extra zeros)
    PUSH1 0x09
    SWAP2           - Swaps the top of the stack with the hex you pass
    ADD             - pops top two and returns the sum to the stack
    CALLER          - returns the caller, 'msg.sender' ==  byte

    Before the SWAP, stack was:
    
 Bot:   0x03
        0x04
        0x09

    After swap:

 Bot:   0x09
        0x04
        0x03

    After Add:
        0x09
        0x07

Memory is another data structure that can be used in place of the stack
    MSTORE - takes two arguments, where you want to store, and what you want to store

    ex: PUSH1 0x03
        PUSH1 0x20
        MSTORE

        'store 3 at address 0x20'


    MLOAD - allows us to read from memory, only arg is the memory address

        PUSH1 0x20
        MLOAD

        '3 has been loaded back from memory'

Storage similar to Memory, but SSTORE and SLOAD.
    - has a few restrictions compared to memory
    - storage is very expensive to use on-chain
    - SSTORE: 2,900 - 20k gas+
    - MSTORE: 3+ gas ( :'0 )

Solidity opcode primitives:
    msg.sender;
    msg.value;
    block.timestamp;
    tx.origin;
    'payable'



