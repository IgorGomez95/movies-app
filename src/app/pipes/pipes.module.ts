import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPipe } from './poster.pipe';
import { MoviegenresPipe } from './moviegenres.pipe';
import { MoviedetailsgenresPipe } from './moviedetailsgenres.pipe';
import { MovieruntimePipe } from './movieruntime.pipe';


@NgModule({
  declarations: [
    PosterPipe,
    MoviegenresPipe,
    MoviedetailsgenresPipe,
    MovieruntimePipe
  ],
  exports: [
    PosterPipe,
    MoviegenresPipe,
    MoviedetailsgenresPipe,
    MovieruntimePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
