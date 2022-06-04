import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipe';
import { MoviegenresPipe } from './moviegenres.pipe';


@NgModule({
  declarations: [
    PosterPipe,
    MoviegenresPipe
  ],
  exports: [
    PosterPipe,
    MoviegenresPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
