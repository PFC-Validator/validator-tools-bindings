import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "../../../helpers";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */

export interface TokenPairArbRoutes {
  /** Stores all of the possible hot paths for a given pair of tokens */
  arbRoutes: Route[];
  /** Token denomination of the first asset */

  tokenIn: string;
  /** Token denomination of the second asset */

  tokenOut: string;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */

export interface TokenPairArbRoutesSDKType {
  arb_routes: RouteSDKType[];
  token_in: string;
  token_out: string;
}
/** Route is a hot route for a given pair of tokens */

export interface Route {
  /**
   * The pool IDs that are travered in the directed cyclic graph (traversed left
   * -> right)
   */
  trades: Trade[];
}
/** Route is a hot route for a given pair of tokens */

export interface RouteSDKType {
  trades: TradeSDKType[];
}
/** Trade is a single trade in a route */

export interface Trade {
  /**
   * The pool IDs that are travered in the directed cyclic graph (traversed left
   * -> right)
   */
  pool: Long;
  /** The denom of token A that is traded */

  tokenIn: string;
  /** The denom of token B that is traded */

  tokenOut: string;
}
/** Trade is a single trade in a route */

export interface TradeSDKType {
  pool: Long;
  token_in: string;
  token_out: string;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */

export interface PoolStatistics {
  /** profits is the total profit from all trades on this pool */
  profits: Coin[];
  /** number_of_trades is the number of trades the module has executed */

  numberOfTrades: string;
  /** pool_id is the id of the pool */

  poolId: Long;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */

export interface PoolStatisticsSDKType {
  profits: CoinSDKType[];
  number_of_trades: string;
  pool_id: Long;
}

function createBaseTokenPairArbRoutes(): TokenPairArbRoutes {
  return {
    arbRoutes: [],
    tokenIn: "",
    tokenOut: ""
  };
}

export const TokenPairArbRoutes = {
  encode(message: TokenPairArbRoutes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.arbRoutes) {
      Route.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }

    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenPairArbRoutes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenPairArbRoutes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.arbRoutes.push(Route.decode(reader, reader.uint32()));
          break;

        case 2:
          message.tokenIn = reader.string();
          break;

        case 3:
          message.tokenOut = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<TokenPairArbRoutes>): TokenPairArbRoutes {
    const message = createBaseTokenPairArbRoutes();
    message.arbRoutes = object.arbRoutes?.map(e => Route.fromPartial(e)) || [];
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  }

};

function createBaseRoute(): Route {
  return {
    trades: []
  };
}

export const Route = {
  encode(message: Route, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Route {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoute();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.trades.push(Trade.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Route>): Route {
    const message = createBaseRoute();
    message.trades = object.trades?.map(e => Trade.fromPartial(e)) || [];
    return message;
  }

};

function createBaseTrade(): Trade {
  return {
    pool: Long.UZERO,
    tokenIn: "",
    tokenOut: ""
  };
}

export const Trade = {
  encode(message: Trade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.pool.isZero()) {
      writer.uint32(8).uint64(message.pool);
    }

    if (message.tokenIn !== "") {
      writer.uint32(18).string(message.tokenIn);
    }

    if (message.tokenOut !== "") {
      writer.uint32(26).string(message.tokenOut);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = (reader.uint64() as Long);
          break;

        case 2:
          message.tokenIn = reader.string();
          break;

        case 3:
          message.tokenOut = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Trade>): Trade {
    const message = createBaseTrade();
    message.pool = object.pool !== undefined && object.pool !== null ? Long.fromValue(object.pool) : Long.UZERO;
    message.tokenIn = object.tokenIn ?? "";
    message.tokenOut = object.tokenOut ?? "";
    return message;
  }

};

function createBasePoolStatistics(): PoolStatistics {
  return {
    profits: [],
    numberOfTrades: "",
    poolId: Long.UZERO
  };
}

export const PoolStatistics = {
  encode(message: PoolStatistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.profits) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.numberOfTrades !== "") {
      writer.uint32(18).string(message.numberOfTrades);
    }

    if (!message.poolId.isZero()) {
      writer.uint32(24).uint64(message.poolId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolStatistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolStatistics();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.profits.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.numberOfTrades = reader.string();
          break;

        case 3:
          message.poolId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<PoolStatistics>): PoolStatistics {
    const message = createBasePoolStatistics();
    message.profits = object.profits?.map(e => Coin.fromPartial(e)) || [];
    message.numberOfTrades = object.numberOfTrades ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    return message;
  }

};