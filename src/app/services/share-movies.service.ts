// Servicio encargado de recibir el set de movies actualizado y emitirlo a los componentes
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../interfaces/movies-response';

@Injectable({
  providedIn: 'root'
})
export class ShareMoviesService {
  // Observable que contiene el listado de películas usando BehaviorSubject para compartir nuevos datos y datos actuales entre componentes
  private shareMoviesObservablePrivate: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  constructor() { }

  // función get que emite los valores como observable haciendo que no se puedan modificar usando asObservable()
  get shareMoviesObservable() {
    return this.shareMoviesObservablePrivate.asObservable();
  }

  // Función para recibir el set de películas actualizado
  set shareMoviesObservableData(movies: Movie[]) {
    this.shareMoviesObservablePrivate.next(movies);
  }
}
