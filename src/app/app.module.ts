import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
import { BarSearchComponent } from './components/bar-search/bar-search.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

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
    FooterComponent,
    BarSearchComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule, 
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
