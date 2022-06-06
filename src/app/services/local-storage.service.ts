import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movies-response';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  watchlist: Movie[] = [];

  constructor() {
    this.loadWatchlist(); // Carga la watchlist del storage al iniciar el servicio
  }

  // Método para agregar o eliminar una pelicula de la watchlist
  saveDeleteMovieToWatchlist(newMovie: Movie) {
    let exists = false;
    this.watchlist.find(movie => {
      if (movie.id === newMovie.id) {
        exists = true;
      }
    });
    if (exists) {
      this.watchlist = this.watchlist.filter(movie => movie.id !== newMovie.id); // Si existe elimina la pelicula de la watchlist
    } else {
      this.watchlist.push(newMovie); // Si no existe la agrega a la watchlist
    }
    localStorage.setItem('watchlist', JSON.stringify(this.watchlist)); // Guarda la watchlist en el storage
  }

  // Metodo para cargar la watchlist del storage
  async loadWatchlist() {
    const watchlist = await localStorage.getItem('watchlist');
    this.watchlist = JSON.parse(watchlist) || []; // Si no hay nada en el storage, asigna un arreglo vacio
    return this.watchlist;
  }

  // Método para saber si una pelicula ya esta en la watchlist
  async existsMovie(id: any){
    await this.loadWatchlist();
    const exists = this.watchlist.find(movie => movie.id === id);

    return !!exists; // Si existe la pelicula, retorna true, sino false
  }
}
