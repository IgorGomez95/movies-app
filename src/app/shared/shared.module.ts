// Módulos para los componentes shared de la aplicación.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarruselComponent } from './carrusel/carrusel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CarruselComponent
  ],
  exports:[
    HeaderComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
