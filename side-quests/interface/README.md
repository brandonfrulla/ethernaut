Today I decided to freestyle a little bit. I'm actually really excited about this, as it feels like very fast progress. I started out with the template files given to me in this excellent article: https://www.quicknode.com/guides/ethereum-development/smart-contracts/how-to-call-another-smart-contract-from-your-solidity-code

Out of the topics covered in the article, what was new to me was the concepts of Interfaces (related to blockchain, I know interfaces in the traditional OOP-sense). When implemented, they can facilitate calling other contracts for data within your own contract, which can be very useful. 

I knew that I had to look into interfaces because of the mission of Ethernaut that I am on (link below). As of now, my plan is to deploy a contract that will run the same computation that the coinflip contract is, and then call the CoinFlip contract's .guess() function with the result so that my 'guess' is never really a guess. 

This may or may not work, and honestly I lean towards 'not', but we will see when I try soon. 

The reason I think it won't work is because there's no gurantee that when I call Fortuneteller.flip(), that the blockNumber will be the same as the CoinFlip.flip()'s. But there's a chance I'm wrong, and it will be good learning regardless.

To address occam's razor, I tried guessing with other basic patterns like t/f/t/f etc, nothing was apparent.  

















CoinFlip Ethernaut level: 'https://ethernaut.openzeppelin.com/level/0xA62fE5344FE62AdC1F356447B669E9E6D10abaaF'