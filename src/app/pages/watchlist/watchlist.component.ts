import { Component } from '@angular/core';

import { Movie } from 'src/app/interfaces/movies-response';
import { navOption } from 'src/app/interfaces/nav-options';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styles: [
  ]
})
export class WatchlistComponent{
  navOptions: navOption[] = [ // Opciones del navbar
    {
      name: 'Fecha de Agregadas',
      option: 'fecha_agregada',
      isActive: true
    },
    {
      name: 'Mejor Valoradas',
      option: 'valoradas',
      isActive: false
    }
  ];
  movies: Movie[] = [];


  constructor(
    private localStorageService: LocalStorageService
  ) {
  }

  // Recibe la opción del navbar seleccionada por el usuario
  async changeOption(option: string): Promise<void> {
    this.movies = await this.localStorageService.loadWatchlist(); // Se cargan las peliculas actuales de la watchlist
    if(option === 'valoradas') { // Si se selecciona la opción de mejor valoradas
      this.movies = this.movies.sort((a, b) => b.vote_average - a.vote_average); // Se ordena las peliculas por valoración
    }
  }
}
