import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movies-response';
import { ShareMoviesService } from './share-movies.service';

const WATCHLIST_KEY = 'watchlist';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  watchlist: Movie[] = [];

  constructor(
    private shareMoviesService: ShareMoviesService
  ) {
    this.loadWatchlist(); // Carga la watchlist del storage al iniciar el servicio
  }

  // Método para agregar o eliminar una pelicula de la watchlist
  saveDeleteMovieToWatchlist(newMovie: Movie): void {
    const exists = this.watchlist.find(movie => movie.id === newMovie.id);
    if (!!exists) {
      this.watchlist = this.watchlist.filter(movie => movie.id !== newMovie.id); // Si existe elimina la pelicula de la watchlist
    } else {
      this.watchlist.push(newMovie); // Si no existe la agrega a la watchlist
    }
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(this.watchlist)); // Guarda la watchlist en el storage
    this.loadWatchlist(); // Carga la watchlist del storage
  }

  // Metodo para cargar la watchlist del storage
  async loadWatchlist(): Promise<Movie[]> {
    const watchlist = await localStorage.getItem(WATCHLIST_KEY);
    this.watchlist = JSON.parse(watchlist) || []; // Si no hay nada en el storage, asigna un arreglo vacio
    this.shareMoviesService.shareWatchlistObservableData = this.watchlist; // Se comparte la watchlist al componente padre
    return this.watchlist;
  }

  // Método para saber si una pelicula ya esta en la watchlist
  async existsMovie(id: any): Promise<boolean> {
    await this.loadWatchlist();
    const exists = this.watchlist.find(movie => movie.id === id);

    return !!exists; // Si existe la pelicula, retorna true, sino false
  }
}
