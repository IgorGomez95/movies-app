import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../interfaces/genres-response';

@Pipe({
  name: 'moviegenres'
})
export class MoviegenresPipe implements PipeTransform {
  // Array de géneros
  genres: Genre[] = [
    {
      "id": 28,
      "name": "Acción"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
    {
      "id": 16,
      "name": "Animación"
    },
    {
      "id": 35,
      "name": "Comedia"
    },
    {
      "id": 80,
      "name": "Crimen"
    },
    {
      "id": 99,
      "name": "Documental"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Familia"
    },
    {
      "id": 14,
      "name": "Fantasía"
    },
    {
      "id": 36,
      "name": "Historia"
    },
    {
      "id": 27,
      "name": "Terror"
    },
    {
      "id": 10402,
      "name": "Música"
    },
    {
      "id": 9648,
      "name": "Misterio"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Ciencia ficción"
    },
    {
      "id": 10770,
      "name": "Película de TV"
    },
    {
      "id": 53,
      "name": "Suspense"
    },
    {
      "id": 10752,
      "name": "Bélica"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

  /**
    * Pipe para mostrar los géneros de una película
    * @param {number[]} movieGenres array de ids de géneros de una película.
    * @return {string[]} regresa array de nombres de géneros de una película, si no hay géneros regresa un array vacío.
  */
  transform(movieGenres: number[]): string[] {
    if (!movieGenres.length) return [];
    return movieGenres.map(genre =>
      this.genres.find( g =>
        g.id === genre
      ).name);
  }

}
