import { Component, OnInit } from '@angular/core';
import { Brokers } from '../../Interfaces/brokers.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{


// Variables para almacenar los filtros seleccionados
searchTerm: string = '';
selectedAssetType: string = 'Select';
selectedAccountSize: string = 'Select';
selectedPrice: number = 0;
selectedAccountSizeRange: number = 0;
selectedprofitTarget: number = 0;
selectedBroker: string = 'Select';
selectedPlatform: string = 'Select';

// Datos de ejemplo para la tabla
tableData: Brokers[] = [
  { firmImg: '/assets/img/home/broker1.png', firm:'For Traders', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker2.png', firm:'My Funded FX', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker3.png', firm:'Skilled fund trader', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker4.png', firm:'Bespoke', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker1.png', firm:'FundedNext', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker1.png', firm:'For Traders', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker2.png', firm:'My Funded FX', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker3.png', firm:'Skilled fund trader', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker4.png', firm:'Bespoke', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker1.png', firm:'FundedNext', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker1.png', firm:'For Traders', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker2.png', firm:'My Funded FX', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker3.png', firm:'Skilled fund trader', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker4.png', firm:'Bespoke', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' },
  { firmImg: '/assets/img/home/broker1.png', firm:'FundedNext', price: 82.17, accountSize: 50000, profitTarget: 90, maxDailyLoss: 1.9, maxTotalDrawdown: 3, dailyDrowdownResetType: 6, dailyDrowdownResetType2: 'Balance-based', commissionPerRoundLot: '$5/round lot', technology: 'White-Label', profitTargetToDrawdownRatio: '1: 0.67', payoutFrequency: 14, trustPilotRating: 4.6, yearEstablishedAndCountry: 'United Arab Emirates', loyaltyPoints: 116, buy: 'https://ofpfunding.com' }
];

// Datos filtrados para la tabla
filteredTableData: Brokers[] = [];

constructor() { }

ngOnInit(): void {
  // Lógica para obtener los datos y aplicar los filtros
  this.applyFilters();
}

applyFilters(): void {
  // Filtrar datos según los criterios seleccionados
  /* this.filteredTableData = this.tableData.filter(row =>
    (this.searchTerm ? row.firm.toLowerCase().includes(this.searchTerm.toLowerCase()) : true) &&
    (this.selectedAssetType ? row.assetType === this.selectedAssetType : true) &&
    (this.selectedAccountSize ? row.accountSize === this.selectedAccountSize : true) &&
    (this.selectedPrice ? row.price <= this.selectedPrice : true) &&
    (this.selectedAccountSizeRange ? row.accountSize <= this.selectedAccountSizeRange : true) &&
    (this.selectedBroker ? row.broker === this.selectedBroker : true)
  ); */
}
}
