import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

//  Imports components pages
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { NewsComponent } from './pages/news/news.component';
import { LotteryComponent } from './pages/lottery/lottery.component';
import { CompareComponent } from './pages/compare/compare.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiscountComponent,
    RankingComponent,
    ReviewsComponent,
    NewsComponent,
    LotteryComponent,
    CompareComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
