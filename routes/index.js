var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var abi = require('./abi.js');
var contractAddress = "";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/withdraw', (req,res,next)=>{
  var infuraProvider = "https://mainnet.infura.io/v3/6860d73e85e64dc0b27cc1579c01d299";
  var web3 = new Web3(new Web3.providers.HttpProvider(infuraProvider));
  var contractInstance = new web3.eth.Contract(abi,contractAddress);
  var signature = req.body.signature;
  var amount = req.body.amount;

  web3.eth.sendSignedTransaction({"tx data here":""}).then(receipt =>{
    console.log(receipt);
  });
  
});

module.exports = router;
