import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  // Método para agregar o eliminar una pelicula de la watchlist
  async addOrDeleteFromWatchlist(movie: Movie): Promise<void> {
    this.localStorageService.saveDeleteMovieToWatchlist(movie); // Se guarda o elimina la pelicula en el storage
    const exists = await this.localStorageService.existsMovie(movie.id); // Se verifica si la pelicula ya esta en la watchlist
    movie.isInWatchlist = exists; // Si esta en la watchlist, se asigna true, sino false
  }

  goToMovie(id: number) {
    this.router.navigate(['/movie', id]);
  }

}
