import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrokerReviewComponent, CompareComponent, DiscountComponent, HomeComponent, LotteryComponent, NewsComponent, RankingComponent, ReviewsComponent} from "./pages/index-router"

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'dicount-codes', component: DiscountComponent},
  {path: 'compare', component: CompareComponent},
  {path: 'lottery', component: LotteryComponent},
  {path: 'news', component: NewsComponent},
  {path: 'ranking', component: RankingComponent},
  {path: 'brokerreview', component: BrokerReviewComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', redirectTo: '/'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
