pragma solidity ^0.4.18;

import './Ownable.sol';

contract Fallback is Ownable {

  mapping(address => uint) public contributions;

  // The user who deploys the contract, 
  // is the one who executes the constructor and becomes
  // automatically the owner
  function Fallback() public {
    contributions[msg.sender] = 1000 * (1 ether);
  }

  function contribute() public payable {
    require(msg.value < 0.001 ether);
    contributions[msg.sender] += msg.value;
    if(contributions[msg.sender] > contributions[owner]) {
      owner = msg.sender;
    }
  }

  function getContribution() public view returns (uint) {
    return contributions[msg.sender];
  }

  // function has modifier onlyOwner
  // only the owner of the contract can run this method
  function withdraw() public onlyOwner {
    owner.transfer(this.balance);
  }

  // this method is executed in a empty transaction,
  // i.e. when there is no method specified to run
  function() payable public {
    require(msg.value > 0 && contributions[msg.sender] > 0);
    owner = msg.sender;
  }
}