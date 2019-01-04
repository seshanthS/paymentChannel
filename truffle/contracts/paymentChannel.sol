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
    
    //@notice: This function transfers real Ether to shop's address
    function withdrawToShopAccount(uint _shopId) public shopOwner(_shopId) {
        uint amount = pendingBalanceShops[_shopId];
        pendingBalanceShops[_shopId] = 0;
        address payable to = shops[_shopId];
        to.transfer(amount);
    }

}
	