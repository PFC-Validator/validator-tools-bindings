import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Schedule defines the parameters of an incentives releasing schedule */

export interface Schedule {
  /** Id is the identifier of this incentives schedule */
  id: Long;
  /** StartTime is the UNIX timestamp of which this incentives schedule shall begin */

  startTime?: Date;
  /** EndTime is the UNIX timestamp of which this incentives schedule shall finish */

  endTime?: Date;
  /**
   * TotalAmount is the total amount of coins that shall be released to stakers
   * throughout the span of this incentives schedule
   */

  totalAmount: Coin[];
  /**
   * ReleasedAmount is the amount of coins that have already been released to
   * the stakers as part of this incentives schedule
   */

  releasedAmount: Coin[];
}
/** Schedule defines the parameters of an incentives releasing schedule */

export interface ScheduleSDKType {
  id: Long;
  start_time?: Date;
  end_time?: Date;
  total_amount: CoinSDKType[];
  released_amount: CoinSDKType[];
}

function createBaseSchedule(): Schedule {
  return {
    id: Long.UZERO,
    startTime: undefined,
    endTime: undefined,
    totalAmount: [],
    releasedAmount: []
  };
}

export const Schedule = {
  encode(message: Schedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.totalAmount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.releasedAmount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.totalAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.releasedAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<Schedule>): Schedule {
    const message = createBaseSchedule();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.totalAmount = object.totalAmount?.map(e => Coin.fromPartial(e)) || [];
    message.releasedAmount = object.releasedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};