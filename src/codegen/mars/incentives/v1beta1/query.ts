import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Schedule, ScheduleSDKType } from "./store";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryScheduleRequest is the request type for the Query/Schedule RPC method */

export interface QueryScheduleRequest {
  /** ID is the identifier of the incentives schedule to be queried */
  id: Long;
}
/** QueryScheduleRequest is the request type for the Query/Schedule RPC method */

export interface QueryScheduleRequestSDKType {
  id: Long;
}
/** QueryScheduleResponse is the response type for the Query/Schedule RPC method */

export interface QueryScheduleResponse {
  /** Schedule is the parameters of the incentives schedule */
  schedule?: Schedule;
}
/** QueryScheduleResponse is the response type for the Query/Schedule RPC method */

export interface QueryScheduleResponseSDKType {
  schedule?: ScheduleSDKType;
}
/** QuerySchedulesRequest is the request type for the Query/Schedules RPC method */

export interface QuerySchedulesRequest {
  /** Pagination defines an optional pagination for the request */
  pagination?: PageRequest;
}
/** QuerySchedulesRequest is the request type for the Query/Schedules RPC method */

export interface QuerySchedulesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryScheduleResponse is the response type for the Query/Schedules RPC method */

export interface QuerySchedulesResponse {
  /** Schedule is the parameters of the incentives schedule */
  schedules: Schedule[];
  /** Pagination defines the pagination in the response */

  pagination?: PageResponse;
}
/** QueryScheduleResponse is the response type for the Query/Schedules RPC method */

export interface QuerySchedulesResponseSDKType {
  schedules: ScheduleSDKType[];
  pagination?: PageResponseSDKType;
}

function createBaseQueryScheduleRequest(): QueryScheduleRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryScheduleRequest = {
  encode(message: QueryScheduleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScheduleRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryScheduleRequest>): QueryScheduleRequest {
    const message = createBaseQueryScheduleRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryScheduleResponse(): QueryScheduleResponse {
  return {
    schedule: undefined
  };
}

export const QueryScheduleResponse = {
  encode(message: QueryScheduleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.schedule !== undefined) {
      Schedule.encode(message.schedule, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScheduleResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.schedule = Schedule.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QueryScheduleResponse>): QueryScheduleResponse {
    const message = createBaseQueryScheduleResponse();
    message.schedule = object.schedule !== undefined && object.schedule !== null ? Schedule.fromPartial(object.schedule) : undefined;
    return message;
  }

};

function createBaseQuerySchedulesRequest(): QuerySchedulesRequest {
  return {
    pagination: undefined
  };
}

export const QuerySchedulesRequest = {
  encode(message: QuerySchedulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySchedulesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySchedulesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySchedulesRequest>): QuerySchedulesRequest {
    const message = createBaseQuerySchedulesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySchedulesResponse(): QuerySchedulesResponse {
  return {
    schedules: [],
    pagination: undefined
  };
}

export const QuerySchedulesResponse = {
  encode(message: QuerySchedulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.schedules) {
      Schedule.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySchedulesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySchedulesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.schedules.push(Schedule.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<QuerySchedulesResponse>): QuerySchedulesResponse {
    const message = createBaseQuerySchedulesResponse();
    message.schedules = object.schedules?.map(e => Schedule.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};