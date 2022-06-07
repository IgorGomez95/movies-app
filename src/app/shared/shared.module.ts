// Módulos para los componentes shared de la aplicación.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TooltipModule } from 'ng2-tooltip-directive';

import { HeaderComponent } from './header/header.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';
import { PipesModule } from '../pipes/pipes.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CarruselComponent,
    CardComponent,
    GridComponent,
    NavbarComponent,
    ListComponent,
    ListItemComponent
  ],
  exports:[
    HeaderComponent,
    CarruselComponent,
    CardComponent,
    GridComponent,
    NavbarComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PipesModule,
    TooltipModule,
    RouterModule
  ]
})
export class SharedModule { }
