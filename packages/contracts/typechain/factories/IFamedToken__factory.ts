/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IFamedToken, IFamedTokenInterface } from "../IFamedToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFamedToken__factory {
  static readonly abi = _abi;
  static createInterface(): IFamedTokenInterface {
    return new utils.Interface(_abi) as IFamedTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFamedToken {
    return new Contract(address, _abi, signerOrProvider) as IFamedToken;
  }
}
