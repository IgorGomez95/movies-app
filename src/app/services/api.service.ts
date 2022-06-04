// Servicio encargado de realizar las peticiones a la API de themoviedb
// utilizando la librería HttpClient
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { EnvService } from './env.service';
import { Movie, MoviesResponse } from '../interfaces/movies-response';
import { Genre, GenresResponse } from '../interfaces/genres-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  topRatedPage = 1;
  loading = false;

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) { }

  get params(){
    return {
      api_key: this.env.api_key,
      language: 'es-MX'
    }
  }

  resetPages(){
    this.topRatedPage = 1;
  }

  getPopularMovies(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${ this.env.API_URL }movie/popular`, { params: this.params }).pipe(
      map( resp => resp.results )
    );
  }

  getTopRatedMovies(): Observable<Movie[]> {
    if( this.loading ) return of([]);
    this.loading = true;
    console.log('getTopRatedMoviesLoading');
    return  this.http.get<MoviesResponse>(`${ this.env.API_URL }movie/top_rated`, { params: {...this.params, page: this.topRatedPage} }).pipe(
      map( resp => resp.results ),
      tap( () => {
        this.topRatedPage++;
        this.loading = false;
      })
    );
  }

  getGenres(): Observable<Genre[]> {
    return  this.http.get<GenresResponse>(`${ this.env.API_URL }genre/movie/list`, { params: this.params }).pipe(
      map( resp => resp.genres )
    );
  }
}
