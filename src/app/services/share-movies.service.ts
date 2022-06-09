// Servicio encargado de recibir el set de movies y watchlist actualizado y emitirlo a los componentes
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movies-response';

@Injectable({
  providedIn: 'root'
})
export class ShareMoviesService {
  // Observable que contiene el listado de películas usando BehaviorSubject para compartir nuevos datos y datos actuales entre componentes
  private shareMoviesObservablePrivate: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  private shareWatchlistObservablePrivate: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  constructor() { }

  // Método get que emite los valores como observable haciendo que no se puedan modificar usando asObservable()
  get shareMoviesObservable() {
    return this.shareMoviesObservablePrivate.asObservable();
  }

  // Método para recibir el set de películas actualizado
  set shareMoviesObservableData(movies: Movie[]) {
    this.shareMoviesObservablePrivate.next(movies);
  }

  // Método get que emite los valores como observable de la watchlist
  get shareWatchlistObservable() {
    return this.shareWatchlistObservablePrivate.asObservable();
  }

  // Método para recibir el set de películas actualizado de la watchlist
  set shareWatchlistObservableData(movies: Movie[]) {
    this.shareWatchlistObservablePrivate.next(movies);
  }
}
