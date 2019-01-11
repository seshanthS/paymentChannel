var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var path = require('path');
var abi = require('./abi.js');
var contractAddress = "0x8ebE705A772fe970deC9163Fb779DF567E72cDFe";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/asUser',(req,res,next)=>{
  res.sendFile(path.join(__dirname,"../public","user.html"));
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
