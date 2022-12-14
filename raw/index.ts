import { TransactionType } from "@klever/sdk";
import buyITO from "./buyITO";
import configITO from "./configITO";
import createAsset from "./createAsset";
import transfer from "./transfer";

export type ITransaction = {
  name: string,
  tx: any,
  type: TransactionType
}

const transactions = [
  { name: "Create Asset", tx: createAsset, type: TransactionType.CreateAsset },
  { name: "Config ITO", tx: configITO, type: TransactionType.ConfigITO },
  { name: "Buy ITO", tx: buyITO, type: TransactionType.BuyOrder },
  { name: "Transfer", tx: transfer, type: TransactionType.Transfer },
];

export default transactions;
