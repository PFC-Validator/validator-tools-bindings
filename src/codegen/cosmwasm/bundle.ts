import * as _95 from "./wasm/v1/authz";
import * as _96 from "./wasm/v1/genesis";
import * as _97 from "./wasm/v1/ibc";
import * as _98 from "./wasm/v1/proposal";
import * as _99 from "./wasm/v1/query";
import * as _100 from "./wasm/v1/tx";
import * as _101 from "./wasm/v1/types";
import * as _338 from "./wasm/v1/tx.amino";
import * as _339 from "./wasm/v1/tx.registry";
import * as _340 from "./wasm/v1/query.lcd";
import * as _341 from "./wasm/v1/query.rpc.Query";
import * as _342 from "./wasm/v1/tx.rpc.msg";
import * as _473 from "./lcd";
import * as _474 from "./rpc.query";
import * as _475 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._100,
      ..._101,
      ..._338,
      ..._339,
      ..._340,
      ..._341,
      ..._342
    };
  }
  export const ClientFactory = { ..._473,
    ..._474,
    ..._475
  };
}