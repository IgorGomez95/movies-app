import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {
  /**
    * Pipe para mostrar el poster de una película
    * @param {string} poster path de la imagen.
    * @return {string} poster regresa la url del poster o imagen por defecto.
  */

  transform(poster: string): string {
    return poster ? `https://image.tmdb.org/t/p/w342/${poster}` : './assets/noimage.png'; // Si el poster existe, lo devuelve, si no, devuelve la imagen de noimage.png
  }

}
