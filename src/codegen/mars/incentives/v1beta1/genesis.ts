import { Schedule, ScheduleSDKType } from "./store";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the incentives module's genesis state */

export interface GenesisState {
  /** NextScheduleId is the id for the next incentives schedule to be created */
  nextScheduleId: Long;
  /** Schedules is an array of active incentives schedules */

  schedules: Schedule[];
}
/** GenesisState defines the incentives module's genesis state */

export interface GenesisStateSDKType {
  next_schedule_id: Long;
  schedules: ScheduleSDKType[];
}

function createBaseGenesisState(): GenesisState {
  return {
    nextScheduleId: Long.UZERO,
    schedules: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.nextScheduleId.isZero()) {
      writer.uint32(8).uint64(message.nextScheduleId);
    }

    for (const v of message.schedules) {
      Schedule.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextScheduleId = (reader.uint64() as Long);
          break;

        case 2:
          message.schedules.push(Schedule.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.nextScheduleId = object.nextScheduleId !== undefined && object.nextScheduleId !== null ? Long.fromValue(object.nextScheduleId) : Long.UZERO;
    message.schedules = object.schedules?.map(e => Schedule.fromPartial(e)) || [];
    return message;
  }

};