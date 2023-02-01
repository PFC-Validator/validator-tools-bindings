import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** QueBalancesRequest is the request type of the QuerBalancesRPC method */

export interface QueryBalancesRequest {}
/** QueBalancesRequest is the request type of the QuerBalancesRPC method */

export interface QueryBalancesRequestSDKType {}
/** QueBalancesResponse is the response type of the QuerBalancesRPC method */

export interface QueryBalancesResponse {
  /** Balances is the coins available in the safety fund */
  balances: Coin[];
}
/** QueBalancesResponse is the response type of the QuerBalancesRPC method */

export interface QueryBalancesResponseSDKType {
  balances: CoinSDKType[];
}

function createBaseQueryBalancesRequest(): QueryBalancesRequest {
  return {};
}

export const QueryBalancesRequest = {
  encode(_: QueryBalancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesRequest();

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

  fromPartial(_: DeepPartial<QueryBalancesRequest>): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    return message;
  }

};

function createBaseQueryBalancesResponse(): QueryBalancesResponse {
  return {
    balances: []
  };
}

export const QueryBalancesResponse = {
  encode(message: QueryBalancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryBalancesResponse>): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.balances = object.balances?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};