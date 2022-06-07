import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/interfaces/movies-response';
import { ShareMoviesService } from 'src/app/services/share-movies.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {
  movies$: Observable<Movie[]>; //variable que recibe un observable por eso el signo de dolar
  watchlistHasMovies: boolean; //variable que indica si la watchlist tiene peliculas

  constructor(
    shareMoviesService: ShareMoviesService //inicialización de dependencia sin tipo de accesibilidad ya que solo se usa en el constructor
  ) {
    this.movies$ = shareMoviesService.shareWatchlistObservable; //se recibe el set de películas actualizados
    this.movies$.subscribe(movies => {
      this.watchlistHasMovies = !!movies.length; //si la watchlist tiene peliculas, se asigna true, sino false
    });
  }

  ngOnInit(): void {
  }

}
