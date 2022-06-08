import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { MovieComponent } from './movie/movie.component';

const childRoutes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'watchlist', component: WatchlistComponent},
  {path:'movie/:id', component: MovieComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
