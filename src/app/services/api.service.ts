// Servicio encargado de realizar las peticiones a la API de themoviedb
// utilizando la librería HttpClient
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { EnvService } from './env.service';
import { Movie, MoviesResponse } from '../interfaces/movies-response';

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

  getPopularMovies(): Observable<Movie[]> {
    return  this.http.get<MoviesResponse>(`${ this.env.API_URL }popular`, { params: this.params }).pipe(
      map( resp => resp.results )
    );
  }

  getTopRatedMovies(): Observable<Movie[]> {
    if( this.loading ) return of([]);
    this.loading = true;
    console.log('getTopRatedMoviesLoading');
    return  this.http.get<MoviesResponse>(`${ this.env.API_URL }top_rated`, { params: {...this.params, page: this.topRatedPage} }).pipe(
      map( resp => resp.results ),
      tap( () => {
        this.topRatedPage++;
        this.loading = false;
      })
    );
  }
}
