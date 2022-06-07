import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies-response';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styles: [
  ]
})
export class ListItemComponent implements OnInit {
  @Input() movie: Movie;
  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
  }

  deleteFromWatchlist(movie: Movie): void {
    this.localStorageService.saveDeleteMovieToWatchlist(movie); // Se guarda o elimina la pelicula en el storage
  }
}
