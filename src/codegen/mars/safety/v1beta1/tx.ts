import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * MsgSafetyFundSpend defines the message for sending tokens from the safety
 * fund to a designated recipient.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */

export interface MsgSafetyFundSpend {
  /**
   * Authority is the account executing the safety fund spend.
   * It should be the gov module account.
   */
  authority: string;
  /** Recipient is the account to receive the funds */

  recipient: string;
  /** Amount is the coins that are to be released from the safety funds */

  amount: Coin[];
}
/**
 * MsgSafetyFundSpend defines the message for sending tokens from the safety
 * fund to a designated recipient.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */

export interface MsgSafetyFundSpendSDKType {
  authority: string;
  recipient: string;
  amount: CoinSDKType[];
}
/**
 * MsgSafetyFundSpendResponse defines the response to executing a
 * MsgSafetyFundSpend message.
 */

export interface MsgSafetyFundSpendResponse {}
/**
 * MsgSafetyFundSpendResponse defines the response to executing a
 * MsgSafetyFundSpend message.
 */

export interface MsgSafetyFundSpendResponseSDKType {}

function createBaseMsgSafetyFundSpend(): MsgSafetyFundSpend {
  return {
    authority: "",
    recipient: "",
    amount: []
  };
}

export const MsgSafetyFundSpend = {
  encode(message: MsgSafetyFundSpend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSafetyFundSpend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSafetyFundSpend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.recipient = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSafetyFundSpend>): MsgSafetyFundSpend {
    const message = createBaseMsgSafetyFundSpend();
    message.authority = object.authority ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgSafetyFundSpendResponse(): MsgSafetyFundSpendResponse {
  return {};
}

export const MsgSafetyFundSpendResponse = {
  encode(_: MsgSafetyFundSpendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSafetyFundSpendResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSafetyFundSpendResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(_: DeepPartial<MsgSafetyFundSpendResponse>): MsgSafetyFundSpendResponse {
    const message = createBaseMsgSafetyFundSpendResponse();
    return message;
  }

};