export interface Brokers {
    firmImg: string;
    firm: string;
    price?: number;
    accountSize?: number;
    profitTarget?: number;
    maxDailyLoss?: number;
    maxTotalDrawdown?: number;
    dailyDrowdownResetType?: number;
    dailyDrowdownResetType2?: string;
    commissionPerRoundLot?: string;
    technology?: string;
    profitTargetToDrawdownRatio?: string;
    payoutFrequency?: number;
    trustPilotRating?: number;
    yearEstablishedAndCountry?: string;
    loyaltyPoints?: number;
    buy: string;
    assetType?:string;
    infoRanking?: string;
    coupon?:string;
}

