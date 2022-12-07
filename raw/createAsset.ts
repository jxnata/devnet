import { faker } from "@faker-js/faker";
import { OWNER_WALLET, ROYALTIES_WALLET } from "../constants";

const data = {
  name: faker.commerce.productName(),
  ticker: faker.lorem.word(4).toUpperCase(),
  ownerAddress: OWNER_WALLET,
  precision: 0,
  // uris: '',
  logo: faker.image.abstract(512, 512, true),
  initialSupply: 0,
  maxSupply: faker.datatype.number({ min: 100, max: 1000 }),
  type: 1,
  staking: {
    type: 0,
    apr: 0,
    minEpochsToClaim: 0,
    minEpochsToUnstake: 0,
    minEpochsToWithdraw: 0,
  },
  royalties: {
    address: ROYALTIES_WALLET,
    transferPercentage: [
      {
        amount: 0,
        percentage: 0,
      },
    ],
    transferFixed: 0,
    marketPercentage: 20,
    marketFixed: 0,
  },
  roles: [],
  properties: {
    canFreeze: false,
    canWipe: true,
    canPause: false,
    canMint: true,
    canBurn: true,
    canChangeOwner: false,
    canAddRoles: false,
  },
  attributes: {
    isPaused: false,
    isNFTMintStopped: false,
  },
};

export type ICreateAsset = typeof data

export default data;
