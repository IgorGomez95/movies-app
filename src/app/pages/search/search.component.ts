import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from 'src/app/interfaces/movies-response';
import { ApiService } from 'src/app/services/api.service';
import { ShareMoviesService } from 'src/app/services/share-movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  movies: Movie[] = [];
  term: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
    private shareMoviesService: ShareMoviesService
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.term = params.term;
      this.search(params.term);
    });
  }

  ngOnInit(): void {
  }

  search(term: string): void {
    this.apiService.searchMovies(term).subscribe( movies => {
      this.movies = [...movies]; // Agrega las nuevas películas a la lista de películas
      this.shareMoviesService.shareMoviesObservableData = this.movies;// Actualiza la información del observable

    })
  }
}
