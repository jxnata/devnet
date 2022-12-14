export interface ITransfer {
    receiver: string;
    amount: number;
    kda?: string;
}

export interface ICreateAsset {
    type?: number;
    name: string;
    ticker: string;
    ownerAddress: string;
    logo: string;
    uris: { [uri: string]: string };
    precision: number;
    initialSupply: number;
    maxSupply: number;
    royalties?: Royalties;
    properties?: Properties;
    attributes?: Attributes;
    staking?: Staking;
    roles?: Roles[];
}

interface Royalties {
    address?: string;
    transferPercentage?: RoyaltyInfo[];
    transferFixed?: number;
    marketPercentage?: number;
    marketFixed?: number;
}

interface RoyaltyInfo {
    amount?: number;
    percentage?: number;
}

interface Properties {
    canFreeze?: boolean;
    canWipe?: boolean;
    canPause?: boolean;
    canMint?: boolean;
    canBurn?: boolean;
    canChangeOwner?: boolean;
    canAddRoles?: boolean;
}

interface Attributes {
    isPaused?: boolean;
    isNFTMintStopped?: boolean;
}

interface Staking {
    apr: number;
    minEpochsToClaim: number;
    minEpochsToUnstake: number;
    minEpochsToWithdraw: number;
}

interface Roles {
    address: string;
    hasRoleMint: boolean;
    hasRoleSetITOPrices: boolean;
}

export interface IAssetTrigger {
    triggerType: number;
    assetId: string;
    receiver?: string;
    amount?: number;
    mime?: string;
    logo?: string;
    uris?: {
        [uri: string]: string;
    };
    role?: Roles;
    staking?: Staking;
}

export interface IConfigValidator {
    blsPublicKey: string;
    rewardAddress: string;
    canDelegate: boolean;
    commission: number;
    maxDelegationAmount: number;
    logo?: string;
    name?: string;
    uris: {
        [uri: string]: string;
    };
}

export interface ICreateValidator extends IConfigValidator {
    ownerAddress: string;
}

export interface IFreeze {
    amount: number;
    kda?: string;
}

export interface IUnfreeze {
    bucketId: string;
    kda?: string;
}

export interface IDelegate {
    receiver: string;
    bucketId: string;
}

export interface IUndelegate {
    bucketId: string;
}

export enum WithdrawType {
    Staking,
    KDAPool,
}

export interface IWithdraw {
    kda: string;
    withdrawType: WithdrawType;
}

export interface IClaim {
    claimType: number;
    id: string;
}

export interface ISetAccountName {
    name: string;
}

export interface IProposal {
    parameters: {
        [parameter: number]: string;
    };
    description: string;
    epochsDuration: number;
}

export interface IVotes {
    type: number;
    proposalId: number;
    amount: number;
}

export interface IConfigITO {
    kda: string;
    receiverAddress: string;
    status: number;
    maxAmount: number;
    packInfo: PackInfo[];
}

export interface ISetITOPrices {
    kda: string;
    packInfo: PackInfo;
}

interface PackInfo {
    [asset: string]: {
        packItems: Pack[];
    };
}

interface Pack {
    amount: number;
    price: number;
}

export interface IBuyOrder {
    buyType: number;
    id: string;
    currencyId: string;
    amount: number;
}

export interface ISellOrder {
    marketType: number;
    marketplaceId: string;
    assetId: string;
    currencyId: string;
    price: number;
    reservePrice: number;
    endTime: number;
}

export interface ICancelMarketOrder {
    orderId: string;
}

export interface ICreateMarketplace {
    name: string;
    referralAddress?: string;
    referralPercentage: number;
}

export interface IConfigMarketplace {
    marketplaceId: string;
    name: string;
    referralAddress?: string;
    referralPercentage: number;
}

export enum AccPermissionType {
    OWNER = 0,
    USER = 1,
}

interface AccKey {
    address: string;
    weight: number;
}

interface AccPermission {
    type: AccPermissionType;
    permissionName: string;
    threshold: number;
    operations: string;
    signers: AccKey[];
}

export interface IUpdateAccountPermission {
    permissions: AccPermission[];
}
interface WhitelistInfo {
    [address: string]: {
        limit: number;
    };
}

export enum Status {
    DefaultITO,
    ActiveITO,
    PausedITO,
}
export interface IITOTrigger {
    triggerType: number;
    kda: string;
    receiverAddress: string;
    status: Status;
    maxAmount: number;
    packInfo: PackInfo[];
    defaultLimitPerAddress: number;
    whitelistStatus: Status;
    whitelistInfo: WhitelistInfo;
    whitelistStartTime: number;
    whitelistEndTime: number;
    startTime: number;
    endTime: number;
}
export interface IDeposit {
    depositType: number;
    kda: string;
    amount: number;
    currencyId: string;
}