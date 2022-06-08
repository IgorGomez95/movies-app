import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children:[
      {path:'home', component: HomeComponent},
      {path:'watchlist', component: WatchlistComponent},
      {path:'movie/:id', component: MovieComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
