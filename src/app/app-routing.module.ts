import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';

const routes: Routes = [
  {
    path:'',
    component: PagesComponent,
    children:[
      {path:'home', component: HomeComponent},
      {path:'watchlist', component: WatchlistComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]
  },

  {path: '**', component: NopagefoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
