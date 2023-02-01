import * as _186 from "./downtime-detector/v1beta1/downtime_duration";
import * as _187 from "./downtime-detector/v1beta1/genesis";
import * as _188 from "./downtime-detector/v1beta1/query";
import * as _189 from "./epochs/genesis";
import * as _190 from "./epochs/query";
import * as _191 from "./gamm/pool-models/balancer/balancerPool";
import * as _192 from "./gamm/v1beta1/genesis";
import * as _193 from "./gamm/v1beta1/query";
import * as _194 from "./gamm/v1beta1/tx";
import * as _195 from "./gamm/pool-models/balancer/tx/tx";
import * as _196 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _197 from "./gamm/pool-models/stableswap/tx";
import * as _198 from "./gamm/v2/query";
import * as _199 from "./ibc-rate-limit/v1beta1/params";
import * as _200 from "./ibc-rate-limit/v1beta1/query";
import * as _201 from "./incentives/gauge";
import * as _202 from "./incentives/genesis";
import * as _203 from "./incentives/params";
import * as _204 from "./incentives/query";
import * as _205 from "./incentives/tx";
import * as _206 from "./lockup/genesis";
import * as _207 from "./lockup/lock";
import * as _208 from "./lockup/params";
import * as _209 from "./lockup/query";
import * as _210 from "./lockup/tx";
import * as _211 from "./mint/v1beta1/genesis";
import * as _212 from "./mint/v1beta1/mint";
import * as _213 from "./mint/v1beta1/query";
import * as _214 from "./pool-incentives/v1beta1/genesis";
import * as _215 from "./pool-incentives/v1beta1/gov";
import * as _216 from "./pool-incentives/v1beta1/incentives";
import * as _217 from "./pool-incentives/v1beta1/query";
import * as _218 from "./protorev/v1beta1/genesis";
import * as _219 from "./protorev/v1beta1/gov";
import * as _220 from "./protorev/v1beta1/params";
import * as _221 from "./protorev/v1beta1/protorev";
import * as _222 from "./protorev/v1beta1/query";
import * as _223 from "./protorev/v1beta1/tx";
import * as _224 from "./sumtree/v1beta1/tree";
import * as _225 from "./superfluid/genesis";
import * as _226 from "./superfluid/params";
import * as _227 from "./superfluid/query";
import * as _228 from "./superfluid/superfluid";
import * as _229 from "./superfluid/tx";
import * as _230 from "./swaprouter/v1beta1/genesis";
import * as _231 from "./swaprouter/v1beta1/module_route";
import * as _232 from "./swaprouter/v1beta1/query";
import * as _233 from "./swaprouter/v1beta1/swap_route";
import * as _234 from "./swaprouter/v1beta1/tx";
import * as _235 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _236 from "./tokenfactory/v1beta1/genesis";
import * as _237 from "./tokenfactory/v1beta1/params";
import * as _238 from "./tokenfactory/v1beta1/query";
import * as _239 from "./tokenfactory/v1beta1/tx";
import * as _240 from "./twap/v1beta1/genesis";
import * as _241 from "./twap/v1beta1/query";
import * as _242 from "./twap/v1beta1/twap_record";
import * as _243 from "./txfees/v1beta1/feetoken";
import * as _244 from "./txfees/v1beta1/genesis";
import * as _245 from "./txfees/v1beta1/gov";
import * as _246 from "./txfees/v1beta1/query";
import * as _247 from "./valset-pref/v1beta1/query";
import * as _248 from "./valset-pref/v1beta1/state";
import * as _249 from "./valset-pref/v1beta1/tx";
import * as _408 from "./gamm/pool-models/balancer/tx/tx.amino";
import * as _409 from "./gamm/pool-models/stableswap/tx.amino";
import * as _410 from "./gamm/v1beta1/tx.amino";
import * as _411 from "./incentives/tx.amino";
import * as _412 from "./lockup/tx.amino";
import * as _413 from "./protorev/v1beta1/tx.amino";
import * as _414 from "./superfluid/tx.amino";
import * as _415 from "./swaprouter/v1beta1/tx.amino";
import * as _416 from "./tokenfactory/v1beta1/tx.amino";
import * as _417 from "./valset-pref/v1beta1/tx.amino";
import * as _418 from "./gamm/pool-models/balancer/tx/tx.registry";
import * as _419 from "./gamm/pool-models/stableswap/tx.registry";
import * as _420 from "./gamm/v1beta1/tx.registry";
import * as _421 from "./incentives/tx.registry";
import * as _422 from "./lockup/tx.registry";
import * as _423 from "./protorev/v1beta1/tx.registry";
import * as _424 from "./superfluid/tx.registry";
import * as _425 from "./swaprouter/v1beta1/tx.registry";
import * as _426 from "./tokenfactory/v1beta1/tx.registry";
import * as _427 from "./valset-pref/v1beta1/tx.registry";
import * as _428 from "./downtime-detector/v1beta1/query.lcd";
import * as _429 from "./epochs/query.lcd";
import * as _430 from "./gamm/v1beta1/query.lcd";
import * as _431 from "./gamm/v2/query.lcd";
import * as _432 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _433 from "./incentives/query.lcd";
import * as _434 from "./lockup/query.lcd";
import * as _435 from "./mint/v1beta1/query.lcd";
import * as _436 from "./pool-incentives/v1beta1/query.lcd";
import * as _437 from "./protorev/v1beta1/query.lcd";
import * as _438 from "./superfluid/query.lcd";
import * as _439 from "./swaprouter/v1beta1/query.lcd";
import * as _440 from "./tokenfactory/v1beta1/query.lcd";
import * as _441 from "./twap/v1beta1/query.lcd";
import * as _442 from "./txfees/v1beta1/query.lcd";
import * as _443 from "./valset-pref/v1beta1/query.lcd";
import * as _444 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _445 from "./epochs/query.rpc.Query";
import * as _446 from "./gamm/v1beta1/query.rpc.Query";
import * as _447 from "./gamm/v2/query.rpc.Query";
import * as _448 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _449 from "./incentives/query.rpc.Query";
import * as _450 from "./lockup/query.rpc.Query";
import * as _451 from "./mint/v1beta1/query.rpc.Query";
import * as _452 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _453 from "./protorev/v1beta1/query.rpc.Query";
import * as _454 from "./superfluid/query.rpc.Query";
import * as _455 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _456 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _457 from "./twap/v1beta1/query.rpc.Query";
import * as _458 from "./txfees/v1beta1/query.rpc.Query";
import * as _459 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _460 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _461 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _462 from "./gamm/v1beta1/tx.rpc.msg";
import * as _463 from "./incentives/tx.rpc.msg";
import * as _464 from "./lockup/tx.rpc.msg";
import * as _465 from "./protorev/v1beta1/tx.rpc.msg";
import * as _466 from "./superfluid/tx.rpc.msg";
import * as _467 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _468 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _469 from "./valset-pref/v1beta1/tx.rpc.msg";
import * as _487 from "./lcd";
import * as _488 from "./rpc.query";
import * as _489 from "./rpc.tx";
export namespace osmosis {
  export namespace downtimedetector {
    export const v1beta1 = { ..._186,
      ..._187,
      ..._188,
      ..._428,
      ..._444
    };
  }
  export namespace epochs {
    export const v1beta1 = { ..._189,
      ..._190,
      ..._429,
      ..._445
    };
  }
  export namespace gamm {
    export const v1beta1 = { ..._191,
      ..._192,
      ..._193,
      ..._194,
      ..._410,
      ..._420,
      ..._430,
      ..._446,
      ..._462
    };
    export namespace poolmodels {
      export namespace balancer {
        export const v1beta1 = { ..._195,
          ..._408,
          ..._418,
          ..._460
        };
      }
      export namespace stableswap {
        export const v1beta1 = { ..._196,
          ..._197,
          ..._409,
          ..._419,
          ..._461
        };
      }
    }
    export const v2 = { ..._198,
      ..._431,
      ..._447
    };
  }
  export namespace ibcratelimit {
    export const v1beta1 = { ..._199,
      ..._200,
      ..._432,
      ..._448
    };
  }
  export const incentives = { ..._201,
    ..._202,
    ..._203,
    ..._204,
    ..._205,
    ..._411,
    ..._421,
    ..._433,
    ..._449,
    ..._463
  };
  export const lockup = { ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._412,
    ..._422,
    ..._434,
    ..._450,
    ..._464
  };
  export namespace mint {
    export const v1beta1 = { ..._211,
      ..._212,
      ..._213,
      ..._435,
      ..._451
    };
  }
  export namespace poolincentives {
    export const v1beta1 = { ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._436,
      ..._452
    };
  }
  export namespace protorev {
    export const v1beta1 = { ..._218,
      ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._223,
      ..._413,
      ..._423,
      ..._437,
      ..._453,
      ..._465
    };
  }
  export namespace store {
    export const v1beta1 = { ..._224
    };
  }
  export const superfluid = { ..._225,
    ..._226,
    ..._227,
    ..._228,
    ..._229,
    ..._414,
    ..._424,
    ..._438,
    ..._454,
    ..._466
  };
  export namespace swaprouter {
    export const v1beta1 = { ..._230,
      ..._231,
      ..._232,
      ..._233,
      ..._234,
      ..._415,
      ..._425,
      ..._439,
      ..._455,
      ..._467
    };
  }
  export namespace tokenfactory {
    export const v1beta1 = { ..._235,
      ..._236,
      ..._237,
      ..._238,
      ..._239,
      ..._416,
      ..._426,
      ..._440,
      ..._456,
      ..._468
    };
  }
  export namespace twap {
    export const v1beta1 = { ..._240,
      ..._241,
      ..._242,
      ..._441,
      ..._457
    };
  }
  export namespace txfees {
    export const v1beta1 = { ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._442,
      ..._458
    };
  }
  export namespace valsetpref {
    export const v1beta1 = { ..._247,
      ..._248,
      ..._249,
      ..._417,
      ..._427,
      ..._443,
      ..._459,
      ..._469
    };
  }
  export const ClientFactory = { ..._487,
    ..._488,
    ..._489
  };
}