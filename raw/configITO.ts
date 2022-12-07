import { OWNER_WALLET } from "../constants";

const data = {
  receiverAddress: OWNER_WALLET,
  kda: "SINT-7CGI",
  maxAmount: 100,
  status: 1,
  packInfo: { KLV: { packs: [{ amount: 1, price: 100 * 10 ** 6 }] } },
  startTime: Date.now() + 300000,
  endTime: Date.now() + 900000,
  defaultLimitPerAddress: 5,
  whitelistStatus: 1,
  whitelistInfo: { 'klv1szjj2fyfxjtgxw040umd7x37e3e3fj0mpsd5gsfq4vsdj809u9qsqg9w9r': { limit: 2 } },
  whitelistStartTime: Date.now() + 500000,
  whitelistEndTime: Date.now() + 700000,
};

export type IConfigITO = typeof data

export default data;
