// Modulo para las páginas de la aplicación.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TooltipModule } from 'ng2-tooltip-directive';

import { HomeComponent } from './home/home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { MovieComponent } from './movie/movie.component';
import { PipesModule } from '../pipes/pipes.module';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    WatchlistComponent,
    PagesComponent,
    MovieComponent,
    SearchComponent
  ],
  exports:[
    HomeComponent,
    WatchlistComponent,
    PagesComponent,
    MovieComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    PipesModule,
    TooltipModule,
  ]
})
export class PagesModule { }
