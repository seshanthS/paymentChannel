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
    
    //TODO CHANGE THIS FUNCTION LOGIC TO RECOVER VALUE FROM SIGNED MSG.
    //sent as signedTransaction
    function transferFunds(uint _shopId, uint _amount) public {
        require(_amount <= customerFundsToShops[_shopId][msg.sender]);
        customerFundsToShops[_shopId][msg.sender] -= _amount;
        pendingBalanceShops[_shopId] += _amount;
    }
    
    function withdrawToShopAccount(uint _shopId) public shopOwner(_shopId) {
        uint amount = pendingBalanceShops[_shopId];
        pendingBalanceShops[_shopId] = 0;
        address payable to = shops[_shopId];
        to.transfer(amount);
    }
}
	