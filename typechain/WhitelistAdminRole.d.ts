/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface WhitelistAdminRoleInterface extends ethers.utils.Interface {
  functions: {
    "addWhitelistAdmin(address)": FunctionFragment;
    "isWhitelistAdmin(address)": FunctionFragment;
    "renounceWhitelistAdmin()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addWhitelistAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelistAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceWhitelistAdmin",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addWhitelistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceWhitelistAdmin",
    data: BytesLike
  ): Result;

  events: {
    "WhitelistAdminAdded(address)": EventFragment;
    "WhitelistAdminRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WhitelistAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistAdminRemoved"): EventFragment;
}

export class WhitelistAdminRole extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: WhitelistAdminRoleInterface;

  functions: {
    addWhitelistAdmin(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceWhitelistAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addWhitelistAdmin(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isWhitelistAdmin(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renounceWhitelistAdmin(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceWhitelistAdmin(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    WhitelistAdminAdded(
      account?: string | null
    ): TypedEventFilter<[string], { account: string }>;

    WhitelistAdminRemoved(
      account?: string | null
    ): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    addWhitelistAdmin(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceWhitelistAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addWhitelistAdmin(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceWhitelistAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
