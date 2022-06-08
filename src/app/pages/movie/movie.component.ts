import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Movie } from '../../interfaces/movies-response';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {
  movie: Movie;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params; // se obtiene el id de la ruta
    this.getMovieDetails(id);
  }

  getMovieDetails(id: number): void {
    this.api.getMovieDetails(id).subscribe(movie => {
      if ( !movie ) { // Si no se encuentra la pelicula
        this.router.navigateByUrl("/home"); // Se redirecciona a la home
        return;
      }
      this.movie = movie;
    });
  }

  async addOrDeleteFromWatchlist(movie: Movie): Promise<void> {
    movie.genre_ids = movie.genres.map(genre => genre.id); // Se agrega el id de los géneros a la pelicula
    this.localStorageService.saveDeleteMovieToWatchlist(movie); // Se guarda o elimina la pelicula en el storage
    const exists = await this.localStorageService.existsMovie(movie.id); // Se verifica si la pelicula ya esta en la watchlist
    movie.isInWatchlist = exists; // Si esta en la watchlist, se asigna true, sino false
  }

  goBack(): void {
    this.location.back();
  }
}
