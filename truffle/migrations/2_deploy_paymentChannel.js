var paymentChannel = artifacts.require('paymentChannel');

module.exports = function(deployer) {
    deployer.deploy(paymentChannel)
}