// Modulo para las páginas de la aplicación.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    WatchlistComponent,
    PagesComponent,
  ],
  exports:[
    HomeComponent,
    WatchlistComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
