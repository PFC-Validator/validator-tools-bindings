import * as _134 from "./auction/v1beta1/auction";
import * as _135 from "./auction/v1beta1/genesis";
import * as _136 from "./auction/v1beta1/query";
import * as _137 from "./auction/v1beta1/tx";
import * as _138 from "./crypto/v1beta1/ethsecp256k1/keys";
import * as _139 from "./exchange/v1beta1/authz";
import * as _140 from "./exchange/v1beta1/events";
import * as _141 from "./exchange/v1beta1/exchange";
import * as _142 from "./exchange/v1beta1/genesis";
import * as _143 from "./exchange/v1beta1/query";
import * as _144 from "./exchange/v1beta1/tx";
import * as _145 from "./insurance/v1beta1/genesis";
import * as _146 from "./insurance/v1beta1/insurance";
import * as _147 from "./insurance/v1beta1/query";
import * as _148 from "./insurance/v1beta1/tx";
import * as _149 from "./ocr/v1beta1/genesis";
import * as _150 from "./ocr/v1beta1/ocr";
import * as _151 from "./ocr/v1beta1/query";
import * as _152 from "./ocr/v1beta1/tx";
import * as _153 from "./oracle/v1beta1/events";
import * as _154 from "./oracle/v1beta1/genesis";
import * as _155 from "./oracle/v1beta1/oracle";
import * as _156 from "./oracle/v1beta1/proposal";
import * as _157 from "./oracle/v1beta1/query";
import * as _158 from "./oracle/v1beta1/tx";
import * as _159 from "./peggy/v1/attestation";
import * as _160 from "./peggy/v1/batch";
import * as _161 from "./peggy/v1/ethereum_signer";
import * as _162 from "./peggy/v1/events";
import * as _163 from "./peggy/v1/genesis";
import * as _164 from "./peggy/v1/msgs";
import * as _165 from "./peggy/v1/pool";
import * as _166 from "./peggy/v1/proposal";
import * as _167 from "./peggy/v1/query";
import * as _168 from "./peggy/v1/types";
import * as _169 from "./types/v1beta1/account";
import * as _170 from "./types/v1beta1/tx_ext";
import * as _171 from "./types/v1beta1/tx_response";
import * as _172 from "./wasmx/v1/genesis";
import * as _173 from "./wasmx/v1/query";
import * as _174 from "./wasmx/v1/tx";
import * as _175 from "./wasmx/v1/wasmx";
import * as _357 from "./auction/v1beta1/tx.amino";
import * as _358 from "./exchange/v1beta1/tx.amino";
import * as _359 from "./insurance/v1beta1/tx.amino";
import * as _360 from "./ocr/v1beta1/tx.amino";
import * as _361 from "./oracle/v1beta1/tx.amino";
import * as _362 from "./peggy/v1/msgs.amino";
import * as _363 from "./auction/v1beta1/tx.registry";
import * as _364 from "./exchange/v1beta1/tx.registry";
import * as _365 from "./insurance/v1beta1/tx.registry";
import * as _366 from "./ocr/v1beta1/tx.registry";
import * as _367 from "./oracle/v1beta1/tx.registry";
import * as _368 from "./peggy/v1/msgs.registry";
import * as _369 from "./auction/v1beta1/query.lcd";
import * as _370 from "./exchange/v1beta1/query.lcd";
import * as _371 from "./insurance/v1beta1/query.lcd";
import * as _372 from "./ocr/v1beta1/query.lcd";
import * as _373 from "./oracle/v1beta1/query.lcd";
import * as _374 from "./peggy/v1/query.lcd";
import * as _375 from "./wasmx/v1/query.lcd";
import * as _376 from "./auction/v1beta1/query.rpc.Query";
import * as _377 from "./exchange/v1beta1/query.rpc.Query";
import * as _378 from "./insurance/v1beta1/query.rpc.Query";
import * as _379 from "./ocr/v1beta1/query.rpc.Query";
import * as _380 from "./oracle/v1beta1/query.rpc.Query";
import * as _381 from "./peggy/v1/query.rpc.Query";
import * as _382 from "./wasmx/v1/query.rpc.Query";
import * as _383 from "./auction/v1beta1/tx.rpc.msg";
import * as _384 from "./exchange/v1beta1/tx.rpc.msg";
import * as _385 from "./insurance/v1beta1/tx.rpc.msg";
import * as _386 from "./ocr/v1beta1/tx.rpc.msg";
import * as _387 from "./oracle/v1beta1/tx.rpc.msg";
import * as _388 from "./peggy/v1/msgs.rpc.msg";
import * as _462 from "./lcd";
import * as _463 from "./rpc.query";
import * as _464 from "./rpc.tx";
export namespace injective {
  export namespace auction {
    export const v1beta1 = { ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._357,
      ..._363,
      ..._369,
      ..._376,
      ..._383
    };
  }
  export namespace crypto {
    export namespace v1beta1 {
      export const ethsecp256k1 = { ..._138
      };
    }
  }
  export namespace exchange {
    export const v1beta1 = { ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._144,
      ..._358,
      ..._364,
      ..._370,
      ..._377,
      ..._384
    };
  }
  export namespace insurance {
    export const v1beta1 = { ..._145,
      ..._146,
      ..._147,
      ..._148,
      ..._359,
      ..._365,
      ..._371,
      ..._378,
      ..._385
    };
  }
  export namespace ocr {
    export const v1beta1 = { ..._149,
      ..._150,
      ..._151,
      ..._152,
      ..._360,
      ..._366,
      ..._372,
      ..._379,
      ..._386
    };
  }
  export namespace oracle {
    export const v1beta1 = { ..._153,
      ..._154,
      ..._155,
      ..._156,
      ..._157,
      ..._158,
      ..._361,
      ..._367,
      ..._373,
      ..._380,
      ..._387
    };
  }
  export namespace peggy {
    export const v1 = { ..._159,
      ..._160,
      ..._161,
      ..._162,
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._167,
      ..._168,
      ..._362,
      ..._368,
      ..._374,
      ..._381,
      ..._388
    };
  }
  export namespace types {
    export const v1beta1 = { ..._169,
      ..._170,
      ..._171
    };
  }
  export namespace wasmx {
    export const v1 = { ..._172,
      ..._173,
      ..._174,
      ..._175,
      ..._375,
      ..._382
    };
  }
  export const ClientFactory = { ..._462,
    ..._463,
    ..._464
  };
}