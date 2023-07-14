So this contract is pretty straight forward. 

Up top, we've got:

mapping(address => uint) public contributions;
address public owner;

These variables hold the address of the owner, and a map of anyone who has contributed, along with the amount that they have.

Next:
modifier onlyOwner {
        require(
            msg.sender == owner,
            "caller is not the owner"
        );
        _;
    }

Pretty boiler-plate, the modifier is basically a flag that will 'catch' if someone is trying to do something that only the owner can do. 

  function contribute() public payable {
    require(msg.value < 0.001 ether);
    contributions[msg.sender] += msg.value;
    if(contributions[msg.sender] > contributions[owner]) {
      owner = msg.sender;
    }
  }

This function allows parties to send money to the contract. Notice that in the if(), if the sender sends more Ether than the owner has, they will become the owner. This may be a way to exploit the contract.

function getContribution() public view returns (uint) {
    return contributions[msg.sender];
  }

Basically a getter that allows one to check how much eth they've (or whoever they pass as a parameter has) contributed.

  function withdraw() public onlyOwner {
    payable(owner).transfer(address(this).balance);
  }

A function that only the owner can call. Sends all eth from the contract to the owner address.

Finally: 
receive() external payable {
    require(msg.value > 0 && contributions[msg.sender] > 0);
    owner = msg.sender;
  }

This is a fallback function. People can implement these so that they can get paid without having to worry about doing any other logic inside the smart contract.

Line 40 is problematic though, as it allows anyone who has sent ether to this function to become the owner of the contract.

In order to exploit this contract, all someone has to do is:
1) call the function contribute w/ a msg.value of1 gwei
   1) This will firstly get your address established in the contributions map, and secondly update the value of your contributions to 1 gwei in the map itself
2) Send one more gwei, but make sure to call the fallback function. You can accomplish this by sending one gwei in a low-level transaction. The contract will fall back to the recieve() function

require(msg.value > 0 && contributions[msg.sender] > 0);

let's break the barrier to entry down. 

msg.value > 0, that's easy-- that's why we tossed 1 gwei into the loe-level call. The second part is what we satisfied in step one. We made sure that the contributions tied to our address were > 0, and now we have free reign to exploit this fallback methos, and drain the contract of its' ether!

Now, if we call contract.owner, we will see that we are the owner! This means that the contract is ours, and we can drain it as we see fit.




