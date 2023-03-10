import { oracleTypeFromJSON } from "../../oracle/v1beta1/oracle";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateInsuranceFund, MsgUnderwrite, MsgRequestRedemption } from "./tx";
export interface MsgCreateInsuranceFundAminoType extends AminoMsg {
  type: "/injective.insurance.v1beta1.MsgCreateInsuranceFund";
  value: {
    sender: string;
    ticker: string;
    quote_denom: string;
    oracle_base: string;
    oracle_quote: string;
    oracle_type: number;
    expiry: string;
    initial_deposit: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgUnderwriteAminoType extends AminoMsg {
  type: "/injective.insurance.v1beta1.MsgUnderwrite";
  value: {
    sender: string;
    market_id: string;
    deposit: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgRequestRedemptionAminoType extends AminoMsg {
  type: "/injective.insurance.v1beta1.MsgRequestRedemption";
  value: {
    sender: string;
    market_id: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/injective.insurance.v1beta1.MsgCreateInsuranceFund": {
    aminoType: "/injective.insurance.v1beta1.MsgCreateInsuranceFund",
    toAmino: ({
      sender,
      ticker,
      quoteDenom,
      oracleBase,
      oracleQuote,
      oracleType,
      expiry,
      initialDeposit
    }: MsgCreateInsuranceFund): MsgCreateInsuranceFundAminoType["value"] => {
      return {
        sender,
        ticker,
        quote_denom: quoteDenom,
        oracle_base: oracleBase,
        oracle_quote: oracleQuote,
        oracle_type: oracleType,
        expiry: expiry.toString(),
        initial_deposit: {
          denom: initialDeposit.denom,
          amount: Long.fromValue(initialDeposit.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      ticker,
      quote_denom,
      oracle_base,
      oracle_quote,
      oracle_type,
      expiry,
      initial_deposit
    }: MsgCreateInsuranceFundAminoType["value"]): MsgCreateInsuranceFund => {
      return {
        sender,
        ticker,
        quoteDenom: quote_denom,
        oracleBase: oracle_base,
        oracleQuote: oracle_quote,
        oracleType: oracleTypeFromJSON(oracle_type),
        expiry: Long.fromString(expiry),
        initialDeposit: {
          denom: initial_deposit.denom,
          amount: initial_deposit.amount
        }
      };
    }
  },
  "/injective.insurance.v1beta1.MsgUnderwrite": {
    aminoType: "/injective.insurance.v1beta1.MsgUnderwrite",
    toAmino: ({
      sender,
      marketId,
      deposit
    }: MsgUnderwrite): MsgUnderwriteAminoType["value"] => {
      return {
        sender,
        market_id: marketId,
        deposit: {
          denom: deposit.denom,
          amount: Long.fromValue(deposit.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      market_id,
      deposit
    }: MsgUnderwriteAminoType["value"]): MsgUnderwrite => {
      return {
        sender,
        marketId: market_id,
        deposit: {
          denom: deposit.denom,
          amount: deposit.amount
        }
      };
    }
  },
  "/injective.insurance.v1beta1.MsgRequestRedemption": {
    aminoType: "/injective.insurance.v1beta1.MsgRequestRedemption",
    toAmino: ({
      sender,
      marketId,
      amount
    }: MsgRequestRedemption): MsgRequestRedemptionAminoType["value"] => {
      return {
        sender,
        market_id: marketId,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      market_id,
      amount
    }: MsgRequestRedemptionAminoType["value"]): MsgRequestRedemption => {
      return {
        sender,
        marketId: market_id,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  }
};