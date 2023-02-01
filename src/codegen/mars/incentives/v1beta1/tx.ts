import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, DeepPartial, Long } from "../../../helpers";
/**
 * MsgCreateSchedule defines the message for creating a new incentives schedule.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */

export interface MsgCreateSchedule {
  /**
   * Authority is the account executing the safety fund spend.
   * It should be the gov module account.
   */
  authority: string;
  /** StartTime is the timestamp at which this incentives schedule shall begin. */

  startTime?: Date;
  /** EndTime is the timestamp at which this incentives schedule shall finish. */

  endTime?: Date;
  /**
   * Amount is the total amount of coins that shall be released to stakers
   * throughout the span of this incentives schedule.
   */

  amount: Coin[];
}
/**
 * MsgCreateSchedule defines the message for creating a new incentives schedule.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */

export interface MsgCreateScheduleSDKType {
  authority: string;
  start_time?: Date;
  end_time?: Date;
  amount: CoinSDKType[];
}
/**
 * MsgCreateScheduleResponse defines the response to executing a
 * MsgCreateSchedule message.
 */

export interface MsgCreateScheduleResponse {}
/**
 * MsgCreateScheduleResponse defines the response to executing a
 * MsgCreateSchedule message.
 */

export interface MsgCreateScheduleResponseSDKType {}
/**
 * MsgTerminateSchedules defines the message for terminating one or more
 * existing incentives schedules.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */

export interface MsgTerminateSchedules {
  /**
   * Authority is the account executing the safety fund spend.
   * It should be the gov module account.
   */
  authority: string;
  /**
   * Ids is the array of identifiers of the incentives schedules which are to be
   * terminated.
   */

  ids: Long[];
}
/**
 * MsgTerminateSchedules defines the message for terminating one or more
 * existing incentives schedules.
 * 
 * This message is typically executed via a governance proposal with the gov
 * module being the executing authority.
 */

export interface MsgTerminateSchedulesSDKType {
  authority: string;
  ids: Long[];
}
/**
 * MsgTerminateSchedulesResponse defines the response to executing a
 * MsgTerminateSchedules message.
 */

export interface MsgTerminateSchedulesResponse {
  /**
   * RefundedAmount is the unreleased incentives that were refunded to the
   * community pool.
   */
  refundedAmount: Coin[];
}
/**
 * MsgTerminateSchedulesResponse defines the response to executing a
 * MsgTerminateSchedules message.
 */

export interface MsgTerminateSchedulesResponseSDKType {
  refunded_amount: CoinSDKType[];
}

function createBaseMsgCreateSchedule(): MsgCreateSchedule {
  return {
    authority: "",
    startTime: undefined,
    endTime: undefined,
    amount: []
  };
}

export const MsgCreateSchedule = {
  encode(message: MsgCreateSchedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }

    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSchedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateSchedule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgCreateSchedule>): MsgCreateSchedule {
    const message = createBaseMsgCreateSchedule();
    message.authority = object.authority ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgCreateScheduleResponse(): MsgCreateScheduleResponse {
  return {};
}

export const MsgCreateScheduleResponse = {
  encode(_: MsgCreateScheduleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateScheduleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateScheduleResponse();

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

  fromPartial(_: DeepPartial<MsgCreateScheduleResponse>): MsgCreateScheduleResponse {
    const message = createBaseMsgCreateScheduleResponse();
    return message;
  }

};

function createBaseMsgTerminateSchedules(): MsgTerminateSchedules {
  return {
    authority: "",
    ids: []
  };
}

export const MsgTerminateSchedules = {
  encode(message: MsgTerminateSchedules, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }

    writer.uint32(18).fork();

    for (const v of message.ids) {
      writer.uint64(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTerminateSchedules {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTerminateSchedules();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;

        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.ids.push((reader.uint64() as Long));
            }
          } else {
            message.ids.push((reader.uint64() as Long));
          }

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgTerminateSchedules>): MsgTerminateSchedules {
    const message = createBaseMsgTerminateSchedules();
    message.authority = object.authority ?? "";
    message.ids = object.ids?.map(e => Long.fromValue(e)) || [];
    return message;
  }

};

function createBaseMsgTerminateSchedulesResponse(): MsgTerminateSchedulesResponse {
  return {
    refundedAmount: []
  };
}

export const MsgTerminateSchedulesResponse = {
  encode(message: MsgTerminateSchedulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.refundedAmount) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTerminateSchedulesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTerminateSchedulesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 5:
          message.refundedAmount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgTerminateSchedulesResponse>): MsgTerminateSchedulesResponse {
    const message = createBaseMsgTerminateSchedulesResponse();
    message.refundedAmount = object.refundedAmount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};