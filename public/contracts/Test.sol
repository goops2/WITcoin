pragma solidity ^0.4.0;


contract Test {

  string greet = "This is a test.";

  function getGreet() public constant returns(string) {
    return greet;
  }

  function setGreet(string _newGreet) public {
    greet = _newGreet;
  }
}
