import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  // https://image.tmdb.org/t/p/w342/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg
  transform(poster: string): string {
    return poster ? `https://image.tmdb.org/t/p/w342/${poster}` : './assets/noimage.png';
  }

}
