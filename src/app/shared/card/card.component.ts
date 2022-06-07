import { Component, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Movie } from '../../interfaces/movies-response';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {
  @Input() movie: Movie; // Se recibe la pelicula desde el componente padre

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  // Método para agregar o eliminar una pelicula de la watchlist
  addOrDeleteFromWatchlist(movie: Movie) {
    this.localStorageService.saveDeleteMovieToWatchlist(movie); // Se guarda o elimina la pelicula en el storage
    this.localStorageService.existsMovie(movie.id).then(exists => { // Se verifica si la pelicula ya esta en la watchlist
      movie.isInWatchlist = exists; // Si esta en la watchlist, se asigna true, sino false
    });
  }

}
