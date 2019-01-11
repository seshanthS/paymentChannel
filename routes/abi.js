module.exports = [{
  "contractName": "paymentChannel",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "shops",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x713aca74"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "pendingBalanceShops",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x99c73a79"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_shopAddress",
          "type": "address"
        }
      ],
      "name": "addShop",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x78fbb04f"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_shopId",
          "type": "uint256"
        }
      ],
      "name": "addFunds",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function",
      "signature": "0xbe999705"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_shopId",
          "type": "uint256"
        },
        {
          "name": "_amount",
          "type": "uint256"
        },
        {
          "name": "_from",
          "type": "address"
        }
      ],
      "name": "transferFunds",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xbc8756a9"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_shopId",
          "type": "uint256"
        }
      ],
      "name": "withdrawToShopAccount",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x49d5dd9d"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506000808190555033600360008054815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008081548092919060010191905055506105a38061008b6000396000f3fe608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806349d5dd9d1461007d578063713aca74146100b857806378fbb04f1461013357806399c73a7914610184578063bc8756a9146101d3578063be99970514610238575b600080fd5b34801561008957600080fd5b506100b6600480360360208110156100a057600080fd5b8101908080359060200190929190505050610266565b005b3480156100c457600080fd5b506100f1600480360360208110156100db57600080fd5b810190808035906020019092919050505061038a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013f57600080fd5b506101826004803603602081101561015657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103bd565b005b34801561019057600080fd5b506101bd600480360360208110156101a757600080fd5b8101908080359060200190929190505050610424565b6040518082815260200191505060405180910390f35b3480156101df57600080fd5b50610236600480360360608110156101f657600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061043c565b005b6102646004803603602081101561024e57600080fd5b810190808035906020019092919050505061051f565b005b806003600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156102d457600080fd5b6000600260008481526020019081526020016000205490506000600260008581526020019081526020016000208190555060006003600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610383573d6000803e3d6000fd5b5050505050565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600360008054815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600080815480929190600101919050555050565b60026020528060005260406000206000915090505481565b6001600084815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561049b57600080fd5b816001600085815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816002600085815260200190815260200160002060008282540192505081905550505050565b346001600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505056fea165627a7a723058202d76f1ac2a3c6a8a2196358e69b45a4d2b23f9e6d77f7c6f115a4dfefab09e6a0029",
  "deployedBytecode": "0x608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806349d5dd9d1461007d578063713aca74146100b857806378fbb04f1461013357806399c73a7914610184578063bc8756a9146101d3578063be99970514610238575b600080fd5b34801561008957600080fd5b506100b6600480360360208110156100a057600080fd5b8101908080359060200190929190505050610266565b005b3480156100c457600080fd5b506100f1600480360360208110156100db57600080fd5b810190808035906020019092919050505061038a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561013f57600080fd5b506101826004803603602081101561015657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103bd565b005b34801561019057600080fd5b506101bd600480360360208110156101a757600080fd5b8101908080359060200190929190505050610424565b6040518082815260200191505060405180910390f35b3480156101df57600080fd5b50610236600480360360608110156101f657600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061043c565b005b6102646004803603602081101561024e57600080fd5b810190808035906020019092919050505061051f565b005b806003600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156102d457600080fd5b6000600260008481526020019081526020016000205490506000600260008581526020019081526020016000208190555060006003600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508073ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610383573d6000803e3d6000fd5b5050505050565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b80600360008054815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600080815480929190600101919050555050565b60026020528060005260406000206000915090505481565b6001600084815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561049b57600080fd5b816001600085815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816002600085815260200190815260200160002060008282540192505081905550505050565b346001600083815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505056fea165627a7a723058202d76f1ac2a3c6a8a2196358e69b45a4d2b23f9e6d77f7c6f115a4dfefab09e6a0029",
  "sourceMap": "26:1638:1:-;;;317:102;8:9:-1;5:2;;;30:1;27;20:12;5:2;317:102:1;357:1;348:6;:10;;;;384;368:5;:13;374:6;;368:13;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;404:6;;:8;;;;;;;;;;;;;26:1638;;;;;;",
  "deployedSourceMap": "26:1638:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1415:246;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1415:246:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1415:246:1;;;;;;;;;;;;;;;;;;;;265:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;265:45:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;265:45:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;528:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;528:117:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;528:117:1;;;;;;;;;;;;;;;;;;;;;;212:47;;8:9:-1;5:2;;;30:1;27;20:12;5:2;212:47:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;212:47:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1085:252;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1085:252:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1085:252:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;651:149;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;651:149:1;;;;;;;;;;;;;;;;;;;;1415:246;1477:7;490:5;:14;496:7;490:14;;;;;;;;;;;;;;;;;;;;;476:28;;:10;:28;;;468:37;;;;;;;;1496:11;1510:19;:28;1530:7;1510:28;;;;;;;;;;;;1496:42;;1579:1;1548:19;:28;1568:7;1548:28;;;;;;;;;;;:32;;;;1590:18;1611:5;:14;1617:7;1611:14;;;;;;;;;;;;;;;;;;;;;1590:35;;1635:2;:11;;:19;1647:6;1635:19;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1635:19:1;515:1;;1415:246;;:::o;265:45::-;;;;;;;;;;;;;;;;;;;;;;:::o;528:117::-;608:12;592:5;:13;598:6;;592:13;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;630:6;;:8;;;;;;;;;;;;;528:117;:::o;212:47::-;;;;;;;;;;;;;;;;;:::o;1085:252::-;1187:20;:29;1208:7;1187:29;;;;;;;;;;;:36;1217:5;1187:36;;;;;;;;;;;;;;;;1176:7;:47;;1168:56;;;;;;;;1274:7;1234:20;:29;1255:7;1234:29;;;;;;;;;;;:36;1264:5;1234:36;;;;;;;;;;;;;;;;:47;;;;;;;;;;;1323:7;1291:19;:28;1311:7;1291:28;;;;;;;;;;;;:39;;;;;;;;;;;1085:252;;;:::o;651:149::-;751:9;707:20;:29;728:7;707:29;;;;;;;;;;;:41;737:10;707:41;;;;;;;;;;;;;;;:53;;;;651:149;:::o",
  "source": "pragma solidity ^0.5.0;\n\n\ncontract paymentChannel {\n\n    uint shopId;\n    //(shopId, customerAddress, amount)\n    mapping(uint => mapping(address => uint)) private customerFundsToShops;\n    //shopId, balance\n    mapping(uint => uint)public pendingBalanceShops;\n    mapping(uint => address payable) public shops;\n\n    constructor() public {\n        shopId = 0;\n        shops[shopId] = msg.sender;\n        shopId++;\n    }\n\n    modifier shopOwner(uint _shopId) {\n        require(msg.sender == shops[_shopId]);\n        _;\n    }\n    function addShop(address payable _shopAddress) public {\n        shops[shopId] = _shopAddress;\n        shopId++;\n    }\n\n    function addFunds(uint _shopId) public payable{\n        customerFundsToShops[_shopId][msg.sender] = msg.value;\n    //TODO check uint(msg.value)\n    }\n    \n    //(CHANGE THIS FUNCTION LOGIC TO RECOVER VALUE FROM SIGNED MSG)=> Mot Working\n    //TODO change to sendSignedTransaction logic\n    //onCalled, this function verifies the signature, then increments the \n    //balance of shop. NOT TRANSFERS ETHER, just increments balance.\n    function transferFunds(uint _shopId, uint _amount, address _from) public {\n        require(_amount <= customerFundsToShops[_shopId][_from]);\n        customerFundsToShops[_shopId][_from] -= _amount;\n        pendingBalanceShops[_shopId] += _amount;\n    }\n    \n    //@notice: This function transfers real Ether to shop's address\n    function withdrawToShopAccount(uint _shopId) public shopOwner(_shopId) {\n        uint amount = pendingBalanceShops[_shopId];\n        pendingBalanceShops[_shopId] = 0;\n        address payable to = shops[_shopId];\n        to.transfer(amount);\n    }\n\n}\n\t",
  "sourcePath": "/home/workspace/projects/paymentChannel/truffle/contracts/paymentChannel.sol",
  "ast": {
    "absolutePath": "/home/workspace/projects/paymentChannel/truffle/contracts/paymentChannel.sol",
    "exportedSymbols": {
      "paymentChannel": [
        206
      ]
    },
    "id": 207,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 206,
        "linearizedBaseContracts": [
          206
        ],
        "name": "paymentChannel",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 60,
            "name": "shopId",
            "nodeType": "VariableDeclaration",
            "scope": 206,
            "src": "57:11:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 59,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "57:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 66,
            "name": "customerFundsToShops",
            "nodeType": "VariableDeclaration",
            "scope": 206,
            "src": "114:70:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(uint256 => mapping(address => uint256))"
            },
            "typeName": {
              "id": 65,
              "keyType": {
                "id": 61,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "122:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "114:41:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(uint256 => mapping(address => uint256))"
              },
              "valueType": {
                "id": 64,
                "keyType": {
                  "id": 62,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "138:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "130:24:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 63,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "149:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 70,
            "name": "pendingBalanceShops",
            "nodeType": "VariableDeclaration",
            "scope": 206,
            "src": "212:47:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 69,
              "keyType": {
                "id": 67,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "220:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "212:21:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 68,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "228:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 74,
            "name": "shops",
            "nodeType": "VariableDeclaration",
            "scope": 206,
            "src": "265:45:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
              "typeString": "mapping(uint256 => address payable)"
            },
            "typeName": {
              "id": 73,
              "keyType": {
                "id": 71,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "273:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "265:32:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                "typeString": "mapping(uint256 => address payable)"
              },
              "valueType": {
                "id": 72,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "281:15:1",
                "stateMutability": "payable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 91,
              "nodeType": "Block",
              "src": "338:81:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 79,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 77,
                      "name": "shopId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "348:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 78,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "357:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "348:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 80,
                  "nodeType": "ExpressionStatement",
                  "src": "348:10:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 86,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 81,
                        "name": "shops",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "368:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                          "typeString": "mapping(uint256 => address payable)"
                        }
                      },
                      "id": 83,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "shopId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60,
                        "src": "374:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "368:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 84,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 221,
                        "src": "384:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 85,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "384:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "368:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 87,
                  "nodeType": "ExpressionStatement",
                  "src": "368:26:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 89,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "404:8:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 88,
                      "name": "shopId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "404:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 90,
                  "nodeType": "ExpressionStatement",
                  "src": "404:8:1"
                }
              ]
            },
            "documentation": null,
            "id": 92,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "328:2:1"
            },
            "returnParameters": {
              "id": 76,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "338:0:1"
            },
            "scope": 206,
            "src": "317:102:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 106,
              "nodeType": "Block",
              "src": "458:65:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        "id": 102,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 97,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 221,
                            "src": "476:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 98,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "476:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 99,
                            "name": "shops",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "490:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                              "typeString": "mapping(uint256 => address payable)"
                            }
                          },
                          "id": 101,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 100,
                            "name": "_shopId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 94,
                            "src": "496:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "490:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "476:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 96,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        224,
                        225
                      ],
                      "referencedDeclaration": 224,
                      "src": "468:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "468:37:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 104,
                  "nodeType": "ExpressionStatement",
                  "src": "468:37:1"
                },
                {
                  "id": 105,
                  "nodeType": "PlaceholderStatement",
                  "src": "515:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 107,
            "name": "shopOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 94,
                  "name": "_shopId",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "444:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "444:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "443:14:1"
            },
            "src": "425:98:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 121,
              "nodeType": "Block",
              "src": "582:63:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 112,
                        "name": "shops",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "592:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                          "typeString": "mapping(uint256 => address payable)"
                        }
                      },
                      "id": 114,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 113,
                        "name": "shopId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60,
                        "src": "598:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "592:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 115,
                      "name": "_shopAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 109,
                      "src": "608:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "592:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 117,
                  "nodeType": "ExpressionStatement",
                  "src": "592:28:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "630:8:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 118,
                      "name": "shopId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "630:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 120,
                  "nodeType": "ExpressionStatement",
                  "src": "630:8:1"
                }
              ]
            },
            "documentation": null,
            "id": 122,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addShop",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 110,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 109,
                  "name": "_shopAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 122,
                  "src": "545:28:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 108,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "545:15:1",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "544:30:1"
            },
            "returnParameters": {
              "id": 111,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "582:0:1"
            },
            "scope": 206,
            "src": "528:117:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 137,
              "nodeType": "Block",
              "src": "697:103:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 127,
                          "name": "customerFundsToShops",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66,
                          "src": "707:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                          }
                        },
                        "id": 131,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 128,
                          "name": "_shopId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 124,
                          "src": "728:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "707:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 132,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 129,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 221,
                          "src": "737:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "737:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "707:41:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 133,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 221,
                        "src": "751:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "751:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "707:53:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 136,
                  "nodeType": "ExpressionStatement",
                  "src": "707:53:1"
                }
              ]
            },
            "documentation": null,
            "id": 138,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124,
                  "name": "_shopId",
                  "nodeType": "VariableDeclaration",
                  "scope": 138,
                  "src": "669:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 123,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "669:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "668:14:1"
            },
            "returnParameters": {
              "id": 126,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "697:0:1"
            },
            "scope": 206,
            "src": "651:149:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 171,
              "nodeType": "Block",
              "src": "1158:179:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 154,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 148,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 142,
                          "src": "1176:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 149,
                              "name": "customerFundsToShops",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66,
                              "src": "1187:20:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(uint256 => mapping(address => uint256))"
                              }
                            },
                            "id": 151,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 150,
                              "name": "_shopId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 140,
                              "src": "1208:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1187:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 153,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 152,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 144,
                            "src": "1217:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1187:36:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1176:47:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 147,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        224,
                        225
                      ],
                      "referencedDeclaration": 224,
                      "src": "1168:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1168:56:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 156,
                  "nodeType": "ExpressionStatement",
                  "src": "1168:56:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 157,
                          "name": "customerFundsToShops",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66,
                          "src": "1234:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                          }
                        },
                        "id": 160,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 158,
                          "name": "_shopId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 140,
                          "src": "1255:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1234:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 161,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 159,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 144,
                        "src": "1264:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1234:36:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 162,
                      "name": "_amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 142,
                      "src": "1274:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1234:47:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 164,
                  "nodeType": "ExpressionStatement",
                  "src": "1234:47:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 165,
                        "name": "pendingBalanceShops",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "1291:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 167,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 166,
                        "name": "_shopId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 140,
                        "src": "1311:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1291:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 168,
                      "name": "_amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 142,
                      "src": "1323:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1291:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 170,
                  "nodeType": "ExpressionStatement",
                  "src": "1291:39:1"
                }
              ]
            },
            "documentation": null,
            "id": 172,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 140,
                  "name": "_shopId",
                  "nodeType": "VariableDeclaration",
                  "scope": 172,
                  "src": "1108:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 139,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1108:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 142,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 172,
                  "src": "1122:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 141,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1122:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 144,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 172,
                  "src": "1136:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1136:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1107:43:1"
            },
            "returnParameters": {
              "id": 146,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1158:0:1"
            },
            "scope": 206,
            "src": "1085:252:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 204,
              "nodeType": "Block",
              "src": "1486:175:1",
              "statements": [
                {
                  "assignments": [
                    181
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 181,
                      "name": "amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 204,
                      "src": "1496:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 180,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1496:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 185,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 182,
                      "name": "pendingBalanceShops",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 70,
                      "src": "1510:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 184,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 183,
                      "name": "_shopId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 174,
                      "src": "1530:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1510:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1496:42:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 190,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 186,
                        "name": "pendingBalanceShops",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "1548:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 188,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 187,
                        "name": "_shopId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 174,
                        "src": "1568:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1548:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 189,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1579:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1548:32:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 191,
                  "nodeType": "ExpressionStatement",
                  "src": "1548:32:1"
                },
                {
                  "assignments": [
                    193
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 193,
                      "name": "to",
                      "nodeType": "VariableDeclaration",
                      "scope": 204,
                      "src": "1590:18:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      },
                      "typeName": {
                        "id": 192,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1590:15:1",
                        "stateMutability": "payable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 197,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 194,
                      "name": "shops",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 74,
                      "src": "1611:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                        "typeString": "mapping(uint256 => address payable)"
                      }
                    },
                    "id": 196,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 195,
                      "name": "_shopId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 174,
                      "src": "1617:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1611:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1590:35:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 201,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 181,
                        "src": "1647:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 198,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 193,
                        "src": "1635:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 200,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1635:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1635:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 203,
                  "nodeType": "ExpressionStatement",
                  "src": "1635:19:1"
                }
              ]
            },
            "documentation": null,
            "id": 205,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 177,
                    "name": "_shopId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 174,
                    "src": "1477:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 178,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 176,
                  "name": "shopOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 107,
                  "src": "1467:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1467:18:1"
              }
            ],
            "name": "withdrawToShopAccount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 175,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 174,
                  "name": "_shopId",
                  "nodeType": "VariableDeclaration",
                  "scope": 205,
                  "src": "1446:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 173,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1446:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1445:14:1"
            },
            "returnParameters": {
              "id": 179,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1486:0:1"
            },
            "scope": 206,
            "src": "1415:246:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 207,
        "src": "26:1638:1"
      }
    ],
    "src": "0:1666:1"
  },
  "legacyAST": {
    "absolutePath": "/home/workspace/projects/paymentChannel/truffle/contracts/paymentChannel.sol",
    "exportedSymbols": {
      "paymentChannel": [
        206
      ]
    },
    "id": 207,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "^",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 206,
        "linearizedBaseContracts": [
          206
        ],
        "name": "paymentChannel",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 60,
            "name": "shopId",
            "nodeType": "VariableDeclaration",
            "scope": 206,
            "src": "57:11:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 59,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "57:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 66,
            "name": "customerFundsToShops",
            "nodeType": "VariableDeclaration",
            "scope": 206,
            "src": "114:70:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(uint256 => mapping(address => uint256))"
            },
            "typeName": {
              "id": 65,
              "keyType": {
                "id": 61,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "122:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "114:41:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(uint256 => mapping(address => uint256))"
              },
              "valueType": {
                "id": 64,
                "keyType": {
                  "id": 62,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "138:7:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "130:24:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 63,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "149:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 70,
            "name": "pendingBalanceShops",
            "nodeType": "VariableDeclaration",
            "scope": 206,
            "src": "212:47:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 69,
              "keyType": {
                "id": 67,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "220:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "212:21:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 68,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "228:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 74,
            "name": "shops",
            "nodeType": "VariableDeclaration",
            "scope": 206,
            "src": "265:45:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
              "typeString": "mapping(uint256 => address payable)"
            },
            "typeName": {
              "id": 73,
              "keyType": {
                "id": 71,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "273:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "265:32:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                "typeString": "mapping(uint256 => address payable)"
              },
              "valueType": {
                "id": 72,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "281:15:1",
                "stateMutability": "payable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 91,
              "nodeType": "Block",
              "src": "338:81:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 79,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 77,
                      "name": "shopId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "348:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 78,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "357:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "348:10:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 80,
                  "nodeType": "ExpressionStatement",
                  "src": "348:10:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 86,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 81,
                        "name": "shops",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "368:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                          "typeString": "mapping(uint256 => address payable)"
                        }
                      },
                      "id": 83,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "shopId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60,
                        "src": "374:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "368:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 84,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 221,
                        "src": "384:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 85,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "384:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "368:26:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 87,
                  "nodeType": "ExpressionStatement",
                  "src": "368:26:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 89,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "404:8:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 88,
                      "name": "shopId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "404:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 90,
                  "nodeType": "ExpressionStatement",
                  "src": "404:8:1"
                }
              ]
            },
            "documentation": null,
            "id": 92,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 75,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "328:2:1"
            },
            "returnParameters": {
              "id": 76,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "338:0:1"
            },
            "scope": 206,
            "src": "317:102:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 106,
              "nodeType": "Block",
              "src": "458:65:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        "id": 102,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 97,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 221,
                            "src": "476:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 98,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "476:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 99,
                            "name": "shops",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "490:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                              "typeString": "mapping(uint256 => address payable)"
                            }
                          },
                          "id": 101,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 100,
                            "name": "_shopId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 94,
                            "src": "496:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "490:14:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "476:28:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 96,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        224,
                        225
                      ],
                      "referencedDeclaration": 224,
                      "src": "468:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "468:37:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 104,
                  "nodeType": "ExpressionStatement",
                  "src": "468:37:1"
                },
                {
                  "id": 105,
                  "nodeType": "PlaceholderStatement",
                  "src": "515:1:1"
                }
              ]
            },
            "documentation": null,
            "id": 107,
            "name": "shopOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 94,
                  "name": "_shopId",
                  "nodeType": "VariableDeclaration",
                  "scope": 107,
                  "src": "444:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "444:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "443:14:1"
            },
            "src": "425:98:1",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 121,
              "nodeType": "Block",
              "src": "582:63:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 116,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 112,
                        "name": "shops",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "592:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                          "typeString": "mapping(uint256 => address payable)"
                        }
                      },
                      "id": 114,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 113,
                        "name": "shopId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 60,
                        "src": "598:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "592:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 115,
                      "name": "_shopAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 109,
                      "src": "608:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "592:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 117,
                  "nodeType": "ExpressionStatement",
                  "src": "592:28:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "630:8:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 118,
                      "name": "shopId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 60,
                      "src": "630:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 120,
                  "nodeType": "ExpressionStatement",
                  "src": "630:8:1"
                }
              ]
            },
            "documentation": null,
            "id": 122,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addShop",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 110,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 109,
                  "name": "_shopAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 122,
                  "src": "545:28:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 108,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "545:15:1",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "544:30:1"
            },
            "returnParameters": {
              "id": 111,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "582:0:1"
            },
            "scope": 206,
            "src": "528:117:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 137,
              "nodeType": "Block",
              "src": "697:103:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 127,
                          "name": "customerFundsToShops",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66,
                          "src": "707:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                          }
                        },
                        "id": 131,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 128,
                          "name": "_shopId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 124,
                          "src": "728:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "707:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 132,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 129,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 221,
                          "src": "737:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 130,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "737:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "707:41:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 133,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 221,
                        "src": "751:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "751:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "707:53:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 136,
                  "nodeType": "ExpressionStatement",
                  "src": "707:53:1"
                }
              ]
            },
            "documentation": null,
            "id": 138,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 124,
                  "name": "_shopId",
                  "nodeType": "VariableDeclaration",
                  "scope": 138,
                  "src": "669:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 123,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "669:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "668:14:1"
            },
            "returnParameters": {
              "id": 126,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "697:0:1"
            },
            "scope": 206,
            "src": "651:149:1",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 171,
              "nodeType": "Block",
              "src": "1158:179:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 154,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 148,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 142,
                          "src": "1176:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 149,
                              "name": "customerFundsToShops",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 66,
                              "src": "1187:20:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(uint256 => mapping(address => uint256))"
                              }
                            },
                            "id": 151,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 150,
                              "name": "_shopId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 140,
                              "src": "1208:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1187:29:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                              "typeString": "mapping(address => uint256)"
                            }
                          },
                          "id": 153,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 152,
                            "name": "_from",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 144,
                            "src": "1217:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1187:36:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1176:47:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 147,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        224,
                        225
                      ],
                      "referencedDeclaration": 224,
                      "src": "1168:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 155,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1168:56:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 156,
                  "nodeType": "ExpressionStatement",
                  "src": "1168:56:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 157,
                          "name": "customerFundsToShops",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 66,
                          "src": "1234:20:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(uint256 => mapping(address => uint256))"
                          }
                        },
                        "id": 160,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 158,
                          "name": "_shopId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 140,
                          "src": "1255:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1234:29:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 161,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 159,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 144,
                        "src": "1264:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1234:36:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 162,
                      "name": "_amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 142,
                      "src": "1274:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1234:47:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 164,
                  "nodeType": "ExpressionStatement",
                  "src": "1234:47:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 169,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 165,
                        "name": "pendingBalanceShops",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "1291:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 167,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 166,
                        "name": "_shopId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 140,
                        "src": "1311:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1291:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 168,
                      "name": "_amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 142,
                      "src": "1323:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1291:39:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 170,
                  "nodeType": "ExpressionStatement",
                  "src": "1291:39:1"
                }
              ]
            },
            "documentation": null,
            "id": 172,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transferFunds",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 145,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 140,
                  "name": "_shopId",
                  "nodeType": "VariableDeclaration",
                  "scope": 172,
                  "src": "1108:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 139,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1108:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 142,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 172,
                  "src": "1122:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 141,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1122:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 144,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 172,
                  "src": "1136:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 143,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1136:7:1",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1107:43:1"
            },
            "returnParameters": {
              "id": 146,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1158:0:1"
            },
            "scope": 206,
            "src": "1085:252:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 204,
              "nodeType": "Block",
              "src": "1486:175:1",
              "statements": [
                {
                  "assignments": [
                    181
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 181,
                      "name": "amount",
                      "nodeType": "VariableDeclaration",
                      "scope": 204,
                      "src": "1496:11:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 180,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1496:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 185,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 182,
                      "name": "pendingBalanceShops",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 70,
                      "src": "1510:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 184,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 183,
                      "name": "_shopId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 174,
                      "src": "1530:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1510:28:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1496:42:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 190,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 186,
                        "name": "pendingBalanceShops",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 70,
                        "src": "1548:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 188,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 187,
                        "name": "_shopId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 174,
                        "src": "1568:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1548:28:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 189,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1579:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1548:32:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 191,
                  "nodeType": "ExpressionStatement",
                  "src": "1548:32:1"
                },
                {
                  "assignments": [
                    193
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 193,
                      "name": "to",
                      "nodeType": "VariableDeclaration",
                      "scope": 204,
                      "src": "1590:18:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      },
                      "typeName": {
                        "id": 192,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1590:15:1",
                        "stateMutability": "payable",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 197,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 194,
                      "name": "shops",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 74,
                      "src": "1611:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_address_payable_$",
                        "typeString": "mapping(uint256 => address payable)"
                      }
                    },
                    "id": 196,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 195,
                      "name": "_shopId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 174,
                      "src": "1617:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1611:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1590:35:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 201,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 181,
                        "src": "1647:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 198,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 193,
                        "src": "1635:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 200,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1635:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1635:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 203,
                  "nodeType": "ExpressionStatement",
                  "src": "1635:19:1"
                }
              ]
            },
            "documentation": null,
            "id": 205,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 177,
                    "name": "_shopId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 174,
                    "src": "1477:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 178,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 176,
                  "name": "shopOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 107,
                  "src": "1467:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_uint256_$",
                    "typeString": "modifier (uint256)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1467:18:1"
              }
            ],
            "name": "withdrawToShopAccount",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 175,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 174,
                  "name": "_shopId",
                  "nodeType": "VariableDeclaration",
                  "scope": 205,
                  "src": "1446:12:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 173,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1446:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1445:14:1"
            },
            "returnParameters": {
              "id": 179,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1486:0:1"
            },
            "scope": 206,
            "src": "1415:246:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 207,
        "src": "26:1638:1"
      }
    ],
    "src": "0:1666:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0x8ebE705A772fe970deC9163Fb779DF567E72cDFe",
      "transactionHash": "0x940d147c1e053cb3bf9c74b8336ee26cdd6ed21ddc86ce66ab91f0c6b4af52f4"
    },
    "1546518692758": {
      "events": {},
      "links": {},
      "address": "0xB81F2ADFe1988F45B3DEA2c4c05e8796efcd278d",
      "transactionHash": "0x447a02b7497a3a30d36125b54619b905c0d18b2aa800d28e03ff544bc8cc08c3"
    },
    "1546609997050": {
      "events": {},
      "links": {},
      "address": "0xD3c388421449d1ADaf72364C7cF9e722b3AE0EB8",
      "transactionHash": "0x3aeec620821b843a35e355cff37013de028ea48b80d21b8dae7ff8f9ed4c039a"
    }
  },
  "schemaVersion": "3.0.0",
  "updatedAt": "2019-01-05T15:03:47.119Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}]
