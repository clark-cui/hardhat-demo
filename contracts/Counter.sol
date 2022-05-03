// SPDX-License-Identifier:  MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract Counter{
    uint public counter;
    constructor(uint _counter){
        counter = _counter;

    }
    function count() public{
        counter+=1;
        console.log("curr counter:",counter);
    }
    function add(uint x) public{
        counter=counter+x;
    }
}