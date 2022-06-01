import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';

// Componentes
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';

const routes: Routes = [

  {path: '**', component: NopagefoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
