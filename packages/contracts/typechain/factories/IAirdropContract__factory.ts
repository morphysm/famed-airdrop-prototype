/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IAirdropContract,
  IAirdropContractInterface,
} from "../IAirdropContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_firstNFTID",
        type: "uint256",
      },
    ],
    name: "setWorldBaseTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IAirdropContract__factory {
  static readonly abi = _abi;
  static createInterface(): IAirdropContractInterface {
    return new utils.Interface(_abi) as IAirdropContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAirdropContract {
    return new Contract(address, _abi, signerOrProvider) as IAirdropContract;
  }
}
