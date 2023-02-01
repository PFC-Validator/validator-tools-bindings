import * as _179 from "./downtime-detector/v1beta1/downtime_duration";
import * as _180 from "./downtime-detector/v1beta1/genesis";
import * as _181 from "./downtime-detector/v1beta1/query";
import * as _182 from "./epochs/genesis";
import * as _183 from "./epochs/query";
import * as _184 from "./gamm/pool-models/balancer/balancerPool";
import * as _185 from "./gamm/v1beta1/genesis";
import * as _186 from "./gamm/v1beta1/query";
import * as _187 from "./gamm/v1beta1/tx";
import * as _188 from "./gamm/pool-models/balancer/tx/tx";
import * as _189 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _190 from "./gamm/pool-models/stableswap/tx";
import * as _191 from "./gamm/v2/query";
import * as _192 from "./ibc-rate-limit/v1beta1/params";
import * as _193 from "./ibc-rate-limit/v1beta1/query";
import * as _194 from "./incentives/gauge";
import * as _195 from "./incentives/genesis";
import * as _196 from "./incentives/params";
import * as _197 from "./incentives/query";
import * as _198 from "./incentives/tx";
import * as _199 from "./lockup/genesis";
import * as _200 from "./lockup/lock";
import * as _201 from "./lockup/params";
import * as _202 from "./lockup/query";
import * as _203 from "./lockup/tx";
import * as _204 from "./mint/v1beta1/genesis";
import * as _205 from "./mint/v1beta1/mint";
import * as _206 from "./mint/v1beta1/query";
import * as _207 from "./pool-incentives/v1beta1/genesis";
import * as _208 from "./pool-incentives/v1beta1/gov";
import * as _209 from "./pool-incentives/v1beta1/incentives";
import * as _210 from "./pool-incentives/v1beta1/query";
import * as _211 from "./protorev/v1beta1/genesis";
import * as _212 from "./protorev/v1beta1/gov";
import * as _213 from "./protorev/v1beta1/params";
import * as _214 from "./protorev/v1beta1/protorev";
import * as _215 from "./protorev/v1beta1/query";
import * as _216 from "./protorev/v1beta1/tx";
import * as _217 from "./sumtree/v1beta1/tree";
import * as _218 from "./superfluid/genesis";
import * as _219 from "./superfluid/params";
import * as _220 from "./superfluid/query";
import * as _221 from "./superfluid/superfluid";
import * as _222 from "./superfluid/tx";
import * as _223 from "./swaprouter/v1beta1/genesis";
import * as _224 from "./swaprouter/v1beta1/module_route";
import * as _225 from "./swaprouter/v1beta1/query";
import * as _226 from "./swaprouter/v1beta1/swap_route";
import * as _227 from "./swaprouter/v1beta1/tx";
import * as _228 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _229 from "./tokenfactory/v1beta1/genesis";
import * as _230 from "./tokenfactory/v1beta1/params";
import * as _231 from "./tokenfactory/v1beta1/query";
import * as _232 from "./tokenfactory/v1beta1/tx";
import * as _233 from "./twap/v1beta1/genesis";
import * as _234 from "./twap/v1beta1/query";
import * as _235 from "./twap/v1beta1/twap_record";
import * as _236 from "./txfees/v1beta1/feetoken";
import * as _237 from "./txfees/v1beta1/genesis";
import * as _238 from "./txfees/v1beta1/gov";
import * as _239 from "./txfees/v1beta1/query";
import * as _240 from "./valset-pref/v1beta1/query";
import * as _241 from "./valset-pref/v1beta1/state";
import * as _242 from "./valset-pref/v1beta1/tx";
import * as _391 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _392 from "./gamm/pool-models/stableswap/tx.amino";
import * as _393 from "./gamm/v1beta1/tx.amino";
import * as _394 from "./incentives/tx.amino";
import * as _395 from "./lockup/tx.amino";
import * as _396 from "./protorev/v1beta1/tx.amino";
import * as _397 from "./superfluid/tx.amino";
import * as _398 from "./swaprouter/v1beta1/tx.amino";
import * as _399 from "./tokenfactory/v1beta1/tx.amino";
import * as _400 from "./valset-pref/v1beta1/tx.amino";
import * as _401 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _402 from "./gamm/pool-models/stableswap/tx.registry";
import * as _403 from "./gamm/v1beta1/tx.registry";
import * as _404 from "./incentives/tx.registry";
import * as _405 from "./lockup/tx.registry";
import * as _406 from "./protorev/v1beta1/tx.registry";
import * as _407 from "./superfluid/tx.registry";
import * as _408 from "./swaprouter/v1beta1/tx.registry";
import * as _409 from "./tokenfactory/v1beta1/tx.registry";
import * as _410 from "./valset-pref/v1beta1/tx.registry";
import * as _411 from "./downtime-detector/v1beta1/query.lcd";
import * as _412 from "./epochs/query.lcd";
import * as _413 from "./gamm/v1beta1/query.lcd";
import * as _414 from "./gamm/v2/query.lcd";
import * as _415 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _416 from "./incentives/query.lcd";
import * as _417 from "./lockup/query.lcd";
import * as _418 from "./mint/v1beta1/query.lcd";
import * as _419 from "./pool-incentives/v1beta1/query.lcd";
import * as _420 from "./protorev/v1beta1/query.lcd";
import * as _421 from "./superfluid/query.lcd";
import * as _422 from "./swaprouter/v1beta1/query.lcd";
import * as _423 from "./tokenfactory/v1beta1/query.lcd";
import * as _424 from "./twap/v1beta1/query.lcd";
import * as _425 from "./txfees/v1beta1/query.lcd";
import * as _426 from "./valset-pref/v1beta1/query.lcd";
import * as _427 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _428 from "./epochs/query.rpc.Query";
import * as _429 from "./gamm/v1beta1/query.rpc.Query";
import * as _430 from "./gamm/v2/query.rpc.Query";
import * as _431 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _432 from "./incentives/query.rpc.Query";
import * as _433 from "./lockup/query.rpc.Query";
import * as _434 from "./mint/v1beta1/query.rpc.Query";
import * as _435 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _436 from "./protorev/v1beta1/query.rpc.Query";
import * as _437 from "./superfluid/query.rpc.Query";
import * as _438 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _439 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _440 from "./twap/v1beta1/query.rpc.Query";
import * as _441 from "./txfees/v1beta1/query.rpc.Query";
import * as _442 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _443 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _444 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _445 from "./gamm/v1beta1/tx.rpc.msg";
import * as _446 from "./incentives/tx.rpc.msg";
import * as _447 from "./lockup/tx.rpc.msg";
import * as _448 from "./protorev/v1beta1/tx.rpc.msg";
import * as _449 from "./superfluid/tx.rpc.msg";
import * as _450 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _451 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _452 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _467 from "./lcd";
import * as _468 from "./rpc.query";
import * as _469 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = { ..._179,
      ..._180,
      ..._181,
      ..._411,
      ..._427
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._182,
      ..._183,
      ..._412,
      ..._428
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._393,
      ..._403,
      ..._413,
      ..._429,
      ..._445
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._188,
          ..._391,
          ..._401,
          ..._443
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._189,
          ..._190,
          ..._392,
          ..._402,
          ..._444
        };
      }
    }
    export const v2 = { ..._191,
      ..._414,
      ..._430
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._192,
      ..._193,
      ..._415,
      ..._431
    };
  }
  export const incentives = { ..._194,
    ..._195,
    ..._196,
    ..._197,
    ..._198,
    ..._394,
    ..._404,
    ..._416,
    ..._432,
    ..._446
  };
  export const lockup = { ..._199,
    ..._200,
    ..._201,
    ..._202,
    ..._203,
    ..._395,
    ..._405,
    ..._417,
    ..._433,
    ..._447
  };
  export namespace mint {
    export const v1beta1 = { ..._204,
      ..._205,
      ..._206,
      ..._418,
      ..._434
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._207,
      ..._208,
      ..._209,
      ..._210,
      ..._419,
      ..._435
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._215,
      ..._216,
      ..._396,
      ..._406,
      ..._420,
      ..._436,
      ..._448
    };
  }
  export namespace store {
    export const v1beta1 = { ..._217
    };
  }
  export const superfluid = { ..._218,
    ..._219,
    ..._220,
    ..._221,
    ..._222,
    ..._397,
    ..._407,
    ..._421,
    ..._437,
    ..._449
  };
  export namespace swaprouter {
    export const v1beta1 = { ..._223,
      ..._224,
      ..._225,
      ..._226,
      ..._227,
      ..._398,
      ..._408,
      ..._422,
      ..._438,
      ..._450
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = { ..._228,
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._399,
      ..._409,
      ..._423,
      ..._439,
      ..._451
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._233,
      ..._234,
      ..._235,
      ..._424,
      ..._440
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._425,
      ..._441
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._240,
      ..._241,
      ..._242,
      ..._400,
      ..._410,
      ..._426,
      ..._442,
      ..._452
    };
  }
  export const ClientFactory = { ..._467,
    ..._468,
    ..._469
  };
}