import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { PagesComponent } from './pages/pages.component';
import { HeroComponent } from './shared/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    HeaderComponent,
    HomeComponent,
    WatchlistComponent,
    PagesComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
