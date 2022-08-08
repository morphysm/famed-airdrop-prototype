/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ApprovedRewards,
  ApprovedRewardsInterface,
} from "../ApprovedRewards";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_rewardId",
        type: "bytes32",
      },
      {
        internalType: "enum ApprovedRewards.RewardType",
        name: "_rewardType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "addReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        internalType: "enum ApprovedRewards.RewardType",
        name: "rewardType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b61080d8061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80634f6944081461005c578063715018a6146100785780638da5cb5b14610082578063938d967a146100a0578063f2fde38b146100d2575b600080fd5b610076600480360381019061007191906104dc565b6100ee565b005b6100806101e7565b005b61008a6101fb565b60405161009791906105ad565b60405180910390f35b6100ba60048036038101906100b591906104b3565b610224565b6040516100c9939291906105c8565b60405180910390f35b6100ec60048036038101906100e7919061048a565b610268565b005b6100f66102ec565b6040518060600160405280600115158152602001836001811115610143577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8152602001828152506001600085815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff021916908360018111156101d0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b021790555060408201518160010155905050505050565b6101ef6102ec565b6101f9600061036a565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60016020528060005260406000206000915090508060000160009054906101000a900460ff16908060000160019054906101000a900460ff16908060010154905083565b6102706102ec565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156102e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102d7906105ff565b60405180910390fd5b6102e98161036a565b50565b6102f461042e565b73ffffffffffffffffffffffffffffffffffffffff166103126101fb565b73ffffffffffffffffffffffffffffffffffffffff1614610368576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035f9061061f565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b60008135905061044581610782565b92915050565b60008135905061045a81610799565b92915050565b60008135905061046f816107b0565b92915050565b600081359050610484816107c0565b92915050565b60006020828403121561049c57600080fd5b60006104aa84828501610436565b91505092915050565b6000602082840312156104c557600080fd5b60006104d38482850161044b565b91505092915050565b6000806000606084860312156104f157600080fd5b60006104ff8682870161044b565b935050602061051086828701610460565b925050604061052186828701610475565b9150509250925092565b61053481610650565b82525050565b61054381610662565b82525050565b610552816106b5565b82525050565b600061056560268361063f565b9150610570826106f6565b604082019050919050565b600061058860208361063f565b915061059382610745565b602082019050919050565b6105a7816106ab565b82525050565b60006020820190506105c2600083018461052b565b92915050565b60006060820190506105dd600083018661053a565b6105ea6020830185610549565b6105f7604083018461059e565b949350505050565b6000602082019050818103600083015261061881610558565b9050919050565b600060208201905081810360008301526106388161057b565b9050919050565b600082825260208201905092915050565b600061065b8261068b565b9050919050565b60008115159050919050565b6000819050919050565b60008190506106868261076e565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006106c082610678565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6002811061077f5761077e6106c7565b5b50565b61078b81610650565b811461079657600080fd5b50565b6107a28161066e565b81146107ad57600080fd5b50565b600281106107bd57600080fd5b50565b6107c9816106ab565b81146107d457600080fd5b5056fea2646970667358221220637e58598ca16d746f8d8c366c689ffed99157beb482e34286a5da10c9d16a3564736f6c63430008040033";

export class ApprovedRewards__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ApprovedRewards> {
    return super.deploy(overrides || {}) as Promise<ApprovedRewards>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ApprovedRewards {
    return super.attach(address) as ApprovedRewards;
  }
  connect(signer: Signer): ApprovedRewards__factory {
    return super.connect(signer) as ApprovedRewards__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ApprovedRewardsInterface {
    return new utils.Interface(_abi) as ApprovedRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ApprovedRewards {
    return new Contract(address, _abi, signerOrProvider) as ApprovedRewards;
  }
}