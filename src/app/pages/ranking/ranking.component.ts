import { Component } from '@angular/core';
import { Brokers } from '../../Interfaces/brokers.interface';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent {

  searchTerm: string = '';
  // Datos de ejemplo para la tabla
  tableData: any = [
    { firmImg: '/assets/img/home/broker1.png', firm:'For Traders', infoRanking:'35% off + Free Account of the Same Size if Reaching Payout - all challenges', coupon:'Promo Code', buy: 'https://ofpfunding.com' },
    { firmImg: '/assets/img/home/broker2.png', firm:'My Funded FX', infoRanking:'35% off + Free Account of the Same Size if Reaching Payout - all challenges', coupon:'Promo Code', buy: 'https://ofpfunding.com' },
    { firmImg: '/assets/img/home/broker3.png', firm:'Skilled fund trader', infoRanking:'35% off + Free Account of the Same Size if Reaching Payout - all challenges', coupon:'Promo Code', buy: 'https://ofpfunding.com' },
    { firmImg: '/assets/img/home/broker4.png', firm:'Bespoke', priceinfoRanking:'35% off + Free Account of the Same Size if Reaching Payout - all challenges', coupon:'Promo Code', buy: 'https://ofpfunding.com' },
    { firmImg: '/assets/img/home/broker1.png', firm:'For Traders', infoRanking:'35% off + Free Account of the Same Size if Reaching Payout - all challenges', coupon:'Promo Code', buy: 'https://ofpfunding.com' },
    { firmImg: '/assets/img/home/broker2.png', firm:'My Funded FX', infoRanking:'35% off + Free Account of the Same Size if Reaching Payout - all challenges', coupon:'Promo Code', buy: 'https://ofpfunding.com' },
    { firmImg: '/assets/img/home/broker3.png', firm:'Skilled fund trader', infoRanking:'35% off + Free Account of the Same Size if Reaching Payout - all challenges', coupon:'Promo Code', buy: 'https://ofpfunding.com' },
    { firmImg: '/assets/img/home/broker1.png', firm:'For Traders', infoRanking:'35% off + Free Account of the Same Size if Reaching Payout - all challenges', coupon:'Promo Code', buy: 'https://ofpfunding.com' },
    { firmImg: '/assets/img/home/broker2.png', firm:'My Funded FX', infoRanking:'35% off + Free Account of the Same Size if Reaching Payout - all challenges', coupon:'Promo Code', buy: 'https://ofpfunding.com' },
    { firmImg: '/assets/img/home/broker3.png', firm:'Skilled fund trader', infoRanking:'35% off + Free Account of the Same Size if Reaching Payout - all challenges', coupon:'Promo Code', buy: 'https://ofpfunding.com' },
    { firmImg: '/assets/img/home/broker4.png', firm:'Bespoke', priceinfoRanking:'35% off + Free Account of the Same Size if Reaching Payout - all challenges', coupon:'Promo Code', buy: 'https://ofpfunding.com' },
];

  applyFilters(){}
}
