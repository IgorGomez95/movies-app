// Módulos para los componentes shared de la aplicación.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    HeaderComponent,
    CarruselComponent,
    CardComponent,
    GridComponent
  ],
  exports:[
    HeaderComponent,
    CarruselComponent,
    CardComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PipesModule
  ]
})
export class SharedModule { }
