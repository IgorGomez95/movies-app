import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../interfaces/movies-response';

@Pipe({
  name: 'moviedetailsgenres'
})
export class MoviedetailsgenresPipe implements PipeTransform {

  /**
    * Pipe para mostrar los géneros de una película
    * @param {Genre[]} movieGenres array de objetos de tipo Genre de una película.
    * @return {string[]} regresa array de nombres de géneros de una película, si no hay géneros regresa un array vacío.
  */
  transform(movieGenres: Genre[]): string[] {
    if(!movieGenres.length) return [];
    return movieGenres.map(genre => genre.name);
  }

}
