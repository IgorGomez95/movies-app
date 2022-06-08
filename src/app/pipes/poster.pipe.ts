import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {
  /**
    * Pipe para mostrar el poster de una película
    * @param {string} poster path de la imagen.
    * @param {string} dimensions Dimensiones de la imagen por defecto poster.
    * @return {string} regresa la url del poster/backdrop o imagen por defecto.
  */

  transform(poster: string, dimensions: string = 'poster'): string {
    if(dimensions === 'backdrop') {
      return poster ? `https://image.tmdb.org/t/p/w500/${poster}` : './assets/movie_bg.png'; // Si el poster existe, lo devuelve, si no, devuelve la imagen de movie_bg.png
    }else{
      return poster ? `https://image.tmdb.org/t/p/w342/${poster}` : './assets/noimage.png'; // Si el poster existe, lo devuelve, si no, devuelve la imagen de noimage.png
    }
  }

}
