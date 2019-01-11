pragma solidity ^0.5.0;


contract paymentChannel {

    uint shopId;
    //(shopId, customerAddress, amount)
    mapping(uint => mapping(address => uint)) private customerFundsToShops;
    //shopId, balance
    mapping(uint => uint)public pendingBalanceShops;
    mapping(uint => address payable) public shops;

    constructor() public {
        shopId = 0;
        shops[shopId] = msg.sender;
        shopId++;
    }

    modifier shopOwner(uint _shopId) {
        require(msg.sender == shops[_shopId]);
        _;
    }
    function addShop(address payable _shopAddress) public {
        shops[shopId] = _shopAddress;
        shopId++;
    }

    function addFunds(uint _shopId) public payable{
        customerFundsToShops[_shopId][msg.sender] = msg.value;
    //TODO check uint(msg.value)
    }
    
    //(CHANGE THIS FUNCTION LOGIC TO RECOVER VALUE FROM SIGNED MSG)=> Mot Working
    //TODO change to sendSignedTransaction logic
    //onCalled, this function verifies the signature, then increments the 
    //balance of shop. NOT TRANSFERS ETHER, just increments balance.
    function transferFunds(uint _shopId, uint _amount, address _from) public {
        require(_amount <= customerFundsToShops[_shopId][_from]);
        customerFundsToShops[_shopId][_from] -= _amount;
        pendingBalanceShops[_shopId] += _amount;
    }

    function transferFunds(string message, uint8 v, bytes32 r, bytes32 s) public pure returns (address signer) {
    // The message header; we will fill in the length next
    string memory header = "\x19Ethereum Signed Message:\n000000";
    uint256 lengthOffset;
    uint256 length;
    assembly {
      // The first word of a string is its length
      length := mload(message)
      // The beginning of the base-10 message length in the prefix
      lengthOffset := add(header, 57)
    }
    // Maximum length we support
    require(length <= 999999);
    // The length of the message's length in base-10
    uint256 lengthLength = 0;
    // The divisor to get the next left-most message length digit
    uint256 divisor = 100000;
    // Move one digit of the message length to the right at a time
    while (divisor != 0) {
      // The place value at the divisor
      uint256 digit = length / divisor;
      if (digit == 0) {
        // Skip leading zeros
        if (lengthLength == 0) {
          divisor /= 10;
          continue;
        }
      }
      // Found a non-zero digit or non-leading zero digit
      lengthLength++;
      // Remove this digit from the message length's current value
      length -= digit * divisor;
      // Shift our base-10 divisor over
      divisor /= 10;
      
      // Convert the digit to its ASCII representation (man ascii)
      digit += 0x30;
      // Move to the next character and write the digit
      lengthOffset++;
      assembly {
        mstore8(lengthOffset, digit)
      }
    }
    // The null string requires exactly 1 zero (unskip 1 leading 0)
    if (lengthLength == 0) {
      lengthLength = 1 + 0x19 + 1;
    } else {
      lengthLength += 1 + 0x19;
    }
    // Truncate the tailing zeros from the header
    assembly {
      mstore(header, lengthLength)
    }
    // Perform the elliptic curve recover operation
    bytes32 check = keccak256(header, message);
    return ecrecover(check, v, r, s);
  }
    
    //@notice: This function transfers real Ether to shop's address
    function withdrawToShopAccount(uint _shopId) public shopOwner(_shopId) {
        uint amount = pendingBalanceShops[_shopId];
        pendingBalanceShops[_shopId] = 0;
        address payable to = shops[_shopId];
        to.transfer(amount);
    }

}
	