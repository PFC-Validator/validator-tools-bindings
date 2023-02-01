import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgBid } from "./tx";
export interface MsgBidAminoType extends AminoMsg {
  type: "/injective.auction.v1beta1.MsgBid";
  value: {
    sender: string;
    bid_amount: {
      denom: string;
      amount: string;
    };
    round: string;
  };
}
export const AminoConverter = {
  "/injective.auction.v1beta1.MsgBid": {
    aminoType: "/injective.auction.v1beta1.MsgBid",
    toAmino: ({
      sender,
      bidAmount,
      round
    }: MsgBid): MsgBidAminoType["value"] => {
      return {
        sender,
        bid_amount: {
          denom: bidAmount.denom,
          amount: Long.fromValue(bidAmount.amount).toString()
        },
        round: round.toString()
      };
    },
    fromAmino: ({
      sender,
      bid_amount,
      round
    }: MsgBidAminoType["value"]): MsgBid => {
      return {
        sender,
        bidAmount: {
          denom: bid_amount.denom,
          amount: bid_amount.amount
        },
        round: Long.fromString(round)
      };
    }
  }
};