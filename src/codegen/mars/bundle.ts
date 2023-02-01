import * as _179 from "./incentives/v1beta1/genesis";
import * as _180 from "./incentives/v1beta1/query";
import * as _181 from "./incentives/v1beta1/store";
import * as _182 from "./incentives/v1beta1/tx";
import * as _183 from "./safety/v1beta1/genesis";
import * as _184 from "./safety/v1beta1/query";
import * as _185 from "./safety/v1beta1/tx";
import * as _398 from "./incentives/v1beta1/tx.amino";
import * as _399 from "./safety/v1beta1/tx.amino";
import * as _400 from "./incentives/v1beta1/tx.registry";
import * as _401 from "./safety/v1beta1/tx.registry";
import * as _402 from "./incentives/v1beta1/query.lcd";
import * as _403 from "./safety/v1beta1/query.lcd";
import * as _404 from "./incentives/v1beta1/query.rpc.Query";
import * as _405 from "./safety/v1beta1/query.rpc.Query";
import * as _406 from "./incentives/v1beta1/tx.rpc.msg";
import * as _407 from "./safety/v1beta1/tx.rpc.msg";
import * as _484 from "./lcd";
import * as _485 from "./rpc.query";
import * as _486 from "./rpc.tx";
export namespace mars {
  export namespace incentives {
    export const v1beta1 = { ..._179,
      ..._180,
      ..._181,
      ..._182,
      ..._398,
      ..._400,
      ..._402,
      ..._404,
      ..._406
    };
  }
  export namespace safety {
    export const v1beta1 = { ..._183,
      ..._184,
      ..._185,
      ..._399,
      ..._401,
      ..._403,
      ..._405,
      ..._407
    };
  }
  export const ClientFactory = { ..._484,
    ..._485,
    ..._486
  };
}